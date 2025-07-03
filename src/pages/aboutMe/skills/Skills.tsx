import useSkills from "./useSkills";
import SkillBar from "../../../components/skill/SkillBar";
import MagneticBtn from "../../../components/btns/magneticBtn/MagneticBtn";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const Skills = ( ) => {

  const { filteredSkills,		activeCategory,	setActiveCategory, categories } = useSkills();

  return (
    <section id="skills" className="py-4 bg-white trigger">
      <div className="px-4 md:px-8">
        <SectionTitle title="Skills" customClass="mb-16"/>
        
        <div className="max-w-4xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-left gap-3 mb-12">
            {categories.map((category, index) => (
              <MagneticBtn key={index}>
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`animated-btn px-4 py-2 rounded-full text-sm font-medium h-12 min-w-18 z-100 hover:text-white ${
                    activeCategory === category 
                      ? 'bg-black text-white'
                      : 'bg-transparent text-black border-1 border-gray-300'
                  }`}
                >
                  <span className='flex justify-center items-center'>{
                    category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
                </button>
              </MagneticBtn>
            ))}
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {filteredSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
          
          {/* Technical Details */}
          {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Frontend Development</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Modern JavaScript (ES6+)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  React Hooks & Context API
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  State Management (Redux, Zustand)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Responsive & Mobile-First Design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  CSS-in-JS & CSS Modules
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Backend Development</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  RESTful API Design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Express Middleware
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Authentication & Authorization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Database Design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Server-Side Rendering
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Development Practices</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Clean Code Principles
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Agile Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Unit & Integration Testing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Version Control with Git
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Performance Optimization
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
