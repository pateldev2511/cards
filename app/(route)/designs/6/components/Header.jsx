"use client";

// Header.jsx

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "../../../../../components/ui/button";
import { HomeIcon, MenuIcon } from "./Icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["About", "Programs", "Get Involved", "Donate", "Contact"];
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest("#menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between relative">
      <div className="flex items-center gap-2">
        <HomeIcon className="h-6 w-6" />
        <span className="text-lg font-bold">Homeless Outreach Project</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-4">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href="#"
            className="hover:underline"
            prefetch={false}
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden relative">
        <Button
          id="menu-button"
          variant="outline"
          aria-label="Toggle Menu"
          className="bg-gray-700 hover:bg-gray-600 transition-all ease-in-out"
          onClick={toggleMenu}
        >
          <MenuIcon className="h-6 w-6 text-white" />
        </Button>

        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute right-0 mt-2 w-48 backdrop-blur-sm bg-primary/90 text-primary-foreground rounded-md shadow-lg z-50 border border-gray-600"
          >
            <nav className="flex flex-col p-2">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="px-2 py-3 hover:bg-gray-800 rounded-sm border-b border-gray-500"
                  prefetch={false}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
