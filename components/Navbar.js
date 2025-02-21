"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-400">My Portfolio</h1>

        {/* Navbar Desktop */}
        <div className="hidden md:flex gap-6">
          <Link href="/cv" className="hover:text-yellow-400">Home</Link>
          <Link href="/about" className="hover:text-yellow-400">About</Link>
          <Link href="/skills" className="hover:text-yellow-400">Skills</Link>
          <Link href="/portfolio" className="hover:text-yellow-400">Portfolio</Link>
          <Link href="/services" className="hover:text-yellow-400">Layanan</Link>
          <Link href="/contact" className="hover:text-yellow-400">Kontak</Link>
        </div>

        {/* Navbar Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-yellow-400">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-gray-800 p-4">
          <Link href="/cv" className="p-2 hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="p-2 hover:text-yellow-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/skills" className="p-2 hover:text-yellow-400" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link href="/portfolio" className="p-2 hover:text-yellow-400" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link href="/services" className="p-2 hover:text-yellow-400" onClick={() => setIsOpen(false)}>Layanan</Link>
          <Link href="/contact" className="p-2 hover:text-yellow-400" onClick={() => setIsOpen(false)}>Kontak</Link>
        </div>
      )}
    </nav>
  );
}
