import { useNavigate } from "react-router-dom";
import { bootcamp } from "../data/bootcamp";
import Layout from "../components/layout/Layout";

export default function BootcampProjects() {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero */}
        <section className="relative py-20 md:py-28">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(233,193,118,.15) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6 md:px-16">
            <p className="font-label-sm uppercase tracking-[0.3em] text-primary mb-6">
              Dibimbing.id Bootcamp
            </p>

            <h1 className="font-headline-xl text-6xl md:text-7xl leading-none tracking-tight mb-8">
              Bootcamp Projects
            </h1>

            <p className="max-w-3xl text-body-lg text-on-surface-variant leading-9">
              A curated collection of business case studies completed throughout
              my Data Analytics Bootcamp. These projects cover exploratory
              analysis, dashboard development, statistical testing, and machine
              learning using real-world datasets.
            </p>

            <div className="mt-10 w-28 h-px bg-primary" />
          </div>
        </section>

        {/* Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-16 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bootcamp.map((project) => (
              <article
                key={project.id}
                className="group bg-surface-container-low border border-outline-variant overflow-hidden transition-all duration-300 hover:border-primary hover:-translate-y-1"
              >
                {/* Image */}
                <div className="aspect-16/10 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col h-full">
                  <p className="text-primary uppercase tracking-[0.2em] text-xs mb-4 font-label-sm">
                    {project.category}
                  </p>

                  <h2 className="font-headline-md text-3xl tracking-tight mb-3">
                    {project.title}
                  </h2>

                  <p className="text-on-surface-variant mb-6 italic">
                    {project.subtitle}
                  </p>

                  <p className="text-on-surface-variant leading-7 line-clamp-4">
                    {project.overview}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-8">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded bg-surface-container-high text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      navigate(`/bootcamp-projects/${project.slug}`)
                    }
                    className="mt-10 flex items-center gap-2 text-primary font-label-sm uppercase tracking-[0.2em] hover:gap-3 transition-all"
                  >
                    View Case Study
                    <span className="material-symbols-outlined text-lg">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
    </Layout>
  );
}
