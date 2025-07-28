import type { Skill } from "../../interfaces/skillInterfece";

const SkillBar = ({ skill } : {skill : Skill}) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <h4 className="text-sm text-black font-medium text-blck">{skill.name}</h4>
        <span className="text-sm font-medium text-black">{skill.level}%</span>
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

export default SkillBar