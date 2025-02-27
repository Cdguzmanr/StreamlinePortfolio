"use client"
import React, { useState, useEffect } from "react";
import { navItems } from '@/components/data/constants'
import Link from 'next/link';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Resume } from "./data/constants";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  // Disable body scroll when toggle is true
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [toggle]);

  return (
    <nav id="Navbar" className="">
      {/* Navbar */}
      <div className="flex relative justify-between items-center bg-raisin-black px-6 py-4 lg:py-6 md:px-32  z-50">
        {/* Logo */}
        <Link href="/" onClick={() => setToggle(false)}>
          <h1 className="text-2xl rubic-bold text-white tracking-tight">
            Carlos Guzman
          </h1>
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <Link href={item.href} key={index}>
              <li className="group-hover:font-bold relative text-white">
                {item.label}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
              </li>
            </Link>
          ))}
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
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0  left-0 w-full h-screen bg-gradient-to-b from-raisin-black to-night z-40 flex flex-col items-center justify-center transition-transform duration-300 ${
          toggle ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col py-aut items-center justify-center space-y-8 text-white text-2xl">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link href={item.href} className="group-hover:font-bold relative" onClick={() => setToggle(false)}>
                {item.label}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Divider & Mini Menu */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-3/4 flex flex-col items-center bottom-[11vh]" >
          <hr className="border-gray-500 my-6 w-full" />
          <div className="flex items-center justify-center space-x-6">
            <a
              href={Resume}
              target="_blank"
              className="bg-ucla-blue text-lg text-white py-2 px-4 rounded hover:scale-105 transition"
            >
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/carlosd-guzman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:scale-125 transition"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/Cdguzmanr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:scale-125 transition"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
