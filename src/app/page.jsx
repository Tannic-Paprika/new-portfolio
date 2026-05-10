'use client'

import { ArrowRight } from 'lucide-react'
import About      from '../components/About'
import Skills     from '../components/Skills'
import Footer     from '../components/Footer'
import Hero       from '../components/Hero'
import Navbar     from '../components/Navbar'
import Projects   from '../components/Projects'
import Experience from '../components/Experience'
import ProfileCard from '../components/ProfileCard'

function HeroIntro() {
  return (
    <section className="flex items-center pl-10 pr-10 pt-40 pb-16 min-h-screen">
      <div className="space-y-12 w-full">
        <div className="leading-[1.05]">
          <h1 className="text-[clamp(4rem,8vw,9rem)] font-black text-white tracking-wide uppercase">
            Backend
          </h1>
          <h1
            className="text-[clamp(4rem,8vw,9rem)] font-black tracking-wide uppercase"
            style={{ WebkitTextStroke: '2.5px rgba(255,255,255,0.13)', color: 'transparent' }}
          >
            Engineer
          </h1>
        </div>

        <p className="text-zinc-400 text-xl leading-relaxed max-w-lg">
          I build resilient backends and AI-integrated systems — built to ship and hold up under load.
        </p>

        {/* Company cards */}
        <div className="space-y-3">
          <p className="font-mono text-[11px] text-zinc-600 uppercase tracking-widest">Notable companies I've worked for</p>
          <div className="flex gap-4 flex-wrap">

            {/* Kiwi card — spinning white border */}
            <div
              className="group relative w-52 h-36 rounded-2xl p-[2px] overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-[1.03]"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {/* Rotating conic gradient border */}
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

              {/* Inner card */}
              <div className="relative w-full h-full rounded-[14px] p-5 overflow-hidden text-left" style={{ backgroundColor: '#b5e535' }}>
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: 'repeating-linear-gradient(45deg, #6abf1a 0, #6abf1a 1px, transparent 0, transparent 50%)', backgroundSize: '12px 12px' }} />
                <img src="/images/history/gokiwinow_logo.jpeg" alt="Kiwi"
                  className="w-8 h-8 rounded-lg object-contain mb-3 relative z-10" />
                <p className="font-black text-zinc-900 text-base uppercase leading-tight relative z-10">Kiwi</p>
                <p className="text-zinc-700 text-[11px] font-mono mt-1 relative z-10">$43M funding · 3M users</p>

                {/* Glass hover overlay with centered arrow */}
                <div className="absolute inset-0 rounded-[14px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] bg-black/40 z-20">
                  <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center backdrop-blur-sm">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* DMG card — spinning orange border */}
            <div
              className="group relative w-72 h-36 rounded-2xl p-[2px] overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-[1.03]"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {/* Rotating conic gradient border */}
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

              {/* Inner card */}
              <div className="relative w-full h-full rounded-[14px] p-5 overflow-hidden" style={{ backgroundColor: '#e8512a' }}>
                {/* White diagonal lines */}
                <div className="absolute inset-0 opacity-15"
                  style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '12px 12px' }} />

                <img src="/images/history/DMG.png" alt="DMG"
                  className="w-10 h-10 rounded-lg object-cover mb-3 relative z-10 border-2 border-white/40" />
                <p className="font-black text-white text-base uppercase leading-tight relative z-10">DMG</p>
                <p className="text-white/70 text-[10px] font-mono mt-1 relative z-10 whitespace-nowrap">$1B valuation · $300M revenue · INC5000</p>

                {/* Glass hover overlay with centered arrow */}
                <div className="absolute inset-0 rounded-[14px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] bg-black/40 z-20">
                  <div className="w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center backdrop-blur-sm">
                    <ArrowRight className="w-5 h-5 text-white" />
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

export default function Page() {
  return (
    <>
      <Navbar />

      {/* Desktop: sticky left card + scrollable right, centered */}
      <div className="hidden lg:flex max-w-[1220px] mx-auto">
        <div className="sticky top-0 self-start w-[500px] flex-shrink-0 h-screen">
          <ProfileCard />
        </div>
        <div className="flex-1 min-w-0">
          <HeroIntro />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </div>

      {/* Mobile: normal stacked layout */}
      <div className="lg:hidden">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  )
}
