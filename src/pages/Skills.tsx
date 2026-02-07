import { Navbar } from '@/components/Navbar';
import { SkillsSection } from '@/components/SkillsSection';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      <main className="pt-20">
        <SkillsSection />
      </main>
      <Footer />
      <BackToTop />
    </motion.div>
  );
};

export default Skills;
