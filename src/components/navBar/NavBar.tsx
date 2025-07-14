import { Link }    from 'react-router';
import { Menu, X } from 'lucide-react';

import MagneticBtn from '../btns/magneticBtn/MagneticBtn';
import useNavBar   from './useNavBar';

import './navBAr.css';
import MobileMenu from '../mobileMenu/Mobilemenu';


const NavBar = ({text_color = 'text-white', dotColor} : {text_color?: string, dotColor?: string}) => {

  //isHome
  const { navLinks, toggleMenu, closeMenu, isOpen, ref, handleOnClik,  } = useNavBar();

  return (
    <header ref={ ref } className="relative top-7 w-full left-0 right-0 z-50 transition-all duration-300 mb-2" >

      <div className="px-4 md:px-7 w-full">
        <div className="flex justify-between items-center font-[450] ">
          <Link to="/" className="flex items-center">
            <div className="p-2 rounded-lg mr-2">
              <img
                // src= { isHome ? "/imgs/WhiteLogo.png" : '/imgs/BlackLogo' }
                src= '/imgs/BlackLogo.png'
                alt="Logo"
                className="h-6 w-7"
              />
            </div>
            <div className='name_animation w-32 overflow-hidden whitespace-nowrap'>
              <p className={`${text_color} text-lg`}>
                Code by Miguel Antonio Martinez
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {/* <li key={'language'} className='flex items-center'>
                <LanguageSwitcher />
              </li> */}
              {navLinks.map((link) => (
                <li key={link.name}>
                  <MagneticBtn showDot dotColor={ dotColor }>
                    <button
                      onClick={ ()=> handleOnClik(link.href) }
                      className={`px-3 py-2 ${text_color} font-medium rounded-lg transition-shadow duration-300 ease-in-out text-lg
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
      <MobileMenu 
        isOpen={isOpen} 
        onClose={closeMenu} 
        navLinks={navLinks}
      />
    </header>
  );
};

export default NavBar;
