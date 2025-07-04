import type { SectionBtnInterface } from "../../../interfaces/sectionBtnInterface";
import MagneticBtn from '../magneticBtn/MagneticBtn';

const SectionBtn = ({ 
  content= 'Cilk me',
  hgt,
  wdt,
  bgCustom,
  showBorder,
  px,
  minW,
  classCustom,
  justifyPosition,
  onClick,
}: SectionBtnInterface) => {

  return (
		<MagneticBtn justifyPosition={justifyPosition}>
			<button
        onClick={onClick}
        className={
          `animated-btn ${bgCustom ? '' : 'bg-(--gray-900)'} rounded-full flex ${showBorder ? 'border-1 border-(--white_midle)' : 'border-none'}
          items-center   max-w-[35rem]  ${minW ? 'min-w-[16rem]' : ''}  justify-center ${wdt ? '' : 'w-full'} ${classCustom}`
        }
        style={{
          height: `${hgt}rem`,
          width: `${wdt}rem`,
          backgroundColor: bgCustom,
          paddingLeft: `${px}rem`,
          paddingRight: `${px}rem`,
        }}
      >
        <MagneticBtn >
            <span className='flex justify-center items-center'
              style={{
                width: `${wdt}rem`,
                height: `${hgt}rem`,
              }}
            >
              {content}
            </span>
        </MagneticBtn>
       
      </button>
		</MagneticBtn>
  );
};

export default SectionBtn;
