'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, X as CloseIcon, PawPrint as PawPrintIcon } from 'lucide-react';

function Header() {
  const Menu = [
    { id: 1, name: 'Home', path: '#' },
    { id: 2, name: 'About', path: '#' },
    { id: 3, name: 'Services', path: '#' },
    { id: 4, name: 'Shop', path: '#' },
    { id: 5, name: 'Contact', path: '#' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);  // Close the menu when a link is clicked
  };

  return (
    <header className="bg-slate-50 text-primary-foreground py-8 px-6 z-10 relative">
        
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 text-blue-600">
          <PawPrintIcon className="w-8 h-8" />
          <h1 className="text-2xl font-bold ">PetBuddy</h1>
        </div>
        <div className='hidden md:flex gap-8 ml-auto text-blue-600'>
          <ul className='flex gap-8 ml-auto text-lg'>
            {Menu.map((menuItem) => (
              <li key={menuItem.id} className='hover:font-medium hover:cursor-pointer transition-all ease-in-out list-none'>
                <Link href={menuItem.path} onClick={handleLinkClick}>
                  {menuItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-center md:hidden'>
          <button onClick={handleMenuClick} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? <CloseIcon className="h-6 w-6 text-blue-600" /> : <MenuIcon className="h-8 w-8 text-blue-600" />}
          </button>
        </div>
        <div className={`fixed inset-0 bg-slate-100 backdrop-blur-md p-8 md:hidden flex flex-col justify-between ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-20`}>
          <button className='absolute top-4 right-4 z-20' onClick={handleMenuClick} aria-label="Close menu">
            <CloseIcon className="h-6 w-6 text-blue-600 hover:text-blue-700" />
          </button>
          <ul className='flex flex-col gap-4 mt-12'>
            {Menu.map((menuItem) => (
              <Link 
                href={menuItem.path} 
                key={menuItem.id}
                onClick={handleLinkClick}
                className='text-blue-600 hover:text-blue-700 hover:cursor-pointer transition-all ease-in-out items-center gap-4 w-full py-4'
              >
                <li className='flex items-center justify-start'>
                  {menuItem.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;