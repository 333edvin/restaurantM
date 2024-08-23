'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Layouts=({children})=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return(
        <>
         <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm">
      <nav className="text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Left Menu Items */}
          <div className="hidden md:flex space-x-6">
            <Link href="/">
              <p className="hover:text-gray-900 transition duration-300">Home</p>
            </Link>
            <Link href="/about">
              <p className="hover:text-gray-900 transition duration-300">About</p>
            </Link>
            <Link href="/category">
              <p className="hover:text-gray-900 transition duration-300">Menu</p>
            </Link>
          </div>

          {/* Logo */}
          <div className="flex justify-center items-center w-full md:w-auto">
            <Link href="/">
              <p>
                <Image src="/images/logo.svg" alt="Logo" className="w-32 ml-8 md:ml-16 " />
              </p>
            </Link>
          </div>

          {/* Right Menu Items */}
          <div className="hidden md:flex justify-center items-center space-x-6">
            <Link href="/menu">
              <p className="hover:text-gray-900 transition duration-300">Reservations</p>
            </Link>
            <Link href="/contact">
              <p className="hover:text-gray-900 transition duration-300">Blog</p>
            </Link>
            <Link href="/booking">
              <p className="bg-orange-600 text-white px-4 py-2  hover:bg-yellow-600 transition duration-300">
                Booking
              </p>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              {/* Icon for mobile menu */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/70 backdrop-blur-sm py-4">
            <Link href="/">
              <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black transition duration-300">
                Home
              </p>
            </Link>
            <Link href="/about">
              <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black transition duration-300">
                About
              </p>
            </Link>
            <Link href="/category">
              <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black transition duration-300">
                Menu
              </p>
            </Link>
            <Link href="/menu">
              <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black transition duration-300">
              Reservations
              </p>
            </Link>
            <Link href="/contact">
              <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black transition duration-300">
                Blog
              </p>
            </Link>
            <Link href="/booking">
              <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black bg-orange-600 text-white transition duration-300">
                Booking
              </p>
            </Link>
          </div>
        )}
      </nav>
    </header>
  
      {children}

      <footer className="bg-gray-900 text-white py-8">
          <div className="flex justify-center items-center gap-10">
              <Image src='/images/swiggy.svg' width={100} height={100} className=""/>
              <Image src='/images/zomato.svg' width={100} height={100} className=""/>
          </div>
          <div className="text-center">
            <p className="text-sm text-slate-500 px-5 ">© Copyright 2024 - Restaurant Group. All Rights Reserved | Powered By CONVEB Solutions</p>
          
          </div>
  </footer>


        </>
    )
}

export default Layouts;