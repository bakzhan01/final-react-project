import React from 'react';
import { Link } from 'react-router-dom';
import imgmon from '../img/mountain.jpg';
import { useMountains } from '../components/MountainContext';

export default function Home() {
  const { isAuthenticated } = useMountains();

  // console.log("isAuthenticated", isAuthenticated);
  

  return (
    <div className="relative min-h-screen w-full font-sans bg-blue-700 md:bg-transparent overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[35%_65%] h-screen">
        <div className="relative flex flex-col justify-between p-8 md:p-12 lg:p-16 text-white bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 shadow-xl">
          <header className="mb-12">
            <h3 className="text-xs md:text-sm uppercase tracking-wider text-blue-200 font-medium">
              Urban Trip
            </h3>
          </header>
          <main className="flex flex-col justify-center flex-grow -mt-12">
            <div className="space-y-6 max-w-md mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="block">Peaks</span>
                <span className="block">OF</span>
                <span className="block">Almaty</span>
              </h1>
              <p className="text-blue-100/90 text-lg md:text-xl leading-relaxed">
                Discover the breathtaking mountains surrounding Almaty city
              </p>
              <div className="pt-4">
                <Link
                  to="/mountains"
                  className="inline-block px-8 py-3.5 bg-white text-blue-700 rounded-full text-base font-semibold shadow-lg hover:bg-blue-50 hover:scale-[1.02] transform transition-all duration-300 ease-out hover:shadow-xl active:scale-95"
                >
                  Explore the Mountains
                </Link>
              </div>
            </div>
          </main>
          <footer className="mt-12 text-center text-blue-200/80 text-xs">
            <p>© 2025 Urban Trip. All rights reserved.</p>
          </footer>
        </div>
        <div className="relative h-[40vh] sm:h-[50vh] md:h-full">
          <img
            src={imgmon}
            alt="Beautiful mountains of Almaty"
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent md:bg-gradient-to-l md:from-black/40 md:via-black/20 md:to-transparent" />
          <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 md:p-8 lg:p-10 z-20">
            <div className="flex space-x-6 md:space-x-8 lg:space-x-10">
              <Link 
                to="/" 
                className="text-white/90 hover:text-white text-sm font-medium transition-colors duration-300"
              >
                Home
              </Link>
              <Link 
                to="/aboutme" 
                className="hidden md:block text-white/90 hover:text-white text-sm font-medium transition-colors duration-300"
              >
                About me
              </Link>
              <Link 
                to="/mountains" 
                className="text-white/90 hover:text-white text-sm font-medium transition-colors duration-300"
              >
                Mountains
              </Link>
            </div>

            {isAuthenticated ? (
              <Link
                to="/user"
                className="relative w-10 h-10 rounded-full shadow-md hover:scale-105 transform transition-all duration-300 group"
                aria-label="User profile"
              >
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/30 transition-colors duration-300" />
                <img
                  className="absolute inset-0 w-full h-full rounded-full object-cover p-0.5"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                  alt="User profile"
                />
              </Link>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="px-5 py-2.5 bg-white/90 text-blue-700 rounded-full text-sm font-semibold shadow-md hover:bg-white hover:scale-105 transform transition-all duration-300"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="hidden sm:inline-flex px-5 py-2.5 bg-blue-600/90 text-white rounded-full text-sm font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transform transition-all duration-300"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </nav>

          <div className="absolute bottom-10 left-0 right-0 px-6 text-center md:hidden">
            <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-md">Explore Almaty Mountains</h2>
            <p className="text-blue-100/90 drop-shadow-md">Start your adventure today</p>
          </div>
        </div>
      </div>
    </div>
  );
}