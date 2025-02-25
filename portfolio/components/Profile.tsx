import React from 'react'
import Image from "next/image";
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import { Resume } from "./data/constants";

const Profile = () => {
  return (
    <div className='relative h-auto md:h-screen max-w-full lg:h-3/4 lg:pb-10 bg-bone'>
    
    {/* Profile Card */}
    <div id='Profile' className="relative bg-gradient-to-b from-raisin-black to-night bg-clip-padding backdrop-filter border text-white flex flex-col items-center justify-center p-6 md:flex-row md:items-start md:p-20 shadow-2xl rounded-xl mx-4 md:mx-10 py-24 md:py-20">
      
      <div className="relative rounded-full w-32 h-32 md:w-80 md:h-80 overflow-hidden">
        <Image src="/images/profile-square.jpg" alt="profile picture" className='object-cover' fill />
      </div>

      <div className="mt-10 md:mt-0 md:ml-10 text-center md:text-left flex flex-col items-center md:items-start">
        <h2 className="text-3xl md:py-2 md:text-5xl font-semibold">
          Carlos Guzman
        </h2>
        <h3 className="text-xl py-2 md:text-2xl">Software Developer</h3>

        <p id='profilecard' className="text-md py-5 leading-8 text-white md:text-lg max-w-xl">
          I am passionate about technoloy and nature but my true love is the piano 🎹
          My technical strenghts are <strong>ASP.Net core</strong> and <strong>C#</strong> development, although I have broad skills in different areas like <strong>Unity 3D</strong> development, <strong>UX Design</strong>, and <strong>Communcations</strong>. 

        </p>

        <div className="text-3xl flex flex-col md:flex-row gap-8 py-3 items-center">
          <a href={Resume} target="_blank" className="bg-ucla-blue text-lg text-white py-2 px-4 rounded hover:scale-105">
            Download Resume
          </a>
          
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/carlosd-guzman/" target="_blank" rel="noopener noreferrer" className='hover:scale-125'>
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/Cdguzmanr" target="_blank" rel="noopener noreferrer" className='hover:scale-125'>
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile