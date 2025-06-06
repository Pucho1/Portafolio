import type { AnimatedButtonProps } from '../../../interfaces/btnInterfaces';
import MagneticBtn from "../dragablaBtn/MagneticBtn";
import '../btns.css';

const DawnAnimatedBtn = ({ content= 'Cilk me', className= ''}: AnimatedButtonProps ) => {
  return (
    <MagneticBtn>
      <button className={`animated-btn ${className} bg-black h-15 w-15 rounded-full flex items-center justify-center`}>
        <span className='flex justify-center items-center'>{content}</span>
      </button>
    </MagneticBtn>
  );
};

export default DawnAnimatedBtn;
