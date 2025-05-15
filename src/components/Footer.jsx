import React from 'react';
import { FaInstagram, FaGithub, FaMountain } from 'react-icons/fa';
import { SiGit } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center space-x-3">
            <FaMountain className="text-2xl text-blue-300" />
            <h1 className="text-2xl font-bold tracking-wider text-white">
              URBAN <span className="text-blue-300">TRIP</span>
            </h1>
          </div>
          <div className="flex space-x-6">
            <a 
              href="#" 
              aria-label="Instagram" 
              className="p-3 bg-white/10 rounded-full hover:bg-pink-500/30 transition-all duration-300 group"
            >
              <FaInstagram className="text-xl text-white group-hover:text-pink-400 transition-colors duration-300" />
            </a>
            <a 
              href="https://git-scm.com/" 
              aria-label="Git" 
              className="p-3 bg-white/10 rounded-full hover:bg-red-500/30 transition-all duration-300 group"
            >
              <SiGit className="text-xl text-white group-hover:text-red-400 transition-colors duration-300" />
            </a>
            <a 
              href="https://github.com/yourprofile" 
              aria-label="GitHub" 
              className="p-3 bg-white/10 rounded-full hover:bg-gray-400/30 transition-all duration-300 group"
            >
              <FaGithub className="text-xl text-white group-hover:text-gray-300 transition-colors duration-300" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="#" className="hover:text-blue-300 transition-colors duration-300">Home</a>
            <a href="#" className="hover:text-blue-300 transition-colors duration-300">About</a>
            <a href="#" className="hover:text-blue-300 transition-colors duration-300">Mountains</a>
          </div>
          <div className="pt-6 border-t border-white/10 w-full text-center">
            <p className="text-xs text-blue-200">
              © 2025 URBAN TRIP. All rights reserved.
            </p>
            <p className="text-[10px] text-blue-300/70 mt-1">
              Exploring the peaks of adventure
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}