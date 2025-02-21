"use client";

import { FaShieldAlt, FaLaptopCode, FaDatabase, FaBug, FaChalkboardTeacher, FaToolbox } from "react-icons/fa";

const services = [
  {
    title: "Cyber Security & Penetration Testing",
    description: "Comprehensive security assessments, penetration testing, and vulnerability analysis to protect your systems.",
    icon: <FaShieldAlt size={40} className="text-yellow-400" />,
  },
  {
    title: "Full Stack Web Development",
    description: "Building responsive and scalable web applications using modern technologies like Next.js and Tailwind CSS.",
    icon: <FaLaptopCode size={40} className="text-yellow-400" />,
  },
  {
    title: "Database Management & Optimization",
    description: "Designing, optimizing, and securing databases using MySQL, PostgreSQL, and Oracle PL/SQL.",
    icon: <FaDatabase size={40} className="text-yellow-400" />,
  },
  {
    title: "Software Development & Automation",
    description: "Creating efficient and robust software solutions using Java, Python, and C++.",
    icon: <FaToolbox size={40} className="text-yellow-400" />,
  },
  {
    title: "Bug Bounty & Ethical Hacking",
    description: "Finding and reporting security vulnerabilities in web applications, APIs, and networks.",
    icon: <FaBug size={40} className="text-yellow-400" />,
  },
  {
    title: "Cybersecurity Training & Consulting",
    description: "Providing training sessions and consultations on cybersecurity best practices and threat mitigation.",
    icon: <FaChalkboardTeacher size={40} className="text-yellow-400" />,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen p-10 text-white bg-gray-900 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-yellow-400">My Services</h1>
      <p className="mt-4 text-lg text-gray-300 max-w-xl text-center">
        Here are the professional services I offer to help businesses and individuals improve their security and development processes.
      </p>

      {/* Services Grid */}
      <div className="mt-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            {service.icon}
            <h3 className="text-xl font-semibold text-yellow-400 mt-4">{service.title}</h3>
            <p className="text-gray-300 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
