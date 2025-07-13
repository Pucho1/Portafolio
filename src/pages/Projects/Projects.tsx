import { NavBar } from "../../components";
import FloatBtnWraper from "../../components/btns/FloatBtnWraper/FloatBtnWraper";
import MagneticBtn from "../../components/btns/magneticBtn/MagneticBtn";
import CompanyCard from "../../components/cards/CompanyCard";
import Footer from "../../components/foter/Footer";
import useProjects from "./useProjects";


export const Projects = () => {
  const { years, activeYear, setActiveYear, filteredCompanies } = useProjects();

  return (
    <div>
      <NavBar text_color= {"text-black"} dotColor={'bg-black'} />

      <FloatBtnWraper />

      {/* Sección del título */}
      <section className="h-[40vh] lg:h-[60vh] px-[15%] flex justify-start items-center pt-10">
        <p className="section_title text-center w-3/2 text-left">
          Traduzco tu visión en experiencias digitales
        </p>
      </section>

      {/* WORKS FILTERS */}
      <section>
        <div className="flex flex-wrap justify-left gap-3 mb-12 px-[5%] ">
          {years.map((year, index) => (
            <MagneticBtn key={index}>
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`animated-btn px-4 py-2 rounded-full text-sm font-medium h-12 min-w-18 hover:text-white ${
                  activeYear === year 
                    ? 'bg-black text-white'
                    : 'bg-transparent text-black border-1 border-gray-300'
                }`}
              >
                <span className='flex justify-center items-center'>{
                  year.charAt(0).toUpperCase() + year.slice(1)}
                </span>
              </button>
            </MagneticBtn>
          ))}
        </div>
      </section>

      {/* Company Grid */}
      <section className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-[15%] md:px-[10%] lg:px-[5%]">
          {filteredCompanies.map((company) => (
              <CompanyCard key={company.client}  {...company}
            />
          ))}
        </div>
      </section>

      <Footer />

    </div>
  );
};
