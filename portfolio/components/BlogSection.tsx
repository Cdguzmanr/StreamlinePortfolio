"use client";

import React, { useRef, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { blogsData } from "./data/blogsData";
import ImageCarousel from "./ImageCarousel";
// Icons import
import { FaBookReader } from "react-icons/fa";


const BlogSection: React.FC = () => {
  // Filter visible blogs
  const visibleBlogs = blogsData.filter((blog) => blog.display);

  // Ref for each blog element
  const blogRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const [activeBlog, setActiveBlog] = useState<number | null>(null);

  // Ref for the sidebar menu element (for sticky behavior)
  const sidebarRef = useRef<HTMLDivElement>(null);
  // Reset activeBlog if it's not visible anymore.
  useEffect(() => {
    if (visibleBlogs.length > 0 && !visibleBlogs.some((blog) => blog.id === activeBlog)) {
      setActiveBlog(visibleBlogs[0].id);
    }
  }, [visibleBlogs, activeBlog]);

  // Smooth scroll to blog section
  const scrollToBlog = (id: number) => {
    const element = blogRefs.current[id];
    if (element) {
      const offset = 80; // adjust for sticky header if needed
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
  
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  

  return (
    <div className="pb-12 bg-bone text-night">
      <div className="max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto px-3 md:flex md:flex-row">
        
        {/* Sidebar Section */}
        <section className="w-full mb-6">
          <div
            ref={sidebarRef}
            className={`bg-white rounded-lg border md:sticky md:top-3 md:max-h-screen md:overflow-y-auto`}
          >
            <p className="px-6 py-4 font-bold">Story List</p>
            <hr />
            <nav>
              <ul>
                {visibleBlogs.map((blog) => (
                  <li key={blog.id}>
                    <button
                      onClick={() => scrollToBlog(blog.id)}
                      className={`w-full text-left text-[#6a6a6a] px-4 py-2 transition-all duration-100 flex items-center hover:bg-[#f3f3f3]`}
                    >
                      <span className="w-6 h-6 mr-1">
                        <FaBookReader />
                      </span>
                      <span className="line-clamp-1 text-lg">{blog.short}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>


        {/* Stories Body Section */}
        <section className="max-w-3xl md:max-w-3xl md:flex md:flex-row mb-6 md:ml-3"> 
          
          {/* Main container */}
          <div className="bg-white rounded-lg border">
            <h3 className="px-3 py-2 mt-2 text-center text-xl font-bold"> My Stories</h3>
            
            <div className="mx-3 mb-4 px-3 py-2">

              {/* Dinamically Generate each story */}
              {visibleBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    ref={(el) => {
                      blogRefs.current[blog.id] = el;
                    }}
                    data-blog-id={blog.id}
                    className="rounded-lg px-3 py-4 border mb-4"
                  >

                  <h3 className="text-lg font-bold text-night mb-4">
                    {blog.title}
                  </h3>

                  {/* Display Images in a carousel, if available */}
                  {blog.images && blog.images.length > 0 && (
                    <div className="max-w-2xl max-h-96 mx-auto px-6 mb-10">
                      <ImageCarousel imagesUrl={blog.images} />
                    </div>
                  )}

                  {/* Story Body */}
                  <div className="mb-2 space-y-4 text-raisin-black text-md md:text-lg leading-relaxed">
                    <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                      {blog.body} 
                    </ReactMarkdown>
                  </div>
                  
                  {/* Links Section */}
                  {blog.links && blog.links.length > 0 && (
                    <div className="my-4 pt-4 space-y-2">
                      <h3 className="font-bold text-lg">Related Links</h3>
                      {blog.links.map((link, idx) => (
                        <div key={idx}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 p-2 border rounded hover:bg-[#f3f3f3] transition-colors duration-300"
                          >
                            {link.image && (
                              <img
                                src={link.image}
                                alt={link.title}
                                className="w-24 h-16 object-contain rounded"
                              />
                            )}
                            <div className="flex flex-col">
                              <span className="text-night text-sm font-semibold">{link.title}</span>
                              <span className="text-gray-400 text-xs">{new URL(link.url).hostname.replace(/^www\./, '')}</span>
                            </div>
                              
                          </a>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogSection;
