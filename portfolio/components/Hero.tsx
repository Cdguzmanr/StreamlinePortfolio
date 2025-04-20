"use client"
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { scrollToElement } from "@/components/utils/scrollToElement"; // adjust path as needed


const Hero = () => {
  return (
    <section className="relative bg-bone min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-night to-bone opacity-10"></div>
      <div className="absolute top-0 left-0 w-48 h-48 bg-poppy opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-ucla-blue opacity-30 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center text-center md:text-start px-6 md:px-12 py-16">
        
        {/* Text Content */}
        <motion.div 
          className="md:w-3/4 text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Hi, I'm <span className="text-poppy">Carlos Guzman</span>,
          </h1>
          
          <p className="text-5xl md:text-8xl font-bold mt-2 md:mt-6 leading-none">
            <span className="text-black">Full Stack</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-poppy to-orange">
              Software Engineer
            </span>
          </p>

          {/* Buttons */}
          <div className="mt-8 flex space-x-4 justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/projects">
                <button className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-all">
                  View My Work
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              {/* Scroll to id='Footer' */}
              <button
                 onClick={() => scrollToElement("footer")}
                className="px-6 py-3 bg-white border border-gray-300 text-gray-800 font-semibold rounded-md hover:border-gray-500 transition-all"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
