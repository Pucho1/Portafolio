import type { MagneticBtnChildProps } from "../../../interfaces/btnInterfaces";
import MagneticBtn from "../magneticBtn/MagneticBtn";

const BtnChild = ({content, wdt, hgt}: MagneticBtnChildProps) => {

  return (
    <MagneticBtn >
		<span className={`flex justify-center items-center `}
			style={  {
				width: `${wdt}rem`,
				height: `${hgt}rem`,
			}}
		>
			{content}
		</span>
	</MagneticBtn>
  );
};

export default BtnChild;
