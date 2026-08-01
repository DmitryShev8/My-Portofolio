import articles from "../data/articles.json";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

function NotFound() {
  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <h1 className="font-headline-lg text-on-surface">
            Article Not Found
          </h1>

          <p className="mt-4 text-on-surface-variant">
            The article you're looking for doesn't exist or may have been
            removed.
          </p>

          <Link
            to="/articles"
            className="inline-flex mt-8 px-6 py-3 rounded-full bg-primary text-on-primary"
          >
            View All Articles
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export default function Article() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);
  const relatedArticles = articles
    .filter((item) => item.slug !== slug)
    .sort((a, b) => {
      // kategori sama mendapat prioritas
      if (a.category === article.category && b.category !== article.category)
        return -1;

      if (a.category !== article.category && b.category === article.category)
        return 1;

      return 0;
    })
    .slice(0, 3);

  if (!article) {
    return <NotFound />;
  }

  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-6 lg:px-0">
        <header className="mb-12">
          <h1
            className="
    text-5xl
md:text-6xl
leading-tight
font-bold
  "
          >
            {article.title}
          </h1>

          <p className="text-xl leading-9 text-zinc-400 max-w-3xl">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between py-6 border-y border-outline-variant">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-outline">
                <img
                  src="/assets/arya.jpg"
                  alt={article.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-headline-md text-[16px] text-on-surface font-semibold">
                  {article.author}
                </p>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                  {new Date(article.publishedAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  • {article.readTime}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined" data-icon="share">
                  share
                </span>
              </button>
              <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                <span
                  className="material-symbols-outlined"
                  data-icon="bookmark"
                >
                  bookmark
                </span>
              </button>
            </div>
          </div>
        </header>
        {/* Featured Image */}
        <figure className="my-16">
          <div className="overflow-hidden rounded-xl border border-outline-variant">
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          <figcaption className="mt-4 text-center font-label-sm text-label-sm text-on-surface-variant italic">
            {article.imageCaption}
          </figcaption>
        </figure>
        {/* Article Body */}
        <section
          className="
  prose
  prose-lg
  prose-invert
  max-w-none

  prose-p:text-zinc-300
  prose-p:text-[21px]
  prose-p:leading-[1.8]
  prose-p:font-normal
  prose-p:mb-8

  prose-h1:text-5xl
  prose-h2:text-4xl
  prose-h3:text-3xl

  prose-headings:text-white
  prose-headings:font-semibold

  prose-a:text-primary
  prose-a:no-underline
  hover:prose-a:underline

  prose-strong:text-white
  prose-em:italic

  prose-ul:my-8
  prose-ol:my-8

  prose-img:rounded-xl
  prose-img:my-12

  prose-blockquote:border-l-4
  prose-blockquote:border-primary
  prose-blockquote:italic
  prose-blockquote:pl-6

  prose-figure:my-12
  prose-figcaption:text-center
  prose-figcaption:text-sm
  prose-figcaption:text-zinc-500
"
        >
          <div
            dangerouslySetInnerHTML={{
              __html: article.content,
            }}
          />
        </section>
        {/* Engagement Bar */}
        <footer className="mt-16 pt-8 border-t border-outline-variant flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-all group">
              <span
                className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform"
                data-icon="auto_awesome"
              >
                auto_awesome
              </span>
              <a
                href={article.mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read on Medium
              </a>
            </button>
          </div>
          <div className="flex gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant hover:border-primary text-on-surface-variant hover:text-primary transition-all">
              <span
                className="material-symbols-outlined text-[20px]"
                data-icon="ios_share"
              >
                ios_share
              </span>
            </button>
          </div>
        </footer>
      </article>
      {/* More from the Archive Section */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-16 mt-32 pb-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-headline-lg text-on-surface">
              More from My Articles
            </h2>

            <p className="text-on-surface-variant">
              Continue exploring similar reflections.
            </p>
          </div>

          <Link
            to="/articles"
            className="font-label-sm uppercase tracking-widest text-primary hover:underline"
          >
            View all articles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((item) => (
            <Link
              key={item.slug}
              to={`/articles/${item.slug}`}
              className="
        group
        flex
        flex-col
        overflow-hidden
        rounded-2xl
        bg-surface-container-low
        border
        border-outline-variant
        hover:border-primary
        transition-all
        "
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="
            w-full
            h-full
            object-cover
            grayscale
            group-hover:grayscale-0
            group-hover:scale-105
            transition-all
            duration-500
            "
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <span className="font-label-sm uppercase tracking-widest text-primary mb-3">
                  {item.category}
                </span>

                <h3
                  className="
            text-xl
            font-headline-md
            group-hover:text-primary
            transition-colors
            "
                >
                  {item.title}
                </h3>

                <p
                  className="
            mt-3
            text-on-surface-variant
            line-clamp-3
            "
                >
                  {item.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-on-surface-variant">
                    {item.date}
                  </span>

                  <span
                    className="
              material-symbols-outlined
              text-primary
              group-hover:translate-x-1
              transition-transform
              "
                  >
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
