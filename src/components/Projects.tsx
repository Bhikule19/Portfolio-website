import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight, Sparkles } from 'lucide-react';
import docEaseImage from './assets/images/docEase.png';
import netfix from './assets/images/netflix.png';


const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'DocEase',
      description: '𝐃𝐨𝐜𝐄𝐚𝐬𝐞, an AI-powered platform making complex documents accessible to everyone.DocEase leverages state-of-the-art AI to: Translate complex documents into clear, simple language, Support 10+ languages with voice playback for accessibility, Create interactive data visualizations from both text and numbers, Provide instant, AI-powered Q&A for document insights',
      image: docEaseImage,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Google Gemini AI', 'Recharts', 'PDF.js'],
      liveUrl: 'https://magnificent-semolina-23d10d.netlify.app/',
      githubUrl: 'https://github.com/Bhikule19/DocEase',
      featured: true,
    },
    {
      title: 'Netflix-GPT',
      description: 'N𝐞𝐭𝐟𝐥𝐢𝐱𝐆𝐏𝐓, a captivating web application that seamlessly blends the features of a movie browsing platform like Netflix with the power of AI-driven recommendations.',
      image: netfix,
      technologies: ['React', 'Firebase', 'Tailwind-CSS', 'Redux'],
      liveUrl: 'https://netflix-ky59qfkwz-bhikule19s-projects.vercel.app/',
      githubUrl: 'https://github.com/Bhikule19/Netflix-GPT',
      featured: true,
    },
    // {
    //   title: 'Portfolio Website',
    //   description: 'A responsive portfolio website showcasing modern web development techniques. Features smooth animations, dark mode, and optimized performance.',
    //   image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com',
    //   featured: true,
    // },
    // {
    //   title: 'Weather Dashboard',
    //   description: 'N𝐞𝐭𝐟𝐥𝐢𝐱𝐆𝐏𝐓, a captivating web application that seamlessly blends the features of a movie browsing platform like Netflix with the power of AI-driven recommendations.',
    //   image: 'https://raw.githubusercontent.com/Bhikule19/Netflix-GPT/main/src/images/screencapture-localhost-3000-browse-2024-04-26-12_37_15.png',
    //   technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'SCSS'],
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com',
    //   featured: false,
    // },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-gilroy text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl font-gilroy text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Crafting digital experiences with modern technologies and thoughtful design
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Featured Projects */}
        <div ref={ref} className="mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`group relative mb-12 ${inView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured Badge */}
              <div className="absolute -top-3 left-8 z-10 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-semibold font-gilroy rounded-full shadow-lg">
                <Sparkles className="w-4 h-4" />
                Featured Project
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="lg:grid lg:grid-cols-2 lg:gap-0">
                  {/* Image Side */}
                  <div className="relative h-80 lg:h-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Floating Action Buttons */}
                    <div className="absolute bottom-6 right-6 flex gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                      >
                        <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </a>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-10 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold font-gilroy text-gray-900 dark:text-white mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium font-gilroy shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl font-semibold font-gilroy transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        View Live Demo
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold font-gilroy transition-all duration-300 shadow-lg hover:shadow-xl">
                        <Github className="mr-2 w-5 h-5" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regular Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {regularProjects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                inView ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(featuredProjects.length + index) * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-gilroy text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium font-gilroy">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 text-gray-500 dark:text-gray-400 text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium font-gilroy transition-all duration-300">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 hover:border-primary-600 dark:hover:border-primary-400 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg font-medium font-gilroy transition-all duration-300">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;