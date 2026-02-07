import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Plasmid Team',
    role: 'Machine Learning Internship',
    company: 'Plasmid',
    text: 'Taha demonstrated exceptional dedication and analytical skills during his Machine Learning internship. He successfully completed a 6-week program covering end-to-end machine learning workflows, showing strong problem-solving abilities and a keen interest in learning.',
    image: '', // Add image URL if available
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-heading">
          <span className="gradient-text">Testimonials</span>
        </h2>
        <p className="section-subheading mx-auto">
          What mentors and colleagues say about my work
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="gradient-border p-8 rounded-xl glow-card mb-6"
          >
            <Quote className="text-primary mb-4" size={32} />
            <p className="text-lg text-foreground leading-relaxed mb-6 italic">
              "{testimonial.text}"
            </p>
            <div className="flex items-center gap-4">
              {testimonial.image && (
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}
              <div>
                <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
