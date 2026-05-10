'use client'

import { useRef, useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Zap } from 'lucide-react'
import { SiLeetcode } from 'react-icons/si'

const SOCIALS = [
  { Icon: Github,     href: 'https://github.com/Tannic-Paprika' },
  { Icon: Linkedin,   href: 'https://linkedin.com/in/raj-pattnaik' },
  { Icon: SiLeetcode, href: 'https://leetcode.com/u/warmlobster_87/' },
  { Icon: Mail,       href: 'mailto:rajpattnaik426@gmail.com' },
]

export default function ProfileCard() {
  const wrapperRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [floatY, setFloatY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const offset = Math.min(window.scrollY * 0.06, 48)
      setFloatY(-offset)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onMouseMove = (e) => {
    const el = wrapperRef.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = (e.clientX - left) / width  - 0.5
    const y = (e.clientY - top)  / height - 0.5
    setTilt({ x: -y * 14, y: x * 14 })
  }

  const onMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <div className="flex items-center justify-center h-full px-[60px]">
      <div
        ref={wrapperRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="relative w-full max-w-[300px]"
        style={{
          perspective: '900px',
          transform: `translateY(${floatY}px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)',
        }}
      >

        {/* Dashed orange decorations */}
        <div className="absolute -inset-6 border-2 border-dashed border-orange-400/40 rounded-[2.8rem] rotate-3 pointer-events-none" />
        <div className="absolute -inset-6 border border-orange-400/15 rounded-[2.8rem] -rotate-2 pointer-events-none" />

        {/* White card */}
        <div className="relative bg-white rounded-[2.2rem] px-6 pt-6 pb-7 shadow-2xl shadow-black/60 text-center">

          {/* Photo */}
          <div className="rounded-2xl overflow-hidden mb-5">
            <img
              src="/images/heroImage.jpeg"
              alt="Raj Pattnaik"
              className="w-full h-72 object-cover object-top"
            />
          </div>

          {/* Name */}
          <h3 className="text-2xl font-black text-zinc-900 tracking-tight mb-3">Raj Pattnaik</h3>

          {/* SDE badge */}
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-1.5 px-4 py-1.5 bg-orange-500 rounded-full shadow-md shadow-orange-500/30">
              <Zap className="w-3.5 h-3.5 text-white" />
              <span className="text-white text-xs font-semibold tracking-wide">SDE-1 @ DMG</span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-zinc-400 text-sm leading-relaxed mb-6 px-2">
            A Backend & AI Engineer building resilient, scalable systems.
          </p>

          {/* Divider */}
          <div className="border-t border-zinc-100 mb-5" />

          {/* Socials */}
          <div className="flex justify-center gap-5">
            {SOCIALS.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-orange-500 transition-colors duration-200"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
