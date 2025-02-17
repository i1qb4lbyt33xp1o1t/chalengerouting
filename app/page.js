import Image from 'next/image';
import { FaCode, FaShieldAlt, FaDatabase, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-10">
      {/* About Section */}
      <section className="text-center">
        <Image src="/profile.jpg" width={150} height={150} alt="Profile Picture" className="rounded-full mx-auto" />
        <h1 className="text-3xl font-bold mt-4">Muhammad Iqbal</h1>
        <p className="text-lg text-gray-400">Cyber Security Enthusiast | Software Developer</p>
      </section>

      {/* Skills Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold border-b pb-2">Skills</h2>
        <ul className="mt-4 space-y-2">
          <li>- Penetration Testing (Red Team)</li>
          <li>- Java & PL/SQL Development</li>
          <li>- Next.js & React</li>
        </ul>
      </section>

      {/* Services Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold border-b pb-2">Services</h2>
        <div className="flex flex-wrap gap-4 mt-4">
          <div className="bg-gray-800 p-4 rounded-lg w-full md:w-1/3 flex items-center gap-3">
            <FaCode className="text-yellow-400" /> Web Development
          </div>
          <div className="bg-gray-800 p-4 rounded-lg w-full md:w-1/3 flex items-center gap-3">
            <FaShieldAlt className="text-red-400" /> Cybersecurity Testing
          </div>
          <div className="bg-gray-800 p-4 rounded-lg w-full md:w-1/3 flex items-center gap-3">
            <FaDatabase className="text-blue-400" /> Database Management
          </div>
        </div>
      </section>

      {/* Portfolios Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold border-b pb-2">Portfolios</h2>
        <ul className="mt-4 space-y-2">
          <li>- SIAKAD Security Enhancement (JavaFX & PL/SQL)</li>
          <li>- CBT System with Verification (PHP & MySQL)</li>
          <li>- Business Financial System (JavaFX & Oracle)</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold border-b pb-2">Contact</h2>
        <p className="mt-4 flex items-center gap-2"><FaEnvelope className="text-green-400" /> iqbal@example.com</p>
      </section>
    </div>
  );
}
