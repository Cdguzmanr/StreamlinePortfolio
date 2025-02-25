"use client"
import React from "react";
import Particles from "@tsparticles/react";

const ParticlesBackground: React.FC = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: "#F9F6EE" },
        particles: {
          number: { value: 80 },
          links: { enable: true, color: "#DB2B39" },
          move: { enable: true, speed: 1 },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;
