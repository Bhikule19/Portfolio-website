import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className=" bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold font-gilroy text-primary-400 mb-4">
              Abhishek Bhikule
            </div>
            <p className="text-gray-400 mb-6">
              Frontend Developer passionate about creating exceptional web experiences
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/Bhikule19"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-bhikule/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="mailto:abhishekbhikule76@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Email
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Abhishek Bhikule. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;