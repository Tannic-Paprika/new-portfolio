import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Code2, Zap } from 'lucide-react';
import cleardrive from '../image/gallery.jpg';
import livecode from '../image/livecode.png';
import project1 from '../image/project1.png';
import cyber from '../image/cyber.png';

const projectData = [
  {
    id: 1,
    image: cleardrive,
    projectName: 'ClearDrive',
    description:
      'A website which shows the most safest roads during poor visibility conditions to prevent accidents',
    githubLink: 'https://github.com/Tannic-Paprika/ClearDrive',
    pageLink: 'https://devpost.com/software/cleardrive',
    technologies: ['React', 'Node.js', 'Weather API', 'Maps API'],
    category: 'Web Application',
    featured: true
  },
  {
    id: 2,
    image: livecode,
    projectName: 'Live Code',
    description:
      'A code editor made for hackathons in which participants can code together and collaborate',
    githubLink: 'https://github.com/Tannic-Paprika/Live-Code',
    pageLink: 'https://live-code-f3g2.vercel.app/',
    technologies: ['React', 'Socket.io', 'CodeMirror', 'Node.js'],
    category: 'Collaboration Tool',
    featured: true
  },
  {
    id: 3,
    image: project1,
    projectName: 'SmartWatch Stressor',
    description:
      'Built a web interface to show stress levels in real time after ML processing of health vitals from an IoT device',
    githubLink: 'https://github.com/Tannic-Paprika/Titan_hackathon',
    pageLink: 'https://titan_hackathon.pythonanywhere.com/',
    technologies: ['Python', 'Machine Learning', 'IoT', 'Flask'],
    category: 'IoT & ML',
    featured: false
  },
  {
    id: 4,
    image: cyber,
    projectName: 'SnapTrace',
    description:
      'A cybersecurity tool which identifies threats and cyber-attacks from system and network logs',
    githubLink: 'https://github.com/Aankirz/SnapTrace',
    pageLink: 'https://snap-trace.vercel.app/',
    technologies: ['Python', 'Cybersecurity', 'Log Analysis', 'React'],
    category: 'Security Tool',
    featured: false
  }
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  const categories = ['All', 'Web Application', 'Collaboration Tool', 'IoT & ML', 'Security Tool'];

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.1 });
    sectionRef.current && obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const filtered = activeFilter === 'All' ? projectData : projectData.filter(p => p.category === activeFilter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-16 relative overflow-hidden"
    >
      {/* background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-16 w-56 sm:w-80 h-56 sm:h-80 bg-violet-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-fuchsia-500/6 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        {/* header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm mb-4 sm:mb-6">
            <Code2 className="w-4 h-4 mr-2" />
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my most impactful projects that demonstrate my skills in building scalable and innovative solutions
          </p>
        </div>

        {/* filters */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActiveFilter(c)}
              className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border backdrop-blur-sm transition-all duration-300 ${activeFilter === c ? 'bg-purple-500/30 border-purple-400 text-purple-300 shadow-lg shadow-purple-500/20' : 'bg-gray-800/50 border-gray-600/50 text-gray-400 hover:border-purple-500/50 hover:text-purple-300'}`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* grid of projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className={`h-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${i * 150}ms` }}
              onMouseEnter={() => setHoveredProject(p.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 flex flex-col h-full transition-all duration-300 hover:border-purple-500/50 hover:bg-gray-700/50 hover:shadow-lg hover:shadow-purple-500/10 ${hoveredProject === p.id ? 'scale-[1.03] -translate-y-1' : ''}`}>
                {/* image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img src={p.image} alt={p.projectName} className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  {p.featured && (
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-gradient-to-r from-purple-500 to-violet-500 text-white text-[10px] font-semibold rounded-full backdrop-blur-sm flex items-center gap-1"><Zap className="w-3 h-3" />Featured</div>
                  )}
                </div>

                {/* body */}
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{p.projectName}</h3>
                    <span className="text-[10px] sm:text-xs text-purple-400 bg-purple-500/20 px-2 py-0.5 rounded-full border border-purple-500/30">
                      {p.category}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 line-clamp-3">{p.description}</p>

                  {/* tech pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.technologies.map(t => (
                      <span key={t} className="px-1.5 py-0.5 bg-gray-700/50 text-gray-300 text-[10px] sm:text-xs rounded-md border border-gray-600/30">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-2">
                    {p.pageLink && (
                      <a
                        href={p.pageLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 hover:from-purple-500 hover:to-violet-500 hover:shadow-lg hover:shadow-purple-500/25"
                      >
                        <ExternalLink className="w-4 h-4 mr-1.5" />Live Demo
                      </a>
                    )}
                    {p.githubLink && (
                      <a
                        href={p.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-gray-600/50 text-gray-300 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 hover:border-purple-500/50 hover:text-purple-300 hover:bg-purple-500/10 backdrop-blur-sm"
                      >
                        <Github className="w-4 h-4 mr-1.5" />Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* github CTA */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="https://github.com/Tannic-Paprika" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold transition-all duration-300 hover:from-purple-500 hover:to-violet-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
            <Github className="mr-2 w-5 h-5" />View All Projects on GitHub
          </a>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}