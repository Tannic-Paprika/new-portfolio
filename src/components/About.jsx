import React, { useState, useEffect, useRef } from 'react';
import { FaNodeJs, FaCloud, FaServer } from 'react-icons/fa';
import { SiDjango, SiFlask } from 'react-icons/si';

import jsicon     from '../image/icons/js1.png';
import htmlicon   from '../image/icons/html5.svg';
import cssicon    from '../image/icons/css3.svg';
import reacticon  from '../image/icons/react.png';
import nodeicon   from '../image/icons/nodejs.svg';
import cppicon    from '../image/icons/cpp.svg';
import vsicon     from '../image/icons/vscode.svg';
import mongodb    from '../image/icons/mongodb.svg';
import aws        from '../image/icons/awsimage.png';
import django     from '../image/icons/django.png';
import docker     from '../image/icons/docker.png';
import ubuntu     from '../image/icons/ubuntu.png';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);

  const Skills = [
    { icon: jsicon,   name: 'JavaScript', category: 'Frontend' },
    { icon: htmlicon, name: 'HTML5',      category: 'Frontend' },
    { icon: cssicon,  name: 'CSS3',       category: 'Frontend' },
    { icon: reacticon,name: 'React',      category: 'Frontend' },
    { icon: nodeicon, name: 'Node.js',    category: 'Backend'  },
    { icon: cppicon,  name: 'C++',        category: 'Programming' },
    { icon: mongodb,  name: 'MongoDB',    category: 'Database' },
    { icon: vsicon,   name: 'VS Code',    category: 'Tools' },
    { icon: aws,      name: 'AWS',        category: 'Cloud' },
    { icon: django,   name: 'Django',     category: 'Backend' },
    { icon: docker,   name: 'Docker',     category: 'DevOps' },
    { icon: ubuntu,   name: 'Ubuntu',     category: 'OS' }
  ];

  /* intersection-observer -> fade-in */
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    sectionRef.current && obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900
                 flex items-center justify-center
                 px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-20
                 relative overflow-hidden"
    >
      {/* decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32  left-10  sm:left-32  w-64  sm:w-96 h-64  sm:h-96 bg-purple-500/8  rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-10 sm:right-32 w-60 sm:w-80 h-60 sm:h-80 bg-violet-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4  w-48  sm:w-64 h-48  sm:h-64 bg-fuchsia-500/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-center">

          {/* ───── text side ───── */}
          <div className={`space-y-10 lg:space-y-12 transition-all duration-1000 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0   translate-y-8'}`}>

            <header className="space-y-6 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold
                             bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400
                             bg-clip-text text-transparent leading-tight">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full mx-auto lg:mx-0" />
            </header>

            <div className="space-y-8 text-center lg:text-left">
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                My expertise lies in backend development, with substantial experience in
                {' '}
                <span className="inline-flex items-center mx-1 px-2 py-1
                                 bg-green-500/20 border border-green-500/30 rounded-md
                                 text-green-300 text-sm">
                  <SiDjango className="mr-1" size={14}/> Django
                </span>,{' '}
                <span className="inline-flex items-center mx-1 px-2 py-1
                                 bg-gray-500/20 border border-gray-500/30 rounded-md
                                 text-gray-300 text-sm">
                  <SiFlask className="mr-1" size={14}/> Flask
                </span>{' '}
                and
                {' '}
                <span className="inline-flex items-center mx-1 px-2 py-1
                                 bg-green-500/20 border border-green-500/30 rounded-md
                                 text-green-300 text-sm">
                  <FaNodeJs className="mr-1" size={14}/> Node.js
                </span>.
              </p>

              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I am deeply committed to continuously expanding my knowledge in backend technologies,
                including
                {' '}
                <span className="inline-flex items-center mx-1 px-2 py-1
                                 bg-purple-500/20 border border-purple-500/30 rounded-md
                                 text-purple-300 text-sm">
                  <FaServer className="mr-1" size={14}/> API development
                </span>{' '}
                and
                {' '}
                <span className="inline-flex items-center mx-1 px-2 py-1
                                 bg-blue-500/20 border border-blue-500/30 rounded-md
                                 text-blue-300 text-sm">
                  <FaCloud className="mr-1" size={14}/> cloud computing
                </span>.
              </p>

              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I also bring experience in full-stack development, seamlessly integrating React-based
                frontends with microservices-driven backends. With a solid background in state
                management using Redux, I've developed scalable and efficient APIs, leveraging modern
                backend frameworks and technologies.
              </p>
            </div>
          </div>

          {/* ───── skills side ───── */}
          <div className={`space-y-10 lg:space-y-12 transition-all duration-1000 delay-200 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0   translate-y-8'}`}>

            <header className="space-y-6 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold
                             bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400
                             bg-clip-text text-transparent leading-tight">
                My Skills
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0">
                Technologies I know and actively work with:
              </p>
            </header>

            <div className="flex justify-center lg:justify-start">
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 sm:gap-8 max-w-md sm:max-w-lg lg:max-w-none">
                {Skills.map((s, i) => (
                  <div
                    key={s.name}
                    className="group relative flex justify-center"
                    onMouseEnter={() => setHoveredSkill(i)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24
                                   bg-gray-800/50 backdrop-blur-sm
                                   rounded-2xl border border-gray-700/50
                                   flex items-center justify-center
                                   transition-all duration-300
                                   hover:bg-gray-700/50 hover:border-purple-500/50
                                   hover:shadow-lg hover:shadow-purple-500/10 hover:scale-110 hover:-translate-y-2
                                   ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <img
                        src={s.icon}
                        alt={s.name}
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {hoveredSkill === i && (
                      <div className="absolute -top-16 left-1/2 -translate-x-1/2
                                      px-3 py-2 bg-gray-800/95 backdrop-blur-sm text-white text-sm rounded-xl
                                      border border-gray-700/50 whitespace-nowrap z-10 shadow-lg">
                        <div className="text-center">
                          <span className="font-semibold text-purple-300">{s.name}</span>
                          <div className="text-xs text-gray-400 mt-1">{s.category}</div>
                        </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2
                                        border-4 border-transparent border-t-gray-800/95"/>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {['Frontend','Backend','Database','Cloud','DevOps','Tools'].map(tag => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700/50
                             text-purple-300 rounded-xl text-sm font-medium backdrop-blur-sm
                             transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* fade-in keyframes */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
      `}</style>
    </section>
  );
}