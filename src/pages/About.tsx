import { Navbar } from '@/components/Navbar';
import { AboutSection } from '@/components/AboutSection';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      <main className="pt-20">
        <AboutSection />
      </main>
      <Footer />
      <BackToTop />
    </motion.div>
  );
};

export default About;
