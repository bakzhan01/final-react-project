import React, { useState } from 'react';
import {
  FaTelegram,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaMoon,
  FaSun
} from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutMe = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Header />
      <div
        className={`min-h-screen transition-colors duration-500 ${
          darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'
        } flex flex-col items-center justify-center p-6`}
      >
        <button
          onClick={toggleDarkMode}
          className={`flex items-center gap-2 mb-6 px-4 py-2 rounded-full shadow-md font-semibold transition-all duration-300 ${
            darkMode ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        <div className={`rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="md:flex">
            <div className="md:w-1/3 flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-700">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="https://i.pravatar.cc/300"
                  alt="My photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-2/3 p-8 md:p-12">
              <h1 className="text-3xl font-bold mb-2">Ivan Ivanov</h1>
              <p className="text-xl text-blue-500 dark:text-blue-400 mb-6">Frontend Developer</p>

              <div className="mb-8 text-center bg-blue-100 dark:bg-blue-900 rounded-lg py-4">
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">10+</p>
                <p className="text-gray-600 dark:text-gray-300">Completed Projects</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-gray-500 mr-3" />
                  <span>Moscow, Russia</span>
                </div>
                <div className="flex items-center">
                  <FaBirthdayCake className="text-gray-500 mr-3" />
                  <span>23 years</span>
                </div>
              </div>

              <div className="mt-8 flex justify-center space-x-6">
                <a
                  href="https://t.me/yourname"
                  className="hover:text-blue-500 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTelegram size={24} />
                </a>
                <a
                  href="https://github.com/bakzhan01"
                  className="hover:text-black dark:hover:text-white transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/yourname"
                  className="hover:text-blue-700 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center max-w-2xl">
          <p className="italic text-gray-600 dark:text-gray-300">
            "Creating modern and accessible web interfaces with attention to detail. I love clean code and beautiful designs."
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutMe;
