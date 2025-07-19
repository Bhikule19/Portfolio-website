import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast', 'Problem Solver'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];

      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-48 h-48 bg-primary-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-left px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>

                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold font-gilroy text-gray-900 dark:text-white mb-6 leading-none">
                  Creative
                </h1>

                <div className="flex items-baseline mb-8">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-gilroy italic text-primary-500 mr-4">
                    Frontend
                  </span>
                  <span className="text-6xl sm:text-7xl lg:text-8xl font-bold font-gilroy text-gray-900 dark:text-white">
                    Developer
                  </span>
                </div>
              </div>



              <div className="lg:text-right">
                <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                  MY LOCAL TIME 18:06
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-8">
                  GMT (+5:30)
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md lg:ml-auto leading-relaxed">
                  I craft beautiful, responsive web experiences with modern technologies.
                  Specializing in React, JavaScript, TypeScript, PHP and creating intuitive user interfaces
                  that bring ideas to life.
                </p>

                <div className="flex lg:justify-end mb-8">
                  <button
                    onClick={scrollToProjects}
                    className="group bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white"
                  >
                    <span className="flex items-center">
                      View My Work
                      <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>

                <div className="flex lg:justify-end items-center space-x-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </a>
                  <a
                    href="mailto:abhishekbhikule76@gmail.com"
                    className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-8 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;