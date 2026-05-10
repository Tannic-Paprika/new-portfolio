'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const PROJECTS = [
  {
    id:    1,
    image: '/images/cyber.png',
    name:  'SnapTrace',
    desc:  'Cybersecurity tool that detects threats and quarantines compromised servers by analyzing real-time system and network logs. Fine-tuned Mistral-8B on the CIDDS dataset.',
    live:  'https://snap-trace.vercel.app/',
    github:'https://github.com/Aankirz/SnapTrace',
    stack: ['Python', 'RabbitMQ', 'Mistral-8B', 'Neo4j'],
  },
  {
    id:    2,
    image: '/images/gallery.jpg',
    name:  'ClearDrive',
    desc:  'Shows the safest roads during poor visibility conditions to prevent accidents using real-time weather and maps data.',
    live:  'https://devpost.com/software/cleardrive',
    github:'https://github.com/Tannic-Paprika/ClearDrive',
    stack: ['React', 'Node.js', 'Weather API', 'Maps API'],
  },
  {
    id:    3,
    image: '/images/livecode.png',
    name:  'Live Code',
    desc:  'Collaborative real-time code editor built for hackathons — pair programming in the browser with live sync.',
    live:  'https://live-code-f3g2.vercel.app/',
    github:'https://github.com/Tannic-Paprika/Live-Code',
    stack: ['React', 'Socket.io', 'CodeMirror', 'Node.js'],
  },
  {
    id:    4,
    image: '/images/project1.png',
    name:  'SmartWatch Stressor',
    desc:  'Real-time stress level display from ML-processed health vitals streamed from an IoT wearable.',
    live:  null,
    github:'https://github.com/Tannic-Paprika/Titan_hackathon',
    stack: ['Python', 'ML', 'IoT', 'Flask'],
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setIsVisible(true), { threshold: 0.05 })
    ref.current && obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} className="bg-[#09090b] flex flex-col justify-center pl-10 pr-10 py-16">

      <div className={`leading-[1.05] mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-black text-white tracking-wide uppercase">Recent</h2>
        <h2
          className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-black tracking-wide uppercase"
          style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.12)', color: 'transparent' }}
        >
          Projects
        </h2>
      </div>

      {/* Mobile: card grid */}
      <div className="grid grid-cols-1 gap-4 sm:hidden">
        {PROJECTS.map((p, i) => (
          <a
            key={p.id}
            href={p.live || p.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block rounded-2xl border border-zinc-800 overflow-hidden transition-all duration-700 hover:border-zinc-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="overflow-hidden">
              <img src={p.image} alt={p.name}
                className="w-full h-40 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors leading-tight">{p.name}</h3>
                <ArrowUpRight className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-3 line-clamp-2">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map(t => (
                  <span key={t} className="font-mono text-[10px] px-2 py-0.5 bg-white/[0.03] border border-zinc-800 text-zinc-500 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Desktop: horizontal list */}
      <div className="hidden sm:block">
        {PROJECTS.map((p, i) => (
          <a
            key={p.id}
            href={p.live || p.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-6 py-8 border-b border-zinc-800/60 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="w-24 h-18 flex-shrink-0 overflow-hidden rounded-xl border border-zinc-800">
              <img src={p.image} alt={p.name}
                className="w-24 h-20 object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors mb-1 leading-tight">
                {p.name}
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed mb-3 max-w-2xl">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map(t => (
                  <span key={t} className="font-mono text-[11px] px-2.5 py-1 bg-white/[0.03] border border-zinc-800 text-zinc-500 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
          </a>
        ))}
      </div>

      <div className={`mt-10 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <a href="https://github.com/Tannic-Paprika" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
          more on github <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

    </section>
  )
}
