import { NavBar } from "../../components";
import FloatBtn from "../../components/btns/floatBtn/FloatBtn";
import FooterHome from "../home/foter/FoterHome";
import Skills from "./skills/Skills";

import './aboutMe.css';
import useAboutMe from "./useAboutMe";

const AboutMe = () => {

  const { sectionRef, imageRevealRef } = useAboutMe();

  return (
    <div>
      <NavBar text_color= {"text-black"} dotColor={'bg-black'} />

      <FloatBtn />

     {/* Sección del título */}
      <section className="h-[40vh] lg:h-[60vh] px-[15%] flex justify-start items-center pt-10">
        <p className="section_title text-center w-3/2 text-left">
          Traduzco tu visión en experiencias digitales
        </p>
      </section>

      <hr className="bg-gray-600  mx-[12%] lg:mx-[] opacity-20"/>

      {/* my img section */}
      <section className="flex flex-col lg:flex-row  gap-5 h-[130vh] my-20 lg:pr-[5%] px-[12%] relative" ref={sectionRef}>
        <div className="w-full  lg:w-60 pr-15 lg:p-0">
          <p className="text-md font-medium text-gray-700 ">
            I help companies from all over the world with tailor-made solutions. 
            With each project, I push my work to new horizons, always putting quality first.
          </p>
        </div>
        
        <div className="flex-1 img-caja overflow-hidden mt-15 lg:mt-0" ref={imageRevealRef} />
      </section>

      <Skills />

      <FooterHome />
    </div>
  );
};

export default AboutMe;
