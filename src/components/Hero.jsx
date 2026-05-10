'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { SiLeetcode } from 'react-icons/si'
import { Zap } from 'lucide-react'

const SOCIALS = [
  { Icon: Github,     href: 'https://github.com/Tannic-Paprika' },
  { Icon: Linkedin,   href: 'https://linkedin.com/in/raj-pattnaik' },
  { Icon: SiLeetcode, href: 'https://leetcode.com/u/warmlobster_87/' },
  { Icon: Mail,       href: 'mailto:rajpattnaik426@gmail.com' },
]

const STATS = [
  { value: '3+',  label: 'Years Exp'  },
  { value: '5',   label: 'Companies'  },
  { value: '10+', label: 'Projects'   },
]

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t) }, [])

  return (
    <section className="min-h-screen bg-[#09090b] flex items-center justify-center px-6 sm:px-10 pt-14 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 lg:gap-20 items-center py-16">

        {/* Profile card */}
        <div className={`flex justify-center lg:justify-start transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="relative w-[300px] sm:w-[340px] lg:w-full lg:max-w-[380px]">
            <div className="absolute -inset-4 border-2 border-dashed border-orange-400/30 rounded-[2rem] rotate-3" />
            <div className="absolute -inset-4 border border-orange-400/10 rounded-[2rem] -rotate-2" />
            <div className="relative bg-white rounded-[1.75rem] p-6 shadow-2xl shadow-black/60">
              <div className="rounded-2xl overflow-hidden mb-5">
                <img src="/images/heroImage.jpeg" alt="Raj Pattnaik" className="w-full h-72 object-cover object-top" />
              </div>
              <div className="text-center mb-3">
                <h3 className="text-xl font-bold text-zinc-900">Raj Pattnaik</h3>
                <div className="flex justify-center mt-2.5">
                  <div className="flex items-center gap-1.5 px-3.5 py-1.5 bg-orange-500 rounded-full">
                    <Zap className="w-3.5 h-3.5 text-white" />
                    <span className="text-white text-xs font-semibold tracking-wide">SDE-1 @ DMG</span>
                  </div>
                </div>
              </div>
              <p className="text-zinc-400 text-sm text-center leading-relaxed mb-5 px-2">
                Backend & AI Engineer building resilient, scalable systems.
              </p>
              <div className="flex justify-center gap-2.5">
                {SOCIALS.map(({ Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-zinc-100 hover:bg-orange-500 text-zinc-500 hover:text-white flex items-center justify-center transition-all duration-200">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: big type + stats */}
        <div className={`space-y-8 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="leading-[0.9]">
            <h1 className="text-[clamp(4rem,10vw,8rem)] font-black text-white tracking-tight uppercase">Backend</h1>
            <h1 className="text-[clamp(4rem,10vw,8rem)] font-black tracking-tight uppercase"
              style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)', color: 'transparent' }}>
              Engineer
            </h1>
          </div>
          <p className="text-zinc-400 text-base leading-relaxed max-w-sm">
            I build resilient backends and AI-integrated systems — built to ship and hold up under load.
          </p>
          <div className="flex gap-10 sm:gap-14">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <p className="text-5xl sm:text-6xl font-black text-white leading-none">{value}</p>
                <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mt-2">{label}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3 flex-wrap">
            <a href="mailto:rajpattnaik426@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold rounded-xl transition-colors duration-200">
              <Mail className="w-4 h-4" /> Get in touch
            </a>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-800 text-zinc-400 text-sm font-semibold rounded-xl hover:border-zinc-600 hover:text-zinc-200 transition-all duration-200">
              View work
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
