import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Target, Code } from 'lucide-react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-heading">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subheading mx-auto">
          Passionate about leveraging AI and Machine Learning to solve real-world problems
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-muted-foreground leading-relaxed text-lg">
            I am a B.E. student in Artificial Intelligence and Machine Learning at Methodist College 
            of Engineering and Technology, Hyderabad. I specialize in Web Development, frontend technologies, 
            and basic backend integration with hands-on experience in HTML, CSS, JavaScript, Node.js, databases, 
            and modern development practices.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Motivated engineering student specializing in Artificial Intelligence and Machine Learning with hands-on 
            experience in Web Development, frontend technologies, and basic backend integration. Seeking a Web 
            Developer / Full-Stack Internship to contribute to scalable, user-focused applications using HTML, 
            CSS, JavaScript, Node.js, databases, and modern development practices.
          </p>
          
          <div className="pt-6">
            <div className="gradient-border p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Education</h3>
                  <p className="text-foreground font-medium">B.E. in Artificial Intelligence & Machine Learning</p>
                  <p className="text-muted-foreground">Methodist College of Engineering and Technology, Hyderabad</p>
                  <p className="text-muted-foreground text-sm">Expected Graduation: 2027</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <div className="gradient-border p-6 rounded-xl glow-card">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-secondary/10">
                <Target className="text-secondary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">What I Do</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Frontend & Full-Stack Web Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Responsive Design & DOM Manipulation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Backend Development with Node.js & Express.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Database Integration (MySQL, MongoDB)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 rounded-xl glow-card">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Code className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Focus Areas</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Scalable, user-focused applications
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Modern development practices
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    RESTful APIs & Database Management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Continuous learning & problem-solving
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
