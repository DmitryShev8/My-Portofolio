import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { articles } from "../data/articles";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Article() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [content, setContent] = useState("");

  const article = articles.find((item) => item.id === Number(id));

  useEffect(() => {
    fetch(article.markdown)
      .then((res) => res.text())
      .then(setContent);
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Article tidak ditemukan
      </div>
    );
  }

  return (
    <div className="font-body-md text-body-md overflow-x-hidden bg-background text-on-background min-h-screen">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant">
        <nav className="flex justify-between items-center w-full px-6 md:px-16 py-4 max-w-7xl mx-auto">
          <div
            className="font-headline-lg text-2xl font-semibold text-primary cursor-pointer"
            onClick={() => navigate("/")}
          >
            The Archive
          </div>

          <div className="hidden md:flex gap-6 items-center">
            <button
              className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200"
              onClick={() => navigate(`/`)}
            >
              Education
            </button>

            <a
              className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200"
              href="#"
            >
              Reading List
            </a>

            <a
              className="text-primary border-b-2 border-primary pb-1 font-body-md"
              href="#"
            >
              Articles
            </a>

            <button className="ml-4 px-6 py-2 bg-primary text-black font-label-sm rounded hover:opacity-80 transition-all duration-150">
              Contact
            </button>
          </div>

          <button className="md:hidden text-primary">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-20">
        <article className="max-w-800px mx-auto px-margin-mobile md:px-0">
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

            <p
              className="
    text-2xl
    italic
    text-on-surface-variant
    mb-8
    max-w-3xl
  "
            >
              {article.desc}
            </p>
            <div className="flex items-center justify-between py-6 border-y border-outline-variant">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-outline">
                  <img
                    src={article.authorImage}
                    alt={article.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-headline-md text-[16px] text-on-surface font-semibold">
                    {article.author}
                  </p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                    {article.date} • {article.readTime}
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
          <figure className="mb-12 -mx-margin-mobile md:-mx-16">
            <div className="aspect-[21/9] bg-surface-container overflow-hidden rounded-lg border border-outline-variant">
              <img
                src={article.image}
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

    prose-headings:font-serif
    prose-headings:text-white

    prose-p:text-zinc-300
    prose-p:leading-8

    prose-a:text-primary

    prose-strong:text-white

    prose-code:text-primary

    prose-pre:bg-zinc-900

    prose-blockquote:border-primary
    prose-blockquote:text-zinc-300
  "
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
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
                <span className="font-label-sm text-label-sm">
                  {article.claps} Claps
                </span>
              </button>
              <button className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined" data-icon="forum">
                  forum
                </span>
                <span className="font-label-sm text-label-sm">
                  {article.comments} Comments
                </span>
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
      </main>
      {/* Footer */}
      <footer className="w-full py-12 border-t border-outline-variant bg-surface-container-lowest">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 max-w-7xl mx-auto gap-6">
          <div
            className="font-headline-md text-2xl text-primary cursor-pointer"
            onClick={() => navigate("/")}
          >
            The Archive
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Contact",
              "Privacy Policy",
              "Legal Notice",
              "GitHub",
              "LinkedIn",
            ].map((link) => (
              <a
                key={link}
                className="font-label-sm text-on-surface-variant hover:text-primary underline decoration-primary transition-all"
                href="#"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="font-body-md text-sm text-on-surface-variant">
            © 2026 Digital Archive. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
