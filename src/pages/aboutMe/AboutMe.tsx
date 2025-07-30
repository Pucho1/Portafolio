import { NavBar } from "../../components";
import FloatBtn from "../../components/btns/FloatBtnWraper/FloatBtnWraper";
import Skills from "./skills/Skills";

import './aboutMe.css';
import useAboutMe from "./useAboutMe";
import Footer from "../../components/foter/Footer";

const AboutMe = () => {

  const { sectionRef, imageRevealRef } = useAboutMe();

  return (
    <main className="height-full">
      <NavBar text_color= {"text-black"} dotColor={'bg-black'} />

      <FloatBtn />

     {/* Sección del título */}
      <section className="h-[40vh] lg:h-[60vh] px-[6%] flex justify-start items-center pt-10">
        <h1 className="section-title text-center text-black w-3/2 text-left ">
          Helping brands thrive in the digital world
        </h1>
      </section>

      <hr className="bg-gray-600  mx-[6%] lg:mx-[] opacity-20"/>

      {/* me img section */}
      <section className="flex flex-col lg:flex-row gap-5 h-[100vh] md:h-[130vh] my-5 md:my:20 lg:pr-[5%] px-[6%] relative" ref={sectionRef}>
        <div className="w-full  lg:w-60 pr-15 lg:p-0">
          <p className="text-md font-medium text-gray-700 ">
            I help companies from all over the world with tailor-made solutions. 
            With each project, I push my work to new horizons, always putting quality first.
          </p>
        </div>
        
        <div className="flex-1 img-box  overflow-hidden mt-15 lg:mt-0" ref={imageRevealRef} />
      </section>

      <Skills />

      <Footer />
    </main>
  );
};

export default AboutMe;
