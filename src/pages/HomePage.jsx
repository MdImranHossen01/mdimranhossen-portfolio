// src/pages/HomePage.jsx

import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Education from '../sections/Education';
import Contact from '../sections/Contact';

const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
        </>
    );
};

export default HomePage;