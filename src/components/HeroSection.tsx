import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-gradient" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/15 rounded-full blur-[80px] animate-float" style={{ animationDelay: '-5s' }} />
      <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-secondary/15 rounded-full blur-[90px] animate-spin-slow" />
      <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-primary/10 rounded-full blur-[70px] animate-bounce-slow" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Web Developer | Full-Stack Enthusiast
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text animate-pulse-glow inline-block">Muhammad Taha Atir</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Motivated engineering student specializing in Web Development with hands-on experience in 
            frontend technologies and backend integration. Building scalable, user-focused applications.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 text-sm font-medium gradient-bg border-0 transition-colors animate-pulse-glow"
              >
                View Projects
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.1, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Contact Me
              </motion.button>
            </Link>
            <motion.a 
              href="/Muhammad_Taha_Atir_Resume.pdf" 
              download="Muhammad_Taha_Atir_Resume.pdf" 
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 text-sm font-medium gradient-bg border-0 transition-colors shadow-lg shadow-primary/50"
            >
              Download Resume
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-6"
          >
            <motion.a
              href="https://www.linkedin.com/in/muhammadtahaatir"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/Muhammadatir"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: -360 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="mailto:tahaatir50@gmail.com"
              whileHover={{ scale: 1.3, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
