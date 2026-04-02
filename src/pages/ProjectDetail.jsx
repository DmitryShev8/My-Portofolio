export default function ProjectDetail({ project, setActive }) {
  if (!project) return null;

  return (
    <div className="bg-white min-h-screen">
      {/* HERO (optional) */}
      {project.image && (
        <div className="w-full h-[300px] md:h-[400px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {project.title}
        </h1>

        {/* CATEGORY */}
        <div className="text-gray-500 text-sm mb-8">
          {project.category} Project
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          {project.details}
        </p>

        {/* TECH STACK */}
        <div className="mb-10">
          <h3 className="font-semibold mb-3 text-lg">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* BACK BUTTON */}
        <button
          onClick={() => setActive("About")}
          className="text-blue-600 hover:text-blue-800 font-medium transition"
        >
          ← Back to About
        </button>
      </div>
    </div>
  );
}