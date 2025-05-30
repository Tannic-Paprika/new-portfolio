import React, { useState, useEffect } from 'react';
import siteIcon from '../image/reactt.svg';
import { BsEnvelope } from 'react-icons/bs';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled 
                ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-lg shadow-purple-500/5' 
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex items-center justify-between h-20">
                    
                    {/* Logo Section */}
                    <div className="flex items-center space-x-4 group">
                        <div className="relative">
                            <img 
                                src={siteIcon} 
                                alt="Site Icon" 
                                className="w-10 h-10 transition-all duration-300 group-hover:rotate-12 drop-shadow-lg filter brightness-110"
                            />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-purple-300 to-violet-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-purple-400 group-hover:to-fuchsia-400">
                            Raj
                        </h1>
                    </div>

                    {/* CTA Button */}
                    <button 
                        className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold transition-all duration-300 hover:from-purple-500 hover:to-violet-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 border border-purple-500/20 backdrop-blur-sm"
                        onClick={() => window.location.href = 'mailto:rajpattnaik426@gmail.com'}
                    >
                        <BsEnvelope className="mr-2 w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                        <span className="relative">Hire me</span>
                        
                        {/* Shine effect overlay */}
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Subtle bottom gradient border */}
            <div className={`h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent transition-opacity duration-500 ${
                isScrolled ? 'opacity-100' : 'opacity-0'
            }`}></div>
        </nav>
    );
}