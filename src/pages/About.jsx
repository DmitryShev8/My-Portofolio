import projects from "../data/projects";

export default function About({ setActive, setSelectedProject }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
        About Me
      </h1>

      <p className="text-lg text-gray-700 text-center mb-12">
        Hi! I'm Arya Dheffan S, an Informatics student at Diponegoro University.
        My interests revolve around artificial intelligence, data science,
        philosophy, and writing.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {project.description}
            </p>

            <button
              onClick={() => {
                setSelectedProject(project);
                setActive("ProjectDetail");
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Detail →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}