import { useNavigate } from "react-router-dom";

export default function TimelineProject({ project, reverse }) {
  const navigate = useNavigate();

  return (
    <div className="relative grid md:grid-cols-[1fr_80px_1fr] gap-8 items-center min-h-[380px]">
      {/* Left Column */}
      <div>
        {reverse ? (
          <Image project={project} />
        ) : (
          <Content project={project} navigate={navigate} />
        )}
      </div>

      {/* Timeline */}
      <div className="relative flex justify-center items-center h-full">
        <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-primary">
          <span className="text-xs font-bold text-primary">
            {project.caseStudy}
          </span>
        </div>
      </div>

      {/* Right Column */}
      <div>
        {reverse ? (
          <Content project={project} navigate={navigate} reverse />
        ) : (
          <Image project={project} />
        )}
      </div>
    </div>
  );
}

function Content({ project, navigate, reverse = false }) {
  return (
    <div className={reverse ? "md:text-right" : ""}>
      <p className="font-label-sm uppercase tracking-[0.2em] text-secondary mb-2">
        CASE STUDY · {project.caseStudy}
      </p>

      <h2 className="text-3xl font-semibold text-on-surface">
        {project.hero.title}
      </h2>

      <h3 className="text-primary mt-2 mb-4">{project.hero.highlight}</h3>

      <p className="text-on-surface-variant leading-7 mb-6">
        {project.hero.subtitle}
      </p>

      <div
        className={`flex flex-wrap gap-2 mb-6 ${
          reverse ? "md:justify-end" : ""
        }`}
      >
        {project.hero.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full border border-outline text-xs uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      <button
        onClick={() => navigate(`/portfolio/${project.id}`)}
        className="px-6 py-3 rounded bg-primary text-black hover:opacity-90 transition"
      >
        View Case Study
      </button>
    </div>
  );
}

function Image({ project }) {
  return (
    <div className="aspect-video rounded-xl overflow-hidden border border-outline-variant shadow-xl">
      <img
        src={project.hero.image}
        alt={project.hero.title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}
