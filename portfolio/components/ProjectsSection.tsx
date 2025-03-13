"use client";
import React from "react";
import ProjectsCarousel from "./ProjectsCarousel";
import { projectsData } from "./data/projectsData";

const ProjectsSection: React.FC = () => {
  // Filter featured projects
  const featuredProjects = projectsData.filter(project => project.featured);

  return (
    <section id="projects" className="py-16 bg-bone">
      <div className="max-w-6xl mx-auto px-6 h-full">
        <h2 className="text-3xl font-bold text-center text-night mb-8">
          Featured Work
        </h2>
        <ProjectsCarousel projects={featuredProjects} />
        <div className="text-center mt-8">
          <p className="text-raisin-black text-lg mb-4">
            Like what you see? Explore all my projects and discover more of my work.
          </p>
          <button
            onClick={() => window.location.href = "/projects"}
            className="bg-poppy text-white py-3 px-6 rounded-md hover:bg-orange transition-colors duration-300"
          >
            See All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
