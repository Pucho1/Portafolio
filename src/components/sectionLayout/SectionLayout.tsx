import Description from "../../pages/home/aboutMeHome/Description";
import Hero from "../../pages/home/heroSection/Hero";
import Projects from "../../pages/home/projects/Projects";
import FloatBtn from "../btns/floatBtn/FloatBtn";

const SectionLayout = () => {
  
  return (
     <div className="bg-white">
      {/* MEAN SECCTIONS */}
      <FloatBtn />
      <Hero />
      <Description />
      <Projects />
    </div>
  );
};

export default SectionLayout;
