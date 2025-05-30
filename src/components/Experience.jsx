import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, ArrowRight, Briefcase } from 'lucide-react';

// Import images directly
import NeuralSpaceImage from '../image/history/NeuralSpace.png';
import HyperspecImage from '../image/history/Hyperspec.png';
import IhubImage from '../image/history/Ihub.png';
import KiwiImage from '../image/history/gokiwinow_logo.jpeg';

const experienceData = [
  {
    role: "Backend Engineer Intern",
    organisation: "Kiwi",
    startDate: "January, 2025",
    endDate: "Present",
    experiences: [
      "Developed core backend services (card provisioning, vault, Yes Bank adapter, polling) in a Java microservices architecture at Kiwi",
      "Optimized caching and log streaming in Signoz to reduce logging costs and improve observability."
    ],
    imageSrc: KiwiImage,
    type: "current",
    technologies: ["Java", "Microservices", "Signoz", "Banking APIs"]
  },
  {
    role: "FullStack Engineer Intern",
    organisation: "NeuralSpace Inc.",
    startDate: "June, 2024",
    endDate: "August, 2024",
    experiences: [
      "Developed the Adjust feature similar to the Subtitle Editor app in Linux",
      "Quickened the build file of LocAI frontend by 85%"
    ],
    imageSrc: NeuralSpaceImage,
    type: "past",
    technologies: ["React", "Linux", "Frontend Optimization", "AI Tools"]
  },
  {
    role: "Software Engineer Intern",
    organisation: "Hyperspec.AI",
    startDate: "Sept, 2023",
    endDate: "April, 2024",
    experiences: [
      "Developed the HMI, or the human-machine interface",
      "This interface handled real-time requests from the device used for data visualization and manipulation"
    ],
    imageSrc: HyperspecImage,
    type: "past",
    technologies: ["HMI Development", "Real-time Systems", "Data Visualization"]
  },
  {
    role: "UG Intern",
    organisation: "I-Hub DivyaSampark",
    startDate: "Oct, 2022",
    endDate: "August, 2023",
    experiences: [
      "Built a prototype to measure the speed of upcoming vehicles and generate centralized data for over-speeding of vehicles",
      "Their number plate was detected using the ANPR technique"
    ],
    imageSrc: IhubImage,
    type: "past",
    technologies: ["Computer Vision", "ANPR", "IoT", "Data Analytics"]
  }
];

function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const sectionRef = useRef(null);

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
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-40 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-80 h-80 bg-violet-500/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-fuchsia-500/6 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium backdrop-blur-sm mb-6">
            <Briefcase className="w-4 h-4 mr-2" />
            Professional Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My journey through innovative startups and tech companies, building scalable solutions and driving impact
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-violet-500/50 to-fuchsia-500/50 transform md:-translate-x-1/2"></div>
          
          {experienceData.map((item, index) => (
            <div
              key={index}
              className={`relative mb-12 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{animationDelay: `${index * 200}ms`}}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Timeline Node */}
              <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-1/2 -translate-y-1 transition-all duration-300 ${
                item.type === 'current' 
                  ? 'bg-green-400 shadow-lg shadow-green-400/50 animate-pulse' 
                  : 'bg-purple-500 shadow-lg shadow-purple-500/50'
              }`}>
                <div className={`absolute inset-0 rounded-full ${
                  item.type === 'current' ? 'bg-green-400' : 'bg-purple-500'
                } animate-ping opacity-20`}></div>
              </div>

              {/* Experience Card */}
              <div className={`ml-20 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-8 md:mr-8 md:text-right' : 'md:pl-8 md:ml-8'
              }`}>
                <div className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 transition-all duration-300 hover:border-purple-500/50 hover:bg-gray-700/50 hover:shadow-lg hover:shadow-purple-500/10 ${
                  hoveredItem === index ? 'scale-105 -translate-y-2' : ''
                }`}>
                  
                  {/* Company Logo & Current Badge */}
                  <div className={`flex items-center gap-4 mb-4 ${
                    index % 2 === 0 ? 'md:flex-row-reverse md:justify-start' : ''
                  }`}>
                    <div className="relative">
                      <img 
                        src={item.imageSrc} 
                        alt={item.organisation}
                        className="w-12 h-12 rounded-xl object-cover border-2 border-gray-600/50 group-hover:border-purple-500/50 transition-colors duration-300"
                      />
                      {item.type === 'current' && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                      )}
                    </div>
                    <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {item.role}
                      </h3>
                      <h4 className="text-purple-400 font-medium">{item.organisation}</h4>
                    </div>
                  </div>

                  {/* Date Range */}
                  <div className={`flex items-center gap-2 mb-4 text-gray-400 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">
                      {item.startDate} - {item.endDate}
                      {item.type === 'current' && (
                        <span className="ml-2 px-2 py-1 bg-green-500/20 border border-green-500/30 text-green-300 rounded-full text-xs">
                          Current
                        </span>
                      )}
                    </span>
                  </div>

                  {/* Experience Points */}
                  <ul className={`space-y-3 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {item.experiences.map((exp, idx) => (
                      <li key={idx} className={`flex items-start gap-3 text-gray-300 ${
                        index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                      }`}>
                        <ArrowRight className={`w-4 h-4 text-purple-400 mt-1 flex-shrink-0 ${
                          index % 2 === 0 ? 'md:rotate-180' : ''
                        }`} />
                        <span className="text-sm leading-relaxed">{exp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    {item.technologies.map((tech, techIdx) => (
                      <span 
                        key={techIdx}
                        className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-full text-xs backdrop-blur-sm transition-all duration-300 hover:bg-purple-500/30 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold transition-all duration-300 hover:from-purple-500 hover:to-violet-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 group cursor-pointer">
            <span>Ready to work together?</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;