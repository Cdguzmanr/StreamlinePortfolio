"use client"
import React from "react";
import Link from 'next/link';
import Image from "next/image";
import Profile from "@/HeroProfileTransparent.png";

const Hero = () => {
  return (
    <section className="relative bg-bone min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:px-12 text-center md:text-start z-10">
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
        <div className="md:w-2/3 absolute mt-10 md:mt-0 justify-end flex md:ml-64">
          <Image src="/images/HeroProfileTransparent.png" alt="profile picture" className='object-cover' width={800} height={800} />
        </div>

      </div>
    </section>
        
      

  );
};

export default Hero;
