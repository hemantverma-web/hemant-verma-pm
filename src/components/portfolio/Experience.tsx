import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Project Manager",
      company: "Datagrid Solutions Pvt Ltd",
      period: "06/2024 – Present",
      location: "Mumbai",
      highlights: [
        "Managing Unify products (Association Management, Leads, Events)",
        "Leading 14+ cross-functional team members",
        "Delivered projects for Retail Association of India, Young Jain Professionals, Arkansans Hospitality, Mumbai Sabha",
        "Created BRDs, FRDs, Gantt charts, wireframes, MIS reports"
      ],
      current: true
    },
    {
      title: "Project Manager",
      company: "Cointab Software Pvt Ltd",
      period: "08/2022 – 04/2024",
      location: "Mumbai",
      highlights: [
        "Managed 25+ client projects across industries (Boat, Croma, Viacom18, Cars24)",
        "Led 20-member team, created comprehensive documentation (BRD, Scope, UAT)",
        "Oversaw client communication, risk mitigation, and agile delivery",
        "Implemented process improvements that increased delivery efficiency by 30%"
      ],
      current: false
    },
    {
      title: "Project Management Associate",
      company: "Idea Usher",
      period: "02/2022 – 08/2022",
      location: "Mumbai",
      highlights: [
        "Managed 4 projects with 12+ team members",
        "Created comprehensive roadmaps and user stories",
        "Conducted manual testing and UX research",
        "Facilitated stakeholder communication and requirement gathering"
      ],
      current: false
    },
    {
      title: "Software Developer → Team Lead",
      company: "ADOR Infotech",
      period: "06/2020 – 12/2021",
      location: "Mumbai",
      highlights: [
        "Promoted to Team Lead role within 12 months",
        "Worked on comprehensive hotel management system",
        "Led development team of 5+ developers",
        "Implemented coding standards and development processes"
      ],
      current: false
    },
    {
      title: "Web Development Intern",
      company: "Enats",
      period: "05/2019 – 07/2019",
      location: "Mumbai",
      highlights: [
        "Web development using MVC architecture",
        "Frontend development with Bootstrap",
        "E-commerce development using Opencart",
        "Gained foundational experience in web technologies"
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive journey through diverse roles in project management, 
              product development, and team leadership
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-custom hidden md:block"></div>
                  
                  <Card className={`ml-0 md:ml-20 p-6 card-gradient shadow-custom hover:shadow-lg transition-all duration-300 ${
                    exp.current ? 'ring-2 ring-accent/50' : ''
                  }`}>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-primary">
                            {exp.title}
                          </h3>
                          {exp.current && (
                            <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                              Current
                            </Badge>
                          )}
                        </div>
                        <h4 className="text-lg font-semibold text-accent mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Additional info for key roles */}
                    {index === 0 && (
                      <div className="mt-6 pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-sm text-accent font-medium">
                          <Trophy className="w-4 h-4" />
                          Key Clients: Retail Association of India, Young Jain Professionals, Arkansans Hospitality
                        </div>
                      </div>
                    )}
                    
                    {index === 1 && (
                      <div className="mt-6 pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-sm text-accent font-medium">
                          <Users className="w-4 h-4" />
                          Notable Clients: Boat, Croma, Viacom18, Cars24
                        </div>
                      </div>
                    )}
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;