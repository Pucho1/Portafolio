import CustomParallax from "../customParallax/CustomParallax";
import TypeWriter from "../typegriter/TypeWriter";
import Navbar from "./NavBar";
import useHero from "./useHero";

const Hero = () => {

  const { marqueeRef, texts } = useHero();
  
  return (
    <div className="relative h-screen overflow-hidden">
      <Navbar />
      <CustomParallax>
        <div className="flex flex-col w-full h-full">
          <div className="w-full justify-end h-1/2 flex flex-col w-full text-white items-start">
            <div className= "hidden md:block">
              <h1 className="text-5xl font-bold">Hi, I'm</h1>
              <TypeWriter
                texts={texts} 
                typingSpeed={50}
                delayBetweenTexts={500}
                className="text-2xl font-medium text-white"
                cursorClassName="text-yellow-300"
              />
            </div>
          </div>

          <div className="relative w-full overflow-hidden h-1/2 flex items-center justify-center">
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
        </div>
      </CustomParallax>
    </div>
  );
};

export default Hero;