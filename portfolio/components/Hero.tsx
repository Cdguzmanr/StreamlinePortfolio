import React from "react";
import Link from 'next/link';


const Hero = () => {
  return (
    <section className="relative bg-bone overflow-hidden min-h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-16 md:px-12 text-center md:text-start">
        {/* Text Content */}
        <div className="md:w-3/4 text-black">
          <h1 className="text-2xl md:text-4xl font-bold">
            Hi, I'm <span className="text-poppy">Carlos Guzman</span>,
          </h1>
          <p className="text-5xl md:text-8xl font-bold my-2 md:my-8 ">
            <span className="text-black">Full Stack</span> <br />
            <span className="outlined-text">Software Engineer</span>
          </p>

          {/* Buttons */ }
          <div className="mt-6 flex space-x-4 justify-center md:justify-normal">

            <Link href="/projects" className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800">
              View My Work
            </Link>

            <Link href="/contact" className="px-6 py-3 bg-white border border-gray-300 text-gray-800 font-semibold rounded-md hover:border-gray-500">
              Get in Touch
            </Link>
            
          </div>

        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 relative">
          <div className="rounded-full p-6 md:p-10 relative">
            <img
              src="/images/profile_transparent.png"
              alt="Carlos Guzman"
              className="rounded-lg "
            />
          </div>
        </div>

      </div>
    </section>
        
      

  );
};

export default Hero;
