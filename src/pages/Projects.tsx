import { Navbar } from '@/components/Navbar';
import { ProjectsSection } from '@/components/ProjectsSection';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      <main className="pt-20">
        <ProjectsSection />
      </main>
      <Footer />
      <BackToTop />
    </motion.div>
  );
};

export default Projects;
