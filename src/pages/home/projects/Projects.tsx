import RowCardWorks from "../../../components/rowCardsWorks/RowCardWorks";
import useProyects from "./useProyects";


const Projects = () => {

  const { firstGroup, secondGroup, } = useProyects();

  return (
    <section className="h-screen flex flex-col trigger">
      <div className="px-5 h-20 w-80">
        <p className="text-xl font-bld text-gray-400 my-3">
          Key projects
        </p>
        <hr className="text-black"/>
      </div>

      <RowCardWorks companies={ firstGroup} />
      
      <RowCardWorks companies={ secondGroup} /> 

      
    </section>
  );
};

export default Projects;
