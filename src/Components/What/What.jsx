import React from "react";
import { Link } from "react-router-dom";

export default function What() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="py-20 text-center">
        <h1 className="text-4xl font-semibold text-orange-500">What I Did?</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Here's a glimpse of the projects I've worked on, using the latest technologies to build modern, responsive, and user-friendly applications.
        </p>
      </section>

      {/* Projects */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-6">
        {/* Todo App */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img src="/todo-app.jpg" alt="Todo App" className="w-full h-48 object-cover rounded-lg" />
          <h3 className="text-xl font-semibold mt-4">Todo App</h3>
          <p className="mt-2 text-lg">A task management app built with React, Redux Toolkit for state management, and Vite as the bundler.</p>
          <a href="/todo" className="text-orange-400 mt-2 inline-block">View Project</a>
        </div>

        {/* Blog Application */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img src="/blog-app.jpg" alt="Blog Application" className="w-full h-48 object-cover rounded-lg" />
          <h3 className="text-xl font-semibold mt-4">Blog Application</h3>
          <p className="mt-2 text-lg">A full-stack blog application built with React, Appwrite backend, and React Hook Form for efficient form handling.</p>
          <a href="/blog" className="text-orange-400 mt-2 inline-block">View Project</a>
        </div>

        {/* PG Management System */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img src="/pg-management.jpg" alt="PG Management System" className="w-full h-48 object-cover rounded-lg" />
          <h3 className="text-xl font-semibold mt-4">PG Management System</h3>
          <p className="mt-2 text-lg">A management system for paying guest accommodations, built with the MERN stack and offering features for room and student management.</p>
          <a href="/pg-management" className="text-orange-400 mt-2 inline-block">View Project</a>
        </div>

        {/* GCS Website */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img src="/gcs-website.jpg" alt="GCS Website" className="w-full h-48 object-cover rounded-lg" />
          <h3 className="text-xl font-semibold mt-4">GCS Website</h3>
          <p className="mt-2 text-lg">A professional website for the GCS agency, showcasing services for creating websites and applications using the latest technologies.</p>
          <a href="/gcs-website" className="text-orange-400 mt-2 inline-block">View Project</a>
        </div>

        {/* Password Generator */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img src="/password-generator.jpg" alt="Password Generator" className="w-full h-48 object-cover rounded-lg" />
          <h3 className="text-xl font-semibold mt-4">Password Generator</h3>
          <p className="mt-2 text-lg">A secure password generator with customizable options for length, special characters, and more, designed using JavaScript.</p>
          <a href="/password-generator" className="text-orange-400 mt-2 inline-block">View Project</a>
        </div>

        {/* Portfolio Website */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img src="/portfolio.jpg" alt="Portfolio Website" className="w-full h-48 object-cover rounded-lg" />
          <h3 className="text-xl font-semibold mt-4">Portfolio Website</h3>
          <p className="mt-2 text-lg">This portfolio website, showcasing my skills and projects, built with React.js and Tailwind CSS.</p>
          <a href="/" className="text-orange-400 mt-2 inline-block">View Project</a>
        </div>

        
        
      </section>
    </div>
  );
}
