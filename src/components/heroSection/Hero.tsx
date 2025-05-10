import CvSection from "../cvSection/CvSection";
import Navbar from "./NavBar";

const Hero = () => {
  return (
    <CvSection>
     <div>
      <Navbar />
      <p className="text-4xl font-bold">
        Bienvenido a mi portafolio 🚀
      </p>
    </div>
    </CvSection>
  );
};

export default Hero;