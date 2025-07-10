import React from "react";
// import ProjectCard from "./ProjectCard";
import ProjectCard from "./CardPro";
import { Project } from "./IProject";

// Import a carousel library, such as react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProjectsCarouselProps {
  projects: Project[];
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // Autoplay
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {projects.map((project) => (
        // The Card has a max limit of 4 lines of text for the description, which fits perfectly in 455 pixels
        <div key={project.id} className="px-3 py-4 h-[455px]"> 
          <ProjectCard project={project} />
        </div>
      ))}
    </Slider>
  );
};

export default ProjectsCarousel;
