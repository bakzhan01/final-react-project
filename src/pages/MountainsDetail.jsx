import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMountains } from '../components/MountainContext';
import imgmon1 from '../img/imgmon1.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MountainDetail() {
  const { id } = useParams();
  const { almatyMountains } = useMountains();
  const mountain = almatyMountains.find((m) => m.id === parseInt(id));

  if (!mountain) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${imgmon1})` }}>
        <div className="text-center p-8 max-w-md bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Mountain Not Found</h1>
          <p className="text-gray-600 mb-6">The mountain you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/mountains"
            className="inline-flex items-center px-5 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Explore Our Mountains
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
    <div className="min-h-screen py-12 bg-cover bg-center" style={{ backgroundImage: `url(${imgmon1})` }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          
          <div className="relative h-96 overflow-hidden">
            <img
              src={mountain.image}
              alt={mountain.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">{mountain.name}</h1>
              <div className="flex items-center text-blue-200">
                <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg font-medium">{mountain.location}</span>
              </div>
            </div>
          </div>
          <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-blue-50 rounded-xl p-6 shadow-sm border border-blue-100">
                <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Altitude</h3>
                <p className="mt-2 text-2xl font-bold text-gray-900">{mountain.altitude}</p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 shadow-sm border border-green-100">
                <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wider">Travel Time</h3>
                <p className="mt-2 text-2xl font-bold text-gray-900">{mountain.travelTime}</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 shadow-sm border border-purple-100">
                <h3 className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Difficulty</h3>
                <p className="mt-2 text-2xl font-bold text-gray-900">{mountain.difficulty}</p>
              </div>
            </div>
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                <span className="text-blue-600">✦</span> Available Activities
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mountain.activities.map((activity, i) => (
                  <li key={i} className="flex items-start bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                    <svg className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-medium">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
              <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                <span className="text-blue-600">✦</span> Interesting Facts
              </h2>
              <ul className="space-y-4">
                {mountain.facts.map((fact, i) => (
                  <li key={i} className="flex items-start bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                    <svg className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center mt-8">
              <Link
                to="/mountains"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Mountains
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}