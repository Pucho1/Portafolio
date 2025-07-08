import type { AnimatedButtonProps } from '../../../interfaces/btnInterfaces';
import MagneticBtn from "../magneticBtn/MagneticBtn";
import BtnChild from '../btnChild/BtnChild';
import { useShowModalOpnet } from '../../../context/ShowModalOpen';

import '../btns.css';

const DawnAnimatedBtn = ({ content= 'Cilk me', className= ''}: AnimatedButtonProps ) => {

  const { isOpen, setIsOpen, setVisibleFloatBtn}  = useShowModalOpnet();

  const hadleClose = (): void => {
    setIsOpen(!isOpen);
    setVisibleFloatBtn(false);
  };

  return (
    <MagneticBtn>
      <button
        className={`fixed animated-btn ${className} bg-(--gray-900) h-20 w-20 rounded-full flex items-center justify-center`}
        onClick={ hadleClose }
      >
        <BtnChild content={content} wdt={4} hgt={4}/>
      </button>
    </MagneticBtn>
  );
};

export default DawnAnimatedBtn;
