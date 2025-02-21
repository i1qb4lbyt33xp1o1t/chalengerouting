"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 px-6 md:px-20 shadow-md fixed w-full top-0 z-50">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold">Iqbal's CV</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6">
          <Link href="/cv" className="hover:text-yellow-400">Home</Link>
            <Link href="/about" className="hover:text-yellow-400">About</Link>
            <Link href="/skills" className="hover:text-yellow-400">Skills</Link>
            <Link href="/portfolio" className="hover:text-yellow-400">Portfolio</Link>
            <Link href="/services" className="hover:text-yellow-400">Layanan</Link>
            <Link href="/contact" className="hover:text-yellow-400">Kontak</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden text-white focus:outline-none"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {menuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-gray-800 p-4 flex flex-col items-center">
            <Link href="/about" className="py-2 hover:text-yellow-400" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/skills" className="py-2 hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Skills</Link>
            <Link href="/portfolio" className="py-2 hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Portfolio</Link>
            <Link href="/services" className="py-2 hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Layanan</Link>
            <Link href="/contact" className="py-2 hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Kontak</Link>
          </nav>
        )}
      </header>

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
