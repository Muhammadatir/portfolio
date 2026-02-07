import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Database, Globe, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Globe,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'DOM Manipulation'],
    color: 'primary',
  },
  {
    title: 'Backend Development',
    icon: Database,
    skills: ['Node.js', 'Express.js', 'RESTful APIs'],
    color: 'secondary',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'MongoDB'],
    color: 'primary',
  },
  {
    title: 'Programming & Tools',
    icon: Wrench,
    skills: ['Python', 'Git', 'GitHub', 'Visual Studio Code'],
    color: 'secondary',
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-container bg-card/30" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-heading">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subheading mx-auto">
          Technologies and tools I use to build modern web applications
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="gradient-border p-6 rounded-xl glow-card"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg ${category.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                  <Icon className={category.color === 'primary' ? 'text-primary' : 'text-secondary'} size={24} />
                </div>
                <h3 className="font-semibold text-xl">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-muted text-sm font-medium text-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
