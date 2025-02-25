"use client";
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import ProjectCard from "@/components/ProjectCard";
import ProjectCard from "@/components/CardPro";
import { projectsData } from "@/components/data/projectsData";
import { useSearchParams } from "next/navigation";

const ProjectsPage: React.FC = () => {
  // Get the filter query from the URL
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");

  // Initialize state for selected categories.
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    filterParam ? [filterParam] : []
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Update selectedCategories when the query parameter changes.
  useEffect(() => {
    if (filterParam) {
      setSelectedCategories([filterParam]);
    } else {
      setSelectedCategories([]);
    }
  }, [filterParam]);

  // Derive the list of unique categories from projectsData.
  const allCategories = useMemo(() => {
    const categoriesSet = new Set<string>();
    projectsData.forEach((project) =>
      project.categories.forEach((cat) => categoriesSet.add(cat))
    );
    return Array.from(categoriesSet);
  }, []);

  // Filter projects based on selected categories and search query.
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        project.categories.some((cat) =>
          selectedCategories.includes(cat)
        );
      const matchesSearch = project.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategories, searchQuery]);

  // Toggle category selection.
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Clear all filters.
  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchQuery("");
  };

  return (
    <section className="py-16 bg-bone min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-night mb-8">
          My Projects
        </h1>

        {/* Filter & Search Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {allCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => toggleCategory(category)}
                className={`px-4 py-2 rounded-full border font-semibold transition-colors duration-300 ${
                  selectedCategories.includes(category)
                    ? "bg-poppy text-white border-poppy"
                    : "bg-white text-raisin-black border-gray-300 hover:bg-orange hover:border-orange"
                }`}
              >
                {category}
              </button>
            ))}
            {selectedCategories.length > 0 && (
              <button
                onClick={clearFilters}
                className="px-4 py-2 rounded-full border font-semibold bg-gray-200 text-raisin-black border-gray-300 hover:bg-gray-300 transition-colors duration-300"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-auto">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-ucla-blue"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
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
