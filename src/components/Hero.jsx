'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'
import { SiLeetcode } from 'react-icons/si'
import { Zap } from 'lucide-react'

const SOCIALS = [
  { Icon: Github,     href: 'https://github.com/Tannic-Paprika' },
  { Icon: Linkedin,   href: 'https://linkedin.com/in/raj-pattnaik' },
  { Icon: SiLeetcode, href: 'https://leetcode.com/u/warmlobster_87/' },
  { Icon: Mail,       href: 'mailto:rajpattnaik426@gmail.com' },
]

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t) }, [])

  return (
    <section className="min-h-screen bg-[#09090b] flex flex-col justify-center px-6 sm:px-10 pt-20 pb-16 overflow-hidden">
      <div className="max-w-lg mx-auto w-full space-y-10">

        {/* Profile card */}
        <div className={`flex justify-center transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="relative w-[260px] sm:w-[300px]">
            <div className="absolute -inset-4 border-2 border-dashed border-orange-400/30 rounded-[2rem] rotate-3" />
            <div className="absolute -inset-4 border border-orange-400/10 rounded-[2rem] -rotate-2" />
            <div className="relative bg-white rounded-[1.75rem] p-5 shadow-2xl shadow-black/60">
              <div className="rounded-xl overflow-hidden mb-4">
                <img src="/images/heroImage.jpeg" alt="Raj Pattnaik" className="w-full h-56 object-cover object-top" />
              </div>
              <div className="text-center mb-3">
                <h3 className="text-lg font-bold text-zinc-900">Raj Pattnaik</h3>
                <div className="flex justify-center mt-2">
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-orange-500 rounded-full">
                    <Zap className="w-3 h-3 text-white" />
                    <span className="text-white text-[11px] font-semibold tracking-wide">SDE-1 @ DMG</span>
                  </div>
                </div>
              </div>
              <p className="text-zinc-400 text-xs text-center leading-relaxed mb-4 px-1">
                Backend & AI Engineer building resilient, scalable systems.
              </p>
              <div className="flex justify-center gap-2">
                {SOCIALS.map(({ Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-zinc-100 hover:bg-orange-500 text-zinc-500 hover:text-white flex items-center justify-center transition-all duration-200">
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className={`leading-[0.9] transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h1 className="text-[clamp(3rem,12vw,5rem)] font-black text-white tracking-tight uppercase">Backend</h1>
          <h1
            className="text-[clamp(3rem,12vw,5rem)] font-black tracking-tight uppercase"
            style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)', color: 'transparent' }}
          >
            Engineer
          </h1>
        </div>

        {/* Tagline */}
        <p className={`text-zinc-400 text-base leading-relaxed transition-all duration-700 delay-150 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          I build resilient backends and AI-integrated systems — built to ship and hold up under load.
        </p>

        {/* Company cards */}
        <div className={`space-y-3 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-mono text-[11px] text-zinc-600 uppercase tracking-widest">Notable companies I've worked for</p>
          <div className="flex gap-3 flex-wrap">

            {/* Kiwi card */}
            <div
              className="group relative w-44 h-28 rounded-2xl p-[2px] overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-[1.03]"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div
                className="absolute animate-spin"
                style={{
                  inset: '-60%',
                  background: 'conic-gradient(from 0deg, transparent 270deg, #ffffff 310deg, #e2e8f0 330deg, transparent 360deg)',
                  animationDuration: '3s',
                  animationTimingFunction: 'linear',
                  animationIterationCount: 'infinite',
                }}
              />
              <div className="relative w-full h-full rounded-[14px] p-4 overflow-hidden text-left" style={{ backgroundColor: '#b5e535' }}>
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: 'repeating-linear-gradient(45deg, #6abf1a 0, #6abf1a 1px, transparent 0, transparent 50%)', backgroundSize: '12px 12px' }} />
                <img src="/images/history/gokiwinow_logo.jpeg" alt="Kiwi"
                  className="w-7 h-7 rounded-lg object-contain mb-2 relative z-10" />
                <p className="font-black text-zinc-900 text-sm uppercase leading-tight relative z-10">Kiwi</p>
                <p className="text-zinc-700 text-[10px] font-mono mt-0.5 relative z-10">$43M funding · 3M users</p>
                <div className="absolute inset-0 rounded-[14px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] bg-black/40 z-20">
                  <div className="w-8 h-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* DMG card */}
            <div
              className="group relative w-56 h-28 rounded-2xl p-[2px] overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-[1.03]"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div
                className="absolute animate-spin"
                style={{
                  inset: '-60%',
                  background: 'conic-gradient(from 0deg, transparent 270deg, #3b82f6 310deg, #60a5fa 330deg, transparent 360deg)',
                  animationDuration: '3s',
                  animationTimingFunction: 'linear',
                  animationIterationCount: 'infinite',
                }}
              />
              <div className="relative w-full h-full rounded-[14px] p-4 overflow-hidden" style={{ backgroundColor: '#e8512a' }}>
                <div className="absolute inset-0 opacity-15"
                  style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '12px 12px' }} />
                <img src="/images/history/DMG.png" alt="DMG"
                  className="w-8 h-8 rounded-lg object-cover mb-2 relative z-10 border-2 border-white/40" />
                <p className="font-black text-white text-sm uppercase leading-tight relative z-10">DMG</p>
                <p className="text-white/70 text-[9px] font-mono mt-0.5 relative z-10 whitespace-nowrap">$1B valuation · $300M revenue · INC5000</p>
                <div className="absolute inset-0 rounded-[14px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] bg-black/40 z-20">
                  <div className="w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
