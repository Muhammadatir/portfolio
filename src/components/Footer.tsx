import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <a href="#home" className="text-xl font-bold gradient-text">
              Taha.dev
            </a>
            <p className="text-muted-foreground mt-2 text-sm">
              Building scalable, user-focused web applications.
            </p>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/muhammadtahaatir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/Muhammadatir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="mailto:tahaatir50@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end gap-2">
              Crafted with <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" /> by <span className="gradient-text font-semibold">Muhammad Taha Atir</span>
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
