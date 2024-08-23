'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { BsMouse } from "react-icons/bs";
import { MdOutlineSwipeVertical } from "react-icons/md";
import { Playfair_Display } from 'next/font/google'

import banner1 from '../../../../public/images/banner1.jpg';
import banner2 from '../../../../public/images/banner2.png';
import banner3 from '../../../../public/images/banner3.jpg';
import leftarrow from '../../../../public/images/left-arrow.svg';
import rightarrow from '../../../../public/images/right-arrow.svg';

const font = Playfair_Display({ subsets: ["latin"]});
const Carousel = () => {


  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: banner1,
      text: `Explore the Legacy, Indulge in the Luxury`,
    },
    {
      id: 2,
      image: banner2,
      text: 'Taste the Tradition, Experience the Exceptional',
    },
    {
      id: 3,
      image: banner3,
      text: 'Discover the Roots, Delight in the Difference',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatic slide change
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="carousel-container relative w-full max-w-full mx-auto overflow-hidden">
      <div
        className="carousel flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative carousel-item w-full flex-shrink-0 relative min-h-screen"
          >
            <Image
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-screen object-cover"
            />
            <div className={`absolute bottom-0 left-0 p-5 pb-20 md:p-0 lg:p-0 md:inset-0  flex flex-col items-start md:items-center md:text-center justify-end md:justify-center  space-y-6  h-screen bg-black/30  ${font.className} `}>
            <h2 className="text-white text-4xl sm:text-3xl md:text-4xl lg:text-7xl font-semibold rounded">
        {slide.text.split(', ')[0]},<br />
        {slide.text.split(', ')[1]}
      </h2>

              <div className="flex md:flex-col justify-between  items-center w-full  pr-5  ">
              <button className="btn bg-orange-600 p-3  text-white">Explore Now</button>
              <div className="md:relative top-32 text-white text-xl border border-2  rounded-full p-2 flex justify-center items-center animate-jump ">
              <BsMouse className="hidden md:inline-block"/>
              <MdOutlineSwipeVertical className="inline-block md:hidden"/>
              </div>
              
              </div>
            </div>


          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <buttons
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white rounded-full  md:text-lg lg:text-xl p-3 "
        onClick={() => setCurrentIndex(prevIndex => prevIndex === 0 ? slides.length - 1 : prevIndex - 1)}
      >

        <Image src={leftarrow} className="w-10 md:w-20"/>
      </buttons>
      <buttons
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white rounded-full  md:text-lg lg:text-xl p-3 "
        onClick={() => setCurrentIndex(prevIndex => prevIndex === slides.length - 1 ? 0 : prevIndex + 1)}
      >
                <Image src={rightarrow}  className="w-10 md:w-20"/>
      </buttons>
    </div>
  );
};

export default Carousel;