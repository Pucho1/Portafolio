import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import DragableBtn from '../dragablaBtn/DragableBtn';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" >

      <div className={`container mx-auto px-4 sm:px-6 ${ isScrolled ? 'hidden' : ''} `}>
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <div className="p-2 rounded-lg mr-2" >
              <img
                src="public/imgs/logo.png"
                alt="Logo"
                className="h-6 w-7"
              />
            </div>
            <div className='name_animation w-25 overflow-hidden whitespace-nowrap'>
              <p className=" text-sm">
                Code by Miguel Antonio Martinez
              </p>
            </div>
            
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <DragableBtn
                    title={link.name}
                    onClick={() => {
                      closeMenu();
                      window.location.href = link.href;
                    }}
                  />
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-40 pt-20 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <nav className="h-full">
          <ul className="flex flex-col items-center justify-center space-y-8 h-full">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300"
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;