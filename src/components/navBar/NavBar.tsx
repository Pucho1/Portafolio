import { Menu, X } from 'lucide-react';

import './Navbar.css';
import MagneticBtn from '../btns/magneticBtn/MagneticBtn';
import useNavBar from './useNavBar';
import LanguageSwitcher from '../btns/lenguageSwitcher/LengugeSwitcher';
import { Link } from 'react-router';

const NavBar = ({text_color = 'text-white'} : {text_color?: string}) => {
  const { navLinks, toggleMenu, closeMenu, isOpen, ref, handleOnClik } = useNavBar();

  return (
    <header ref={ ref } className="relative top-5 w-full left-0 right-0 z-50 transition-all duration-300 mb-2" >

      <div className="md:px-2 px-3 w-full">
        <div className="flex justify-between items-center font-[450] ">
          <Link to="/" className="flex items-center">
            <div className="p-2 rounded-lg mr-2">
              <img
                src="public/imgs/logo.png"
                alt="Logo"
                className="h-6 w-8"
              />
            </div>
            <div className='name_animation w-25 overflow-hidden whitespace-nowrap'>
              <p className={`${text_color} text-sm`}>
                Code by Miguel Antonio Martinez
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              <li key={'language'} className='flex items-center'>
                <LanguageSwitcher />
              </li>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <MagneticBtn showDot >
                    <button
                      onClick={ ()=> handleOnClik(link.href) }
                      className={`px-3 py-2 ${text_color} font-medium rounded-lg transition-shadow duration-300 ease-in-out
                                  transform hover:-translate-y-1 active:translate-y-0 active:shadow-md`}
                    >
                      {link.name}
                    </button> 
                  </MagneticBtn>
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
                  className={`text-xl font-medium ${text_color ?  text_color : 'text-gray-800'} hover:text-blue-600 transition-colors duration-300`}
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

export default NavBar;
