import { useNavigate, useParams } from "react-router-dom";
import { portfolios } from "../data/portfolios";

function Card({ title, description }) {
  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container p-6 h-full">
      <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-3">
        {title}
      </p>

      <p className="leading-7 text-on-surface-variant">{description}</p>
    </div>
  );
}

export default function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const portfolio = portfolios.find((item) => item.id === id);

  if (!portfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Portfolio tidak ditemukan
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
              className="text-primary border-b-2 border-primary pb-1 font-body-md"
              onClick={() => navigate(`/`)}
            >
              Education
            </button>

            <button
              className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200"
              onClick={() => navigate(`/reading-list`)}
            >
              Reading List
            </button>

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

      {/* Main Content */}
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-16 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-4 text-primary">
                <span className="h-px w-12 bg-primary"></span>
                <span className="font-label-sm uppercase tracking-widest">
                  Case Study: {portfolio.caseStudy}
                </span>
              </div>

              <h1 className="font-headline-xl text-5xl md:text-6xl text-on-surface leading-tight">
                {portfolio.hero.title} <br />
                <span className="italic text-primary">
                  {portfolio.hero.highlight}
                </span>
              </h1>

              <p className="font-body-lg text-lg text-on-surface-variant max-w-lg">
                {portfolio.hero.subtitle}
              </p>
            </div>

            <div className="lg:col-span-6 relative aspect-square lg:aspect-video overflow-hidden border border-outline-variant">
              {portfolio.hero.video ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-xl"
                >
                  <source src={portfolio.hero.video} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={portfolio.hero.image}
                  alt={portfolio.hero.title}
                  className="w-full rounded-xl"
                />
              )}
              <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex flex-wrap gap-4">
                {portfolio.hero.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
        px-6 py-3
        rounded-2xl
        bg-white/90
        text-black
        font-semibold
        border border-white
        shadow-[0_0_25px_rgba(99,102,241,0.35)]
        backdrop-blur-sm
      "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="max-w-7xl mx-auto px-6 md:px-16 mb-24">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Project Information */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 rounded-xl border border-outline-variant bg-surface-container p-8 space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-2">
                    Role
                  </p>
                  <h3 className="text-xl font-semibold">
                    {portfolio.overview.role}
                  </h3>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-2">
                    Timeline
                  </p>
                  <h3 className="text-xl font-semibold">
                    {portfolio.overview.duration}
                  </h3>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-2">
                    Domain
                  </p>
                  <h3 className="text-xl font-semibold">
                    {portfolio.overview.domain}
                  </h3>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-2">
                    Dataset
                  </p>
                  <h3 className="text-xl font-semibold">
                    {portfolio.overview.dataset}
                  </h3>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-3">
                    Tech Stack
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {portfolio.overview.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-full border border-outline text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Summary */}
            <div className="lg:col-span-8">
              <h2 className="text-4xl font-semibold mb-3">Executive Summary</h2>

              <div className="w-20 h-1 bg-primary mb-10"></div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card
                  title="Problem"
                  description={portfolio.executiveSummary.problem}
                />

                <Card
                  title="Approach"
                  description={portfolio.executiveSummary.approach}
                />

                <Card
                  title="Outcome"
                  description={portfolio.executiveSummary.outcome}
                />
              </div>
            </div>
          </div>
        </section>
        {/* Project Workflow */}
        <section className="bg-surface-container-low py-24 mb-24 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="mb-16">
              <h2 className="text-4xl font-semibold text-on-surface mb-4">
                Project Workflow
              </h2>

              <p className="text-on-surface-variant max-w-2xl">
                An overview of the methodology, workflow, and technologies used
                throughout the development process.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Workflow */}
              <div className="rounded-xl border border-outline-variant bg-surface-container p-8">
                <h3 className="text-2xl font-semibold text-primary mb-8">
                  Workflow Stages
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {portfolio.workflow.map((step) => (
                    <div key={step.title} className="space-y-3">
                      <span className="material-symbols-outlined text-primary text-3xl">
                        {step.icon}
                      </span>

                      <h4 className="font-semibold text-on-surface">
                        {step.title}
                      </h4>

                      <p className="text-sm leading-6 text-on-surface-variant">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pipeline */}
              <div className="rounded-xl overflow-hidden border border-outline-variant shadow-xl bg-[#0f1115]">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-outline-variant bg-surface-container">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />

                  <span className="ml-4 text-sm text-on-surface-variant">
                    project_pipeline.py
                  </span>
                </div>

                <pre className="p-6 overflow-x-auto text-sm leading-7 text-secondary">
                  <code>{portfolio.pipeline}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
        {/* Challenges & Solutions */}
        <section className="max-w-7xl mx-auto px-6 md:px-16 mb-24">
          <div className="mb-12">
            <h2 className="text-4xl font-semibold text-on-surface">
              Challenges & Solutions
            </h2>

            <p className="mt-3 text-on-surface-variant max-w-2xl">
              Every project comes with unique technical and business challenges.
              Here are some of the key problems encountered and how they were
              addressed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.challenges.map((challenge, index) => (
              <div
                key={challenge.title}
                className="relative rounded-xl border border-outline-variant bg-surface-container p-8"
              >
                <div className="absolute top-6 right-6 text-6xl font-bold opacity-5">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-semibold text-primary mb-4">
                  {challenge.title}
                </h3>

                <div className="space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-secondary mb-2">
                      Challenge
                    </p>

                    <p className="leading-7 text-on-surface-variant">
                      {challenge.description}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-secondary mb-2">
                      Solution
                    </p>

                    <p className="leading-7 text-on-surface">
                      {challenge.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Impact & Results */}
        <section className="max-w-7xl mx-auto px-6 md:px-16 mb-24">
          <div className="mb-12">
            <h2 className="text-4xl font-semibold">Project Outcomes</h2>

            <p className="mt-3 text-on-surface-variant max-w-2xl">
              Key performance indicators and measurable outcomes achieved
              throughout the project.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-outline-variant bg-surface-container p-8 text-center hover:border-primary transition"
              >
                <h3 className="text-5xl font-bold text-primary mb-4">
                  {metric.value}
                </h3>

                <p className="uppercase tracking-wider text-sm text-on-surface-variant">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Navigation */}
        <section className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-12 border-t border-outline-variant">
            {/* Previous */}
            <a
              onClick={() => navigate("/portfolio")}
              className="group flex items-center gap-4 self-start md:self-auto"
            >
              <span className="material-symbols-outlined text-primary transition-transform duration-300 group-hover:-translate-x-2">
                arrow_back
              </span>

              <div>
                <p className="text-sm uppercase tracking-wider text-on-surface-variant">
                  Kembali ke
                </p>

                <p className="text-2xl font-semibold">Timeline Projek</p>
              </div>
            </a>

            {/* Next */}
            <a
              onClick={() => navigate("/portfolio")}
              className="group flex items-center gap-4 text-left md:text-right self-start md:self-auto"
            >
              <div>
                <p className="text-sm uppercase tracking-wider text-on-surface-variant">
                  Selanjutnya
                </p>

                <p className="text-2xl font-semibold">
                  {portfolio.nextProject.title}
                </p>
              </div>

              <span
                onClick={() =>
                  navigate(`/portfolio/${portfolio.nextProject.slug}`)
                }
                className="material-symbols-outlined text-primary transition-transform duration-300 group-hover:translate-x-2"
              >
                arrow_forward
              </span>
            </a>
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
