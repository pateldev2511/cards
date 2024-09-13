"use client";

import { useState } from "react";
import Link from "next/link";

export default function D5Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-700 text-white flex justify-between items-center">
      <div className="flex items-center gap-4 p-4">
        <Link href="/designs/5" className="text-xl font-bold">
          Liberty Veterans
        </Link>
        <ul className="hidden md:flex gap-4 justify-center items-center p-4">
          <li>
            <Link href="/designs/5#about-us" className="hover:text-gray-300">About Us</Link>
          </li>
          <li>
            <Link href="/designs/5#programs" className="hover:text-gray-300"> Wellness Programs</Link>
          </li>
          <li>
            <Link href="/designs/5#latest-news" className="hover:text-gray-300">Latest News</Link>
          </li>
          <li>
            <Link href="/designs/5#events" className="hover:text-gray-300">Events</Link>
          </li>
          <li>
            <Link href="/designs/5#Join-Us" className="hover:text-gray-300">Join Us</Link>
          </li>
        </ul>
      </div>
      <div className="flex space-x-4">
        <Link href="/designs/5" className="hidden md:block py-2 px-4 mx-0 hover:text-gray-300">
          Log In
        </Link>
        <Link
          href="/designs/5"
          className="bg-blue-500 text-white py-2 px-4 mx-0 hidden md:block hover:bg-blue-600 transition duration-200"
        >
          Donate
        </Link>
        <button
          onClick={toggleMenu}
          className="md:hidden h-8 w-8 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 12h16M4 6h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`z-50 fixed top-0 right-0 w-64 h-full bg-blue-700/80 backdrop-blur-md text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="h-8 w-8 p-4 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
            />
          </svg>
        </button>
        <ul className="flex flex-col space-y-4 mt-10 ml-4">
          <li>
            <Link href="/designs/5#about-us" onClick={handleCloseMenu} className="hover:text-gray-300">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/designs/5#programs" onClick={handleCloseMenu} className="hover:text-gray-300">
              Programs
            </Link>
          </li>
          <li>
            <Link href="/designs/5#latest-news" onClick={handleCloseMenu} className="hover:text-gray-300">
              Latest News
            </Link>
          </li>
          <li>
            <Link href="/designs/5#events" onClick={handleCloseMenu} className="hover:text-gray-300">
              Events
            </Link>
          </li>
          <li>
            <Link href="/designs/5#contact-us" onClick={handleCloseMenu} className="hover:text-gray-300">
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/designs/5"
              className="bg-blue-500 text-white py-2 px-4 rounded-none mt-4 hover:bg-blue-600 transition duration-200"
              onClick={handleCloseMenu}
            >
              Donate
            </Link>
          </li>
          <li>
            <Link
              href="/designs/5"
              className="py-2 px-4 rounded-none mt-2 hover:text-gray-300"
              onClick={handleCloseMenu}
            >
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
