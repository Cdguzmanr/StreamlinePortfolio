import React from "react";

const Hero_test2 = () => {
  return (
    <section className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-[500px] h-[500px] rounded-full opacity-50 animate-slow-bounce blur-xl absolute top-10 left-20"></div>
        <div className="bg-gradient-to-r from-purple-600 to-orange-400 w-[400px] h-[400px] rounded-full opacity-50 animate-slow-bounce blur-xl absolute bottom-20 right-10"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="your-profile-picture.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>

        {/* Hero Text */}
        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-800">
          Hi, I'm <span className="text-blue-500">Carlos Guzman</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          A passionate <span className="font-semibold text-purple-500">Software Engineer</span> specializing in 
          <span className="font-semibold text-blue-500"> ASP.NET Core</span>, 
          <span className="font-semibold text-green-500"> C#</span>, and modern web technologies. 
          I also have experience in <span className="font-semibold text-orange-500">Unity 3D</span>, 
          <span className="font-semibold text-red-500">UX Design</span>, and <span className="font-semibold text-pink-500">Communications</span>.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-lg hover:bg-gray-300 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero_test2;
