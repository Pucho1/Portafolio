import type { SectionBtnInterface } from "../../../interfaces/sectionBtnInterface";
import MagneticBtn from "../magneticBtn/MagneticBtn";

const SectionBtn = ({ content= 'Cilk me', hgt = 15, wdt = 15 }: SectionBtnInterface) => {

  return (
		<MagneticBtn>
			<button className={`animated-btn bg-black h-${hgt} w-${wdt} rounded-full flex items-center justify-center`}>
        <span className='flex justify-center items-center'>{content}</span>
      </button>
		</MagneticBtn>
     
  );
};

export default SectionBtn;