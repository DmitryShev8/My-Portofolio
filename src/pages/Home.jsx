import React from "react";
import { useNavigate } from "react-router-dom";
import { articles } from "../data/articles";

export default function App() {
  const navigate = useNavigate();
  const [setActive] = React.useState(null);
  const [setSelectedPost] = React.useState(null);
  const latestArticles = articles.slice(0, 3);

  const [showCV, setShowCV] = React.useState(false);

  const handleReadArticle = (article) => {
    setSelectedPost(article);
    setActive("ArticleDetail");
  };
  return (
    <div className="bg-background text-on-background min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant">
        <div className="flex justify-between items-center w-full px-6 md:px-16 py-4 max-w-7xl mx-auto">
          <span className="font-headline-lg text-3xl font-semibold text-primary">
            The Archive
          </span>
          <div className="hidden md:flex gap-8 items-center">
            <button
              className="font-body-md text-primary border-b-2 border-primary pb-1"
              href="#"
            >
              Education
            </button>
            <button
              className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-200"
              onClick={() => navigate(`/reading-list`)}
            >
              Reading List
            </button>
            <a
              className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-200"
              href="#"
            >
              Articles
            </a>
            <button className="ml-4 px-6 py-2 bg-primary text-black font-label-sm rounded-lg hover:opacity-90 transition-all">
              Contact
            </button>
          </div>
          <div className="md:hidden">
            <span className="material-symbols-outlined text-primary">menu</span>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container border border-outline-variant rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="font-label-sm text-xs text-primary uppercase tracking-widest">
                Available for Collaboration
              </span>
            </div>
            <h1 className="font-headline-xl text-5xl md:text-6xl text-balance">
              Analysing <span className="text-primary italic">Data</span> with
              the Precision of an <span className="text-primary">Artisan</span>.
            </h1>
            <p className="font-body-lg text-lg text-on-surface-variant max-w-xl">
              Data Analysis, Machine Learning Engineer, and lifelong learner.
              Bridging the gap between classical engineering philosophy and
              Artificial Intellignece.
            </p>
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => navigate("/portfolio")}
                className="px-8 py-3 bg-primary text-black font-medium rounded-lg hover:brightness-110 transition-all flex items-center gap-2"
              >
                View Portfolio
                <span className="material-symbols-outlined text-[18px] text-black">
                  arrow_forward
                </span>
              </button>
              <button
                onClick={() => setShowCV(true)}
                className="px-8 py-3 border border-secondary text-secondary font-label-sm rounded-lg hover:bg-secondary/10 transition-all"
              >
                Technical CV
              </button>
              {showCV && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6">
                  <div className="relative w-full max-w-6xl h-[90vh] bg-surface rounded-xl overflow-hidden shadow-2xl">
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant">
                      <h2 className="text-xl font-semibold text-on-surface">
                        Technical CV
                      </h2>

                      <button
                        onClick={() => setShowCV(false)}
                        className="text-on-surface-variant hover:text-primary transition"
                      >
                        <span className="material-symbols-outlined">close</span>
                      </button>
                    </div>

                    {/* PDF */}
                    <iframe
                      src="/cv/Job_CV.pdf"
                      className="w-full h-full"
                      title="Technical CV"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="aspect-4/5 bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/assets/arya.jpg"
                alt="Portrait"
                className="w-full h-full object-cover grayscale opacity-80"
              />
            </div>
            {/* Experience Badge */}
            <div
              className="
  absolute -bottom-6 -left-6
  bg-white dark:bg-zinc-900
  border border-gray-200 dark:border-zinc-700
  rounded-xl
  p-6
  shadow-2xl
  hidden md:block
"
            >
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="font-code-block text-2xl text-primary font-bold">
                    1+
                  </span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">
                    Years Experience
                  </span>
                </div>
                <div className="w-px h-10 bg-outline-variant"></div>
                <div className="flex flex-col">
                  <span className="font-code-block text-2xl text-primary font-bold">
                    10+
                  </span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">
                    Deployments
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Foundation & Competencies (Bento Grid) */}
        <section className="bg-surface-container-lowest py-24 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="font-headline-lg text-4xl">
                  Academic Foundation
                </h2>
                <p className="font-body-md text-on-surface-variant">
                  Formal rigor meeting practical execution.
                </p>
              </div>
              <div className="font-code-block text-xs text-primary">
                COMPETENCY_MATRIX_V4.0
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Education Card */}
              <div className="bg-surface-container-low border border-outline-variant p-8 rounded-xl">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">
                  school
                </span>

                <h3 className="font-headline-md text-xl mb-2">
                  Bachelor of Computer Science
                </h3>

                <p className="font-body-md text-on-surface-variant">
                  Diponegoro University
                </p>

                <p className="mt-4 text-sm text-on-surface-variant">
                  Specialization in Machine Learning, Deep Learning, and Data
                  Analytics.
                </p>
              </div>
              {/* Non-Formal */}
              <div className="bg-surface-container-low border border-outline-variant p-8 rounded-xl flex flex-col">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">
                  workspace_premium
                </span>

                <h3 className="font-headline-md text-xl mb-2">
                  Data Analytics Bootcamp
                </h3>

                <p className="font-body-md text-on-surface-variant">
                  Dibimbing.id
                </p>

                <p className="mt-4 text-sm text-on-surface-variant">
                  Intensive training in SQL, Python, Statistics, Machine
                  Learning, and Power BI through real-world business case
                  studies.
                </p>

                {/* Button */}
                <button
                  onClick={() => navigate("/bootcamp-projects")}
                  className="mt-6 self-start inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all text-sm font-medium"
                >
                  Projects
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </button>
              </div>
              {/* Competency 1 */}
              <div className="bg-surface-container border border-outline-variant p-8 rounded-xl flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">
                    cloud
                  </span>
                </div>
                <h4 className="font-label-sm font-bold uppercase mb-4 tracking-tighter">
                  Visualization
                </h4>
                <ul className="font-body-md text-on-surface-variant space-y-2 text-sm">
                  <li>Tableau</li>
                  <li>Power BI</li>
                </ul>
              </div>
              {/* Competency 2 */}
              <div className="bg-surface-container border border-outline-variant p-8 rounded-xl flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">
                    terminal
                  </span>
                </div>
                <h4 className="font-label-sm font-bold uppercase mb-4 tracking-tighter">
                  Development
                </h4>
                <ul className="font-body-md text-on-surface-variant space-y-2 text-sm">
                  <li>Python, Java, C++</li>
                  <li>SQL</li>
                  <li>TensorFlow, PyTorch</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Library */}
        <section className="py-24 max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-4xl mb-2">
              The Technical Library
            </h2>
            <p className="font-body-md text-on-surface-variant">
              Essential readings that defined my engineering philosophy.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                id: "sapiens",
                title: "Sapiens: A Brief History of Humankind",
                author: "Yuval Noah Harari",
                img: "s.jpg",
              },
              {
                id: "zarathustra",
                title: "Thus Spoke Zarathustra",
                author: "Friedrich Nietzsche",
                img: "tsj.jpg",
              },
              {
                id: "meditations",
                title: "Meditations",
                author: "Marcus Aurelius",
                img: "m.jpg",
              },
              {
                id: "guns-germs-steel",
                title: "Guns, Germs, and Steel",
                author: "Jared Diamond",
                img: "ggs.jpg",
              },
            ].map((book, i) => (
              <div
                key={i}
                onClick={() => navigate(`/reading-list/${book.id}`)}
                className="group cursor-pointer"
              >
                <div className="aspect-2/3 bg-surface-container border border-outline-variant rounded-lg overflow-hidden mb-4 shadow-xl group-hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src={`/images/books/${book.img}`}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-headline-md text-lg leading-tight">
                  {book.title}
                </h4>
                <p className="font-label-sm text-xs text-on-surface-variant">
                  {book.author}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Articles */}
        <section className="bg-surface-container py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="flex justify-between items-center mb-12">
              <h2 className="font-headline-lg text-4xl">Articles</h2>
              <a
                className="font-label-sm text-primary flex items-center gap-1 hover:underline"
                href="#"
              >
                EXPLORE_ALL{" "}
                <span className="material-symbols-outlined text-[14px]">
                  arrow_outward
                </span>
              </a>
            </div>
            <div className="space-y-6">
              {articles.slice(0, 2).map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onClick={() => navigate(`/article/${article.id}`)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant py-12">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 max-w-7xl mx-auto gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="font-headline-md text-2xl text-primary">
              The Archive
            </span>
            <p className="font-body-md text-sm text-on-surface-variant">
              © 2026 Made By: Arya Dheffan S. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-xs font-label-sm text-on-surface-variant uppercase tracking-wider">
            <a
              className="hover:text-primary underline decoration-primary transition-all"
              href="#"
            >
              Contact
            </a>
            <a
              className="hover:text-primary underline decoration-primary transition-all"
              href="#"
            >
              GitHub
            </a>
            <a
              className="hover:text-primary underline decoration-primary transition-all"
              href="#"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Sub-komponen untuk merapikan kode artikel
function ArticleCard({ article, onClick }) {
  return (
    <article
      onClick={onClick}
      className="group bg-surface border border-outline-variant p-8 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:bg-surface-container-highest transition-all cursor-pointer"
    >
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="font-code-block text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded">
            {article.tag}
          </span>

          <time className="font-label-sm text-[10px] text-on-surface-variant">
            {article.date}
          </time>
        </div>

        <h3 className="font-headline-md text-2xl group-hover:text-primary transition-colors">
          {article.title}
        </h3>

        <p className="font-body-md text-on-surface-variant max-w-2xl">
          {article.desc}
        </p>
      </div>

      <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-2 transition-all">
        east
      </span>
    </article>
  );
}
