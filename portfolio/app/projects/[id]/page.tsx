"use client";
import { useParams } from "next/navigation";
import { projectsData } from "@/components/data/projectsData";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === id
  );

  if (!project) {
    return (
      <div className="bg-bone min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl md:text-6xl text-night font-bold mb-4">Project Not Found</h1>
        <p className="text-raisin-black text-lg mb-8 text-center">
          We couldn't find the project you're looking for. It might have been removed or the URL might be incorrect.
        </p>
        <button
          onClick={() => window.location.href = '/projects'}
          className="bg-poppy text-white px-6 py-3 rounded-md hover:bg-orange transition-colors duration-300"
        >
          Back to Projects
        </button>
      </div>
    );
  }
  

  return (
    <div className="bg-bone min-h-screen py-12">
      {/* Responsive container: wider on larger screens */}
      <div className="max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto px-6">
        {/* Project Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-night font-bold text-center mb-8">
          {project.title}
        </h1>

        {/* Categories as Badges */}
        <div className="flex justify-center space-x-3 mb-8">
          {project.categories.map((cat, index) => (
            <span
              key={index}
              className="bg-ucla-blue text-white px-4 py-2 rounded-full text-sm md:text-base"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Project Image */}
        <div className="mb-8">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Project Description */}
        <div className="mb-8">
          <p className="text-raisin-black text-lg md:text-xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Responsive Video Container */}
        <div className="mb-8">
          <div
            className="relative w-full overflow-hidden rounded-lg shadow-lg"
            style={{ paddingTop: "56.25%" }}  // 16:9 aspect ratio
          >
            <iframe
              src={project.video}
              title={`${project.title} Video`}
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* GitHub Button */}
        <div className="text-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-poppy text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange transition-colors duration-300 text-lg md:text-xl"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
