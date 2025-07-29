import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:manage.verma.hemant@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email client will open with the message pre-filled.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "manage.verma.hemant@gmail.com",
      link: "mailto:manage.verma.hemant@gmail.com",
      description: "Feel free to reach out anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7506461645",
      link: "tel:7506461645",
      description: "Available for calls during business hours"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Mumbai, India",
      link: null,
      description: "Open to remote and hybrid opportunities"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "vermahemantprakash",
      link: "https://linkedin.com/in/vermahemantprakash",
      description: "Connect for professional networking"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-light/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss your next project? I'm always open to exploring new opportunities 
              and collaborations. Let's build something amazing together!
               I'm currently open to new opportunities in project management, product management, 
              and team leadership roles. Whether you have a project to discuss, want to explore 
              collaboration, or just want to connect professionally, I'd love to hear from you.
            </p>
          </div>

          <div>
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="p-4 card-gradient shadow-custom hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <contact.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-1">
                          {contact.title}
                        </h4>
                        {contact.link ? (
                          <a 
                            href={contact.link}
                            target={contact.link.startsWith('http') ? '_blank' : undefined}
                            rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-accent hover:text-accent/80 transition-colors font-medium"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <span className="text-foreground font-medium">
                            {contact.value}
                          </span>
                        )}
                        <p className="text-sm text-muted-foreground mt-1">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Call-to-action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  variant="hero" 
                  size="lg" 
                  asChild
                  className="flex-1"
                >
                  <a href="mailto:manage.verma.hemant@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Send Email
                  </a>
                </Button>
                <Button 
                  variant="accent" 
                  size="lg" 
                  asChild
                  className="flex-1"
                >
                  <a 
                    href="https://linkedin.com/in/vermahemantprakash" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
