import { useNavigate, useParams } from "react-router-dom";
import { bootcamp } from "../data/bootcamp";
import Layout from "../components/layout/Layout";

export default function BootcampProjects() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const project = bootcamp.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1>Project not found.</h1>
      </div>
    );
  }

  return (
    <Layout>
      {/* ================= HERO ================= */}
        <section className="max-w-225 mx-auto px-6 mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-primary"></span>

            <span className="font-label-sm uppercase tracking-[0.25em] text-primary">
              {project.category}
            </span>
          </div>

          <h1 className="font-headline-xl text-5xl md:text-6xl leading-tight tracking-tight text-on-background">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="mt-6 text-xl italic leading-9 text-on-surface-variant max-w-3xl">
              {project.subtitle}
            </p>
          )}

          <div className="flex flex-wrap gap-3 mt-10">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-outline-variant bg-surface-container-low text-sm font-label-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ================= FEATURE IMAGE ================= */}
        <section className="max-w-300 mx-auto px-6 mb-32">
          <div className="overflow-hidden rounded-xl border border-outline-variant">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-140 object-cover"
            />
          </div>
        </section>

        {/* ================= OVERVIEW ================= */}
        <section className="max-w-225 mx-auto px-6 mb-32">
          <div className="grid md:grid-cols-[180px_1fr] gap-16">
            <div>
              <h2 className="font-headline-md text-primary sticky top-28">
                Overview
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-on-surface-variant">
                {project.overview}
              </p>
            </div>
          </div>
        </section>
        {/* ================= CHALLENGE ================= */}
        <section className="max-w-300px mx-auto px-6 mb-32">
          <h2 className="font-headline-lg text-center mb-16">
            Challenge & Solution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {project.challengeSolution.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-8 flex flex-col h-full"
              >
                <span className="text-primary text-5xl font-light mb-8">
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                <h3 className="font-headline-md mb-4">Challenge</h3>

                <p className="leading-8 text-on-surface-variant">
                  {item.challenge}
                </p>

                <div className="border-t border-outline-variant my-8"></div>

                <h3 className="font-headline-md text-primary mb-4">Solution</h3>

                <p className="leading-8 text-on-surface-variant">
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PROJECT SUMMARY ================= */}
        <section className="max-w-300 mx-auto px-6 mb-32">
          <div className="flex items-center gap-3 mb-14">
            <span className="w-8 h-px bg-primary"></span>
            <span className="font-label-sm uppercase tracking-[0.25em] text-primary">
              Project Summary
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="font-label-sm uppercase tracking-[0.25em] text-primary mb-5">
                Purpose
              </h3>

              <p className="leading-8 text-on-surface-variant">
                {project.purpose}
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <h3 className="font-label-sm uppercase tracking-[0.25em] text-primary mb-5">
                Objective
              </h3>

              <p className="leading-8 text-on-surface-variant">
                {project.objective}
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <h3 className="font-label-sm uppercase tracking-[0.25em] text-primary mb-5">
                Outcome
              </h3>

              <p className="leading-8 text-on-surface-variant">
                {project.outcome}
              </p>
            </div>
          </div>
        </section>
        {/* Dashboard Preview */}
        {project.dashboard && (
          <section className="max-w-6xl mx-auto px-6 mb-28">
            <div className="mb-10">
              <span className="flex items-center gap-2 mb-3">
                <span className="w-8 h-px bg-primary"></span>
                <span className="font-label-sm uppercase tracking-[0.2em] text-primary">
                  Dashboard
                </span>
              </span>

              <h2 className="font-headline-lg text-on-background">
                Power BI Dashboard
              </h2>

              <p className="mt-4 text-on-surface-variant max-w-3xl leading-8">
                Final dashboard developed to summarize the project's analytical
                findings through KPIs, trends, interactive filtering, and
                executive insights.
              </p>
            </div>

            <div className="rounded-xl border border-outline-variant overflow-hidden bg-surface">
              <embed
                src={project.dashboard}
                type="application/pdf"
                className="w-full h-212.5"
              />
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href={project.dashboard}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-black transition"
              >
                <span className="material-symbols-outlined">
                  picture_as_pdf
                </span>
                Open PDF
              </a>

              <a
                href={project.dashboard}
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black hover:opacity-90 transition"
              >
                <span className="material-symbols-outlined">download</span>
                Download
              </a>
            </div>
          </section>
        )}
        {/* ================= Navigation ================= */}
        <section className="max-w-300 mx-auto px-6 mt-32 mb-24">
          <div className="h-px bg-outline-variant mb-16"></div>

          {(() => {
            const currentIndex = bootcamp.findIndex((p) => p.slug === slug);

            const previous =
              currentIndex > 0 ? bootcamp[currentIndex - 1] : null;

            const next =
              currentIndex < bootcamp.length - 1
                ? bootcamp[currentIndex + 1]
                : null;

            return (
              <div className="flex items-center justify-between gap-8">
                {/* Previous */}
                <div className="flex-1">
                  {previous ? (
                    <button
                      onClick={() =>
                        navigate(`/bootcamp-projects/${previous.slug}`)
                      }
                      className="group flex items-center gap-5"
                    >
                      <div className="w-14 h-14 rounded-xl border border-outline-variant flex items-center justify-center transition-all group-hover:border-primary group-hover:bg-primary">
                        <span className="material-symbols-outlined group-hover:text-black">
                          arrow_back
                        </span>
                      </div>

                      <div className="text-left">
                        <p className="font-label-sm uppercase tracking-widest text-outline">
                          Previous Project
                        </p>

                        <h3 className="font-headline-md group-hover:text-primary transition-colors">
                          {previous.title}
                        </h3>
                      </div>
                    </button>
                  ) : (
                    <div />
                  )}
                </div>

                {/* Gallery */}

                <button
                  onClick={() => navigate("/bootcamp-projects")}
                  className="px-10 py-4 border border-primary text-primary uppercase tracking-[0.25em] font-label-sm hover:bg-primary hover:text-black transition-all"
                >
                  Back to Gallery
                </button>

                {/* Next */}

                <div className="flex-1 flex justify-end">
                  {next ? (
                    <button
                      onClick={() =>
                        navigate(`/bootcamp-projects/${next.slug}`)
                      }
                      className="group flex items-center gap-5 text-right"
                    >
                      <div>
                        <p className="font-label-sm uppercase tracking-widest text-outline">
                          Next Project
                        </p>

                        <h3 className="font-headline-md group-hover:text-primary transition-colors">
                          {next.title}
                        </h3>
                      </div>

                      <div className="w-14 h-14 rounded-xl border border-outline-variant flex items-center justify-center transition-all group-hover:border-primary group-hover:bg-primary">
                        <span className="material-symbols-outlined group-hover:text-black">
                          arrow_forward
                        </span>
                      </div>
                    </button>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            );
          })()}
        </section>
    </Layout>
  );
}
