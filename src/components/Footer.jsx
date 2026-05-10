'use client'

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

const SOCIALS = [
  { Icon: Github,    href: 'https://github.com/Tannic-Paprika',          label: 'github'   },
  { Icon: Linkedin,  href: 'https://linkedin.com/in/raj-pattnaik',        label: 'linkedin' },
  { Icon: SiLeetcode,href: 'https://leetcode.com/u/warmlobster_87/',      label: 'leetcode' },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#09090b] border-t border-zinc-800 flex flex-col justify-center pl-10 pr-10 py-16"
    >
      <div>

        {/* Big heading */}
        <div className="leading-[1.05] mb-10">
          <h2 className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-black text-white tracking-tight uppercase">Let's</h2>
          <h2
            className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-black tracking-tight uppercase"
            style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.12)', color: 'transparent' }}
          >
            Connect
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10">

          {/* Left */}
          <div className="space-y-6">
            <p className="text-zinc-400 text-lg leading-relaxed max-w-sm">
              Open to interesting backend / AI engineering roles, collaborations, or just a good tech conversation.
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              Open to interesting backend / AI engineering roles, collaborations, or just a
              good tech conversation.
            </p>

            {/* Terminal-style email */}
            <div className="font-mono text-sm bg-[#111113] border border-zinc-800 rounded-lg px-4 py-3">
              <span className="text-emerald-400 mr-2 select-none">❯</span>
              <a
                href="mailto:rajpattnaik426@gmail.com"
                className="text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                rajpattnaik426@gmail.com
              </a>
            </div>

            <div className="flex gap-2 flex-wrap">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 border border-zinc-800 text-zinc-600 text-xs font-mono rounded-lg hover:border-zinc-600 hover:text-zinc-400 transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />{label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <form
            action="mailto:rajpattnaik426@gmail.com"
            method="post"
            encType="text/plain"
            className="space-y-3"
          >
            <input
              type="text"
              name="Name"
              placeholder="name"
              className="w-full bg-[#111113] border border-zinc-800 text-zinc-300 placeholder-zinc-700 rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:border-zinc-600 transition-colors"
            />
            <input
              type="email"
              name="Email"
              placeholder="email@example.com"
              className="w-full bg-[#111113] border border-zinc-800 text-zinc-300 placeholder-zinc-700 rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:border-zinc-600 transition-colors"
            />
            <textarea
              name="Message"
              placeholder="message..."
              rows={4}
              className="w-full bg-[#111113] border border-zinc-800 text-zinc-300 placeholder-zinc-700 rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:border-zinc-600 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-2.5 bg-orange-500 hover:bg-orange-400 text-white text-sm font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" /> send message
            </button>
          </form>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex items-center justify-between flex-wrap gap-4">
          <span className="font-mono text-xs text-zinc-700">raj.pattnaik © 2025</span>
          <span className="font-mono text-xs text-zinc-700">built with react + tailwind</span>
        </div>

      </div>
    </footer>
  );
}
