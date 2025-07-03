import type { AnimatedButtonProps } from '../../../interfaces/btnInterfaces';
import MagneticBtn from "../magneticBtn/MagneticBtn";

import '../btns.css';

const DawnAnimatedBtn = ({ content= 'Cilk me', className= ''}: AnimatedButtonProps ) => {
  return (
    <MagneticBtn>
      <button className={`fixed animated-btn ${className} bg-(--gray-900) h-20 w-20 rounded-full flex items-center justify-center`}>
        <span className='flex justify-center items-center'>{content}</span>
      </button>
    </MagneticBtn>
  );
};

export default DawnAnimatedBtn;
