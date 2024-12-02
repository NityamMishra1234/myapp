import React from "react";
import { Link } from "react-router-dom";

export default function What() {
  return (
    <div className="flex flex-col lg:flex-col  gap-12 w-full h-full bg-black p-8">
      {/* Project 1 */}
      <div className=" justify-center flex flex-col lg:flex-row w-full bg-gray-800 rounded-lg shadow-xl p-8 hover:scale-105 transition-transform duration-300 ">
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Project 1</h1>
          <h2 className="text-2xl text-gray-300 mb-4">A Blog Application</h2>
          <p className="text-lg text-white mb-6">
            This application is a modern, feature-rich blogging platform designed to provide a seamless user experience. Built using React.js for the frontend and powered by Appwrite as the backend service, it combines cutting-edge web technologies to deliver performance and functionality.
          </p>
          <div className="flex gap-12 justify-center lg:justify-start mb-6">
            <div className="w-fit">
              <p className="text-2xl text-white">Frontend</p>
              <ul className="text-lg text-white list-disc ml-6">
                <li>Framework: React.js</li>
                <li>Form Management: React Hook Form</li>
              </ul>
            </div>
            <div className="w-fit">
              <p className="text-2xl text-white">Backend</p>
              <ul className="text-lg text-white list-disc ml-6">
                <li>Backend as a Service (BaaS): Appwrite</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Link
              to="https://github.com/NityamMishra1234"
              className="bg-orange-700 text-white hover:bg-orange-800 font-medium rounded-lg py-2 px-6 transition-all"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="flex flex-col lg:flex-row w-full bg-gray-600 rounded-lg shadow-xl p-8 hover:scale-105 transition-transform justify-center">
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Project 2</h1>
          <h3 className="text-2xl text-yellow-50 mb-4">A Full Stack Website of my agency called GCS</h3>
          <p className="text-lg text-yellow-50 mb-6">
            GCS is the official website of our agency, dedicated to crafting exceptional websites and applications tailored to meet the unique needs of our clients. It serves as a digital hub where we showcase our expertise, creative solutions, and a portfolio of successful projects.
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <Link
              to="https://github.com/NityamMishra1234"
              className="bg-orange-700 text-white hover:bg-orange-800 font-medium rounded-lg py-2 px-6 transition-all"
            >
              GitHub
            </Link>
            <Link
              to="https://gcs-weld.vercel.app/"
              className="bg-orange-700 text-white hover:bg-orange-800 font-medium rounded-lg py-2 px-6 transition-all"
            >
              Visit
            </Link>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="flex flex-col lg:flex-row w-full bg-gray-700 rounded-lg shadow-xl p-8 justify-center">
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Project 3</h1>
          <h3 className="text-2xl text-yellow-50 mb-4">A Password Generator Application</h3>
          <p className="text-lg text-white mb-6">
            This password generator application is designed to help users generate secure passwords for their accounts. It offers customization options such as length, character types (uppercase, lowercase, symbols, numbers), and ensures that generated passwords meet security standards.
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <Link
              to="https://github.com/NityamMishra1234"
              className="bg-orange-700 text-white hover:bg-orange-800 font-medium rounded-lg py-2 px-6 transition-all"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>

      {/* Project 4 */}
      <div className="flex flex-col lg:flex-row w-full bg-gray-800 rounded-lg shadow-xl p-8 justify-center">
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Project 4</h1>
          <h3 className="text-2xl text-yellow-50 mb-4">A PG Management System</h3>
          <p className="text-lg text-white mb-6">
            This web application is designed to manage Paying Guest (PG) accommodations. It includes features like student registration, room management, payment tracking, and a dashboard for both owners and students to keep track of important details and updates.
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <Link
              to="https://github.com/NityamMishra1234"
              className="bg-orange-700 text-white hover:bg-orange-800 font-medium rounded-lg py-2 px-6 transition-all"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
