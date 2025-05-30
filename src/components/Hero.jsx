import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Code2, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-fuchsia-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Available for opportunities
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Raj</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-300">
                Backend Developer
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              I specialize in Python and JavaScript-based backends, creating scalable 
              and efficient server-side solutions that power impactful applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold transition-all duration-300 hover:from-purple-500 hover:to-violet-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-300 rounded-xl font-semibold transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/10 backdrop-blur-sm">
                View My Work
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <span className="text-sm text-gray-500 font-medium">Connect with me</span>
              <div className="flex space-x-4">
                {[
                  { Icon: Github, href: "https://github.com/Tannic-Paprika", label: "GitHub" },
                  { Icon: Linkedin, href: "https://linkedin.com/in/raj-pattnaik", label: "LinkedIn" },
                  { Icon: Code2, href: "https://leetcode.com/u/warmlobster_87/", label: "LeetCode" }
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 text-gray-400 transition-all duration-300 hover:border-purple-500/50 hover:text-purple-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className={`flex justify-center md:justify-end transform transition-all duration-1000 delay-200 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="relative">
              {/* Animated background decoration */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-3xl -rotate-6 backdrop-blur-sm animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 rounded-3xl rotate-6 backdrop-blur-sm animate-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl shadow-purple-500/10 overflow-hidden border border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-transform duration-500 group">
                {/* Replace this div with your actual image */}
                <img 
                  src="src/image/heroImage.jpeg" 
                  alt="Raj - Backend Developer" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-bounce">👨‍💻</div>
                    <p className="text-purple-300 text-sm">Add your photo here</p>
                  </div>
                </div>
                
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating particles effect */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-70 animate-ping" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-violet-400 rounded-full opacity-70 animate-ping" style={{animationDelay: '3s'}}></div>
                <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-fuchsia-400 rounded-full opacity-70 animate-ping" style={{animationDelay: '4s'}}></div>
              </div>
              
              {/* Rotating tech icons around the image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none">
                <div className="relative w-full h-full animate-spin" style={{animationDuration: '20s'}}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold">JS</div>
                  <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-xs font-bold">TS</div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold">DB</div>
                  <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-400 rounded-full flex items-center justify-center text-xs font-bold">API</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Stats Section */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transform transition-all duration-1000 delay-400 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {[
            { number: "3+", label: "Years Experience" },
            { number: "50+", label: "Projects Built" },
            { number: "15+", label: "Technologies" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-2">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}