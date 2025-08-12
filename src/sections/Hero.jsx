// src/sections/Hero.jsx
import myImage from "../assets/profile-imran.jpg";
import resume from "../assets/CV_Imran_2.pdf";
import { FaGithub, FaLinkedin, FaWhatsapp, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/10 filter blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 relative z-10">
        {/* Left Side: Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
            variants={itemVariants}
          >
            Md Imran Hossen
          </motion.h1>

          <motion.p
            className="text-2xl mt-4 text-cyan-400 font-medium"
            variants={itemVariants}
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            className="mt-6 text-lg text-gray-300 max-w-lg"
            variants={itemVariants}
          >
            I craft high-performance web applications with cutting-edge
            technologies and pixel-perfect designs.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start items-center"
            variants={itemVariants}
          >
            <motion.a
              href={resume}
              download
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="text-lg" />
              Download Resume
            </motion.a>
            
            <motion.a
              href="https://wa.me/8801919011101" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-green-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Contact on WhatsApp"
            >
              <FaWhatsapp className="text-lg" />
              Contact Me
            </motion.a>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com/MdImranHossen01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-2xl"
                whileHover={{ y: -3 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/dev-mdimranhossen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-2xl"
                whileHover={{ y: -3 }}
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <img
              src={myImage}
              alt="Md Imran Hossen"
              className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-2xl shadow-cyan-500/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;