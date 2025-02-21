"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen p-10 text-white bg-gray-900 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-yellow-400">Contact Me</h1>
      <p className="mt-4 text-lg text-gray-300 max-w-xl text-center">
        If you have any inquiries or collaboration opportunities, feel free to reach out to me!
      </p>

      {/* Contact Info */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
          <FaEnvelope size={30} className="text-yellow-400" />
          <h3 className="text-xl font-semibold text-yellow-400 mt-2">Email</h3>
          <p className="text-gray-300 mt-1">iqbal@example.com</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
          <FaPhone size={30} className="text-yellow-400" />
          <h3 className="text-xl font-semibold text-yellow-400 mt-2">Phone</h3>
          <p className="text-gray-300 mt-1">+62 812 3456 7890</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
          <FaMapMarkerAlt size={30} className="text-yellow-400" />
          <h3 className="text-xl font-semibold text-yellow-400 mt-2">Location</h3>
          <p className="text-gray-300 mt-1">Bandung, Indonesia</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-10 w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-yellow-400 text-center">Send a Message</h2>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 font-semibold p-3 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="mt-10 flex gap-6">
        <a href="https://linkedin.com/in/iqbal" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition duration-300">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/iqbal" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition duration-300">
          <FaGithub size={30} />
        </a>
        <a href="https://twitter.com/iqbal" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition duration-300">
          <FaTwitter size={30} />
        </a>
      </div>
    </div>
  );
}
