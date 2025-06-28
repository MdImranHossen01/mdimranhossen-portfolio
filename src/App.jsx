// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './sections/Hero.jsx';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Education from './sections/Education.jsx';

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;