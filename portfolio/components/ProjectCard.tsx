"use client";
import React from "react";
import { Project } from "@/components/IProject";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const router = useRouter();

  const handleViewProject = () => {
    router.push(`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`);
  };

  const handleFilterCategory = (category: string) => {
    // Redirect to the Projects page with the selected category as a query parameter.
    // router.push(`/projects?filter=${category.toLowerCase()}`);
    router.push(`/projects`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-night text-xl font-bold text-center mb-2">
          {project.title}
        </h3>
        <div className="flex justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-md object-cover max-h-48"
          />
        </div>
        <div className="flex flex-wrap justify-center mt-2">
          {project.categories.map((category, index) => (
            <button
              key={index}
              className="bg-orange text-white text-xs font-semibold rounded-full px-3 py-1 m-1 hover:bg-poppy transition-colors duration-300 cursor-pointer"
              onClick={() => handleFilterCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <p className="text-raisin-black mt-2 text-sm line-clamp-4">{project.summary}</p>
      </div>
      <button
        onClick={handleViewProject}
        className="mt-4 bg-ucla-blue text-white py-2 px-4 rounded-md w-full hover:bg-poppy transition-colors duration-300"
      >
        View Project
      </button>
    </div>
  );
};

export default ProjectCard;
