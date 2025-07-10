"use client";
import React from "react";
import { useParams } from "next/navigation";
import { projectsData } from "@/components/data/projectsData";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import PageLoad from "@/app/template";
import ImageCarousel from "@/components/ImageCarousel";

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
  <PageLoad>

    <div className="pt-3 md:pt-6 bg-bone text-night">
      <div className="max-w-3xl mx-auto px-3 md:px-0 md:flex md:flex-row">
          
        {/* Introduction */}
        <section className="pb-6 md:mx-3 "> 
            <div className="bg-white rounded-lg border">            
                <div className="mx-3 px-3 py-2 md:p-6 mt-2">
                    <div className="border-[#e8e8e8] rounded-lg px-3 py-4 border mb-4">                   
                        <h1 className="px-3 mt-2 text-center text-2xl lg:text-3xl font-bold">{project.title}</h1>
                        {/* <h3 className='text-lg md:text-xl mb-3'><strong>Hello World!</strong> 👋🏻</h3> */}
                        <div className='text-md md:text-lg leading-relaxed py-3 md:py-6'> 
                          {/* Body */}


                          {/* Categories as Badges */}
                          <div className="flex justify-center space-x-3 my-8">
                            {project.categories.map((cat, index) => (
                              <span
                                key={index}
                                className="bg-ucla-blue text-white px-4 py-2 rounded-full text-xs md:text-sm"
                              >
                                {cat}
                              </span>
                            ))}
                          </div>

                          {/* Project Image */}
                          <div className="mb-8 lg:max-w-2xl mx-auto">

                            {/* Display Images in a carousel, if available */}
                            {project.images.length > 1 ? (
                              <div className="max-w-2xl max-h-96 mx-auto px-6 mb-10">
                                <ImageCarousel imagesUrl={project.images} />
                              </div>
                            ) : (
                              <div className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                src={project.images[0]}
                                alt={project.title}
                                className="w-full h-auto object-cover"
                                />
                              </div>
                            )}
                          </div>

                          {/* Project Description */}
                          <div className="markdown mb-16 space-y-4 text-raisin-black text-md md:text-lg leading-relaxed list-decimal">
                            <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                              {project.description}
                            </ReactMarkdown>
                          </div>

                          {/* Responsive Video Container */}
                          <div className="mb-8 mx-auto lg:max-w-2xl">
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
                              className="inline-block bg-poppy text-white px-6 py-3 rounded-md hover:bg-orange transition-colors duration-300 text-base md:text-lg"
                              
                            >
                              View Source
                            </a>
                          </div>

                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </div>

  </PageLoad>
  );
};

export default ProjectDetail;
