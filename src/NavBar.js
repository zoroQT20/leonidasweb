// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import ResortLogo from './Private Pool/Resort Logo.png';

const Navbar = () => {
  return (
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
              Room
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
  );
};

export default Navbar;
