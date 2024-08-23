'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Kumar_One_Outline } from "next/font/google";

const font = Kumar_One_Outline({ subsets: ["latin"] ,weight:['400']});
// Kumar_One_Outline
const Specials = () => {
  const [currentImage, setCurrentImage] = useState('/images/spc1.jpg');
  const [isHovering, setIsHovering] = useState(false); // State to track button hover

  const imageMap = [
    {
      id: 1,
      img: '/images/spc1.jpg',
      title:"Chicken Wings"
    },
    {
      id: 2,
      img: '/images/spc2.jpg',
      title:"Shrimp Curry"
    },
    {
      id: 3,
      img: '/images/spc3.jpg',
      title:"Beef Curry"
    },
    {
      id: 4,
      img: '/images/spc4.jpg',
      title:"Fish Curry"
    },
  ];

  useEffect(() => {
    // Change image every 3 seconds if not hovering
    let intervalId;
    if (!isHovering) {
      intervalId = setInterval(() => {
        setCurrentImage((prevImage) => {
          const currentIndex = imageMap.findIndex((img) => img.img === prevImage);
          const nextIndex = (currentIndex + 1) % imageMap.length;
          return imageMap[nextIndex].img;
        });
      }, 3000);
    }

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, [isHovering]); // Re-run effect when hover state changes

  return (
    <div className="relative flex flex-col items-center justify-center w-full ">
      {/* Image Display */}
      <div className="relative w-full ">
        <img
          src={currentImage}
          alt="Dynamic Image"
          className="transition-opacity w-full md:h-[600px] duration-300 ease-in-out object-cover"
        />
      </div>

      {/* Buttons (hidden on mobile) */}
      <div className="absolute bottom-0 hidden md:flex w-full h-full">
        {imageMap.map((image) => (
          <div
            key={image.id}
            onMouseEnter={() => {
              setCurrentImage(image.img);
              setIsHovering(true);
            }}
            onMouseLeave={() => setIsHovering(false)}
            className="flex justify-center items-center border border-slate-800 bg-black/30 text-white text-2xl md:hover:text-3xl ease-in-out duration-100 w-full h-full font-semibold"
          >
            {image.title}
          </div>
        ))}
      </div>

      <div className="absolute top-24 md:top-10  text-center">
        <p className={`font-bold text-white text-5xl  md:text-9xl ${font.className}`}>Specials</p>
      </div>
    </div>
  );
};

export default Specials;
