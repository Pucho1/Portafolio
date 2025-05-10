import type { AnimatedButtonProps } from "../interfaces/InterfaceDragablebtn";
import useDragableBtn from "./useDragableBtn";



const DragableBtn = ({ title = "Click Me",  onClick }: AnimatedButtonProps) => {

  const {handleMouseLeave, handleMouseEnter, isHovered, dotRef, containerRef, buttonRef } = useDragableBtn();
  
  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        ref={buttonRef}
        className="px-3 py-2 text-white font-medium rounded-lg
                    transition-shadow duration-300 ease-in-out
                  transform hover:-translate-y-1 active:translate-y-0 active:shadow-md"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {title}
      </button>
      
      <div
        ref={dotRef}
        className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gray-300
                  opacity-0 transform-gpu ${isHovered ? 'block' : 'hidden'}`}
        style={{
          top: 'calc(100% + 15px)',
        }}
      />
    </div>
  );
};

export default DragableBtn;