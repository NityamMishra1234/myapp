import React from 'react'
import { Link } from 'react-router-dom';

export default function Whoweare() {
    
    return (
        <div className="bg-black text-white p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: About Me */}
        <div className="flex flex-col justify-center items-center lg:items-start p-6 bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold text-orange-500 mb-6">Who Am I?</h1>
          <p className="text-lg mb-4 text-center lg:text-left">
            Hi, I'm Nityam! A passionate web developer with experience in building dynamic web applications using modern technologies like React.js, Node.js, and more. I enjoy solving real-world problems and continuously learning new technologies to expand my skill set.
          </p>
          <p className="text-lg mb-6 text-center lg:text-left">
            With a keen eye for detail and a love for clean, efficient code, I strive to deliver high-quality, user-friendly applications. I'm currently exploring full-stack development and enhancing my backend skills with the MERN stack. When I'm not coding, you'll find me exploring new tech trends, reading, or learning something new.
          </p>
          <div className="flex gap-6 justify-center lg:justify-start">
            <Link
              to="https://github.com/NityamMishra1234"
              className="bg-orange-700 hover:bg-orange-800 font-medium rounded-lg py-2 px-6 transition-all transform hover:scale-105"
            >
              GitHub
            </Link>
            <Link
              to="https://www.linkedin.com/in/nityam-mishra/"
              className="bg-blue-700 hover:bg-blue-800 font-medium rounded-lg py-2 px-6 transition-all transform hover:scale-105"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Right Section: Skills */}
        <div className="flex flex-col justify-center items-center lg:items-start p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">Technical Skills</h2>
          <div className="space-y-4">
            <div>
              <p className="text-lg">
                <strong className="text-white">Frontend:</strong> React.js, Redux Toolkit, React Native, HTML, CSS, Tailwind CSS, GSAP
              </p>
            </div>
            <div>
              <p className="text-lg">
                <strong className="text-white">Backend:</strong> Node.js, Express.js
              </p>
            </div>
            <div>
              <p className="text-lg">
                <strong className="text-white">Database:</strong> MongoDB, Appwrite
              </p>
            </div>
            <div>
              <p className="text-lg">
                <strong className="text-white">Tools & Technologies:</strong> Git, Vite, Postman, Nodemailer
              </p>
            </div>
            <div>
              <p className="text-lg">
                <strong className="text-white">Other Skills:</strong> SEO Optimization, Responsive Design, Email Notifications
              </p>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-orange-500 mt-8 mb-4">Technologies I Use</h3>
          <div className="flex gap-6 flex-wrap justify-center">
            <div className="bg-gray-700 p-4 rounded-full mb-4 transform hover:scale-110 transition-transform duration-300">
              <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" className="w-12 h-12" />
            </div>
            <div className="bg-gray-700 p-4 rounded-full mb-4 transform hover:scale-110 transition-transform duration-300">
              <img src="\Node.jpg" alt="Node.js" className="w-12 h-12 rounded-full" />
            </div>
            <div className="bg-gray-700 p-4 rounded-full mb-4 transform hover:scale-110 transition-transform duration-300">
              <img src="\Mongoose (2).png" alt="MongoDB" className="w-12 h-12 rounded-full" />
            </div>
            <div className="bg-gray-700 p-4 rounded-full mb-4 transform hover:scale-110 transition-transform duration-300">
              <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" className="w-12 h-12" />
            </div>
            <div className="bg-gray-700 p-4 rounded-full mb-4 transform hover:scale-110 transition-transform duration-300">
              <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" className="w-12 h-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}