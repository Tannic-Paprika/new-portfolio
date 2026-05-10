'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const JOBS = [
  {
    role:    'Software Developer Engineer-1',
    org:     'Divisions Maintenance Group',
    period:  'Sept 2025 — Present',
    link:    'https://dmgpro.com/',
    logo:    '/images/history/DMG.png',
    current: true,
    bullets: [
      'Implemented job invite and photo upload pipelines using Temporal, orchestrating media ingestion, validation, and processing with reliable retries, idempotency, and full workflow traceability via Temporal UI.',
      'Designed an analytics pipeline that pulls mobile app performance data from Datadog APIs, processes 240+ hourly data points across multiple key widgets, and delivers insights to Snowflake and MongoDB.',
      'Integrated Langfuse to monitor LLM activity, capturing prompt flows, model latency, and errors to improve visibility into AI performance and optimize reliability and cost.',
      'Improved data collection speed from 1.5hrs to 20 mins adding connection pooling, intelligent retries, and pagination — achieving 100% accuracy in production monitoring.',
    ],
    stack:   ['Python', 'Node.js', 'Datadog', 'Sentry', 'Microservices', 'Langfuse', 'Temporal'],
  },
  {
    role:    'Backend Engineer Intern',
    org:     'Kiwi',
    period:  'Jan 2025 — Jun 2025',
    link:    'https://gokiwi.in/',
    logo:    '/images/history/gokiwinow_logo.jpeg',
    current: false,
    bullets: [
      'Worked on 4 Spring Boot microservices (card-provisioning, vault, Yes Bank adapter, polling) refactored into onboarding core following various design principles.',
      'Built an Airflow DAG that automatically retries failed LOS pushes for YES Bank users by pulling recent KYC-approved applications, validating backend sync issues, and invoking the LOS push API for recovery.',
      'Reduced Signoz logging cost by 40% by caching multiple states of VKYC and optimized log streaming by setting various severity levels for the logs.',
      'Integrated Meta CAPI to restore iOS conversion tracking, increasing attribution coverage by 28% after iOS 14.5 privacy updates.',
    ],
    stack:   ['Java', 'Spring', 'Redis', 'SigNoz', 'AWS', 'Airflow'],
  },
  {
    role:    'Full-Stack Engineer Intern',
    org:     'NeuralSpace.ai',
    period:  'Jun 2024 — Aug 2024',
    link:    null,
    logo:    '/images/history/NeuralSpace.png',
    current: false,
    desc:    'Full-stack development on the LocAI platform — AI subtitle generation from video. Cut front-end build time by 85% through dependency pruning, lazy loading, and caching.',
    stack:   ['React', 'Node.js', 'Redis', 'NATS', 'Docker'],
  },
  {
    role:    'Developer Intern',
    org:     'Hyperspec.ai',
    period:  'Sept 2023 — Apr 2024',
    link:    null,
    logo:    '/images/history/Hyperspec.png',
    current: false,
    desc:    'Built high-performance backend services for the Hyperlite sensor pipeline and delivered a real-time web HMI for device control and data visualisation.',
    stack:   ['Python', 'Node.js', 'AWS', 'Docker'],
  },
  {
    role:    'UG Intern',
    org:     'I‑Hub DivyaSampark',
    period:  'Oct 2022 — Aug 2023',
    link:    null,
    logo:    '/images/history/Ihub.png',
    current: false,
    desc:    'Built a vehicle speed detection prototype and ANPR-based number plate recognition system for centralized traffic monitoring.',
    stack:   ['Computer Vision', 'ANPR', 'IoT'],
  },
]

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setIsVisible(true), { threshold: 0.05 })
    ref.current && obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="experience" ref={ref} className="bg-[#09090b] flex flex-col justify-center pl-10 pr-10 py-16">

      <div className={`leading-[1.05] mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-black text-white tracking-tight uppercase">Work</h2>
        <h2
          className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-black tracking-tight uppercase"
          style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.12)', color: 'transparent' }}
        >
          Experience
        </h2>
      </div>

      <div>
        {JOBS.map((job, idx) => (
          <div
            key={idx}
            className={`group flex items-start justify-between gap-6 py-10 border-b border-zinc-800/60 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
            <div className="flex items-start gap-5 flex-1 min-w-0">
              <img src={job.logo} alt={job.org}
                className="w-10 h-10 rounded-xl object-contain bg-zinc-900 border border-zinc-800 p-1.5 flex-shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  {job.link ? (
                    <a href={job.link} target="_blank" rel="noopener noreferrer"
                      className="text-2xl font-bold text-white hover:text-orange-400 transition-colors leading-tight">
                      {job.org}
                    </a>
                  ) : (
                    <h3 className="text-2xl font-bold text-white leading-tight">{job.org}</h3>
                  )}
                  {job.current && (
                    <span className="font-mono text-[10px] px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 rounded-full">
                      current
                    </span>
                  )}
                </div>
                <p className="text-orange-400 text-sm font-medium mb-3">{job.role}</p>
                {job.bullets ? (
                  <ul className="text-zinc-400 text-base leading-relaxed mb-4 max-w-2xl space-y-1.5 list-none">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-orange-500 mt-1.5 flex-shrink-0">◦</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-zinc-400 text-base leading-relaxed mb-4 max-w-2xl">{job.desc}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  {job.stack.map(t => (
                    <span key={t} className="font-mono text-[11px] px-2.5 py-1 bg-white/[0.03] border border-zinc-800 text-zinc-500 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="font-mono text-xs text-zinc-600 mt-4">{job.period}</p>
              </div>
            </div>
            {job.link && (
              <ArrowUpRight className="w-5 h-5 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-2" />
            )}
          </div>
        ))}
      </div>

    </section>
  )
}
