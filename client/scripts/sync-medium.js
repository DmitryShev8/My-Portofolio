import axios from "axios";
import fs from "fs";
import path from "path";
import { XMLParser } from "fast-xml-parser";
import * as cheerio from "cheerio";

async function fetchRSS() {
  try {
    const response = await axios.get(
      "https://medium.com/feed/@aryachenko46"
    );

    return response.data;
  } catch (error) {
    console.error("Failed to fetch RSS:", error.message);
    throw error;
  }
}

function parseRSS(xml) {
  const parser = new XMLParser({
    ignoreAttributes: false,
  });

  const data = parser.parse(xml);

  return data.rss.channel.item;
}

function transformArticle(article) {
  const $ = cheerio.load(article["content:encoded"]);
  const thumbnail = ($("img").first().attr("src") || "")
    .split("?")[0];
  const excerpt = $("p")
    .first()
    .text()
    .trim()
    .slice(0, 220);
  const slug = article.title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  const words = $.text().trim().split(/\s+/).length;

  const readingTime = Math.ceil(words / 200);

  $('img[src*="medium.com/_/stat"]').remove();
  $("hr").nextAll().remove();
  $("hr").remove();
  $("figcaption").remove();
  $("figure").first().remove();
  

  return {
      id: article.guid?.["#text"] ?? slug,

      slug: slug,

      title: article.title,

      readTime: `${readingTime} min read`,

      excerpt: excerpt,

      thumbnail: thumbnail,

      content: $("body").html() || $.root().html(),

      mediumUrl: article.link.split("?")[0],

      categories: Array.isArray(article.category)
    ? article.category
    : article.category
        ? [article.category]
        : [],

      author: article["dc:creator"],

      publishedAt: article.pubDate,

      updatedAt: article["atom:updated"]
  };

}

function saveArticles(articles) {
  const outputPath = path.join(
    import.meta.dirname,
    "..",
    "src",
    "data",
    "articles.json"
  );

  fs.writeFileSync(
    outputPath,
    JSON.stringify(articles, null, 2),
    "utf8"
  );

  console.log(
    `✅ Saved ${articles.length} articles`
  );
}

async function main() {
  const xml = await fetchRSS();

  const articles = parseRSS(xml);

  const transformedArticles =
      articles.map(transformArticle);

  saveArticles(transformedArticles);
}

main();