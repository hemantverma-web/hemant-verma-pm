import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "5+ years delivering measurable outcomes in SaaS and custom software projects"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Successfully managed cross-functional teams of 20+ members across multiple projects"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Leveraging AI tools like ChatGPT and Lovable.dev to boost productivity and efficiency"
    },
    {
      icon: Zap,
      title: "Agile Expertise",
      description: "Proven expertise in Agile methodologies and full project lifecycle management"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-primary-light/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile text */}
            <div className="space-y-6">
              <Card className="p-8 card-gradient shadow-custom">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Versatile and results-driven Project Manager with {" "} 
                  <span className="text-primary font-semibold">5+ years of experience</span> in 
                  across SaaS product management, custom software delivery, and client implementations. 
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  Currently leading end-to-end product deliveries for Unify across multiple association and service clients, managing a portfolio of 9+ accounts while overseeing a cross-functional team of 14+ professionals. 
                  Previously handled 30+ client projects at Cointab, delivering solutions for high-impact consumer and enterprise brands across diverse sectors
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  Skilled in BRD/FRD creation, Gantt chart tracking, AI/UX wireframes, MIS reporting, and UAT. 
                  Strong collaborator with Sales, Marketing, and Tech teams. 
                  Recognized for sharp communication, structured delivery, and product improvement
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  Known for <span className="text-accent font-semibold">structured delivery</span>, 
                  stakeholder alignment, and using AI tools like ChatGPT and Lovable.dev to boost productivity. 
                  Proven expertise across full project lifecycles, Agile execution, and cross-functional leadership.
                </p>
              </Card>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="p-4 text-center card-gradient shadow-custom">
                  <div className="text-2xl font-bold text-primary mb-1">25+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </Card>
                <Card className="p-4 text-center card-gradient shadow-custom">
                  <div className="text-2xl font-bold text-primary mb-1">20+</div>
                  <div className="text-sm text-muted-foreground">Team Members Led</div>
                </Card>
                <Card className="p-4 text-center card-gradient shadow-custom">
                  <div className="text-2xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </Card>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="p-6 card-gradient shadow-custom hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <highlight.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
