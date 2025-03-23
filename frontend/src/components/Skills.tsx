
import React from 'react';
import AnimatedText from './ui/AnimatedText';
import SkillTag from './SkillTag';
import { 
  Laptop, Database, Server, Globe, Code, Cpu, 
  Paintbrush, Gauge, Wrench, FileJson, Github,
  Shield, Terminal, Users, Braces, BookOpen,
  LayoutGrid, BarChart
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: <Shield size={20} /> },
        { name: "Java (Intermediate)", icon: <Shield size={20} /> },
        { name: "Python (Intermediate)", icon: <Shield size={20} /> },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <Code size={20} /> },
        { name: "Next.js", icon: <Globe size={20} /> },
        { name: "Vue.js", icon: <Code size={20} /> },
        { name: "TypeScript", icon: <FileJson size={20} /> },
        { name: "Redux/Zustand", icon: <Cpu size={20} /> },
        { name: "Tailwind CSS", icon: <Paintbrush size={20} /> }
      ]
    },
    {
      title: "UI & Design",
      skills: [
        { name: "Material UI", icon: <LayoutGrid size={20} /> },
        { name: "Bootstrap", icon: <LayoutGrid size={20} /> },
        { name: "Chart.js", icon: <BarChart size={20} /> },
        { name: "CSS/SCSS", icon: <Paintbrush size={20} /> },
        { name: "Responsive Design", icon: <Laptop size={20} /> },
        { name: "HTML/CSS", icon: <Laptop size={20} /> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", icon: <Cpu size={20} /> },
        { name: "Spring Boot", icon: <Server size={20} /> },
        { name: "Node.js (Basic)", icon: <Server size={20} /> },
        { name: "MongoDB", icon: <Database size={20} /> },
        { name: "SQL", icon: <Database size={20} /> },
        { name: "REST API", icon: <Wrench size={20} /> }
      ]
    },
    {
      title: "Testing & Tools",
      skills: [
        { name: "Jest", icon: <Shield size={20} /> },
        { name: "Cypress", icon: <Shield size={20} /> },
        { name: "Git", icon: <Github size={20} /> },
        { name: "Webpack", icon: <Braces size={20} /> },
        { name: "Terminal", icon: <Terminal size={20} /> },
        { name: "Agile", icon: <Users size={20} /> }
      ]
    }
  ];

  return (
    <section id="skills" className="section relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-6 reveal-animation translate-up">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
              My Expertise
            </span>
          </div>
          
          <AnimatedText
            text="Skills & Technologies"
            tag="h2"
            className="font-display font-bold text-3xl md:text-4xl mb-6"
            delay={100}
            once
          />
          
          <AnimatedText
            text="A comprehensive set of technical skills I've mastered throughout my professional journey."
            tag="p"
            className="text-foreground/70 max-w-2xl mx-auto text-balance"
            delay={200}
            once
          />
        </div>
        
        <div className="space-y-12 reveal-animation translate-up">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-xl font-semibold mb-6 font-display">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillTag
                    key={skillIndex}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
