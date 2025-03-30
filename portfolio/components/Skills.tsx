"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiCsharp,
  SiCplusplus,
  SiMicrosoftazure,
  SiJavascript,
  SiPhp,
  SiAndroidstudio,
  SiVisualstudio,
  SiVisualstudiocode,
  SiMicrosoftsqlserver,
  SiAzuredevops,
  SiTailwindcss,
  SiTypescript,
  SiDotnet
} from "react-icons/si";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaBitbucket,
  FaNodeJs,
  FaReact,
  FaUnity,
} from "react-icons/fa6";

const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      skills: [
        { name: "C#", icon: <SiCsharp />, star: true },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Python", icon: <FaPython /> },
        { name: "PHP", icon: <SiPhp /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: ".Net Core", icon: <SiDotnet />, star: true },
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Unity", icon: <FaUnity /> },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Azure DevOps", icon: <SiAzuredevops />, star: true },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Bitbucket", icon: <FaBitbucket /> },
        { name: "Android Studio", icon: <SiAndroidstudio /> },
        { name: "Visual Studio", icon: <SiVisualstudio />, star: true },
        { name: "VS Code", icon: <SiVisualstudiocode />, star: true },
      ],
    },
    {
      category: "Platforms",
      skills: [
        { name: "Microsoft Azure", icon: <SiMicrosoftazure /> },
        { name: "SQL Server", icon: <SiMicrosoftsqlserver /> },
      ],
    },
  ];

  return (
    <section
      className="py-12 bg-bone text-raisin-black transition-colors duration-300"
      id="skills"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-night">
          Skills
        </h2>
        <div className="grid gap-8">
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4 border-b-2 border-poppy">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-6">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className={`relative flex flex-col items-center gap-2 p-4 rounded-lg shadow-md transition-all 
                      ${
                        skill.star
                          ? "premium-card" // premium styling and animation for star skills
                          : "bg-white "
                      }`}
                  >
                    <div className="text-4xl text-ucla-blue">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
