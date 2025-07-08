import { X } from "lucide-react";
import MobileBtn from "../btns/mobileBtn/MobileBtn";
import type { MobileMenuProps } from "../../interfaces/mobileMenu";
import TimeLinksFooter from "../foter/TimeLIksFooter";
import { createPortal } from "react-dom";

const MobileMenu = ({ isOpen, onClose, navLinks }: MobileMenuProps) => {


  return (
    createPortal(
    
      <>
        {/* Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-full md:w-1/2 bg-[#141517] z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex flex-col  p-6 pb-0">
            <div className="flex w-full justify-end">
              <button
                onClick={onClose}
                className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="flex w-full ustify-start">
              <h5 className="text-white mb-2 font-bold uppercase text-[0.6em] opacity-50">
                navigation
              </h5>
            </div>

            <hr className="text-gray-200" />
          </div>

          {/* Content */}
          <div className="flex-1 p-6 h-3/4">
            {/* Section 1: Navigation */}
            <div className="h-full">
              <div className="space-y-2">

                {navLinks.map((link) => (
                  <MobileBtn name={link.name}  href={link.href} />
                ))}

              </div>
            </div>

            <hr className="text-gray-200" />
          </div>

          {/* footer  */}
          <footer>
            <TimeLinksFooter />
          </footer>
        </div>
      </>,
      document.body,

    )
  );
};

export default MobileMenu;
