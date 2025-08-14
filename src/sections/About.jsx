import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaServer, FaUsers } from 'react-icons/fa';
import Lottie from "lottie-react"; // ✨ 1. Import the Lottie component
import devIllustration from '../assets/developerskills.json'; // Your Lottie JSON file

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          
          {/* Left Side: Lottie Animation */}
          <motion.div 
            className="md:w-5/12"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* ✨ 2. Replace <img> with the <Lottie> component */}
            <Lottie 
              animationData={devIllustration} 
              loop={true} 
              className="w-full h-auto"
            />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            className="md:w-7/12 space-y-8"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I’m a passionate web developer from Bangladesh, learning and building with the MERN stack since January 2025. I focus on creating responsive, user-friendly interfaces with React and developing efficient backends using Node.js and Express. My goal is to deliver seamless full-stack applications that combine creativity with technical precision.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
             Outside of coding, I’m an avid football and cricket player. The teamwork, discipline, and persistence I’ve learned from sports directly shape my approach to development—driving me to improve daily, solve problems efficiently, and collaborate effectively.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              
              <div className="bg-gray-900/50 p-6 rounded-lg border border-transparent hover:border-cyan-500 transition-colors duration-300">
                <FaReact className="text-4xl text-cyan-400 mx-auto mb-3" />
                <h4 className="font-semibold text-lg">Frontend</h4>
                <p className="text-sm text-gray-400">User-friendly interfaces with React</p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg border border-transparent hover:border-cyan-500 transition-colors duration-300">
                <FaServer className="text-4xl text-cyan-400 mx-auto mb-3" />
                <h4 className="font-semibold text-lg">Backend</h4>
                <p className="text-sm text-gray-400">Robust logic with Node.js & Express</p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg border border-transparent hover:border-cyan-500 transition-colors duration-300">
                <FaUsers className="text-4xl text-cyan-400 mx-auto mb-3" />
                <h4 className="font-semibold text-lg">Philosophy</h4>
                <p className="text-sm text-gray-400">Discipline & teamwork from sports</p>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;