import SectionBtn from '../../../components/btns/sectionbtn/SectionBtn';
import MagneticBtn from '../../../components/btns/magneticBtn/MagneticBtn';
import Clock from '../../../components/clock/Clock';

import useFooter from './useFooter';
import './footer.css';

const FooterHome = () => {

  const { footerLinks } = useFooter();

  return (
    <footer className="flex flex-col bg-[#141517] text-white h-[100vh] justify-between  ">
      <section className='px-[12%] md:px-[15%]'>
        <h2 className="increase_text flex flex-col my-5 mb-12">
          <span className="flex mt-6 text-left items-center">
            <div className="profileImg mr-3"></div>
            Let's work
          </span>
          <span className="text-left w-50">
            together!
          </span>
        </h2>

        <div className="h-20 mt-10 relative">
          <hr className='opacity-20'/>
            <div className="absolute trigger flex left-[50%] sm:left-[60%] bottom-[10%] md:left-[70%]">
              <SectionBtn hgt={9} wdt={9} classCustom='md:h-12 md:w-12'/>
            </div>
        </div>

        <div className="grid grid-cols-5 gap-4 mt-8 md:w-130">
          <div className="col-span-5 sm:col-span-3">
            <SectionBtn
              hgt={5}
              content={'martinezochandarenam@gmail.com'}
              bgCustom= {'transparent'}
              showBorder
              classCustom={'md:w-90'}
              px={3}
              minW
              justifyPosition={'justify-start'}
            />
          </div>

          <div className="col-span-5 sm:col-span-2">
            <SectionBtn
              hgt={5}
              content={'+34672595322'}
              bgCustom= {'transparent'}
              showBorder
              classCustom={'md:w-50'}
              px={3}
            />
          </div>
        </div>
      </section>

      <section className='flex flex-col justify-center mt-10 px-[7%] pb-4 md:flex-row-reverse'>
        <div className="flex w-full md:w-1/2 flex-col md:items-end">
          <h5 className="text-white mb-2 font-black uppercase text-[0.6em] opacity-30">
           Socials
          </h5>
          <div className="">
            <ul className="flex gap-6">
              {footerLinks.map((link, index) => 
                <li key={index}>
                  <MagneticBtn>
                    <button key={index}> { link.name }</button>
                  </MagneticBtn>
                </li>
              )}
            </ul>
          </div>
        </div>

        <hr className='md:hidden my-7 opacity-20 md:hidden'/>

        <div className="flex justify-between md:justify-start w-full md:w-1/2 md:gap-10">
          <div>
            <h5 className="text-white mb-3 font-black uppercase text-[0.6em] opacity-50">
              local Time:
            </h5>
            <Clock />
          </div>

          <div className="flex items-end">
            <span className='text-xs text-gray-400 pb-[0.15rem]'>
              Made with ❤️ by Miguel Ochandarena  © 2025
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default FooterHome;
