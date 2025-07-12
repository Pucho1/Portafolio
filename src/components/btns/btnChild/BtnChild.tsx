// import { Menu } from "lucide-react";
import { useShowModalOpnet } from "../../../context/ShowModalOpen";
import type { MagneticBtnChildProps } from "../../../interfaces/btnInterfaces";
import MagneticBtn from "../magneticBtn/MagneticBtn";

const BtnChild = ({wdt, hgt}: MagneticBtnChildProps) => {

const { isOpen } = useShowModalOpnet();


  return (
    <MagneticBtn >
		<div className={`relative flex flex-col gap-2 justify-center items-center`}
			style={  {
				width: `${wdt}rem`,
				height: `${hgt}rem`,
			}}
		>
			 <span
        className={`
          block h-[1.5px]  w-6 bg-white rounded transform transition-all duration-300 ease-in-out
          ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}
        `}
      />
      <span
        className={`
          block h-[1.5px] w-6 bg-white rounded transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-0' : 'opacity-100'}
        `}
      />
      <span
        className={`
          block h-[1.5px] w-6 bg-white rounded transform transition-all duration-300 ease-in-out
          ${isOpen ? '-rotate-45 -translate-y-[10px]' : ''}
        `}
      />
			 {/* <Menu size={20} color="white"/> */}
		</div>
	</MagneticBtn>
  );
};

export default BtnChild;
