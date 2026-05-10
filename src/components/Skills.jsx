'use client'

import { useEffect, useRef, useState } from 'react'
import {
  SiFastapi, SiSpring, SiRedis, SiTypescript,
  SiKubernetes, SiDatadog, SiApachekafka, SiAnthropic,
  SiMongodb, SiDocker, SiAmazonwebservices
} from 'react-icons/si'

const SKILLS = [
  { icon: '/images/icons/python.svg',  name: 'Python',     sub: 'Primary Language',    bg: '#fff',     iconClass: '' },
  { Icon: SiFastapi,                   name: 'FastAPI',    sub: 'API Framework',        bg: '#fff',     color: '#009688' },
  { Icon: SiSpring,                    name: 'Spring',     sub: 'Java Framework',       bg: '#fff',     color: '#6DB33F' },
  { Icon: SiRedis,                     name: 'Redis',      sub: 'In-Memory Store',      bg: '#fff',     color: '#DC382D' },
  { Icon: SiTypescript,                name: 'TypeScript', sub: 'Typed JavaScript',     bg: '#fff',     color: '#3178C6' },
  { Icon: SiMongodb,                   name: 'MongoDB',    sub: 'NoSQL Database',       bg: '#fff',     color: '#47A248' },
  { Icon: SiAmazonwebservices,         name: 'AWS',        sub: 'Cloud Platform',       bg: '#fff',     color: '#FF9900' },
  { Icon: SiAnthropic,                 name: 'Claude',     sub: 'AI / LLM',             bg: '#fff',     color: '#D97757' },
  { Icon: SiDocker,                    name: 'Docker',     sub: 'Containerisation',     bg: '#fff',     color: '#2496ED' },
  { Icon: SiKubernetes,                name: 'Kubernetes', sub: 'Container Orchestration', bg: '#fff',  color: '#326CE5' },
  { Icon: SiDatadog,                   name: 'Datadog',    sub: 'Observability',        bg: '#fff',     color: '#632CA6' },
  { Icon: SiApachekafka,               name: 'Kafka',      sub: 'Event Streaming',      bg: '#fff',     color: '#231F20' },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setIsVisible(true), { threshold: 0.05 })
    ref.current && obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="bg-[#09090b] flex flex-col justify-center pl-10 pr-10 py-16">

      <div className={`leading-[1.05] mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-black text-white tracking-tight uppercase">Stack</h2>
        <h2
          className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-black tracking-tight uppercase"
          style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.12)', color: 'transparent' }}
        >
          & Tools
        </h2>
      </div>

      <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="grid grid-cols-2 gap-x-6 gap-y-7">
          {SKILLS.map((s, idx) => (
            <div
              key={s.name}
              className="flex items-center gap-4 group"
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              {/* Icon box */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"
                style={{ backgroundColor: s.bg || '#fff' }}
              >
                {s.icon
                  ? <img src={s.icon} alt={s.name} className="w-8 h-8 object-contain" />
                  : <s.Icon size={28} color={s.color || '#111'} />
                }
              </div>

              {/* Text */}
              <div>
                <p className="text-white font-bold text-base leading-tight">{s.name}</p>
                <p className="text-zinc-500 text-sm mt-0.5">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
