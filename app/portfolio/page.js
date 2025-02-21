"use client";

import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Cyber Security Dashboard",
    description: "A web-based dashboard for monitoring security vulnerabilities and threats.",
    image: "/portfolio/security-dashboard.jpg",
    github: "https://github.com/iqbal/security-dashboard",
    demo: "https://security-dashboard-demo.vercel.app",
  },
  {
    title: "Student Management System",
    description: "An academic system for managing student records and schedules, built with JavaFX & Oracle.",
    image: "/portfolio/student-management.jpg",
    github: "https://github.com/iqbal/student-management",
    demo: "https://student-management-demo.vercel.app",
  },
  {
    title: "Penetration Testing Toolkit",
    description: "A set of tools for penetration testing, designed for ethical hackers and cybersecurity professionals.",
    image: "/portfolio/pentest-toolkit.jpg",
    github: "https://github.com/iqbal/pentest-toolkit",
    demo: "https://pentest-toolkit-demo.vercel.app",
  },
  {
    title: "Personal Portfolio Website",
    description: "A responsive portfolio website showcasing my skills and projects, built with Next.js.",
    image: "/portfolio/personal-website.jpg",
    github: "https://github.com/iqbal/portfolio",
    demo: "https://iqbal-portfolio.vercel.app",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen p-10 text-white bg-gray-900 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-yellow-400">My Portfolio</h1>
      <p className="mt-4 text-lg text-gray-300 max-w-xl text-center">
        Here are some of my latest projects showcasing my skills in cybersecurity, web development, and software engineering.
      </p>

      {/* Portfolio Grid */}
      <div className="mt-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-yellow-400">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition duration-300"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition duration-300"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
