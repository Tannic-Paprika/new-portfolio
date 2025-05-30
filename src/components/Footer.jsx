import React from 'react';
import { BsSend, BsGithub } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden py-20">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-16 w-64 h-64 bg-violet-500/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-fuchsia-500/6 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Author Info Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Created by Raj</h3>
          <p className="text-gray-400">
            Page made using React, TailwindCSS and DaisyUI
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8">
          <h3 className="text-xl font-semibold text-white mb-6">Send Me a Message</h3>
          <form
            action="mailto:rajpattnaik426@gmail.com"
            method="post"
            encType="text/plain"
            className="space-y-4"
          >
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              className="w-full bg-gray-700/30 placeholder-gray-400 text-white rounded-md border border-gray-600/50 px-4 py-2 backdrop-blur-sm"
            />
            <input
              type="email"
              name="Email"
              placeholder="example@gmail.com"
              className="w-full bg-gray-700/30 placeholder-gray-400 text-white rounded-md border border-gray-600/50 px-4 py-2 backdrop-blur-sm"
            />
            <textarea
              name="Message"
              placeholder="Your Message..."
              className="w-full bg-gray-700/30 placeholder-gray-400 text-white rounded-md border border-gray-600/50 px-4 py-2 backdrop-blur-sm h-24 resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-300 hover:from-purple-500 hover:to-violet-500 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <BsSend className="w-5 h-5" />
              Send
            </button>
          </form>

          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a
              href="https://github.com/Tannic-Paprika"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 bg-gray-700/30 rounded-full border border-gray-600/50 transition-all duration-300 hover:bg-gray-700/50 hover:border-purple-500/50 hover:text-purple-300"
            >
              <BsGithub className="w-5 h-5" />
            </a>
            {/* Add more social icons here if needed:
            <a ...><BsTwitterX/></a>
            <a ...><BsInstagram/></a>
            <a ...><BsYoutube/></a>
            */}
          </div>
        </div>
      </div>
    </footer>
  );
}
