
import type { AnimatedButtonProps } from '../../interfaces/btnInterfaces';
import '../btns.css';


const DawnAnimatedBtn = ({ content= 'Cilk me', className= ''}: AnimatedButtonProps ) => {
  return (
	<button className={`animated-btn ${className} bg-black h-15 w-15 rounded-full flex items-center justify-center`}>
      <span className='flex justify-center items-center'>{content}</span>
    </button>

   	// <button className="relative flex items-center justify-center h-15 w-15 text-white rounded-full overflow-hidden group bg-black">
	// 	<span className="text-lg relative z-10">↑</span>
	// 	<span className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-0 group-hover:opacity-20 group-hover:animate-rising-color"></span>
	// </button>
  );
};

export default DawnAnimatedBtn;
