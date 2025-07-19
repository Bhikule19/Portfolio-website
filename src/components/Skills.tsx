import React from 'react';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React', level: 95, color: 'bg-primary-500' },
        { name: 'TypeScript', level: 50, color: 'bg-primary-600' },
        { name: 'NextJS', level: 40, color: 'bg-primary-600' },
      ],
    },
    {
      title: 'Styling & Design',
      skills: [
        { name: 'Tailwind CSS', level: 95, color: 'bg-primary-500' },
        { name: 'SCSS/Sass', level: 90, color: 'bg-primary-600' },
        { name: 'CSS3', level: 95, color: 'bg-primary-400' },
        { name: 'Figma', level: 75, color: 'bg-gray-600' },
      ],
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'PHP', level: 85, color: 'bg-primary-500' },
        { name: 'Plugin Development', level: 90, color: 'bg-primary-400' },
        { name: 'Firebase', level: 80, color: 'bg-primary-600' },
        { name: 'Git', level: 90, color: 'bg-primary-400' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-gilroy text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl font-gilroy text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                inView ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-bold font-gilroy text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium font-gilroy">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out ${
                          inView ? 'animate-fill-progress' : 'w-0'
                        }`}
                        style={{
                          width: inView ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold font-gilroy text-gray-900 dark:text-white mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'WordPress', 'AI Tools', 'Vercel', 'Netlify',
              'Jest', 'Webpack', 'Vite', 'Redux', 'Zustand'
            ].map((tech, index) => (
              <span
                key={index}
                className={`px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium font-gilroy hover:scale-105 transition-transform duration-200 cursor-default ${
                  inView ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.6 + (index * 0.05)}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;