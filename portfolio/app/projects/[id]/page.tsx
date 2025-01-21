'use client'
import { useParams } from 'next/navigation';
import { projectsData } from '../../../components/data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams(); // Retrieve dynamic route parameter
  const project = projectsData.find((p) => p.title.toLowerCase().replace(/\s+/g, '-') === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="p-8 bg-bone min-h-screen">
      <h1 className="text-4xl text-night font-bold">{project.title}</h1>
      <p className="text-ucla-blue mt-4">{project.categories}</p>
      <img src={project.image} alt={project.title} className="w-full h-auto mt-4" />
      <p className="text-raisin-black mt-8">{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-poppy underline mt-4 block">
        View on GitHub
      </a>
      <iframe
        src={project.video}
        className="w-full h-64 mt-8"
        title={`${project.title} Video`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ProjectDetail;
