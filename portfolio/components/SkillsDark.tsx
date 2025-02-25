"use client"
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
        { name: "C#", icon: <SiCsharp /> },
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
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Unity", icon: <FaUnity /> },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Bitbucket", icon: <FaBitbucket /> },
        { name: "Azure DevOps", icon: <SiAzuredevops /> },
        { name: "Android Studio", icon: <SiAndroidstudio /> },
        { name: "Visual Studio", icon: <SiVisualstudio /> },
        { name: "VS Code", icon: <SiVisualstudiocode /> },
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
      className="py-12 bg-bone text-raisin-black dark:bg-gray-900 dark:text-white transition-colors duration-300"
      //className="py-12 bg-bone text-raisin-black transition-colors duration-300"
      id="skills"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-night dark:text-teal-400">
        {/* <h2 className="text-4xl font-bold text-center mb-8 text-night">   */}
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
              <h3 className="text-2xl font-semibold mb-4 border-b-2 border-poppy dark:border-teal-500">
              {/* <h3 className="text-2xl font-semibold mb-4 border-b-2 border-poppy"> */}
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-6">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center gap-2 p-4 bg-white text-raisin-black rounded-lg shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-white hover:bg-orange hover:text-white transition-all"
                    // className="flex flex-col items-center gap-2 p-4 bg-white text-raisin-black rounded-lg shadow-md hover:shadow-lg hover:bg-orange hover:text-white transition-all"
                  >
                    <div className="text-4xl text-ucla-blue dark:text-teal-400">
                    {/* <div className="text-4xl text-ucla-blue "> */}
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