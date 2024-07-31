'use client';
import { HomeIcon, InfoIcon, MailIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-black shadow p-3 z-50 ">
      <div className="container px-6 py-3 mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="logo"
            width={100}
            height={50}
          />
        </Link>
        <div className="flex lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            type="button" 
            className="text-gray-200 hover:text-gray-600 focus:outline-none focus:text-gray-600" 
            aria-label="toggle menu"
          >
            {!isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-between w-full lg:w-auto">
          <div className="flex flex-col lg:flex-row items-center lg:space-x-4">
            <Link href="/about" className="px-2.5 py-2 text-gray-200 duration-300 transform hover:scale-105 lg:mx-2 transition-all ease-in-out">
              About
            </Link>
            <Link href="/contact" className="px-2.5 py-2 text-gray-200 duration-300 transform hover:scale-105 lg:mx-2 transition-all ease-in-out">
              Contact
            </Link>
            <Link href="/" className="flex p-3 text-gray-200 duration-300 transform hover:scale-105 lg:mx-2 items-center justify-center rounded-full border border-zinc-900 bg-zinc-950 transition-all ease-in-out">
              <HomeIcon className="w-6 h-6"/>
            </Link>
          </div>
        </div>
      </div>

      <div className={`fixed top-0 right-0 w-full h-full bg-black transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} transition-transform duration-300 ease-in-out z-50 lg:hidden`}>
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-gray-200 hover:text-gray-400"
            aria-label="close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-start mt-10 pl-8 space-y-6">
        <Link href="/" className="text-gray-200 transition-colors duration-300 transform hover:scale-105 hover:text-gray-100 flex items-center" onClick={() => setIsOpen(false)}>
            <HomeIcon className="w-6 h-6 mr-2" />
            Home
          </Link>
          <Link href="/about" className="text-gray-200 transition-colors duration-300 transform hover:scale-105 hover:text-gray-100 flex items-center" onClick={() => setIsOpen(false)}>
            <InfoIcon className="w-6 h-6 mr-2" />
            About
          </Link>
          <Link href="/contact" className="text-gray-200 transition-colors duration-300 transform hover:scale-105 hover:text-gray-100 flex items-center" onClick={() => setIsOpen(false)}>
            <MailIcon className="w-6 h-6 mr-2" />
            Contact
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;