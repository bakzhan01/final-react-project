import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMountains } from '../components/MountainContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import imgmon3 from '../img/imgmon3.avif';

export default function Mountains() {
  const { almatyMountains } = useMountains();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-cover bg-center bg-fixed relative" style={{ backgroundImage:  `url(${imgmon3})` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Mountains Around Almaty
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Discover the breathtaking peaks surrounding Almaty
            </p>
          </div>

          <section className="bg-white rounded-xl shadow-md p-8 mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🌄 Welcome to the Almaty Mountains</h2>
            <div className="prose prose-lg text-gray-500 max-w-none">
              <p className="mb-4">
                Explore the heart of the Tien Shan — the picturesque Almaty Mountains, where nature and adventure meet at new heights.
              </p>
              <p>
                The Almaty Mountains are more than just mountains. They're a whole world of experiences, located just a few kilometers from the bustling city. Within 20–30 minutes' drive, you'll find yourself among evergreen spruces, glaciers, mountain lakes, and breathtaking panoramic views.
              </p>
            </div>
          </section>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {almatyMountains.map((mountain) => (
              <Link
                to={`/mountains/${mountain.id}`}
                key={mountain.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 block"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={mountain.image}
                    alt={mountain.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{mountain.name}</h2>
                  <p className="text-gray-600">{mountain.location}</p>
                  <div className="mt-4 flex items-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {mountain.difficulty}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}