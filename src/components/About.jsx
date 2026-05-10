'use client'

import React, { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setIsVisible(true), { threshold: 0.1 });
    ref.current && obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="bg-[#09090b] flex flex-col justify-center pl-10 pr-10 py-16">

      <div className={`leading-[1.05] mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-black text-white tracking-wide uppercase">About</h2>
        <h2
          className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-black tracking-wide uppercase"
          style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.12)', color: 'transparent' }}
        >
          Me
        </h2>
      </div>

      <div className={`max-w-2xl space-y-6 text-zinc-400 text-lg leading-relaxed transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <p>
          I build <span className="text-white font-semibold">production-grade backends</span> with FastAPI, Spring and Node.js — equally comfortable architecting <span className="text-white font-semibold">monoliths or event-driven micro-services</span> that stay fast under load.
        </p>
        <p>
          Deep in the <span className="text-white font-semibold">AI / LLM</span> space — shipping <span className="text-white font-semibold">MCPs</span>, toying with <span className="text-white font-semibold">Claude skills</span>, integrating <span className="text-white font-semibold">Langfuse</span> for AI observability, and orchestrating reliable workflows with <span className="text-white font-semibold">Temporal</span> and <span className="text-white font-semibold">Airflow</span>.
        </p>
        <p>
          Wired for <span className="text-white font-semibold">performance & reliability</span> — I instrument everything with <span className="text-white font-semibold">Datadog, SigNoz, and Grafana</span>, containerise with Docker, orchestrate with <span className="text-white font-semibold">Kubernetes</span>, and ship to AWS with CI/CD baked in.
        </p>
      </div>
    </section>
  );
}
