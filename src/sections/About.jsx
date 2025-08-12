// src/sections/About.jsx
import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold text-center mb-6 text-cyan-400">
            A Passionate Developer from Bangladesh
          </h3>
          
          {/* Programming Journey */}
          <p className="text-lg text-gray-300 leading-relaxed">
            I began my programming journey in January 2025, starting with the fundamentals of HTML, CSS, and JavaScript. 
            Though relatively new to the field, I've immersed myself completely in learning modern web development. 
            Each day brings new challenges and opportunities to grow, and I'm excited by how quickly I'm progressing 
            in understanding the MERN stack and building functional applications.
          </p>
          
          {/* Type of Work Enjoyed */}
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm particularly drawn to frontend development where I can combine technical skills with creative design. 
            Building responsive, user-friendly interfaces with React gives me great satisfaction. 
            I also enjoy the logical problem-solving aspects of backend development with Node.js and Express. 
            Currently, I'm focusing on mastering state management and API integration to create seamless full-stack applications.
          </p>
          
          {/* Hobbies and Interests */}
          <p className="text-lg text-gray-300 leading-relaxed">
            When I'm not coding, you'll find me on the sports field - I'm an avid football and cricket player. 
            I enjoy the teamwork and strategy of football as much as the technical precision of cricket batting. 
            These sports have taught me valuable lessons about discipline, practice, and teamwork that I apply to my coding journey. 
            I also follow international football leagues and never miss a Bangladesh cricket match.
          </p>
          
          {/* Personality Showcase */}
          <p className="text-lg text-gray-300 leading-relaxed">
            As a quick learner with strong determination, I approach programming with the same dedication I bring to sports. 
            Teammates would describe me as energetic, coachable, and always willing to put in extra practice. 
            I believe in consistent daily progress - whether it's improving my coding skills or my cricket batting technique. 
            My goal is to combine my passion for technology with my strong work ethic to build meaningful web applications.
          </p>
          
          <div className="text-center mt-10">
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