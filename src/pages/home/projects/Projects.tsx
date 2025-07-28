
import SectionBtn from "../../../components/btns/sectionbtn/SectionBtn";
import RowCardWorks from "../../../components/rowCardsWorks/RowCardWorks";
import useProyects from "./useProyects";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import CardHomeMobile from "../../../components/cards/CardHomeMobile";

const Projects = () => {

  const { firstGroup, isMobile, handlerOnClik } = useProyects();

  return (
    <section className="flex flex-col overflow-hidden max-w-[100vw] trigger mb-10">
      <SectionTitle title="Projects" customClass="hidden md:flex" />
      {isMobile ? (
        <>
          {firstGroup.map((company, index) => {
            return(
              <CardHomeMobile
                key={index}
                imageUrl={company.logoUrl}
                title={company.companyName}
                rol={company.rol}
                year={company.year}
              />
            )
          })}
        </>
      ) : (
        <>
          <RowCardWorks companies={firstGroup} className="md:mt-15" />

          {/* <RowCardWorks companies={secondGroup} reverse /> */}
        </>
      )}
      <div className="flex justify-center items-center mt-15">
        <SectionBtn
          content={"More Works"}
          hgt={5}
          wdt={15}
          onClick={handlerOnClik}
        />
      </div>
    </section>
  );
};

export default Projects;
