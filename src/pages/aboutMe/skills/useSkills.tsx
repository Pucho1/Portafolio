import { useState } from "react";
import type { Skill } from "../../../interfaces/skillInterfece";

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

const useSkills = () => {

	const [activeCategory, setActiveCategory] = useState('all');

	const categories = ['all', 'frontend', 'backend', 'tools']
  
  const filteredSkills = skills.filter((skill) => 
    activeCategory === 'all' ? true : skill.category === activeCategory
  );

  
  return {
		filteredSkills,
		activeCategory,
		setActiveCategory,
		categories,
  };
};

export default useSkills;
