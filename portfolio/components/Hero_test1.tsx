import React from "react";

const Hero_test1 = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-16 px-6 md:px-12">
        
        {/* Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-10xl font-bold text-gray-900">
            Hi, I'm <span className="text-orange-500">Misbah Ahmed</span>, a freelance
          </h1>
          <p className="text-4xl md:text-6xl font-bold text-gray-900 mt-2">
            <span className="text-black">UI/UX Designer</span>
            &amp;{" "}
            <span className="text-orange-500">Front-End Developer</span>
          </p>
          
          
          <div className="mt-6 flex space-x-4">
            <button className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800">
              Start a project
            </button>
            <button className="px-6 py-3 bg-white border border-gray-300 text-gray-800 font-semibold rounded-md hover:border-gray-500">
              See my work
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 relative">
          <div className="rounded-full bg-orange-100 p-6 md:p-10 relative">
            <img
              src="/images/profile_transparent.png"
              alt="Misbah Ahmed"
              className="rounded-lg "
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero_test1;
