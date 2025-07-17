import type { navLikns } from "../../../interfaces/mobileMenu";
import MagneticBtn from "../magneticBtn/MagneticBtn";
import useMobileBtn from "./useMobileBtn";

import './btnMobileLink.css';

const MobileBtn = ({ name, href } : navLikns) => {

	const { handleOnClik,  showDotWhenIsInPage } = useMobileBtn(name);

  return (
		<MagneticBtn>
			<div className="relative">
				<button 
					className={`btn_mobile_link w-full flex items-center p-3 rounded-lg hover:cursor-pointer 
						transition-colors duration-200 `}
					onClick={ () => handleOnClik(href) }
				>
					<span className="text-gray-200 text-5xl">{name}</span>
				</button>
				<div 
					className={`doth absolute w-[10px] h-[10px] bg-white rounded-full -left-3 bottom-[30px]`}
					style={{ opacity:showDotWhenIsInPage() ? 1 : 0 }}
				>
				</div>
			</div>
		</MagneticBtn>
  );
};

export default MobileBtn;
