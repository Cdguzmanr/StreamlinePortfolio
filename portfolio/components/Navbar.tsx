"use client"
import React, { useState } from "react";
import { navItems } from '@/components/data'
import Link from 'next/link';

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav id="Navbar" className="flex justify-between items-center bg-raisin-black px-6 py-4 lg:py-6 md:px-32 relative z-10">
        {/* Logo */}
        <Link href="/" className="">
          <h1 className="text-2xl rubic-bold text-white tracking-tight">Carlos Guzman</h1>
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item, index) => 
            <Link href={item.href} key={index}>
              <li className="group-hover:font-bold relative text-white">
                {item.label}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
              </li>
            </Link>
            )}
        </ul>
        
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setToggle(!toggle)}
        >
          <span
            className={`w-6 h-1 bg-bone rounded transition-all duration-300 ${
              toggle ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-1 bg-bone rounded transition-all duration-300 ${
              toggle ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-1 bg-bone rounded transition-all duration-300 ${
              toggle ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-gradient-to-b from-raisin-black to-night transition-height duration-300 overflow-hidden ${
          toggle ? "h-[calc(100vh-4rem)]" : "h-0"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8 text-white text-xl">
          {navItems.map((item, index) => 
            <li key={index} className='relative group'>
                <a href={item.href} className='group-hover:font-bold relative'>
                    {item.label}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
                </a>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Header;