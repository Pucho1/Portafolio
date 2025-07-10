import type { AnimatedButtonProps } from '../../../interfaces/btnInterfaces';
import MagneticBtn from "../magneticBtn/MagneticBtn";
import BtnChild from '../btnChild/BtnChild';
import { useShowModalOpnet } from '../../../context/ShowModalOpen';

import '../btns.css';
import { useFloatBtnStore } from '../../../context/FloatBtnContext';

const FloatedBtn = ({ content= 'Cilk me', className= ''}: AnimatedButtonProps ) => {

  const { isOpen, setIsOpen } = useShowModalOpnet();
  const { setVisibleFloatBtn, showBorder }  = useFloatBtnStore();

  const hadleClose = (): void => {
    setIsOpen(!isOpen);
    setVisibleFloatBtn(false);
  };

  return (
    <MagneticBtn>
      <button
        className={`animated-btn fixed ${className} border-(--white_midle) ${showBorder ?  'border-1': ''} bg-[#141517] h-16 w-16  lg:h-20 lg:w-20 rounded-full flex items-center justify-center`}
        onClick={ hadleClose }
        id='btn_ref'
      >
        <BtnChild content={content} wdt={4} hgt={4}/>
      </button>
    </MagneticBtn>
  );
};

export default FloatedBtn;
