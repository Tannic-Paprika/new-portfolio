import { Mail } from 'lucide-react';
import About      from './components/About';
import Skills     from './components/Skills';
import Footer     from './components/Footer';
import Hero       from './components/Hero';
import Navbar     from './components/Navbar';
import Projects   from './components/Projects';
import Experience from './components/Experience';
import ProfileCard from './components/ProfileCard';

const STATS = [
  { value: '3+',  label: 'Years Exp'  },
  { value: '5',   label: 'Companies'  },
  { value: '10+', label: 'Projects'   },
];

function HeroIntro() {
  return (
    <section className="min-h-screen flex items-center pl-10 pr-10 py-16">
      <div className="space-y-12 w-full">
        <div className="leading-[0.85]">
          <h1 className="text-[clamp(4rem,8vw,9rem)] font-black text-white tracking-tight uppercase">
            Backend
          </h1>
          <h1
            className="text-[clamp(4rem,8vw,9rem)] font-black tracking-tight uppercase"
            style={{ WebkitTextStroke: '2.5px rgba(255,255,255,0.13)', color: 'transparent' }}
          >
            Engineer
          </h1>
        </div>

        <p className="text-zinc-400 text-xl leading-relaxed max-w-lg">
          I build resilient backends and AI-integrated systems — built to ship and hold up under load.
        </p>

        <div className="flex gap-16">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="text-6xl xl:text-7xl font-black text-white leading-none">{value}</p>
              <p className="font-mono text-xs text-zinc-600 uppercase tracking-widest mt-2">{label}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap">
          <a
            href="mailto:rajpattnaik426@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold rounded-xl transition-colors duration-200"
          >
            <Mail className="w-4 h-4" /> Get in touch
          </a>
          <button
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-zinc-800 text-zinc-400 text-sm font-semibold rounded-xl hover:border-zinc-600 hover:text-zinc-200 transition-all duration-200"
          >
            View work
          </button>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />

      {/* ── Desktop: sticky left card + scrollable right, centered ── */}
      <div className="hidden lg:flex max-w-[1220px] mx-auto">
        {/* Sticky left panel */}
        <div className="sticky top-14 self-start w-[500px] flex-shrink-0 h-[calc(100vh-3.5rem)]">
          <ProfileCard />
        </div>

        {/* Scrollable right panel */}
        <div className="flex-1 min-w-0">
          <HeroIntro />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </div>

      {/* ── Mobile: normal stacked layout ── */}
      <div className="lg:hidden">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
