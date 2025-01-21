import { projectsData } from '@/components/data/projectsData';

const Projects = () => {
  return (
    <div className="p-8 bg-bone min-h-screen">
      <h1 className="text-4xl text-night font-bold mb-8">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <a
            href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            key={project.title}
            className="border border-raisin-black rounded p-4 hover:shadow-lg"
          >
            <h2 className="text-xl text-night font-bold">{project.title}</h2>
            <img src={project.image} alt={project.title} className="w-full h-auto mt-4" />
            <p className="text-raisin-black mt-2">{project.summary}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;