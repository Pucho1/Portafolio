import useHero from "./useHero";
import { NavBar, TypeWriter,  GlobeScene} from '../../../components';
import "./hero.css"


const Hero = () => {

  const { marqueeRef, texts } = useHero();

  return (
    <section className="relative bg-[#aeaeae] w-screen">
        <div className="flex flex-col h-[110vh] relative z-10 items-center text-white text-center">
          <NavBar />

          <div className="flex flex-col md:flex-col-reverse h-[100vh]  md:h-[92vh] w-screen">
             {/* footer big name */}
            <div className="relative w-full h-2/3 flex items-end justify-center">
              <div
                ref={marqueeRef}
                className="flex whitespace-nowrap will-change-transform animate-marquee-left"
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

            {/* typeGriter component */}
            <div className="flex h-1/3 flex-row-reverse md:h-2/3 w-full text-white items-center md:items-end md:flex-row">

              {/* Rotating globe */}
              <div className="globeContainer flex justify-start w-1/4 relative h-24">
                <div className="locationCard w-60 md:bg-[#141414fc]">
                    
                  <div className="textContainer hidden md:flex">
                    <p>Located</p>
                    <p>in Spain</p>
                  </div>

                  <div className="h-20 w-20 ml-5">
                    <GlobeScene />
                  </div> 
                </div>
              </div>

              {/* Text section */}
              <div className= "flex flex-col items-start md:items-end w-3/4 justify-end">
                <div className="flex flex-col items-start md:p-5">
                  <h1 className="text-3xl font-bold">Hi, I'm</h1>
                  <TypeWriter
                    texts={texts} 
                    typingSpeed={80}
                    delayBetweenTexts={700}
                    className="text-2xl font-medium text-white"
                    cursorClassName="text-yellow-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;
