import React from 'react';
import { Link } from 'react-router-dom';
import { useMountains } from '../components/MountainContext';

export default function Header() {
  const { isAuthenticated } = useMountains();

  return (
    <header className="w-full h-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <h3 className="uppercase text-sm tracking-widest text-blue-100 group-hover:text-white transition-colors duration-300 font-bold">
            Urban Trip
          </h3>
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="relative text-white font-medium hover:text-blue-200 transition-colors duration-300 px-2 py-1"
          >
            Home
            <span className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/aboutme" 
            className="relative text-white font-medium hover:text-blue-200 transition-colors duration-300 px-2 py-1"
          >
            About me
            <span className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            to="/mountains" 
            className="relative text-white font-medium hover:text-blue-200 transition-colors duration-300 px-2 py-1"
          >
            Mountains
            <span className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center space-x-6">
              <Link
                to="/user"
                className="flex items-center space-x-2 group"
                aria-label="User profile"
              >
                <div className="relative">
                  <img
                    className="w-9 h-9 rounded-full object-cover border-2 border-white/30 group-hover:border-white/50 transition-all duration-300"
                    src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                    alt="User profile"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-800"></span>
                </div>
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="px-5 py-2 text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300 border border-white/30 hover:border-white/50"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="px-5 py-2 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
