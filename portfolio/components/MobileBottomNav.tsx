// Bottom nav menu for the Blog Section of the About page.
"use client";
import React from "react";
import { FaBookReader } from "react-icons/fa";

interface MobileBottomNavProps {
  visibleBlogs: { id: number; short: string }[];
  activeBlog: number | null;
  scrollToBlog: (id: number) => void;
}

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ visibleBlogs, activeBlog, scrollToBlog }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t z-50">
      <div className="overflow-x-auto whitespace-nowrap py-2">
        {visibleBlogs.map((blog) => (
          <button
            key={blog.id}
            onClick={() => scrollToBlog(blog.id)}
            className={`inline-block px-4 py-2 mx-1 rounded transition-all duration-200 ${
              activeBlog === blog.id
                ? "bg-ucla-blue text-white font-bold scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <div className="flex items-center space-x-1">
              <FaBookReader className="w-4 h-4" />
              <span className="line-clamp-1 text-sm">{blog.short}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileBottomNav;
