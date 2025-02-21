"use client";

import { FaCode, FaDatabase, FaShieldAlt, FaUsers, FaLightbulb, FaProjectDiagram } from "react-icons/fa";

export default function Skills() {
  return (
    <div className="min-h-screen p-10 text-white bg-gray-900 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-yellow-400">My Skills</h1>
      <p className="mt-4 text-lg text-gray-300 max-w-xl text-center">
        Here are some of the technical and soft skills that I have developed over the years.
      </p>

      {/* Technical Skills */}
      <div className="mt-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
          <FaCode size={40} className="text-yellow-400" />
          <h3 className="text-xl font-semibold text-yellow-400 mt-2">Web Development</h3>
          <p className="text-gray-300 text-center mt-1">Next.js, React.js, JavaScript, HTML, CSS, Tailwind CSS</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
          <FaDatabase size={40} className="text-yellow-400" />
          <h3 className="text-xl font-semibold text-yellow-400 mt-2">Database Management</h3>
          <p className="text-gray-300 text-center mt-1">MySQL, PostgreSQL, Oracle Database, PL/SQL</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
          <FaShieldAlt size={40} className="text-yellow-400" />
          <h3 className="text-xl font-semibold text-yellow-400 mt-2">Cyber Security</h3>
          <p className="text-gray-300 text-center mt-1">Penetration Testing, Red Teaming, Web Security, CTF</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
          <FaProjectDiagram size={40} className="text-yellow-400" />
          <h3 className="text-xl font-semibold text-yellow-400 mt-2">Software Development</h3>
          <p className="text-gray-300 text-center mt-1">JavaFX, Python, C++, System Architecture</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
          <FaLightbulb size={40} className="text-yellow-400" />
          <h3 className="text-xl font-semibold text-yellow-400 mt-2">Problem Solving</h3>
          <p className="text-gray-300 text-center mt-1">Critical Thinking, Algorithm Optimization, Debugging</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
          <FaUsers size={40} className="text-yellow-400" />
          <h3 className="text-xl font-semibold text-yellow-400 mt-2">Collaboration</h3>
          <p className="text-gray-300 text-center mt-1">Teamwork, Communication, Leadership, Agile Methodologies</p>
        </div>
      </div>
    </div>
  );
}
