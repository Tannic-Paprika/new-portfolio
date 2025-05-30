import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight, Code2, Zap } from 'lucide-react';
import cleardrive from '../image/gallery.jpg'
import livecode from '../image/livecode.png'
import project1 from '../image/project1.png'
import cyber from '../image/cyber.png'

// Project data
const projectData = [
  {
    id: 1,
    image: cleardrive, // Replace with actual image paths
    projectName: 'ClearDrive',
    description: 'A website which shows the most safest roads during poor visibility conditions to prevent accidents',
    githubLink: "https://github.com/Tannic-Paprika/ClearDrive",
    pageLink: "https://devpost.com/software/cleardrive",
    technologies: ['React', 'Node.js', 'Weather API', 'Maps API'],
    category: 'Web Application',
    featured: true
  },
  {
    id: 2,
    image: livecode,
    projectName: 'Live Code',
    description: 'A code editor made for hackathons in which participants can code together and collaborate',
    githubLink: "https://github.com/Tannic-Paprika/Live-Code",
    pageLink: "https://live-code-f3g2.vercel.app/",
    technologies: ['React', 'Socket.io', 'CodeMirror', 'Node.js'],
    category: 'Collaboration Tool',
    featured: true
  },
  {
    id: 3,
    image: project1,
    projectName: 'SmartWatch Stressor',
    description: 'Built a web interface to show stress levels in real time after ML processing of health vitals from an IoT device',
    githubLink: "https://github.com/Tannic-Paprika/Titan_hackathon",
    pageLink: "https://titan_hackathon.pythonanywhere.com/",
    technologies: ['Python', 'Machine Learning', 'IoT', 'Flask'],
    category: 'IoT & ML',
    featured: false
  },
  {
    id: 4,
    image: cyber,
    projectName: 'SnapTrace',
    description: 'A cybersecurity tool which identifies threats and cyber-attacks from system and network logs',
    githubLink: "https://github.com/Aankirz/SnapTrace",
    pageLink: "https://snap-trace.vercel.app/",
    technologies: ['Python', 'Cybersecurity', 'Log Analysis', 'React'],
    category: 'Security Tool',
    featured: false
  }
];

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  const categories = ['All', 'Web Application', 'Collaboration Tool', 'IoT & ML', 'Security Tool'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredProjects = activeFilter === 'All'
    ? projectData
    : projectData.filter(p => p.category === activeFilter);

  const scroll = direction => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-violet-500/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-fuchsia-500/6 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">

        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium backdrop-blur-sm mb-6">
            <Code2 className="w-4 h-4 mr-2" />
            Portfolio Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my most impactful projects that demonstrate my skills in building scalable and innovative solutions
          </p>
        </div>

        {/* Filter Categories */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm ${
                activeFilter === cat
                  ? 'bg-purple-500/30 border-purple-400 text-purple-300 shadow-lg shadow-purple-500/20'
                  : 'bg-gray-800/50 border-gray-600/50 text-gray-400 hover:border-purple-500/50 hover:text-purple-300'
              } border`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Container */}
        <div className="relative overflow-visible">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-600/50 text-gray-300 transition-all duration-300 hover:border-purple-500/50 hover:text-purple-300 hover:bg-gray-700/80 hover:scale-110 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-600/50 text-gray-300 transition-all duration-300 hover:border-purple-500/50 hover:text-purple-300 hover:bg-gray-700/80 hover:scale-110 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Projects Grid */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-4 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`flex-shrink-0 w-full sm:w-1/2 md:w-1/3 group transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:bg-gray-700/50 hover:shadow-xl hover:shadow-purple-500/10 ${
                  hoveredProject === project.id ? 'scale-105 -translate-y-2' : ''
                }`}>

                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.projectName}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={e => { e.target.src = '/api/placeholder/400/250'; }}
                    />

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-violet-500 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                        <Zap className="w-3 h-3 inline mr-1" />
                        Featured
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {project.projectName}
                      </h3>
                      <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full border border-purple-500/30">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md border border-gray-600/30 transition-all duration-300 hover:border-purple-500/50 hover:text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.pageLink && (
                        <a
                          href={project.pageLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:from-purple-500 hover:to-violet-500 hover:shadow-lg hover:shadow-purple-500/25 group/btn"
                        >
                          <ExternalLink className="w-4 h-4 mr-2 transition-transform group-hover/btn:scale-110" />
                          Live Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-600/50 text-gray-300 text-sm font-semibold rounded-lg transition-all duration-300 hover:border-purple-500/50 hover:text-purple-300 hover:bg-purple-500/10 backdrop-blur-sm group/btn"
                        >
                          <Github className="w-4 h-4 mr-2 transition-transform group-hover/btn:scale-110" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-block">
            <p className="text-gray-400 mb-4">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com/Tannic-Paprika"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold transition-all duration-300 hover:from-purple-500 hover:to-violet-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 group"
            >
              <Github className="mr-2 w-5 h-5 transition-transform group-hover:scale-110" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default Projects;
