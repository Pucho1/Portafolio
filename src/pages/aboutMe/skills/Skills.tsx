import { useState } from "react";
import { useNavigate } from "react-router";

const skills: Skill[] = [
  // Frontend
  { name: 'HTML & CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'React', level: 92, category: 'frontend' },
  { name: 'Next.js', level: 80, category: 'frontend' },
  { name: 'Tailwind CSS', level: 88, category: 'frontend' },
  { name: 'Responsive Design', level: 90, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 82, category: 'backend' },
  { name: 'Express', level: 78, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'PostgreSQL', level: 70, category: 'backend' },
  { name: 'GraphQL', level: 65, category: 'backend' },
  
  // Tools
  { name: 'Git & GitHub', level: 85, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'Webpack', level: 75, category: 'tools' },
  { name: 'Docker', level: 60, category: 'tools' },
  { name: 'CI/CD', level: 70, category: 'tools' },
];

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</h4>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="h-2.5 rounded-full bg-blue-500" 
          style={{ width: `${skill.level}%`, transition: 'width 1.5s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};



const Skills = ( ) => {

  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredSkills = skills.filter((skill) => 
    activeCategory === 'all' ? true : skill.category === activeCategory
  );

  const navigate = useNavigate();

  const goback= (): void => {
    navigate(-1);
  }

  return (

   <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800">
    <button
      className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors"
      onClick={goback}
    >
      goback
    </button>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {['all', 'frontend', 'backend', 'tools'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {filteredSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
          
          {/* Technical Details */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
