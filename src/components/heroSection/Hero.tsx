import CvSection from "../cvSection/CvSection";
import TypeWriter from "../typegriter/TypeWriter";
import Navbar from "./NavBar";

const Hero = () => {
  
  const texts = [
    "Software Engineer",
    "Frontend Developer",
  ];

  return (
    <CvSection>
     <div className="h-50 flex flex-col w-full text-white items-end">
      <Navbar />
      <div>
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
    </CvSection>
  );
};

export default Hero;