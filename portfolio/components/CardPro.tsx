
import React from 'react';
import { Project } from "@/components/IProject";
import { useRouter } from "next/navigation";
import PlayBtn from './PlayBtn';

interface ProjectCardProps {
    project: Project;
  }

const CardPro: React.FC<ProjectCardProps> = ({ project }) => {
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
    <div className="pt-2 relative flex w-81 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:bg-neutral-100 hover:shadow-lg transition-all duration-300 h-full">
      <img
        src={project.images[0]}
        alt={project.title}
        onClick={handleViewProject}
        className="relative mx-4 -mt-6 h-40 overflow-clip rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r"
      />
      <div className="flex flex-col flex-grow px-6 pt-6 pb-2">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {project.title}
        </h5>
        <div className='pb-2'>
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
        <p className="text-raisin-black font-sans text-base font-light leading-relaxed text-inherit antialiased line-clamp-4">
          {project.summary}
        </p>
      </div>

      <div className="p-6 pt-0 mt-auto flex flex-row gap-4 md:gap-8">
        <button
          onClick={handleViewProject}
          data-ripple-light="true"
          type="button"
          className="select-none rounded-lg bg-ucla-blue py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none duration-300"
        >
          Read More
        </button>  

        {/* Display if there is a game link available */}
        {project.play &&
          <PlayBtn gameLink={project.play} />
        }
          
      </div>
      
    </div>

  );
}

export default CardPro;
