// RatesPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import ResortLogo from './Private Pool/Resort Logo.png';

const RatesPage = () => {
  return (
    <main className="dark:bg-blue-800 bg-blue-200 relative overflow-hidden h-screen">
      <header className="h-24 sm:h-20 flex items-center z-30 w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <img src={ResortLogo} alt="Logo" style={{ height: '140px', width: '140px' }} />
          <div className="uppercase text-gray-800 dark:text-white font-black text-3xl text-left w-full">
            Leonidas Private Pool
          </div>
          <div className="flex items-center">
            <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
              <Link to="/home" className="py-2 px-6 flex">
                Home
              </Link>
              <Link to="/resort" className="py-2 px-6 flex">
                Resort
              </Link>
              <Link to="/rates" className="py-2 px-6 flex">
                Rates
              </Link>
              <Link to="/contact" className="py-2 px-6 flex">
                Contact
              </Link>
            </nav>
            <button className="lg:hidden flex flex-col ml-4">
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
            </button>
          </div>
        </div>
      </header>

      <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden" style={{ backgroundImage: 'url("/Private Pool/Blurred.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto px-5 flex relative py-20 mt-[130px]" style={{ marginTop: '718px' }}>
      </div>
      <div class="md:w-[3000px] md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 mr-[550px]">
  <div class="shadow p-5 rounded-lg border-t-4 border-blue-400 bg-white">
    <p class="uppercase text-sm font-medium text-gray-500">
      Day Tour
    </p>

    <p class="mt-4 text-3xl text-gray-700 font-medium">
      4500 pesos
    </p>

    <p class="mt-4 font-medium text-gray-700">
      8 hours
    </p>

    <div class="mt-8">
      <ul class="grid grid-cols-1 gap-4">
        <li class="inline-flex items-center text-gray-600">
          <svg class="w-4 h-4 mr-2 fill-current text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
          </svg>

          Without room
        </li>

        <li class="inline-flex items-center text-gray-600">
          <svg class="w-4 h-4 mr-2 fill-current text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
          </svg>

          Videoke
        </li>

        <li class="inline-flex items-center text-gray-600">
          <svg class="w-4 h-4 mr-2 fill-current text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
          </svg>

          Use of grill
        </li>
      </ul>
    </div>

    <div class="mt-8">
    </div>
  </div>

  <div class="shadow p-5 rounded-lg border-t-4 border-blue-400 bg-white">
    <p class="uppercase text-sm font-medium text-gray-500">
      Overnight
    </p>

    <p class="mt-4 text-3xl text-gray-700 font-medium">
      6000 pesos
    </p>

    <p class="mt-4 font-medium text-gray-700">
      22 hours
    </p>

    <div class="mt-8">
      <ul class="grid grid-cols-1 gap-4">
        <li class="inline-flex items-center text-gray-600">
          <svg class="w-4 h-4 mr-2 fill-current text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
          </svg>

          Free use of room
        </li>

        <li class="inline-flex items-center text-gray-600">
          <svg class="w-4 h-4 mr-2 fill-current text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
          </svg>

          Videoke
        </li>

        <li class="inline-flex items-center text-gray-600">
          <svg class="w-4 h-4 mr-2 fill-current text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
          </svg>

          Use of grill
        </li>
      </ul>
    </div>
            </div>
        </div>
      </div>
    </main>
  );
};

export default RatesPage;
