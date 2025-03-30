"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Import your images here
// import noImage from "@public/image/noImage.jpg";
// import profilePic from "public/images/chicagoSelfie.jpg";
// import codingPic from "public/images/noImage.jpg";
// import teamworkPic from "public/images/bizSquadMeeting.png";

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, 10, 0], // Moves up and down slightly
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-16 bg-bone">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Floating Images */}
        <div className="relative flex-1 hidden md:block">
          <motion.div className="absolute top-0 left-0" {...floatingAnimation}>
            <Image
              src="/images/noImage.jpg"
              alt="Carlos Guzman"
              width={180}
              height={180}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div className="absolute top-32 left-20" {...floatingAnimation}>
            <Image
              src="/images/noImage.jpg"
              alt="Coding"
              width={160}
              height={160}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div className="absolute top-64 left-10" {...floatingAnimation}>
            <Image
              src="/images/noImage.jpg"
              alt="Teamwork"
              width={140}
              height={140}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>

        {/* Right Side - Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold text-night mb-6">
            Hey, I'm Carlos Guzman! 👋
          </h2>
          <p className="text-lg text-raisin-black leading-relaxed mb-6">
            I'm a Costa Rican software developer passionate about building meaningful tech solutions. My journey started as a teenager, fascinated by code, and led me to the U.S. on a **fully funded scholarship** to pursue my **Software Development degree**.
          </p>
          <p className="text-lg text-raisin-black leading-relaxed mb-6">
            Now, I work as an **Operations Engineer**, tackling **full-stack development** challenges while completing my **Bachelor's in Computer Science** at **UW-Green Bay**. My goal? Specializing in **Machine Learning & Computer Vision** to create assistive technologies that truly impact lives.
          </p>
          <p className="text-lg text-raisin-black leading-relaxed mb-6">
            I'm always up for new challenges, collaborations, and tech discussions. Let's connect!
          </p>

          {/* Call to Action */}
          <div className="mt-8">
            <a
              href="/contact"
              className="bg-poppy text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-orange transition-all duration-300 shadow-md"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
