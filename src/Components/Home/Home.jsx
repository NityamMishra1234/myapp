import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

gsap.registerPlugin();

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    // GSAP animation: box comes from the left to the center of the screen
    gsap.fromTo(
      ".box",  // Targeting the element with the class '.box'
      { x: "-100vw" },  // Starting position: 100% to the left of the viewport
      { x: 0, duration: 2, ease: "power2.out" } // End position: Center of the screen, with a 2-second duration
    );

  }, []);

  useEffect(()=>{
    gsap.fromTo(
      ".box1",{
        y:"-200px",
      },{y: 0, duration: 2, ease: "power2.out"}
    )
  },[])
  useEffect(()=>{
    gsap.fromTo(
      ".box2",{
        x:"100vw",
      },{x: 0, duration: 2, ease: "power2.out"}
    )
  },[])
  useEffect(()=>{
    gsap.fromTo(
      ".box3",{
        y:"200px",
      },{y: 0, duration: 2, ease: "power2.out"}
    )
  },[])

  return (
    <div className="flex flex-col lg:flex-col w-screen h-full">
      <div className="flex flex-col items-center lg:flex-row h-full pt-6 pb-6 text-center bg-black shadow-xl shadow-slate-400 ">
        <div className="text-center lg:text-center md:m-1 justify-center transform w-1/2">
          <p className="text-center flex items-center justify-center ">
            <h1 className="text-5xl bg-orange-700 text-center justify-center flex items-center text-white rounded-md pr-2 pl-2 pb-1">
              Hii!!!
            </h1>
          </p>
          <span className="text-slate-200 text-3xl text-center m-2 hover:scale-90 transition-transform duration-300 ease-in-out">
            I am
            <span className="text-orange-500 ml-1 text-2xl underline hover:scale-90 transition-transform duration-300 ease-in-out">
              Nityam Kumar
            </span>
          </span>
          <p className="text-slate-200 text-3xl text-center hover:scale-90 transition-transform duration-300 ease-in-out">
            I’m a passionate web developer specializing in the MERN stack
            (MongoDB, Express, React, and Node.js). I love crafting modern,
            responsive, and user-friendly web applications that solve real-world
            problems
          </p>
          <div className="flex flex-row items-center content-center align-middle justify-center mb-5 mt-5">
            <Link to="https://mongoosejs.com/docs/" target="_blank">
              <img
                src="\Mongoose (2).png"
                alt="Mongoose"
                className="h-16 w-16 shadow-md mr-7 text-orange-400 rounded-full hover:scale-90 transition-transform duration-300 ease-in-out"
              />
            </Link>
            <Link to="https://expressjs.com/" target="_blank">
              <img
                src="/express.jpg"
                alt="Express"
                className="h-16 w-16 shadow-md mr-7 rounded-full hover:scale-90 transition-transform duration-300 ease-in-out"
              />
            </Link>
            <Link to="https://react.dev/" target="_blank">
              <img
                src="/React.jpg"
                alt="React"
                className="h-16 w-16 shadow-md mr-7 rounded-full hover:scale-90 transition-transform duration-300 ease-in-out"
              />
            </Link>
            <Link to="https://nodejs.org/en" target="_blank">
              <img
                src="/Node.jpg"
                alt="Node"
                className="h-16 w-16 shadow-md mr-7 rounded-full hover:scale-90 transition-transform duration-300 ease-in-out"
              />
            </Link>
          </div>
        </div>
        {/* Profile Image on the right */}
        <div className="ml-32 mb-4 lg:mr-4 w-1/2 p-10 flex items-center justify-center">
          {/* Orange Shape for Glow */}
          <div className="absolute bg-orange-700 w-72 h-52 -rotate-45 rounded-full blur-md"></div>

          {/* Profile Image */}
          <div className="relative flex items-center justify-center">
            <img
              className="w-96 h-96 rounded-full shadow-lg"
              src="/Profile.png"
              alt="Profile"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-inline  h-96 text-center bg-black  ">
        {/* Framework and Technologies Text */}
        <div className="w-screen h-fit flex  justify-center ">
          <p className="w-fit h-fit bg-orange-700 flex pl-2 pr-2 pt-1 pb-1 text-slate-200 mt-3 rounded-xl text-xl">
            Framework and Technologies
          </p>
        </div>

        {/* This is where the image will be aligned to the left */}
       <div className="w-screen h-full flex flex-row lg:gap-32 md:flex-wrap md:gap-2">
       <div className="box h-20 w-20 mt-36 mr-6 ml-2 ">
        <img 
        className="rounded-full"
        src="\Html-removebg-preview.png" alt="" />
        <p className="text-white">Html</p>
        
       </div>
       <div className="box h-20 w-20 mt-32 mr-6  ">
        <img 
        className="rounded-full"
        src="\css-removebg-preview.png" alt="\css-removebg-preview.png" />
        <p className="text-white">css</p>
        
       </div>
       <div className="box h-20 w-20 mt-28 mr-6  ">
        <img 
        className="rounded-full"
        src="\js-removebg-preview.png" alt="\css-removebg-preview.png" />
        <p className="text-white">Java Script</p>    
       </div>
       <div className="box1 h-20 w-20 mt-28 mr-6 ">
        <img 
        className="rounded-full "
        src="\React.jpg" alt="" />
        <p className="text-white text-justify">React-Js</p>    
       </div>
       <div className="box2 h-20 w-20 mt-28 mr-6 ">
        <img 
        className="rounded-full "
        src="\Node.jpg" alt="" />
        <p className="text-white text-justify">Node-Js</p>    
       </div>
       <div className="box2 h-20 w-20 mt-32 mr-6 ">
        <img 
        className="rounded-full "
        src="\express.jpg" alt="" />
        <p className="text-white text-justify">Express-Js</p>    
       </div>
       <div className="box2 h-20 w-20 mt-36 mr-6 ">
        <img 
        className="rounded-full "
        src="\Mongoose (2).png" alt="" />
        <p className="text-white text-justify">mongo_DB</p>    
       </div>
       </div>
       
       <div className="box3 flex items-center justify-center mb-5 mr-16">
        <img className="h-16 w-16"
         src="/Git Logo.png" alt="" srcset="" />
       </div>
      </div>
    </div>
  );
}
