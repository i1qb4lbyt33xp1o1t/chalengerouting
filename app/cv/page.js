"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <Image 
          src="/profile.jpg" 
          alt="Profile Picture" 
          width={150} 
          height={150} 
          className="rounded-full border-4 border-yellow-400 shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mt-4">
          Iqbal
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-gray-300">
          Cyber Security Enthusiast | Full Stack Developer
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl">
          I am passionate about cybersecurity, web development, and system security. 
          I love creating secure and scalable applications with cutting-edge technology.
        </p>
        <Link href="#contact">
          <button className="mt-6 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-md hover:bg-yellow-500 transition duration-300">
            Contact Me
          </button>
        </Link>
      </section>
    </div>
  );
}
