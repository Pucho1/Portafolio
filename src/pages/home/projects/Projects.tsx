import SectionBtn from "../../../components/btns/sectionbtn/SectionBtn";
import RowCardWorks from "../../../components/rowCardsWorks/RowCardWorks";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import CardHomeMobile from "../../../components/cards/CardHomeMobile";

import useProyects from "./useProyects";

const Projects = () => {

  const { firstGroup, isMobile, handlerOnClik, ramdomNumber } = useProyects();

  return (
    <section className="flex flex-col overflow-hidden max-w-[100vw] trigger mb-10">
      <SectionTitle title="Projects" customClass="hidden md:flex" />
      {isMobile ? (
        <>
          {firstGroup.map((company, index) => {
            return(
              <CardHomeMobile
                key={index}
                logoUrl={company.logoUrl}
                companyName={company.companyName}
                description={company.description}
                rol= {company.rol}
                year={company.year}
                changeTimer={ ramdomNumber() }
              />
            )
          })}
        </>
      ) : (
        <RowCardWorks companies={firstGroup} className="md:mt-15" />
      )}
      <div className="flex justify-center items-center mt-15">
        <SectionBtn
          content={"More Works"}
          hgt={5}
          wdt={15}
          classCustom={'mb-5'}
          onClick={handlerOnClik}
        />
      </div>
    </section>
  );
};

export default Projects;
