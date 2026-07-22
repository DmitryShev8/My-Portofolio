import { useNavigate } from "react-router-dom";
import { bootcamp } from "../data/bootcamp";

export default function BootcampProjects() {
  const navigate = useNavigate();

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
              className="text-primary border-b-2 border-primary pb-1 font-body-md"
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
              className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200"
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

      <main className="pt-28 pb-24">
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
        <section className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bootcamp.map((project) => (
              <article
                key={project.id}
                className="group bg-surface-container-low border border-outline-variant overflow-hidden transition-all duration-300 hover:border-primary hover:-translate-y-1"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
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
