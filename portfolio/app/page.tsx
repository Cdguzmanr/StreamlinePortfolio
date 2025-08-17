import Image from "next/image";
import Home from '@/components/Home';
import Hero from "@/components/Hero"
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default function Page() {
  return (
    <div>
      <Hero/>
      <Profile/>
      <Skills/>
      <ProjectsSection/>
      
    </div>
  );
}