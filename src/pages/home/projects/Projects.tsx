import { useNavigate } from "react-router";

import SectionBtn from "../../../components/btns/sectionbtn/SectionBtn";
import RowCardWorks from "../../../components/rowCardsWorks/RowCardWorks";
import useProyects from "./useProyects";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const Projects = () => {
  const { firstGroup, secondGroup, } = useProyects();
	const navigate = useNavigate();

  const handlerOnClik = () => navigate('/projects');

  return (
    <section className="h-[120vh] flex flex-col  overflow-hidden max-w-[100vw] trigger">
      <SectionTitle 
        title="Projects" 
        customClass={"pl-5"}
        line_w="w-55"
      />

        <RowCardWorks companies={ firstGroup} />

        <RowCardWorks companies={ secondGroup} reverse />
      

      <div className="flex justify-center items-center mt-10">
        <SectionBtn
          content={"More Works"}
          hgt={5}
          wdt={15}
          onClick={ handlerOnClik }
        />
      </div>
    </section>
  );
};

export default Projects;
