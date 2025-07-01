import AboutMe from "../aboutMeHome/Description";
// import Hero from "../heroSection/Hero";
// import Projects from "../projects/Projects";
import FloatBtn from "../../../components/btns/floatBtn/FloatBtn";
import FooterHome from "../../../components/foter/FoterHome";

const SectionLayout = () => {

  return (
     <div className="bg-white flex flex-col">
      {/* MEAN SECCTIONS */}
      {/* <Hero /> */}
      <FloatBtn />
      <AboutMe />
      {/* <Projects /> */}
      <FooterHome />
    </div>
  );
};

export default SectionLayout;
