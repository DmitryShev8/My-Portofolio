import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import articles from "../data/articles.json";

export default function ArticlesList() {
  return (
    <Layout>
      {/* ================= HERO ================= */}

      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-4 text-primary mb-6">
            <span className="w-12 h-px bg-primary/40" />

            <span className="font-label-sm uppercase tracking-[0.3em]">
              Articles
            </span>

            <span className="w-12 h-px bg-primary/40" />
          </div>

          <h1
            className="
              font-headline-xl
              text-5xl
              md:text-6xl
              leading-tight
              max-w-5xl
              "
          >
            Reflections on Virtue &{" "}
            <span className="italic text-primary">
              the Lessons of History
            </span>
          </h1>

          <p
            className="
              mt-8
              text-lg
              leading-8
              text-on-surface-variant
              max-w-3xl
              "
          >
            Essays exploring virtue, philosophy, history, and the enduring ideas that continue to shape human character across civilizations.
          </p>
        </div>
      </section>

      {/* ================= ARTICLE LIST ================= */}

      <section className="max-w-6xl mx-auto px-6 pb-2">
        <div className="flex flex-col">
          {articles.map((article, index) => (
            <div key={article.slug}>
              <article
                className="
                  group
                  py-16
                  flex
                  flex-col
                  lg:flex-row
                  gap-10
                  items-start
                  transition-all
                  duration-300
                  "
              >
                {/* Left Number */}

                <div
                  className="
                    hidden
                    md:flex
                    flex-col
                    items-end
                    min-w-[100px]
                    pt-2
                    "
                >
                  <span
                    className="
                      font-label-sm
                      text-primary/40
                      group-hover:text-primary
                      transition-colors
                      "
                  >
                    {(index + 1).toString().padStart(2, "0")} /{" "}
                    {articles.length.toString().padStart(2, "0")}
                  </span>

                  {article.category && (
                    <span
                      className="
                        mt-2
                        text-[11px]
                        uppercase
                        tracking-[0.25em]
                        text-on-surface-variant/70
                        "
                    >
                      {article.category}
                    </span>
                  )}
                </div>

                {/* Content */}

                <div className="flex-1">
                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-3
                      text-sm
                      text-on-surface-variant/70
                      "
                  >
                    <span>{article.date}</span>

                    <span className="w-1 h-1 rounded-full bg-outline-variant" />

                    <span>{article.readTime}</span>
                  </div>

                  <Link to={`/articles/${article.slug}`}>
                    <h2
                      className="
                        mt-5
                        text-3xl
                        md:text-4xl
                        leading-tight
                        font-headline-lg
                        transition-colors
                        duration-300
                        group-hover:text-primary
                        "
                    >
                      {article.title}
                    </h2>
                  </Link>

                  <p
                    className="
                      mt-6
                      text-on-surface-variant
                      leading-8
                      max-w-3xl
                      "
                  >
                    {article.description}
                  </p>

                  <Link
                    to={`/articles/${article.slug}`}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      mt-8
                      font-label-sm
                      uppercase
                      tracking-[0.2em]
                      text-primary
                      group/link
                      "
                  >
                    Read Article
                    <span
                      className="
                        material-symbols-outlined
                        text-lg
                        transition-transform
                        duration-300
                        group-hover/link:translate-x-1
                        "
                    >
                      arrow_forward
                    </span>
                  </Link>
                </div>

                {/* Thumbnail */}

                {article.thumbnail && (
                  <Link
                    to={`/articles/${article.slug}`}
                    className="
                      hidden
                      lg:block
                      shrink-0
                      "
                  >
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      className="
                        w-64
                        h-40
                        object-cover
                        rounded-2xl
                        border
                        border-outline-variant/30
                        transition-all
                        duration-500
                        group-hover:border-primary
                        group-hover:scale-[1.03]
                        shadow-lg
                        "
                    />
                  </Link>
                )}
              </article>

              {index !== articles.length - 1 && (
                <div
                  className="
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-outline-variant/30
                    to-transparent
                    "
                />
              )}
            </div>
          ))}
        </div>
      </section>
      {/* ================= CTA ================= */}

      <section className="bg-surface-container-low py-10">
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="
              rounded-3xl
              border
              border-outline-variant/20
              bg-surface-container
              px-10
              py-16
              text-center
              "
          >
            <span
              className="
                font-label-sm
                uppercase
                tracking-[0.3em]
                text-primary
                "
            >
              Keep Exploring
            </span>

            <h2
              className="
                mt-6
                text-4xl
                md:text-5xl
                font-headline-lg
                "
            >
              Enjoy reading my articles?
            </h2>

            <p
              className="
                mt-6
                max-w-2xl
                mx-auto
                leading-8
                text-on-surface-variant
                "
            >
              I regularly write about machine learning, data analytics, backend
              engineering, and the lessons I learn while building real-world
              projects. If you'd like to see more, explore my portfolio or let's
              connect.
            </p>

            <div
              className="
                mt-12
                flex
                flex-col
                sm:flex-row
                justify-center
                gap-4
                "
            >
              <Link
                to="https://medium.com/@aryashevchenko"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-8
                  py-4
                  rounded-xl
                  bg-primary
                  text-black
                  font-medium
                  hover:opacity-90
                  transition
                  "
              >
                View Medium Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
