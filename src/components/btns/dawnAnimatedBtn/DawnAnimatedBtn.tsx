import type { AnimatedButtonProps } from '../../../interfaces/btnInterfaces';
import '../btns.css';


const DawnAnimatedBtn = ({ content= 'Cilk me', className= ''}: AnimatedButtonProps ) => {
  return (
	  <button className={`animated-btn ${className} bg-black h-15 w-15 rounded-full flex items-center justify-center`}>
      <span className='flex justify-center items-center'>{content}</span>
    </button>
  );
};

export default DawnAnimatedBtn;
