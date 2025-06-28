// src/sections/About.jsx
import React from 'react';
// Make sure this path is correct and the image is in your assets folder
import myImage from '../assets/profile-imran.jpg'; 

const About = () => {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          About Me
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          
          {/* Image Column */}
          <div className="md:w-1/3 flex justify-center">
            {/* A fancy container for the image with a glowing effect */}
            <div className="relative group w-max">
              <img 
                src={myImage} 
                alt="Imran Hossen" 
                className="rounded-lg w-64 h-64 md:w-80 md:h-80 object-cover z-10 relative shadow-lg
                           transform transition-transform duration-500 group-hover:scale-105" 
              />
              {/* This div creates the glowing background effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 
                          rounded-lg blur-xl opacity-50 group-hover:opacity-75 
                          transition-opacity duration-500">
              </div>
            </div>
          </div>
          
          {/* Text Content Column */}
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-4 text-cyan-400">
              A Passionate Developer from Bangladesh
            </h3>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Hello! I'm Imran Hossen, a MERN Stack Developer driven by a deep curiosity for building things on the web. My journey into programming began with a simple "Hello, World!" and has since evolved into a full-fledged passion for creating dynamic and user-friendly web applications.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and enjoy the process of turning complex problems into elegant, efficient, and scalable code. From designing a beautiful UI in React to engineering a robust backend API, I am dedicated to delivering high-quality results. Let's connect and build something amazing together!
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg
                         hover:bg-cyan-600 transition-colors duration-300 shadow-lg
                         transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;