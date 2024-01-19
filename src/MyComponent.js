import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './index.css'; // Import your CSS file
import myImage from './Private Pool/4.png'; // Adjust the path based on your project structure
import ResortLogo from './Private Pool/Resort Logo.png';

const MyComponent = () => {
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
        <div className="container mx-auto px-6 flex relative py-16 mt-[130px]">
          
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 mt-10">
            <span className="w-20 h-2 bg-blue-800 dark:bg-white mb-12"></span>
            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
              Leonidas
              <span className="text-5xl sm:text-7xl">Private Pool</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white">
            "Journey to Opulent Waters at Leonidas Private Pool – Where Every Lap is a Regal Retreat."
            </p>
          </div>
          <div className="container custom-container">
            <img src={myImage} id="tv" alt="Description of the image" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyComponent;
