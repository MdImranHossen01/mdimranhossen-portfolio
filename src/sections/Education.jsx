// src/sections/Education.jsx
import React from 'react';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

const educationData = [
  {
    degree: "Masters of Business Administration (MBA)",
    institution: "Govt. Titumir College",
    year: "2014 - 2015",
    specialization: "Finance and Banking",
    description: "Advanced studies in financial management, banking operations, and business strategy.",
    courses: [
      "Financial Management", 
      "Banking Operations", 
      "Investment Analysis",
      "Corporate Finance",
      "Strategic Management"
    ]
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Govt. Titumir College",
    year: "2011 - 2014",
    specialization: "Finance and Banking",
    description: "Comprehensive business education with focus on financial systems and banking principles.",
    courses: [
      "Principles of Finance",
      "Banking Law & Practice",
      "Financial Accounting",
      "Business Mathematics",
      "Economics"
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Education
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My academic qualifications in Business Administration
          </p>
        </div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="relative">
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="bg-cyan-500/10 p-4 rounded-full border border-cyan-500/20">
                    <FaUniversity className="text-3xl text-cyan-400" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-2">
                      <p className="flex items-center gap-2 text-cyan-400">
                        <FaGraduationCap />
                        {edu.institution}
                      </p>
                      <span className="hidden sm:block text-gray-500">•</span>
                      <p className="text-gray-400">{edu.year}</p>
                    </div>
                    <p className="text-cyan-400 font-medium mb-3">{edu.specialization}</p>
                    <p className="text-gray-300 mb-4">{edu.description}</p>
                    
                    {/* Courses */}
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Key Subjects</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-cyan-400">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;