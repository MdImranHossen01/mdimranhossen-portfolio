// src/sections/Hero.jsx
import myImage from "../assets/Md-Imran-Hossen-profile.png";
// import resume from "../assets/dev-imran-resume.pdf";
import { FaGithub, FaLinkedin, FaWhatsapp, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/10 filter blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        {/* Left Side: Text Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4"
            variants={itemVariants}
          >
            Md Imran Hossen
          </motion.h1>

          <motion.div
            className="text-2xl mt-4 text-cyan-400 font-medium h-10"
            variants={itemVariants}
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1500,
                "Web Designer",
                1500,
                "Frontend Specialist",
                1500,
                "Backend Engineer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ display: "inline-block" }}
            />
          </motion.div>

          <motion.p
            className="mt-6 text-lg text-gray-300 max-w-lg mx-auto lg:mx-0"
            variants={itemVariants}
          >
            I craft high-performance web applications with cutting-edge
            technologies and pixel-perfect designs.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start items-center"
            variants={itemVariants}
          >
            <a
              href="/dev-imran-resume.pdf"
              download="dev-imran-resume.pdf"
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
            >
              <FaDownload className="text-lg" />
              Download Resume
            </a>

            <motion.a
              href="https://wa.me/8801919011101"
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

        {/* Right Side: Image - Improved Responsiveness */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <div className="relative rounded-full p-1 bg-gradient-to-r from-cyan-400 to-blue-500">
              <div className="rounded-full overflow-hidden border-4 border-gray-800">
                <img
                  src={myImage}
                  alt="Md Imran Hossen"
                  className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full shadow-lg shadow-cyan-500/30 animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
