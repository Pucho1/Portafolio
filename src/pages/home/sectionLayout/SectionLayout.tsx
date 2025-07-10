import AboutMe from "../aboutMeHome/Description";
import Hero from "../heroSection/Hero";
import Projects from "../projects/Projects";
import FloatBtn from "../../../components/btns/FloatBtnWraper/FloatBtnWraper";
import Footer from "../../../components/foter/Footer";

const SectionLayout = () => {

  return (
     <div className="bg-white flex flex-col">
      {/* MEAN SECCTIONS */}
      <Hero />
      <FloatBtn />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
};

export default SectionLayout;
