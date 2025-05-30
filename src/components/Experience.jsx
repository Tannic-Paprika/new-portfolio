import React, { useState, useEffect, useRef } from 'react';
import { Calendar, ArrowRight, Briefcase } from 'lucide-react';
import NeuralSpaceImage from '../image/history/NeuralSpace.png';
import HyperspecImage from '../image/history/Hyperspec.png';
import IhubImage from '../image/history/Ihub.png';
import KiwiImage from '../image/history/gokiwinow_logo.jpeg';

const experienceData = [
  {
    role: 'Backend Engineer Intern',
    organisation: 'Kiwi',
    startDate: 'January, 2025',
    endDate: 'Present',
    experiences: [
      'Developed core backend services (card provisioning, vault, Yes Bank adapter, polling) in a Java microservices architecture at Kiwi',
      'Optimized caching and log streaming in Signoz to reduce logging costs and improve observability.'
    ],
    imageSrc: KiwiImage,
    type: 'current',
    technologies: ['Java', 'Microservices', 'Signoz', 'Banking APIs']
  },
  {
    role: 'FullStack Engineer Intern',
    organisation: 'NeuralSpace Inc.',
    startDate: 'June, 2024',
    endDate: 'August, 2024',
    experiences: [
      'Developed the Adjust feature similar to the Subtitle Editor app in Linux',
      'Quickened the build file of LocAI frontend by 85%'
    ],
    imageSrc: NeuralSpaceImage,
    type: 'past',
    technologies: ['React', 'Linux', 'Frontend Optimization', 'AI Tools']
  },
  {
    role: 'Software Engineer Intern',
    organisation: 'Hyperspec.AI',
    startDate: 'Sept, 2023',
    endDate: 'April, 2024',
    experiences: [
      'Developed the HMI, or the human‑machine interface',
      'This interface handled real‑time requests from the device used for data visualization and manipulation'
    ],
    imageSrc: HyperspecImage,
    type: 'past',
    technologies: ['HMI Development', 'Real‑time Systems', 'Data Visualization']
  },
  {
    role: 'UG Intern',
    organisation: 'I‑Hub DivyaSampark',
    startDate: 'Oct, 2022',
    endDate: 'August, 2023',
    experiences: [
      'Built a prototype to measure the speed of upcoming vehicles and generate centralized data for over‑speeding of vehicles',
      'Number plate detection using the ANPR technique'
    ],
    imageSrc: IhubImage,
    type: 'past',
    technologies: ['Computer Vision', 'ANPR', 'IoT', 'Data Analytics']
  }
];

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.1 });
    sectionRef.current && obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-16 relative overflow-hidden"
    >
      {/* Section BG light blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-10 sm:right-40 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-10 sm:left-40 w-56 sm:w-80 h-56 sm:h-80 bg-violet-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-fuchsia-500/6 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        {/* header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm mb-4 sm:mb-6">
            <Briefcase className="w-4 h-4 mr-2" />
            Professional Journey
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-3 sm:mb-4">
            Experience
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            My journey through innovative startups and tech companies, building scalable solutions and driving impact
          </p>
        </div>

        {/* timeline */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-violet-500/40 to-fuchsia-500/40 transform sm:-translate-x-1/2" />

          {experienceData.map((item, idx) => {
            /** mobile = full‑width cards on right side; desktop alternates */
            const rightSide = idx % 2 !== 0;
            return (
              <div
                key={idx}
                className={`relative mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${idx * 150}ms` }}
                onMouseEnter={() => setHoveredItem(idx)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* node */}
                <div
                  className={`absolute left-4 sm:left-1/2 w-3 h-3 rounded-full transform sm:-translate-x-1/2 -translate-y-1 ${item.type === 'current' ? 'bg-green-400 animate-pulse' : 'bg-purple-500'}`}
                />

                {/* card */}
                <div
                  className={`mt-0 sm:mt-4 ml-12 sm:ml-0 sm:max-w-[46%] ${rightSide ? 'sm:ml-auto sm:pl-8' : 'sm:pr-8'} ${hoveredItem === idx ? 'scale-[1.02]' : ''}`}
                >
                  <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-5 sm:p-6 transition-all duration-300 hover:border-purple-500/50 hover:bg-gray-700/50 hover:shadow-lg hover:shadow-purple-500/10">
                    {/* header */}
                    <div className="flex items-center gap-3 mb-4">
                      <img src={item.imageSrc} alt={item.organisation} className="w-10 h-10 rounded-xl object-cover border border-gray-600/50" />
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {item.role}
                        </h3>
                        <h4 className="text-purple-400 text-sm font-medium">{item.organisation}</h4>
                      </div>
                    </div>

                    {/* dates */}
                    <div className="flex items-center gap-2 mb-3 text-gray-400 text-xs sm:text-sm">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>
                        {item.startDate} – {item.endDate}
                        {item.type === 'current' && (
                          <span className="ml-2 px-2 py-0.5 bg-green-500/20 border border-green-500/30 text-green-300 rounded-full text-[10px] sm:text-xs">Current</span>
                        )}
                      </span>
                    </div>

                    {/* bullets */}
                    <ul className="space-y-2 mb-3 text-gray-300 text-sm leading-relaxed pl-4 list-disc">
                      {item.experiences.map((e, i) => <li key={i}>{e}</li>)}
                    </ul>

                    {/* tech pills */}
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-full text-[10px] sm:text-xs backdrop-blur-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* bottom CTA */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="#contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold transition-all duration-300 hover:from-purple-500 hover:to-violet-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
            Ready to work together?
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
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
      `}</style>
    </section>
  );
}
