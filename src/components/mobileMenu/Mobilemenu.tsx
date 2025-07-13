import MobileBtn from "../btns/mobileBtn/MobileBtn";
import type { MobileMenuProps } from "../../interfaces/mobileMenu";
import TimeLinksFooter from "../foter/TimeLIksFooter";
import { createPortal } from "react-dom";

const MobileMenu = ({ isOpen, navLinks }: MobileMenuProps) => {


  return (
    createPortal(
      <>
        {/* Menu */}
        <div
          className={`fixed top-0 right-0 h-dvh w-full md:w-1/2 lg:w-1/3 bg-[#141517] z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex flex-col  p-6 pb-0 h-[21%]">
            <div className="flex w-full ustify-start h-full">
              <h5 className="flex items-end text-white mb-6 font-bold uppercase text-[0.6em] opacity-50">
                navigation
              </h5>
            </div>

            <hr className="text-gray-200" />
          </div>

          {/* Content */}
          <div className="flex-1 p-6 pb-0 h-[63%]">
            {/* Section 1: Navigation */}
            <div className="h-full">
              <div className="space-y-2">

                {navLinks.map((link, index) => (
                  <MobileBtn name={link.name}  href={link.href} key={index}/>
                ))}

              </div>
            </div>

            <hr className="text-gray-200" />
          </div>

          {/* footer  */}
          <footer>
            <TimeLinksFooter showLocalTime={ false}/>
          </footer>
        </div>
      </>,
      document.body,

    )
  );
};

export default MobileMenu;
