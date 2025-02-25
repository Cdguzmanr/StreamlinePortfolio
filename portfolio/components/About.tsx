"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { biographySections } from "@/components/data/aboutData";

const AboutPage: React.FC = () => {
  // Track the active section (year) for the timeline
  const [activeYear, setActiveYear] = useState<string | null>(null);
  // Object to store refs for each biography section
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveYear(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe each section
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll smoothly to a section when its timeline item is clicked
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative bg-bone min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Use a grid: single column on mobile; on md+ show timeline on right */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Biography Content */}
          <div className="md:col-span-3">
            {biographySections.map((section) => (
              <div
                key={section.year} //(el) => (sectionRefs.current[section.year] = el)
                id={section.year}
                
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-night mb-4">{section.year}</h2>
                <p className="text-raisin-black text-lg leading-relaxed mb-6">
                  {section.text}
                </p>
                {section.images && section.images.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {section.images.map((img, idx) => (
                      <motion.img
                        key={idx}
                        src={img}
                        alt={`Image for ${section.year}`}
                        className="rounded-lg shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Timeline Sidebar (Desktop Only) */}
          <div className="hidden md:block sticky top-20">
            <ul className="space-y-4">
              {biographySections.map((section) => (
                <li key={section.year}>
                  <button
                    onClick={() => scrollToSection(section.year)}
                    className={`transition-all duration-300 text-sm md:text-base ${
                      activeYear === section.year
                        ? "text-ucla-blue font-bold scale-110"
                        : "text-raisin-black opacity-75 hover:opacity-100"
                    }`}
                  >
                    {section.year}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Optional Floating Background Images */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* You could render floating images here if desired */}
      </motion.div>
    </div>
  );
};

export default AboutPage;
