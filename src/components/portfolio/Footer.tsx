import { Mail, Phone, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand section */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold mb-4">Hemant Verma</h3>
              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                Project & Product Manager specializing in SaaS solutions, 
                Agile methodologies, and AI-driven productivity enhancement.
              </p>
              <p className="text-primary-foreground/60 text-sm">
                Mumbai, India
              </p>
            </div>

            {/* Quick links */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { name: "About", href: "#about" },
                  { name: "Experience", href: "#experience" },
                  { name: "Skills", href: "#skills" },
                  { name: "Education", href: "#education" },
                  { name: "Contact", href: "#contact" }
                ].map((link) => (
                  <button
                    key={link.name}
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:manage.verma.hemant@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  manage.verma.hemant@gmail.com
                </a>
                <a 
                  href="tel:7506461645"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm group"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  +91 7506461645
                </a>
                <a 
                  href="https://linkedin.com/in/vermahemantprakash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm group"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <span>© {currentYear} Hemant Verma. All rights reserved.</span>
              </div>

              {/* Made with love */}
{/*               <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-accent fill-current" />
                <span>in Mumbai</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
