import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, Calendar, Briefcase, GraduationCap, Award } from 'lucide-react';

const Resume: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const resumeData = {
    experience: [
      {
        title: 'Software Developer',
        company: 'Brainstorm Force',
        period: '2024 - Present',
        description: 'Led development of WordPress Plugin applications using PHP, React and WordPress.',
        highlights: [
          'Handled Plugin performance optimization with active user base of 1M+',
          'Enhanced UI with Tailwind CSS and TypeScript for SAAS applications',
          'Addressed user support tickets, improving user satisfaction',
        ],
      },
      {
        title: 'Web Developer',
        company: 'Focal Media LLP',
        period: '2020 - 2022',
        description: 'Developed and maintained WordPress websites, ensuring optimal functionality and user experience at Focal Media LLP. Performed regular website audits, identifying and resolving technical issues to improve overall performance and optimize websites for speed and efficiency',
        highlights: [
          'Built 20+ client websites',
          'Reduced load times by 50%',
        ],
      },
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of Technology',
        period: '2015 - 2019',
        description: 'Graduated with honors, specialized in web technologies and software engineering.',
      },
    ],
    certifications: [
      {
        title: 'React Developer Certification',
        issuer: 'Namaste React',
        year: '2024',
      },
    ],
  };

  const handleDownload = () => {
    
    // Option 1: Open in new tab
    window.open('/Abhishek_Bhikule_Resume_2025.pdf', '_blank');
    
    // Option 2: Force download
    /*
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Abhishek_Bhikule_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    */
    
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-gilroy text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-xl font-gilroy text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my professional journey and qualifications
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div ref={ref} className={`${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Download Button */}
          <div className="text-center mb-12">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl font-semibold font-gilroy transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Download className="w-5 h-5" />
              Download Resume PDF
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Experience & Education */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold font-gilroy text-gray-900 dark:text-white">
                    Work Experience
                  </h3>
                </div>

                <div className="space-y-8">
                  {resumeData.experience.map((job, index) => (
                    <div
                      key={index}
                      className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700"
                    >
                      <div className="absolute left-0 top-0 w-2 h-2 bg-primary-600 rounded-full -translate-x-[3px]"></div>
                      
                      <div className="mb-2">
                        <h4 className="text-xl font-semibold font-gilroy text-gray-900 dark:text-white">
                          {job.title}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-medium font-gilroy">{job.company}</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {job.period}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {job.description}
                      </p>
                      
                      <ul className="space-y-1">
                        {job.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                          >
                            <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              {/* <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold font-gilroy text-gray-900 dark:text-white">
                    Education
                  </h3>
                </div>

                <div className="space-y-6">
                  {resumeData.education.map((edu, index) => (
                    <div key={index}>
                      <h4 className="text-xl font-semibold font-gilroy text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <span className="font-medium font-gilroy">{edu.institution}</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>

            {/* Sidebar - Certifications & Skills */}
            <div className="space-y-8">
              {/* Certifications */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold font-gilroy text-gray-900 dark:text-white">
                    Certifications
                  </h3>
                </div>

                <div className="space-y-4">
                  {resumeData.certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <h4 className="font-semibold font-gilroy text-gray-900 dark:text-white mb-1">
                        {cert.title}
                      </h4>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        <p>{cert.issuer}</p>
                        <p>{cert.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-lg p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6" />
                  <h3 className="text-2xl font-bold font-gilroy">Quick Info</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-primary-100 text-sm">Location</p>
                    <p className="font-semibold font-gilroy">Mumbai, IN</p>
                  </div>
                  <div>
                    <p className="text-primary-100 text-sm">Experience</p>
                    <p className="font-semibold font-gilroy">2+ Years</p>
                  </div>
                  <div>
                    <p className="text-primary-100 text-sm">Availability</p>
                    <p className="font-semibold font-gilroy">Open to opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;