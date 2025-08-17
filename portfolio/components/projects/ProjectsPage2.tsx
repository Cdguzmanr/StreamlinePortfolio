"use client";
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/CardPro";
import { projectsData } from "@/components/data/projectsData";
import { useSearchParams } from "next/navigation";
import { useFilteredProjects } from "@/hooks/useFilteredProjects";
import CategoryFilter from "@/components/projects/CategoryFilter";
import SearchInput from "@/components/projects/SearchInput";

const ProjectsPage: React.FC = () => {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    filterParam ? [filterParam] : []
  );
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (filterParam) {
      setSelectedCategories([filterParam]);
    } else {
      setSelectedCategories([]);
    }
  }, [filterParam]);

  const allCategories = useMemo(() => {
    const categoriesSet = new Set<string>();
    projectsData.forEach((project) =>
      project.categories.forEach((cat) => categoriesSet.add(cat))
    );
    return Array.from(categoriesSet);
  }, []);

  const filteredProjects = useFilteredProjects(
    projectsData,
    selectedCategories,
    searchQuery
  );

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchQuery("");
  };

  return (
    <section className="pt-10 pb-16 bg-bone min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-night mb-8">
          My Projects
        </h1>

        {/* Filter & Search Controls */}
        {/* items-center --> removed */}
        <div className="flex flex-col md:flex-row justify-between mb-8 space-y-4 md:space-y-0"> 
          <CategoryFilter
            allCategories={allCategories}
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
            clearFilters={clearFilters}
          />

          {/* Search Bar */}
          <SearchInput 
              placeholder={"Search projects..."}
              
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
          />
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-11 gap-x-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="min-h-[50vh]"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;
