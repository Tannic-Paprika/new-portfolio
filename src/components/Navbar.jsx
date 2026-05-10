'use client'

import { useState, useEffect } from 'react'
import { User, Briefcase, Code2, Mail, FileText } from 'lucide-react'

const NAV = [
  { id: 'about',      Icon: User,      label: 'About'      },
  { id: 'experience', Icon: Briefcase, label: 'Experience' },
  { id: 'projects',   Icon: Code2,     label: 'Projects'   },
  { id: 'contact',    Icon: Mail,      label: 'Contact'    },
]

export default function Navbar() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = NAV.map(n => document.getElementById(n.id)).filter(Boolean)

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 px-4 py-2 rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl shadow-xl shadow-black/40">

        {/* Nav icons */}
        {NAV.map(({ id, Icon, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            title={label}
            className={`relative group flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200
              ${active === id
                ? 'bg-orange-500/20 text-orange-400'
                : 'text-zinc-500 hover:text-zinc-200 hover:bg-white/5'
              }`}
          >
            <Icon className="w-4 h-4" />

            {/* Tooltip */}
            <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-150 pointer-events-none">
              {label}
            </span>
          </button>
        ))}

        {/* Divider */}
        <div className="w-px h-5 bg-zinc-700/60 mx-1" />

        {/* Resume */}
        <button
          onClick={() => window.open('https://drive.google.com/file/d/1XZSjZEMm8zTa20mwc3W_fRxi-ZYGaLHG/view')}
          title="Resume"
          className="relative group flex items-center justify-center w-10 h-10 rounded-xl text-zinc-500 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-200"
        >
          <FileText className="w-4 h-4" />

          {/* Tooltip */}
          <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-150 pointer-events-none">
            Resume
          </span>
        </button>

      </div>
    </nav>
  )
}
