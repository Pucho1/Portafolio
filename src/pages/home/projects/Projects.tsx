import CompanyCard from "../../../components/CompanyCard";
import useProyects from "./useProyects";


const Projects = () => {

  const companies = [
    {
      logoUrl: 'public/imgs/markas33.jpg',
      companyName: "Mark'As",
      description: 'Desarrollo de aplicaciones web y móviles para grandes empresas.',
  
    },
    {
      logoUrl: "public/imgs/El_País_logo.svg.png",
      companyName: 'El pais',
      description: 'Rediseño completo de la presencia digital para esta empresa internacional.',
    },
    {
      logoUrl: "public/imgs/Cinco_Días_logo.svg.png",
      companyName: 'Cinco dias',
      description: 'Aplicación móvil innovadora para gestión de recursos humanos.',
    },
       {
      logoUrl: 'public/imgs/markas33.jpg',
      companyName: "Mark'As",
      description: 'Desarrollo de aplicaciones web y móviles para grandes empresas.',
  
    },
    {
      logoUrl: "public/imgs/El_País_logo.svg.png",
      companyName: 'El pais',
      description: 'Rediseño completo de la presencia digital para esta empresa internacional.',
    },
    {
      logoUrl: "public/imgs/Cinco_Días_logo.svg.png",
      companyName: 'Cinco dias',
      description: 'Aplicación móvil innovadora para gestión de recursos humanos.',
    },
  ];

  const { changeDirection } = useProyects();

  console.log("changeDirection", changeDirection);

  return (
    <section className="px-5 h-screen flex flex-col trigger">
      <div className="h-20 w-80">
        <p className="text-xl font-bld text-gray-400 my-3">
          Key projects
        </p>
        <hr className="text-black"/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {companies.map((company, index) => (
        <CompanyCard key={index} {...company} />
      ))}
    </div>
    </section>
  );
};

export default Projects;
