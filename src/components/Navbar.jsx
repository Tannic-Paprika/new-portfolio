import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  // Elegant RP Icon Component
  const RPIcon = () => (
    <div className="relative group">
      <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 group-hover:scale-110">
        <span className="text-2xl font-bold bg-gradient-to-br from-white via-purple-200 to-violet-300 bg-clip-text text-transparent tracking-tight transform transition-all duration-300 group-hover:rotate-3">
          RP
        </span>
      </div>
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="w-screen pr-6 pl-5">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
          {/* Left side with RP Logo and Availability Badge - aligned with main content */}
          <div className="flex items-center gap-4 group cursor-pointer ml-0 sm:ml-8 md:ml-12 lg:ml-20 xl:ml-24">
            <RPIcon />
            <span className="inline-flex items-center px-3 py-1.5 bg-gray-800/50 border border-gray-700/50 text-purple-300 rounded-xl text-xs font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              Available for opportunities
            </span>
          </div>

          {/* Right side with CTA Button */}
          <div className="flex items-center">
            {/* CTA Button */}
            <button
              onClick={() => (window.location.href = 'mailto:rajpattnaik426@gmail.com')}
              className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:from-purple-500 hover:to-violet-500 shadow-lg hover:shadow-purple-500/25"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              
              <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative">Hire me</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated bottom border */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent">
        <div className="h-full bg-gradient-to-r from-purple-500/60 to-violet-500/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </nav>
  );
}