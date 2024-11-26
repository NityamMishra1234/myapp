import React from "react";
import { Link } from "react-router-dom";
export default function What() {
  const height = "300px";
  return (
    <div className=" flex  flex-col  lg:flex-col w-screen h-full bg-black ">
      <div class=" flex flex-col items-center lg:flex-row h-99 rounded-lg ml-10 text-center mr-7 mt-9 bg-gray-800 shadow-lg shadow-slate-400">
        <div class="m-4 p-8 text-center lg:text-center md:m-5 justify-centertransform hover:scale-90 transition-transform duration-300 ease-in-out">
          <h1 class="text-5xl font-bold p-4 text-white"> Project 1</h1>
          <p class="text-white text-3xl text-center p-3">
            This application is a modern, feature-rich blogging platform
            designed to provide a seamless user experience. Built using React.js
            for the frontend and powered by Appwrite as the backend service, it
            combines cutting-edge web technologies to deliver performance and
            functionality.
          </p>
          <p className="text-white text-center">
            <h1 className="text-3xl text-start">Blog Application Overview :</h1>
            <div className="flex gap-10 justify-evenly">
              <div className="w-fit flex-row ">
              <p className="text-3xl mt-6 items-start justify-start flex">FrontEnd</p>
                <ul className="text-xl mt-2 text-start list-disc">
                  
                  <li>Framework: React.js</li>
                  <li>
                    Form Management: React Hook Form for efficient form handling
                    and validation
                  </li>
                </ul>
              </div>
              <div className="w-fit  flex-row">
                <p className="text-3xl mt-6 items-start justify-start flex">Backend</p>
                <ul className="text-xl mt-2 text-start list-disc">
                  
                  <li>
                    Backend as a Service (BaaS): Appwrite, providing database,
                    authentication, and other backend services.
                  </li>
                </ul>
              </div>
            </div>
          </p>
          <div className=" mt-6 items-center lg:order-2 flex justify-center">
                        
                        <Link
                            to="https://github.com/NityamMishra1234"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none hover:scale-100"
                        >
                            GitHub
                        </Link>
                    </div>
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row h-99 rounded-lg ml-10 text-center mr-7 mt-9 mb-10 bg-gray-600 shadow-lg shadow-slate-700 ">
        <div class="mt-8 text-center lg:text-center lg:m-5 justify-centertransform hover:scale-90 transition-transform duration-300 ease-in-out flex flex-col">
            <h1 className="text-white text-5xl font-bold">
                Project-2
            </h1>
          <h3 class="mt-5 p-4 text-3xl font-bold text-yellow-50">
            A Full Stack Website of my aggency called GCS
          </h3>
         
          <p className="text-yellow-50 p-4 text-center text-2xl">
          GCS is the official website of our agency, dedicated to crafting exceptional websites and applications tailored to meet the unique needs of our clients. It serves as a digital hub where we showcase our expertise, creative solutions, and a portfolio of successful projects. Our services span from designing sleek, user-friendly interfaces to developing powerful applications that bring ideas to life. The website reflects our passion for blending creativity with technology, ensuring every project we deliver is impactful and innovative. Visitors can explore our work, learn about our process, and connect with us to turn their visions into reality. At GCS, we are committed to providing digital solutions that empower businesses and elevate their online presence.
          </p>
          <div className="flex flex-row items-center justify-center mt-11">
          <Link
                            to="https://github.com/NityamMishra1234"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none hover:scale-100"
                        >
                            GitHub
                        </Link>
                        <Link
                            target="blank"
                            to="https://gcs-weld.vercel.app/"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 w-20 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none hover:scale-100"
                        >
                            Visit 
                        </Link>
          </div>
        </div>
        
      </div>
      <div class=" flex flex-col items-center lg:flex-row h-99 rounded-lg ml-10 text-center mr-7 mt-9 bg-white shadow-lg shadow-slate-400">
        <div class="m-4 p-8 text-center lg:text-center md:m-5 justify-centertransform hover:scale-90 transition-transform duration-300 ease-in-out">
          <h1 class="text-5xl font-bold p-4">Digital Marketing</h1>
          <p class="text-gray-600 text-3xl text-center p-3">
            Elevate your brand's digital footprint with strategic precision and
            impactful storytelling through our expert digital marketing services
          </p>
          <p className="text-gray-600 text-center">
            Strategic digital marketing is the key to unlocking the full
            potential of your online presence. GCS offers a range of digital
            marketing services, including SEO, social media marketing, and
            online advertising. We work collaboratively to elevate your brand
            and drive measurable results.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row h-99 rounded-lg ml-10 text-center mr-7 mt-9 mb-10 bg-gray-600 shadow-lg shadow-slate-700">
        <div class="mt-8 text-center lg:text-center lg:m-5 justify-centertransform hover:scale-90 transition-transform duration-300 ease-in-out">
          <h1 class="mt-5 p-4 text-5xl font-bold text-yellow-50">
            Our Own Projects
          </h1>
          <p class=" p-3 text-white text-3xl text-center">
            Innovating the future with our proprietary ventures, pushing
            boundaries and embracing new horizons in digital evolution.
          </p>
          <p className="text-yellow-50 p-4 text-center">
            Beyond client projects, GCS is committed to innovation through our
            proprietary ventures. Our in-house projects exemplify our passion
            for pushing boundaries and exploring new horizons. These projects
            serve as a testament to our capabilities and our dedication to
            staying at the forefront of digital evolution.
          </p>
        </div>
      </div>
    </div>
  );
}
