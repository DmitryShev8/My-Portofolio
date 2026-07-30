import { useNavigate } from "react-router-dom";
import { portfolios } from "../data/portfolios";
import TimelineProject from "../components/TimelineProject";

export default function Portfolio() {
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

      <main className="pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="flex flex-col gap-6 max-w-3xl">
            <p className="font-label-sm text-secondary tracking-widest">
              PROFESSIONAL EXPERIENCES
            </p>
            <h1 className="font-headline-xl text-5xl md:text-6xl text-on-surface">
              Career Archive &amp; Data Analyst &amp; Machine Learning
            </h1>
            <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
              A chronological showcase of my journey as a Data Analyst and
              Machine Learning Engineer, highlighting the projects, technical
              expertise, and problem-solving approach that have shaped my
              growth.
            </p>
          </div>
        </section>

        {/* Vertical Timeline */}
        <section className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-outline-variant md:-translate-x-1/2" />

          <div className="space-y-24">
            {[...portfolios].reverse().map((project, index) => (
              <TimelineProject
                key={project.id}
                project={project}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-32 pt-24 border-t border-outline-variant text-center max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-4xl text-on-surface mb-6">
            Interested in Discussing Data Analysis?
          </h2>
          <p className="font-body-md text-on-surface-variant mb-10">
            I'm always open to discussing data analytics, machine learning, and
            opportunities to build impactful, data-driven solutions. Let's
            create something meaningful together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-primary text-black font-label-sm font-bold uppercase tracking-widest hover:opacity-90 transition-all">
              Contact Now
            </button>
            <button className="px-8 py-3 border border-secondary text-secondary font-label-sm font-bold uppercase tracking-widest hover:bg-secondary/10 transition-all">
              Download Portfolio
            </button>
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
