import SectionBtn from '../btns/sectionbtn/SectionBtn';

import useFooter from './useFooter';
import './footer.css';
import TimeLinksFooter from './TimeLIksFooter';
import useColitionDetector from '../../utils/useColitionDetector';

const Footer = () => {

  const { handleClick, handleOnClikWsp, phoneNumber, handleOnClikGmail, gMail } = useFooter();

  const sectionId = 'section_ref';
  const buttonId  = 'btn_ref';
  const triguer   = 'footer_seccion';

  useColitionDetector({sectionId, buttonId, triguer});

  return (
    <footer className={`${triguer} flex flex-col bg-[#141517] text-white h-[100vh] justify-between`} id={sectionId}>
      <section className='px-[6%] md:px-[15%]'>
        
        <h2 className="increase_text flex flex-col my-5 mb-12">
          <span className="flex mt-6 text-left items-center">
            <div className="profile-img  mr-3 mt-2"></div>
            Let's work
          </span>
          <span className="text-left w-50">
            together!
          </span>
        </h2>

        <div className="h-20 mt-10 relative">
          <hr className='opacity-20'/>
            <div className="absolute flex left-[50%] sm:left-[60%] bottom-[10%] md:left-[70%]">
              <SectionBtn 
              bgCustom={'rgb(60, 60, 185)'}
              hgt={9} 
              wdt={9} 
              classCustom='md:h-12 md:w-12' 
              content={'Get in touch'}
              onClick={ handleClick }
              />
            </div>
        </div>

        {/* EMAIL CELL_NUMBER */}
        <div className="grid grid-cols-5 gap-4 mt-8 md:w-130">
          <div className="col-span-5 sm:col-span-3">
            <SectionBtn
              hgt={5}
              content={gMail}
              bgCustom= {'transparent'}
              showBorder
              classCustom={'md:w-90'}
              px={3}
              minW
              justifyPosition={'justify-start'}
              onClick={handleOnClikGmail}
            />
          </div>

          <div className="col-span-5 sm:col-span-2">
            <SectionBtn
              hgt={5}
              content={phoneNumber}
              bgCustom= {'transparent'}
              showBorder
              classCustom={'md:w-50'}
              px={3}
              onClick={handleOnClikWsp}
            />
          </div>
        </div>
      </section>
      <TimeLinksFooter />
    </footer>
  );
};

export default Footer;

//with ❤️