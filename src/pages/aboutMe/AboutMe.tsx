import { NavBar } from "../../components";
import FloatBtn from "../../components/btns/floatBtn/FloatBtn";
import FooterHome from "../home/foter/FoterHome";
import Skills from "./skills/Skills";

import './aboutMe.css';

const AboutMe = () => {
  return (
    <div>
      <NavBar text_color= {"text-black"}/>

      <FloatBtn />

      <section className="h-[40vh] lg:h-[60vh]  px-[15%] flex justify-start items-center pt-10">
        <p className="section_title text-center w-3/2 text-left">
          Traduzco tu visión en experiencias digitales
        </p>
      </section>

      <Skills />

      <FooterHome />
    </div>
  );
};

export default AboutMe;
