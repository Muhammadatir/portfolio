import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const name = formData.get('from_name');
      const email = formData.get('user_email');
      const message = formData.get('message');
      
      // Create mailto link
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      const mailtoLink = `mailto:tahaatir50@gmail.com?subject=${subject}&body=${body}`;
      
      // Open user's email client
      window.location.href = mailtoLink;
      
      // Show success message
      toast({
        title: "Opening your email client...",
        description: "Your default email app will open with the message pre-filled.",
      });
      
      formRef.current.reset();
    }
  };

  return (
    <section id="contact" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-heading">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subheading mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new opportunities, 
              interesting projects, or just having a chat about AI and Machine Learning.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:tahaatir50@gmail.com" className="hover:text-primary transition-colors">
                  tahaatir50@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p>Hyderabad, India</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/muhammadtahaatir"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-muted hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="https://github.com/Muhammadatir"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-muted hover:bg-primary/20 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} className="text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="gradient-border p-6 md:p-8 rounded-xl space-y-6 relative">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium block">
                Name
              </label>
              <input
                id="name"
                name="from_name"
                type="text"
                placeholder="Your name"
                required
                className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 relative z-10"
                autoComplete="name"
                style={{ pointerEvents: 'auto' }}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium block">
                Email
              </label>
              <input
                id="email"
                name="user_email"
                type="email"
                placeholder="your.email@example.com"
                required
                className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 relative z-10"
                autoComplete="email"
                style={{ pointerEvents: 'auto' }}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or just say hi!"
                rows={5}
                required
                className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 resize-none relative z-10"
                style={{ pointerEvents: 'auto' }}
              />
            </div>

            <button 
              type="submit" 
              className="w-full inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 text-sm font-medium gradient-bg border-0 transition-colors relative z-10"
              style={{ pointerEvents: 'auto' }}
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
