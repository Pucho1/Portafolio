import type { AnimatedButtonProps } from '../../../interfaces/btnInterfaces';
import MagneticBtn from "../magneticBtn/MagneticBtn";
import BtnChild from '../btnChild/BtnChild';
import { useShowModalOpnet } from '../../../context/ShowModalOpen';
import { useFloatBtnStore } from '../../../context/FloatBtnContext';

import '../btns.css';

const FloatedBtn = ({ className= ''}: AnimatedButtonProps ) => {

  const { isOpen, setIsOpen }               = useShowModalOpnet();
  const { setVisibleFloatBtn, showBorder }  = useFloatBtnStore();

  const hadleClick = (): void => {
    setIsOpen(!isOpen);
    setVisibleFloatBtn(false);
  };

  return (
    <MagneticBtn>
      <button
        className={`animated-btn fixed ${className} border-(--white_midle) ${showBorder ? 'border-1': ''} h-16 w-16  lg:h-20 lg:w-20 rounded-full flex items-center justify-center`}
        onClick={ hadleClick }
        id='btn_ref'
        style={{
          background: isOpen ? '#2563eb' : '#141517'
        }}
      >
        <BtnChild wdt={4} hgt={4}/>
      </button>
    </MagneticBtn>
  );
};

export default FloatedBtn;
