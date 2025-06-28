// src/sections/Projects.jsx
import ProjectCard from '../components/ProjectCard';
import projImg1 from '../assets/project1.png';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'E-commerce Website',
    description: 'A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment processing. Built with React, Node.js, Express, and MongoDB.',
    image: projImg1,
    liveLink: 'https://your-live-site.com',
    repoLink: 'https://github.com/your-repo',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    featured: true
  },
  // Add more projects here
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            My Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here are some of my featured works. Each project represents unique challenges and solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="w-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;