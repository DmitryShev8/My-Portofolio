import axios from "axios";
import fs from "fs";
import path from "path";
import { XMLParser } from "fast-xml-parser";
import * as cheerio from "cheerio";

async function fetchRSS() {
  try {
    const response = await axios.get("https://medium.com/feed/@aryachenko46");

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

  // Thumbnail
  const thumbnail = ($("img").first().attr("src") || "").split("?")[0];

  // Excerpt dari H4
  const excerpt =
    $("h4").first().text().trim() ||
    $("p").first().text().trim();

  // Hapus H4 supaya tidak muncul lagi di body
  $("h4").first().remove();

  // Bersihkan elemen yang tidak dipakai
  $("figure").remove();
  $("figcaption").remove();
  $("iframe").remove();
  $("script").remove();
  $("style").remove();
  $("img[src*='medium.com/_/stat']").remove();
  $("hr").nextAll().remove();
  $("hr").remove();

  // Ambil HTML setelah dibersihkan
  const content = $("body").html() || $.root().html();

  // Hitung reading time dari content yang sudah bersih
  const words = $.text().trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / 200);

  // Slug
  const slug = article.title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  return {
    id: article.guid?.["#text"] ?? slug,
    slug,
    title: article.title,
    excerpt,
    thumbnail,
    content,
    readTime: `${readingTime} min read`,
    mediumUrl: article.link.split("?")[0],
    categories: Array.isArray(article.category)
      ? article.category
      : article.category
      ? [article.category]
      : [],
    author: article["dc:creator"],
    publishedAt: article.pubDate,
    updatedAt: article["atom:updated"],
  };
}

function saveArticles(articles) {
  const outputPath = path.join(
    import.meta.dirname,
    "..",
    "src",
    "data",
    "articles.json",
  );

  fs.writeFileSync(outputPath, JSON.stringify(articles, null, 2), "utf8");

  console.log(`✅ Saved ${articles.length} articles`);
}

async function main() {
  const xml = await fetchRSS();

  const articles = parseRSS(xml);

  const transformedArticles = articles.map(transformArticle);

  saveArticles(transformedArticles);
}

main();
