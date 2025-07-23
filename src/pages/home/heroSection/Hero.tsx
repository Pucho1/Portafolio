import useHero from "./useHero";
import { NavBar, TypeWriter} from '../../../components';

import "./hero.css";
// import GlobeScene  from "../../../components/rotatingGlobe/GlobeScene";


const Hero = () => {

  const { marqueeRef,  texts } = useHero();

  return (
    <section className="relative bg-[#aeaeae]">
        <div className="flex flex-col h-[110dvh] relative z-10 items-center text-white text-center">
          <NavBar />

          <div className="flex flex-col h-[100vh]  md:h-[92vh] w-screen">
             
             {/* typeGriter component */}
            <div className="flex h-1/3 flex-row-reverse md:h-1/3 w-full text-white items-center md:items-end md:flex-row">

              {/* Rotating globe */}
              {/* <div className="hidden justify-start w-1/4 relative h-24">
                <div className="locationCard w-60 md:bg-[#141414fc]">
                    
                  <div className="textContainer flex justify-center">
                    <p>Located</p>
                    <p>in Spain</p>
                  </div>

                  <div className="relative -top-2 h-20 w-20">
                    <GlobeScene />
                  </div> 
                </div>
              </div> */}

              {/* Text section */}
              <div className= "flex flex-col items-start w-full md:items-start justify-start pl-3 md:pl-7">
                <div className="flex flex-row items-end pl-3 md:pl-3 w-full">
                  <div className="profileImg profile_img_hero mr-3"></div>
                  <h1 className="text-3xl font-bold">Hi, I'm</h1>
                </div>
                <TypeWriter
                  texts={texts}
                  typingSpeed={80}
                  delayBetweenTexts={700}
                  className="text-2xl font-medium text-white flex pl-22 justify-start items-start w-80"
                  cursorClassName="text-yellow-300"
                />
              </div>
            </div>
            
            <div className="flex h-45 w-full">
              <div className="flex items-start md:items-center justify-start w-full md:pl-9">
                <div className="flex flex-col text-md md:text-lg text-white font-medium md:w-1/2 px-4 md:pl-10 justify-start text-start">
                  <span>Desarrollador con +8 años de experiencia colaborando con startups y grandes empresas. </span>
                  {/* <ul className="pl-3">
                    <li>React  </li>
                    <li>Angular</li>
                    <li>Vew    </li>
                  </ul> */}
                </div>
              </div>
            </div>
             
             {/* big name */}
            <div className="relative w-full h-1/3 flex items-end justify-center overflow-hidden">
               <div
                ref={marqueeRef}
                className="flex whitespace-nowrap will-change-transform animate-marquee-left mb-14 md:mb-2"
              >
                <div className="text-custom flex items-end text-white text-5xl capitalize pb-5">
                  {[...Array(20)].map((_, i) => (
                    <span key={i} className="mx-4">
                      Miguel ochandarena -
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
    </section>
  );
};

export default Hero;
