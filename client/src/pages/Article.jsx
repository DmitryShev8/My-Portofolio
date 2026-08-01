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
            The article you're looking for doesn't exist or may have been removed.
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

  if (!article) {
    return <NotFound />;
  }

  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-6 lg:px-0">
        <header className="mb-12">
          <h1
            className="
    text-6xl
    md:text-7xl
    font-serif
    font-semibold
    text-on-surface
    mb-6
    leading-tight
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
      <section className="w-full max-w-7xl mx-auto px-6 md:px-16 mt-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              More from the Archive
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Recommended reading for the focused mind.
            </p>
          </div>
          <a
            className="font-label-sm text-label-sm text-primary uppercase tracking-widest hover:underline"
            href="#"
          >
            View all articles
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Related Article 1 */}
          <div className="group flex flex-col bg-surface-container-low border border-outline-variant hover:border-primary transition-all cursor-pointer">
            <div className="aspect-video bg-surface-container overflow-hidden">
              <img
                alt="Rust vs Go"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                data-alt="A minimalist tech-themed image showing a split-screen comparison between two abstract computer languages, Rust and Go. One side uses deep blue hues and rigid geometric patterns, while the other features warm gold tones and flowing organic shapes. The lighting is low-key with sharp highlights, maintaining a professional and clean academic aesthetic suitable for a technical comparison article."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAGXwSl7DlSuRxg5WnHZEcLO0awdfga7Njq80h8SgWiOYxcOib0f6QsxFlxNdLJh5EqDrKXT7o9fN8UrWm9V7Gv-mLYPltsQrIbIs7WN4U3q1OY9WWluWxfRXlvBh8QGzzj7NmZO7V9HChqeGVS1N_BSeSDqIssvJd23PMJCtEq-pjtXROp-edlAS76ZkcAllaNWnd4KThCDUWNBK6wiPIZ94A4oEhTVq-ku7Z-Nc7iIO_dORLXIJBZVgyWJ9EN8AqKDLoMKbDVPY"
              />
            </div>
            <div className="p-6">
              <span className="font-label-sm text-label-sm text-primary uppercase mb-2 block">
                Performance
              </span>
              <h3 className="font-headline-md text-[20px] text-on-surface group-hover:text-primary transition-colors mb-2">
                Rust vs Go: The Memory Safety Dilemma
              </h3>
              <p className="font-body-md text-on-surface-variant line-clamp-2">
                Choosing the right foundation for modern system software.
              </p>
            </div>
          </div>
          {/* Related Article 2 */}
          <div className="group flex flex-col bg-surface-container-low border border-outline-variant hover:border-primary transition-all cursor-pointer">
            <div className="aspect-video bg-surface-container overflow-hidden">
              <img
                alt="Zero Trust Infrastructure"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                data-alt="A high-tech digital security visualization representing 'Zero Trust Infrastructure'. It features glowing laser-etched security layers and holographic shields in a deep obsidian environment. The color palette is dominated by Tech Blue accents and dark charcoal surfaces, illuminated by sharp, precise light beams that create a sense of indestructible digital architecture and sophisticated safety."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEPjdFb_SHd9L0C-gt48kOEvnXHJqyGIEydlAItRFdk_9NXKBShK4MuQY4GB_H6eeKL2yydwopfwXD1YYqv2G70cUOkOSKSg0-qHuRZQ3UIlrL6nrR9KC4E0WQ_4qxiyYDjSKwhX21VT6BJVRPb6kfY4H0QRHAJyw4fRibcON-6YH8sPTD3ceheb-l-xvLMgQwsCaFCB3WlLaO5_fJaFhEMKeGcEQdGsEKz7g8gw4FDhB0U_et8sawTq1ICHWhGJ7AgUok5AF8H6g"
              />
            </div>
            <div className="p-6">
              <span className="font-label-sm text-label-sm text-primary uppercase mb-2 block">
                Security
              </span>
              <h3 className="font-headline-md text-[20px] text-on-surface group-hover:text-primary transition-colors mb-2">
                Zero Trust: The Perimeter is Dead
              </h3>
              <p className="font-body-md text-on-surface-variant line-clamp-2">
                Why modern networks must assume breach from the start.
              </p>
            </div>
          </div>
          {/* Related Article 3 */}
          <div className="group flex flex-col bg-surface-container-low border border-outline-variant hover:border-primary transition-all cursor-pointer">
            <div className="aspect-video bg-surface-container overflow-hidden">
              <img
                alt="Global Archive"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                data-alt="A global network map showing glowing data clusters and satellite connections over a dark earth. The aesthetic is clean and technical, using a monochrome palette with Muted Gold pinpoints of light. The atmosphere is calm and expansive, capturing the essence of a global digital archive and interconnected human knowledge in a quiet, intelligent visual style."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXSRuO9lbIb3wJCblqYlQE-iKq7mCBs02hbQxOzJLJLBsDp_FqQhJf87-wjeRwFVpT0PKBCabuDg7xctqz6DHbmSjATYT9YCcWdQFZKfwRxyJu4qkDbnBx_pa0nXzjf7mjZGpfZ0SSEWombD8xGMo10IIzOECxsdOg7eVQWL572MaemwxpFXMPnVKgiCQY5PsFqsZX28-MTFdDMo_3X6zDgURDoZxtjSli6rqtTXLyGczU-t5CdF83inVNrVD-AHIMqdKWg_8yKw0"
              />
            </div>
            <div className="p-6">
              <span className="font-label-sm text-label-sm text-primary uppercase mb-2 block">
                Curation
              </span>
              <h3 className="font-headline-md text-[20px] text-on-surface group-hover:text-primary transition-colors mb-2">
                The Ethics of Data Longevity
              </h3>
              <p className="font-body-md text-on-surface-variant line-clamp-2">
                What we choose to save defines who we are as a civilization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
