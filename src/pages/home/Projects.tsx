
const Projects = () => {
  return (
    <section className="px-5 h-screen flex flex-col">
      <div className="h-1/3 w-80">
        <p className="text-xl font-bld text-gray-400 my-3">
          Key projects
        </p>
        <hr className="text-black"/>
      </div>

      <div className="text-black">
        <ul className="list-disc pl-5 mt-4">
          <li>Project A: A web application that helps users manage their tasks efficiently.</li>
          <li>Project B: An e-commerce platform that provides a seamless shopping experience.</li>
          <li>Project C: A mobile app designed to enhance productivity and time management.</li>
          <li>Project D: A data visualization tool that transforms complex data into actionable insights.</li>
        </ul>
      </div>
        
    </section>
  );
};

export default Projects;