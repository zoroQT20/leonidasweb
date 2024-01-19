// RoomPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import ResortLogo from './Private Pool/Resort Logo.png';

const RoomPage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slidesData = [
    {
      image: '/Private Pool/Copy of IMG_0783.jpeg',
      text: 'View 1',
    },
    {
      image: '/Private Pool/Copy of IMG_0786.jpeg',
      text: 'View 2',
    },
    {
      image: '/Private Pool/Copy of IMG_0784.jpeg',
      text: 'View 3',
    },
    {
      image: '/Private Pool/Copy of IMG_0787.jpeg',
      text: 'View 4',
    },
    {
      image: '/Private Pool/IMG_0790.jpeg',
      text: 'View 5',
    },
    {
      image: '/Private Pool/3.png',
      text: 'View 6',
    },
    {
      image: '/Private Pool/6.png',
      text: 'View 7',
    },
  ];

  return (
    <div className="dark:bg-blue-800 bg-blue-200 relative overflow-hidden h-screen">
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
          </div>
        </div>
      </header>
      <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden" style={{ backgroundImage: 'url("/Private Pool/Blurred.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-5 flex relative py-20 mt-[130px]" style={{ marginTop: '718px' }}>
          {/* Content above the slider */}
        </div>
        <div className="carousel-container" style={{ width: '60%', margin: '-30px', marginRight: '390px' }}>
          <Slider {...sliderSettings}>
            {slidesData.map((slide, index) => (
              <div key={index}>
                <div style={{ textAlign: 'center', marginBottom: '20px', color: 'white', textShadow: '2px 2px 4px #000' }}>
                  <h2>{slide.text}</h2>
                </div>
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="carousel-image"
                  style={{ height: '600px', width: '600px', marginLeft: '280px', zIndex: 1, objectFit: 'cover' }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
