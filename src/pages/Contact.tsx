import { Navbar } from '@/components/Navbar';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </motion.div>
  );
};

export default Contact;
