import { useNavigate } from "react-router";

import SectionBtn from "../../../components/btns/sectionbtn/SectionBtn";
import RowCardWorks from "../../../components/rowCardsWorks/RowCardWorks";
import useProyects from "./useProyects";

const Projects = () => {
  const { firstGroup, secondGroup, } = useProyects();
	const navigate = useNavigate();

  const handlerOnClik = () => navigate('/projects');

  return (
    <section className="h-[120vh] flex flex-col trigger overflow-hidden">
      <div className="px-5 h-20 w-80">
        <p className="text-xl font-bld text-gray-400 my-3">
          Key projects
        </p>
        <hr className="text-black"/>
      </div>

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
