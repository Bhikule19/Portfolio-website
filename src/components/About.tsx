import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Coffee, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [stats, setStats] = useState({
    projects: 0,
    experience: 0,
    clients: 0,
    awards: 0,
  });

  const finalStats = {
    projects: 50,
    experience: 5,
    clients: 25,
    awards: 8,
  };

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          projects: Math.floor(finalStats.projects * progress),
          experience: Math.floor(finalStats.experience * progress),
          clients: Math.floor(finalStats.clients * progress),
          awards: Math.floor(finalStats.awards * progress),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setStats(finalStats);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [inView]);

  const statItems = [
    { icon: Code, label: 'Projects Completed', value: stats.projects, suffix: '+' },
    { icon: Coffee, label: 'Years Experience', value: stats.experience, suffix: '+' },
    { icon: Users, label: 'Happy Clients', value: stats.clients, suffix: '+' },
    { icon: Award, label: 'Awards Won', value: stats.awards, suffix: '' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-gilroy text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="text-center items-center">
          <div className="space-y-6 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold font-gilroy text-gray-900 dark:text-white">
              Passionate Frontend Developer with a Love for Clean Code
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With over 2 years of experience in frontend development, I specialize in creating 
              beautiful, responsive, and user-friendly web applications. My journey started with 
              a curiosity for how websites work, and it has evolved into a passion for crafting 
              exceptional digital experiences.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with the 
              latest technologies and best practices. When I'm not coding, you can find me 
              exploring new design trends, contributing to open-source projects, or exploring AI tools.
            </p>

            <div className="flex flex-wrap gap-3 text-center justify-center mt-6">
              {['React', 'TypeScript', 'PHP', 'Tailwind CSS', 'JavaScript', 'WordPress'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium font-gilroy"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* <div ref={ref} className="grid grid-cols-2 gap-6">
            {statItems.map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  inView ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary-500 rounded-xl mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.value}{item.suffix}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;