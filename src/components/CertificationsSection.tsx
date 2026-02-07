import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, BadgeCheck, FileCheck, Trophy } from 'lucide-react';

const certifications = [
  {
    title: 'AI Skills Passport',
    issuer: 'EY & Microsoft',
    icon: Award,
  },
  {
    title: 'Full Stack Development',
    issuer: 'Professional Certification',
    icon: BadgeCheck,
  },
  {
    title: 'Python Programming',
    issuer: 'Cisco Academy',
    icon: FileCheck,
  },
  {
    title: 'Machine Learning Internship',
    issuer: 'Plasmid',
    icon: FileCheck,
  },
  {
    title: 'Hacknovate 2025',
    issuer: 'Methodist College (MCET)',
    icon: Trophy,
  },
];

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-container bg-card/30" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-heading">
          <span className="gradient-text">Certifications</span>
        </h2>
        <p className="section-subheading mx-auto">
          Certifications and continuous learning achievements
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {certifications.map((cert, index) => {
          const Icon = cert.icon;
          return (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="gradient-border p-6 rounded-xl text-center glow-card"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
              <p className="text-muted-foreground text-sm">{cert.issuer}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
