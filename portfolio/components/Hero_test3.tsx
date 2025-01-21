import React from "react";

const Hero_test3 = () => {
  return (
    <div className="bg-night text-bone h-screen flex flex-col items-center justify-center relative">
      {/* Background Animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-64 h-64 bg-ucla-blue opacity-50 rounded-full absolute -top-20 -left-16 animate-pulse" />
        <div className="w-48 h-48 bg-orange opacity-50 rounded-full absolute top-10 right-10 animate-ping" />
        <div className="w-56 h-56 bg-poppy opacity-30 rounded-full absolute bottom-10 left-32 animate-bounce" />
      </div>

      {/* Content */}
      <div className="z-10 text-center">
        <h1 className="text-5xl lg:text-8xl font-extrabold text-bone drop-shadow-lg mb-6">
          Welcome to My World
        </h1>
        <p className="text-lg lg:text-2xl text-bone/90 max-w-3xl mx-auto mb-8">
          Hi, I'm <span className="text-ucla-blue font-semibold">Carlos Guzman</span>, a passionate Software Developer with expertise in <span className="text-poppy">ASP.Net Core</span>, <span className="text-orange">C#</span>, and more. Let's explore what we can build together!
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#Profile"
            className="px-6 py-3 bg-poppy text-bone rounded-full font-semibold shadow-lg hover:bg-poppy/90 transform transition-transform duration-300 hover:scale-105"
          >
            Learn More About Me
          </a>
          <a
            href="#Projects"
            className="px-6 py-3 bg-ucla-blue text-bone rounded-full font-semibold shadow-lg hover:bg-ucla-blue/90 transform transition-transform duration-300 hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </div>

      {/* Animated Icons */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-8 z-10">
        <div className="w-10 h-10 bg-bone rounded-full shadow-lg animate-spin" />
        <div className="w-10 h-10 bg-bone rounded-full shadow-lg animate-pulse" />
        <div className="w-10 h-10 bg-bone rounded-full shadow-lg animate-bounce" />
      </div>
    </div>
  );
};

export default Hero_test3;
