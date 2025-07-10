import React from 'react'
import { FaCog } from "react-icons/fa";

const NoLink: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-300">
        <div className="text-center px-4">
        {/* Rotating Gear Icon */}
        <div className="flex justify-center mb-6">
            <FaCog className="text-6xl text-orange animate-spin" />
        </div>
        {/* Main Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-raisin-black">
            Coming Soon!
        </h1>
        <p className="mt-4 text-lg md:text-xl text-raisin-black">
            I'm busy building something amazing. Please check back later.
        </p>
        </div>
    </div>
  );
};

export default NoLink