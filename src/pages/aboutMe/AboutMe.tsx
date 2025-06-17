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
      <NavBar text_color= {"text-black"}/>

      <FloatBtn />

     {/* Sección del título */}
      <section className="h-[40vh] lg:h-[60vh] px-[15%] flex justify-start items-center pt-10">
        <p className="section_title text-center w-3/2 text-left">
          Traduzco tu visión en experiencias digitales
        </p>
      </section>


      <hr className="bg-gray-600  mx-[15%] opacity-20"/>


      {/* my img section */}
      <section className="flex gap-5 h-[130vh] my-20 px-[15%] relative" ref={sectionRef}>
        <div className="w-60">
          <p className="text-lg text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex, qui ipsam obcaecati nostrum, atque quos doloremque
            architecto nulla voluptatibus cum non, tempore eos repellendus reprehenderit! Possimus quae iure et!
          </p>
        </div>
        
        <div className="right-0 top-0 w-1/2 h-full flex-1 mx-4 img-caja bg-gray-400 overflow-hidden" ref={imageRevealRef} />
      </section>

      <Skills />

      <FooterHome />
    </div>
  );
};

export default AboutMe;
