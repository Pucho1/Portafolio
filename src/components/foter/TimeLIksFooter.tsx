import MagneticBtn from '../btns/magneticBtn/MagneticBtn'
import Clock from '../clock/Clock'
import  footerLinks from '../../data/footerData.json'

const TimeLinksFooter = ({ showLocalTime = true } : {showLocalTime?: boolean}) => {

	return (
    <section className='flex flex-col justify-center mt-10 px-[7%] md:px-8 pb-8 md:flex-row-reverse'>

        {/* LINKS NETWORKS */}
        <div className={`flex w-full md:${showLocalTime ? 'w-1/2' : ''} flex-col md:${showLocalTime ? 'items-end' : 'items-start'} gap-6`}>
          <div>
            <h5 className="text-white mb-2 font-bold uppercase text-[0.6em] opacity-50">
              Socials
            </h5>
            <ul className="flex gap-6">
              {footerLinks.map((link, index) => 
                <li key={index}>
                  <MagneticBtn>
                    <button 
                      className='custom_border pb-2 text-sm' 
                      key={index}
                      onClick={() => window.open(link.url, '_blank')}
                    >
                      <span className="text-gray-200">{ link.name }</span>
                    </button>
                  </MagneticBtn>
                </li>
              )}
            </ul>
          </div>
        </div>

       { showLocalTime &&  <hr className='md:hidden my-7 opacity-20 md:hidden'/>}

        {/* TIME */}
       { showLocalTime && <div className="flex justify-between md:justify-start w-full md:w-1/2 md:gap-10">
          <div>
            <h5 className="text-white mb-3 font-bold uppercase text-[0.6em] opacity-50">
              local Time:
            </h5>
            <Clock />
          </div>

          <div className="flex items-end">
            <span className='text-xs text-gray-400 pb-[0.15rem]'>
              Made  by Miguel Ochandarena  © 2025
            </span>
          </div>
        </div>}
    </section>
  );
};

export default TimeLinksFooter;
