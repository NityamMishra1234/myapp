import React from 'react'
import { Link } from 'react-router-dom';

export default function Whoweare() {
    
    return (
        
        
        <div className=" flex  flex-col  lg:flex-col w-full h-full ">

           
           
            <div class=" flex flex-col items-center lg:flex-row h-99 rounded-lg ml-10 text-center mr-7 mt-9 bg-white shadow-lg shadow-slate-400">
              
               

                
                <div class="m-4 p-8 text-center lg:text-center md:m-5 justify-centertransform hover:scale-90 transition-transform duration-300 ease-in-out">
                    <h1 class="text-5xl font-bold p-4"> Welcome to my Blog Application project!

</h1>
                    <p class="text-gray-600 text-3xl text-center p-3"> Welcome to Garur Computing Services, where innovation meets excellence in the digital realm. Established with a vision to redefine the landscape of digital services, GCS has emerged as a pioneering force dedicated to transforming dreams into digital realities.</p>
                   
                </div>
            </div>

            <div className="flex flex-col items-center lg:flex-row h-99 rounded-lg ml-10 text-center mr-7 mt-9 mb-10 bg-gray-600 shadow-lg shadow-slate-700">
                <div class="mt-8 text-center lg:text-center lg:m-5 justify-centertransform hover:scale-90 transition-transform duration-300 ease-in-out">
                    <h1 class="mt-5 p-4 text-5xl font-bold text-yellow-50">Who We Are</h1>
                    <p class=" p-3 text-white text-3xl text-center">At GCS, we are not just a technology company; we are your strategic partners in the digital journey. With a commitment to excellence, a passion for innovation, and a customer-centric approach, we go beyond conventional solutions to provide a seamless blend of creativity and technology.</p>
                   
                </div>

            </div>
            <div class=" flex flex-col items-center lg:flex-row h-99 rounded-lg ml-10 text-center mr-7 mt-9 bg-white shadow-lg shadow-slate-400">
              
               

                
                <div class="m-4 p-8 text-center lg:text-center md:m-5 justify-centertransform hover:scale-90 transition-transform duration-300 ease-in-out">
                    <h1 class="text-5xl font-bold p-4">Our Mission</h1>
                    <p class="text-gray-600 text-3xl text-center p-3">Empowering Dreams, Transforming Realities</p>
                    <p className="text-gray-600 text-center">
                    Our mission is encapsulated in our motto. "Your Dream, We Create" symbolizes our dedication to understanding your unique vision and turning it into tangible, impactful digital experiences. From concept to execution, GCS is your trusted collaborator, committed to bringing your dreams to life
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center lg:flex-row h-99 rounded-lg ml-10 text-center mr-7 mt-9 mb-10 bg-gray-600 shadow-lg shadow-slate-700">
                <div class="mt-8 text-center lg:text-center lg:m-5 justify-centertransform hover:scale-90 transition-transform duration-300 ease-in-out">
                    <h1 class="mt-5 p-4 text-5xl font-bold text-yellow-50">What Sets Us Apart</h1>
                    <p class=" p-3 text-white text-3xl text-center">Innovation at the Core</p>
                    <p className="text-yellow-50 p-4 text-center">
                    At GCS, innovation is not just encouraged; it's ingrained in our DNA. We are not content with the status quo; instead, we thrive on the possibilities that emerging technologies bring. Our team of dedicated professionals stays at the forefront of industry trends, exploring cutting-edge solutions and pioneering approaches. We are committed to providing our clients with solutions that transcend the present, ensuring that their digital investments remain not only current but also future-proof. Embracing the latest advancements, we turn challenges into opportunities, pushing the boundaries of what's possible in the dynamic landscape of technology. At GCS, innovation is not a mere practice – it's a constant evolution, driving us to explore new horizons and deliver exceptional value to our clients .
                   
                       <p className="text-center w-27 m-5 mt-7">
                       
                       <Link
                        to='/MoreAbout'
                        className='text-black font-medium text-3xl bg-white hover:text-green-600 rounded-xl hover:bg-stone-700 p-3 '
                        >
                         More about
                        </Link>
                       

                       </p>

                   
                    </p>
                </div>

            </div>
        </div>
    );
}