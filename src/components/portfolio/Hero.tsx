import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary-light/20 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Hemant Verma
          </h1>
          
          {/* Title */}
          <div className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-medium">
            Project & Product Manager | SaaS | Agile | AI-Driven Solutions
          </div>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-primary-foreground/80 mb-12">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Mumbai, India</span>
          </div>
          
          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20 backdrop-blur-sm"
              asChild
            >
              <a href="mailto:manage.verma.hemant@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                manage.verma.hemant@gmail.com
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20 backdrop-blur-sm"
              asChild
            >
              <a href="tel:7506461645" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                7506461645
              </a>
            </Button>
            
            <Button 
              variant="accent" 
              size="lg" 
              className="shadow-glow"
              asChild
            >
              <a href="https://linkedin.com/in/vermahemantprakash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
              </a>
            </Button>
          </div>
          
          {/* Call to action */}
          <div className="flex justify-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg font-semibold"
            >
              Discover My Journey
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;