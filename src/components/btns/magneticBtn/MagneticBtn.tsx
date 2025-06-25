import type { MagneticWraperInterface } from "../../../interfaces/magneticWraperInterface";
import useMagneticBtn from "./useMagneticBtn";

const MagneticBtn = ({ showDot = false,  children, justifyPosition, dotColor }: MagneticWraperInterface) => {

  const { dotRef, containerRef, childWithRef } = useMagneticBtn(children);
 

  // if ( childWithRef.type  !== "button") {
  //   throw new Error("The child must be a button or an anchor element.");
  // };

  return (
    <div ref={containerRef} className={`relative flex ${ justifyPosition ?? 'justify-center'}`}>

      {childWithRef}

      { showDot && <div
        ref={dotRef}
        className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${ dotColor ?? 'bg-gray-300' } opacity-0 transform-gpu `}
        style={{
          top: 'calc(100% + 15px)',
        }}
      /> }
    </div>
  );
};

export default MagneticBtn;
