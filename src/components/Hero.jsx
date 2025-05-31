import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Code2, ArrowRight } from 'lucide-react';
import heroImage from '../image/heroImage.jpeg';
import { SiLeetcode } from 'react-icons/si';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  return (
    <section className="min-h-screen pt-28 sm:pt-32 lg:pt-36 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-16 w-60 h-60 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-fuchsia-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* text block */}
          <div className={`space-y-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <header className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Raj</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-semibold">Backend Developer</h2>
            </header>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-xl leading-relaxed">
            I design resilient backends be it in Python,JavaScript,Java or G — built for scale, speed, and clean observability.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-2">
              <a
                href="mailto:rajpattnaik426@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold hover:from-purple-500 hover:to-violet-500 transition-transform hover:scale-105"
              >
                Get In Touch <ArrowRight className="ml-3 w-5 h-5" />
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();                         // stop the default jump
                  document
                    .getElementById('projects')               // find the target section
                    ?.scrollIntoView({ behavior: 'smooth' }); // smooth-scroll
                }}
                className="inline-flex items-center justify-center px-8 py-4
                          border-2 border-purple-500/30 text-purple-300 rounded-xl
                          font-semibold hover:border-purple-400 hover:bg-purple-500/10"
              >
                View My Work
              </a>
            </div>
            <div className="pt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <span className="text-sm text-gray-500">Checkout my profiles</span>
              <div className="flex gap-5">
                {[Github, Linkedin, SiLeetcode].map((Icon, i) => (
                  <a
                    key={i}
                    href={i === 0 ? 'https://github.com/Tannic-Paprika' : i === 1 ? 'https://linkedin.com/in/raj-pattnaik' : 'https://leetcode.com/u/warmlobster_87/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-transform hover:-translate-y-1"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* image */}
          <div className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative w-72 sm:w-80 lg:w-96 h-72 sm:h-80 lg:h-96 mx-auto lg:ml-auto">
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-3xl -rotate-6 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 rounded-3xl rotate-6 animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-gray-700/50 bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl backdrop-blur-sm hover:scale-105 transition-transform">
                <img src={heroImage} alt="Raj" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}