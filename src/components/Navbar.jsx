import React, { useState, useEffect } from 'react';
import siteIcon from '../image/reactt.svg';
import { Mail } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
          {/* brand */}
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={siteIcon}
                alt="Site Icon"
                className="w-10 h-10 transition-transform duration-300 group-hover:rotate-12"
              />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-purple-300 to-violet-400 bg-clip-text text-transparent">
              Raj
            </h1>
            <span className="hidden md:inline-flex items-center px-3 py-1.5 bg-gray-800/50 border border-gray-700/50 text-purple-300 rounded-xl text-xs font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              Available for opportunities
            </span>
          </div>
          {/* CTA */}
          <button
            onClick={() => (window.location.href = 'mailto:rajpattnaik426@gmail.com')}
            className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold transition-transform duration-300 hover:scale-105 hover:from-purple-500 hover:to-violet-500"
          >
            <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
            Hire me
          </button>
        </div>
      </div>
      {/* bottom hairline */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
    </nav>
  );
}