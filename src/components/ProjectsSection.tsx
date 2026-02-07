import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Car, Dumbbell, UtensilsCrossed, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Portfolio - Personal Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and TypeScript. Features multi-page navigation, smooth animations, and showcases projects, skills, and professional experience. Implements best practices in web development with clean UI/UX design.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    icon: User,
    color: 'secondary',
    github: 'https://github.com/Muhammadatir',
    demo: '',
  },
  {
    title: 'Hotel City Diamond - Authentic Hyderabadi Cuisine',
    description: 'A modern restaurant website showcasing authentic Hyderabadi cuisine with an elegant design. Features menu display, location information, and contact details. Built with responsive design for seamless experience across all devices.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    icon: UtensilsCrossed,
    color: 'primary',
    github: 'https://github.com/Muhammadatir/citydiamond.git',
    demo: 'https://share.google/L1kbmaZtGg2UDj9kO',
  },
  {
    title: 'Drowsy Shield - Driver Drowsiness Detection Web Application',
    description: 'Built a real-time web application that analyzes live camera input to detect driver fatigue. Enhanced road safety by implementing eye-closure detection and facial landmark recognition. Reduced delayed response risk by triggering instant alert notifications. Integrated computer vision and basic machine learning concepts into a web interface.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Computer Vision'],
    icon: Car,
    color: 'secondary',
    github: 'https://github.com/Muhammadatir/DrowsyShield.git',
    demo: 'https://drowsy-shield.vercel.app/',
  },
  {
    title: 'Fitness Navigator - Personalized Fitness Web Application',
    description: 'Designed a full-stack web application with user authentication and profile management. Developed BMI calculation and personalized workout and diet plans based on user data. Implemented responsive design with modern, intuitive, and clean layouts. Integrated backend logic and database storage for persistent user data.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'Database'],
    icon: Dumbbell,
    color: 'primary',
    github: 'https://github.com/Muhammadatir/FitnessNavigator.git',
    demo: '',
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-heading">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subheading mx-auto">
          A selection of projects showcasing my skills in ML, data analysis, and web development
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, type: "spring", bounce: 0.5 }}
              whileHover={{ 
                scale: 1.08, 
                rotateZ: [0, -2, 2, -2, 0],
                transition: { duration: 0.5 }
              }}
              className="group gradient-border p-6 rounded-xl glow-card"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg ${project.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'} group-hover:scale-110 transition-transform`}>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    <Icon className={project.color === 'primary' ? 'text-primary' : 'text-secondary'} size={24} />
                  </motion.div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-muted text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3 relative z-10">
                {project.github && project.github !== '#' && project.github !== '' && (
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="inline-flex items-center justify-center gap-2 h-9 rounded-md px-3 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors relative z-10"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                )}
                {project.demo && project.demo !== '#' && project.demo !== '' && (
                  <motion.a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="inline-flex items-center justify-center gap-2 h-9 rounded-md px-3 text-sm font-medium gradient-bg border-0 transition-colors relative z-10 animate-pulse-glow"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
