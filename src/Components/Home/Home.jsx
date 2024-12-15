import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

export default function Home() {
 

 

  return (
    <div className="flex flex-col w-full h-full overflow-hidden bg-black">
      {/* Intro Section */}
      return (
    <div className="bg-black text-white h-screen flex flex-col justify-center items-center text-center">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-orange-500">Hi!!!</h1>
        <h2 className="text-2xl font-semibold text-orange-300">I am Nityam Kumar</h2>
        <p className="text-lg max-w-lg mx-auto">
          I’m a passionate web developer specializing in the{' '}
          <span className="text-orange-400 font-semibold">MERN stack</span> (MongoDB, Express, React, and Node.js).
        </p>
        <p className="text-lg max-w-lg mx-auto">
          I create <span className="text-orange-400 font-semibold">modern</span>,{' '}
          <span className="text-orange-400 font-semibold">responsive</span>, and{' '}
          <span className="text-orange-400 font-semibold">user-friendly</span> web applications.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <img src="\Mongoose (2).png" alt="MongoDB" className="h-12 w-12 rounded-full" />
          <img src="\express.jpg" alt="Express" className="h-12 w-12 rounded-full" />
          <img src="\React.jpg" alt="React" className="h-12 w-12 rounded-full" />
          <img src="\Node.jpg" alt="Node.js" className="h-12 w-12 rounded-full" />
        </div>
      
      </div>
      <div className="w-28 h-10 flex justify-center text-center bg-orange-700 text-white rounded-2xl mt-4">
        <Link to='/What'>
        <p className="items-center justify-center align-middle pt-2"
        >View My Work</p>
        </Link>
       </div>
      
    </div>
    <section className="bg-gray-900 text-white py-20 px-6 ">
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold text-orange-500">About Me</h2>
      <p className="text-lg">
        I specialize in creating dynamic and responsive web applications using the latest technologies.
      </p>
      <p className="text-lg">
        With a deep understanding of front-end and back-end technologies, I deliver high-quality, performance-optimized solutions.
      </p>
      <div className="mt-8">
        <h3 className="text-xl text-orange-400">Skills:</h3>
        <ul className="list-disc pl-6 mt-4">
          <li>React.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </div>
    <div className="relative">
      <img className="rounded-full shadow-lg w-80 h-80 mx-auto" src="/Profile.png" alt="Profile" />
    </div>
  </div>
</section>
<section className="py-20 bg-black text-white">
  <h2 className="text-3xl font-semibold text-center text-orange-500">My Projects</h2>
  
  <div className="mt-12 overflow-x-auto no-scrollbar">
    <div className="flex space-x-8 pb-6">
      {/* Project 1 */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex-shrink-0 w-96">
        <img src="\Screenshot 2024-12-02 214816.png" alt="Project 1" className="w-full h-48 object-cover rounded-lg" />
        <h3 className="text-xl font-semibold mt-4">Lotus Green Boys pg web</h3>
        <p className="mt-2 text-lg">A PG web app streamlines management for owners, offering dashboards for student profiles, payments, and room allocation. Students track dues and updates. Built with MERN, it ensures efficiency and transparency.</p>
        <a href="https://lotus-green.vercel.app/" className="mt-4 inline-block text-orange-500 hover:text-orange-400 mr-6" target="BLANK">View Project</a>
        <a href="https://github.com/NityamMishra1234/" className="mt-4 inline-block text-orange-500 hover:text-orange-400" target="BLANK">GitHub</a>
      </div>

      {/* Project 2 */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex-shrink-0 w-96">
        <img src="\Screenshot 2024-12-02 213809.png" alt="Project 2" className="w-full h-48 object-cover rounded-lg" />
        <h3 className="text-xl font-semibold mt-4">GCS Web Page</h3>
        <p className="mt-2 text-lg">GCS is a dynamic agency specializing in crafting tailored websites and applications. We blend innovation with functionality to deliver impactful digital solutions, ensuring seamless user experiences and business growth..</p>
        <a href="https://gcs-weld.vercel.app/" className="mt-4 inline-block text-orange-500 hover:text-orange-400 mr-6" target="BLANK">View Project</a>
        <a href="https://github.com/NityamMishra1234/" className="mt-4 inline-block text-orange-500 hover:text-orange-400" target="BLANK">GitHub</a>
      </div>

      {/* Project 3 */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex-shrink-0 w-96">
        <img src="\Screenshot 2024-12-02 215004.png" alt="Project 3" className="w-full h-48 object-cover rounded-lg" />
        <h3 className="text-xl font-semibold mt-4">My Portfolio</h3>
        <p className="mt-2 text-lg">My portfolio showcases my journey as a developer, featuring projects in web and app development. It highlights my skills in modern technologies, creative problem-solving, and dedication to building impactful digital solutions</p>
        <a href="https://gcs-weld.vercel.app/" className="mt-4 inline-block text-orange-500 hover:text-orange-400 mr-6" target="BLANK">View Project</a>
        <a href="https://github.com/NityamMishra1234/" className="mt-4 inline-block text-orange-500 hover:text-orange-400" target="BLANK">GitHub</a>
      </div>

      {/* Project 4 */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex-shrink-0 w-96">
        <img src="\Screenshot 2024-12-02 135634.png" alt="Project 4" className="w-full h-48 object-cover rounded-lg" />
        <h3 className="text-xl font-semibold mt-4">A blog Creating application</h3>
        <p className="mt-2 text-lg">A blog web app that provides a platform for sharing ideas, stories, and insights. It features user-friendly design, dynamic content management, and interactive commenting, fostering engagement and community building.</p>
        <a href="https://github.com/NityamMishra1234/" className="mt-4 inline-block text-orange-500 hover:text-orange-400 mr-6" target="BLANK">View Project</a>
        <a href="https://github.com/NityamMishra1234/" className="mt-4 inline-block text-orange-500 hover:text-orange-400" target="BLANK">GitHub</a>
      </div>

      {/* Project 5 */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex-shrink-0 w-96">
        <img src="\Screenshot 2024-12-02 220007.png" alt="Project 5" className="w-full h-48 object-cover rounded-lg" />
        <h3 className="text-xl font-semibold mt-4">Todo Application</h3>
        <p className="mt-2 text-lg">A Todo web app designed for efficient task management. Users can add, update, and delete tasks with ease. Featuring a clean UI and real-time updates, it helps you stay organized and boost productivity.</p>
        <a href="#" className="mt-4 inline-block text-orange-500 hover:text-orange-400 mr-6" target="BLANK">View Project</a>
        <a href="https://github.com/NityamMishra1234/" className="mt-4 inline-block text-orange-500 hover:text-orange-400" target="BLANK">GitHub</a>
      </div>

      {/* Project 6 */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex-shrink-0 w-96">
        <img src="\Screenshot 2024-12-02 221459.png" alt="Project 6" className="w-full h-48 object-cover rounded-lg" />
        <h3 className="text-xl font-semibold mt-4">Password Generator</h3>
        <p className="mt-2 text-lg">A Password Generator web app that creates strong, secure passwords to protect your accounts. Customize length and character types to meet your needs, ensuring enhanced security and peace of mind.</p>
        <a href="#" className="mt-4 inline-block text-orange-500 hover:text-orange-400 mr-6" target="BLANK">View Project</a>
        <a href="https://github.com/NityamMishra1234/" className="mt-4 inline-block text-orange-500 hover:text-orange-400" target="BLANK">GitHub</a>
      </div>
    </div>
  </div>
</section>




<section className="py-20 bg-gray-900 text-white">
  <h2 className="text-3xl font-semibold text-center text-orange-500">Technologies I Use</h2>
  <div className="mt-12 flex justify-center flex-wrap gap-8">
    <div className="tech-item p-6 bg-gray-800 rounded-full shadow-lg hover:scale-110 transition transform">
      <img className="w-16 h-16" src="\Html-removebg-preview.png" alt="HTML" />
    </div>
    <div className="tech-item p-6 bg-gray-800 rounded-full shadow-lg hover:scale-110 transition transform">
      <img className="w-16 h-16" src="\css-removebg-preview.png" alt="CSS" />
    </div>
    <div className="tech-item p-6 bg-gray-800 rounded-full shadow-lg hover:scale-110 transition transform">
      <img className="w-16 h-16" src="\js-removebg-preview.png" alt="JavaScript" />
    </div>
    <div className="tech-item p-6 bg-gray-800 rounded-full shadow-lg hover:scale-110 transition transform">
      <img className="w-16 h-16 rounded-full" src="\React.jpg" alt="React" />
    </div>
    <div className="tech-item p-6 bg-gray-800 rounded-full shadow-lg hover:scale-110 transition transform">
      <img className="w-16 h-16 rounded-full" src="\Node.jpg" alt="Node.js" />
    </div>
    <div className="tech-item p-6 bg-gray-800 rounded-full shadow-lg hover:scale-110 transition transform">
      <img className="w-16 h-16 rounded-full" src="\express.jpg" alt="Express" />
    </div>
  </div>
</section>

     
    </div>
  );
}
