import { cloneElement } from "react";
import type { AnimatedDragableButtonProps } from "../../../interfaces/InterfaceDragablebtn";
import useMagneticBtn from "./useMagneticBtn";

const MagneticBtn = ({ showDot = false,  children }: AnimatedDragableButtonProps) => {

  const { dotRef, containerRef, buttonRef } = useMagneticBtn();
  
  // Clono el hijo y le paso la ref
  const childWithRef = cloneElement(children, { ref: buttonRef });

  if ( childWithRef.type  !== "button") {
    throw new Error("The child must be a button or an anchor element.");
  };


  return (
    <div ref={containerRef} className="relative inline-block">

      {childWithRef}

      { showDot && <div
        ref={dotRef}
        className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gray-300
                  opacity-0 transform-gpu `}
        style={{
          top: 'calc(100% + 15px)',
        }}
      /> }
    </div>
  );
};

export default MagneticBtn;
