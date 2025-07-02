import MagneticBtn from '../btns/magneticBtn/MagneticBtn'
import Clock from '../clock/Clock'

const TimeLinksFooter = () => {

    const footerLinks = [
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/miguelantonioochandarena/",
			icon: "ri-linkedin-line",
		},
		{
			name: "GitHub",
			url: "https://github.com/Pucho1?tab=repositories",
			icon: "ri-github-line",
		},
	];

	return (
    <section className='flex flex-col justify-center mt-10 px-[7%] pb-8 md:flex-row-reverse'>
        {/* LINKS NETWORKS */}
        <div className="flex w-full md:w-1/2 flex-col md:items-end">
          
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
                      { link.name }
                    </button>
                  </MagneticBtn>
                </li>
              )}
            </ul>
          </div>
        </div>

        <hr className='md:hidden my-7 opacity-20 md:hidden'/>

        {/* TIME */}
        <div className="flex justify-between md:justify-start w-full md:w-1/2 md:gap-10">
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
        </div>
    </section>
  );
};

export default TimeLinksFooter;
