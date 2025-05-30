import React, { useState, useEffect, useRef } from 'react';
import { FaPython, FaNodeJs, FaCloud, FaServer } from 'react-icons/fa';
import { SiDjango, SiFlask } from 'react-icons/si';
import jsicon from '../image/icons/js1.png';
import htmlicon from '../image/icons/html5.svg';
import cssicon from '../image/icons/css3.svg';
import reacticon from '../image/icons/react.png';
import nodeicon from '../image/icons/nodejs.svg';
import cppicon from '../image/icons/cpp.svg';
import vsicon from '../image/icons/vscode.svg';
import mongodb from '../image/icons/mongodb.svg';
import aws from '../image/icons/awsimage.png';
import django from '../image/icons/django.png';
import docker from '../image/icons/docker.png';
import ubuntu from '../image/icons/ubuntu.png';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);

  const Skills = [
    { icon: jsicon, name: "JavaScript", category: "Frontend" },
    { icon: htmlicon, name: "HTML5", category: "Frontend" },
    { icon: cssicon, name: "CSS3", category: "Frontend" },
    { icon: reacticon, name: "React", category: "Frontend" },
    { icon: nodeicon, name: "Node.js", category: "Backend" },
    { icon: cppicon, name: "C++", category: "Programming" },
    { icon: mongodb, name: "MongoDB", category: "Database" },
    { icon: vsicon, name: "VS Code", category: "Tools" },
    { icon: aws, name: "AWS", category: "Cloud" },
    { icon: django, name: "Django", category: "Backend" },
    { icon: docker, name: "Docker", category: "DevOps" },
    { icon: ubuntu, name: "Ubuntu", category: "OS" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-12 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 sm:left-32 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-10 sm:right-32 w-60 sm:w-80 h-60 sm:h-80 bg-violet-500/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-fuchsia-500/6 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* About Me Section */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"></div>
            </div>

            <div className="space-y-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                My expertise lies in backend development, with substantial experience in{' '}
                <span className="inline-flex items-center mx-1 px-2 py-1 bg-green-500/20 border border-green-500/30 rounded-md text-green-300 text-sm">
                  <SiDjango className="mr-1" size={14} /> Django
                </span>,{' '}
                <span className="inline-flex items-center mx-1 px-2 py-1 bg-gray-500/20 border border-gray-500/30 rounded-md text-gray-300 text-sm">
                  <SiFlask className="mr-1" size={14} /> Flask
                </span>, and{' '}
                <span className="inline-flex items-center mx-1 px-2 py-1 bg-green-500/20 border border-green-500/30 rounded-md text-green-300 text-sm">
                  <FaNodeJs className="mr-1" size={14} /> Node.js
                </span>.
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I am deeply committed to continuously expanding my knowledge in backend technologies, 
                including{' '}
                <span className="inline-flex items-center mx-1 px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded-md text-purple-300 text-sm">
                  <FaServer className="mr-1" size={14} /> API development
                </span>{' '} and{' '}
                <span className="inline-flex items-center mx-1 px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded-md text-blue-300 text-sm">
                  <FaCloud className="mr-1" size={14} /> cloud computing
                </span>.
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I also bring experience in full-stack development, seamlessly integrating 
                React-based frontends with microservices-driven backends. With a solid background 
                in state management using Redux, I've developed scalable and efficient APIs, 
                leveraging modern backend frameworks and technologies.
              </p>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <span className="text-sm text-gray-500">Constantly evolving</span>
            </div>
          </div>

          {/* Skills Section */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                My Skills
              </h2>
              <p className="text-base sm:text-lg text-gray-400">Technologies I know and actively work with:</p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6">
              {Skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className={`
                    w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 
                    bg-gray-800/50 backdrop-blur-sm 
                    rounded-2xl border border-gray-700/50 
                    flex items-center justify-center 
                    transition-all duration-300 
                    hover:border-purple-500/50 hover:bg-gray-700/50 
                    hover:shadow-lg hover:shadow-purple-500/10 
                    hover:scale-110 hover:-translate-y-2
                    ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                  `}
                  style={{animationDelay: `${index * 100}ms`}}
                  >
                    <img 
                      src={skill.icon} 
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain transition-transform duration-300 group-hover:scale-110" 
                      alt={skill.name}
                    />
                  </div>

                  {hoveredSkill === index && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800/90 backdrop-blur-sm text-white text-sm rounded-lg border border-gray-700/50 whitespace-nowrap z-10">
                      <div className="text-center">
                        <div className="font-medium text-purple-300">{skill.name}</div>
                        <div className="text-xs text-gray-400">{skill.category}</div>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800/90"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-6 sm:mt-8">
              {['Frontend', 'Backend', 'Database', 'Cloud', 'DevOps', 'Tools'].map((category, index) => (
                <span 
                  key={category}
                  className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-full text-sm backdrop-blur-sm"
                  style={{animationDelay: `${(index + 12) * 100}ms`}}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
