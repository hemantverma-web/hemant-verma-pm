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
        "Managing Unify products (Association Management System, Leads, Events)",
        "Overseeing product implementation for clients, defining delivery plans", 
        "Managing service-based clients for custom website and application development",
        "Leading a team of 14 professionals, including developers, quality engineers, front-end developers, Figma designers, and the DevOps team",
        "Delivered projects for Retail Association of India, Young Jain Professionals, Arkansans Hospitality, Mumbai Sabha",
        "Designing wireframes and UX guidelines for the product development team",
        "Generating MIS reports and project progress reports for internal tracking and decision-making",
        "Collaborating with cross-functional teams, including sales and marketing, to drive product success",
        "Defining product/project scope, creating Scope Documents, BRDs, and FRDs, and developing Gantt charts to track project progress"
      ],
      current: true
    },
    {
      title: "Project Manager",
      company: "Cointab Software Pvt Ltd",
      period: "08/2022 – 04/2024",
      location: "Mumbai",
      highlights: [
        "Managed 30+ client projects across industries",
        "Gathering requirements from clients and creating project documentation such as BRD, Scope Document, and Road Map Documents",
        "Leading a team of 20 and managing their day-to-day activities to ensure project success",
        "Delivering projects on time and meeting quality standards",
        "Performing UAT testing and creating UAT reports to ensure that projects meet client requirements and are ready for deployment"
      ],
      current: false
    },
    {
      title: "Project Management Associate",
      company: "Idea Usher",
      period: "02/2022 – 08/2022",
      location: "Mumbai",
      highlights: [
        "Utilized skills in stakeholder management, problem-solving, leadership, communication, and Agile methodologies as a project manager",
        "Gathered requirements from users, and created user stories, business requirement documents, and road map documents to facilitate project planning and execution",
        "Performed sanity and smoke testing of applications, and verified and validated designs and prototypes to ensure project deliverables met expected quality standards",
        "Managed 4-5 projects simultaneously with over 12 team members under my supervision, keeping the projects within budget and delivering high-quality results",
        "Proficient in manual testing, UX research, marketing strategy, and client relations, contributing to the success of projects through effective project team management",
        "Ensured project milestones were met, risks were mitigated, and issues were resolved promptly through leadership and coordination"
      ],
      current: false
    },
    {
      title: "Software Developer Promoted Team Lead",
      company: "ADOR Infotech",
      period: "06/2020 – 12/2021",
      location: "Mumbai",
      highlights: [
        "Promoted to Team Lead role within 12 months",
        "Worked on 2 projects (Activation Plugin, Ador Hotel Management System)",
        "Managing Team of Developers. Project Planning, Creating SRS, and Meeting both technical and customer needs",
        "Implemented coding standards and development processes",
        "Designing Database, UI designing & Server Management"
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
                          Key Clients: Retail Association of India, Young Jain Professionals, Arkansans Hospitality, Petfelix, Indie
                        </div>
                      </div>
                    )}
                    
                    {index === 1 && (
                      <div className="mt-6 pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-sm text-accent font-medium">
                          <Users className="w-4 h-4" />
                          Notable Clients: Gameskraft, Cars24, Beardo, Ixigo, Viacom18, Livpure Smart, Keventers, Croma, Repro Books, Mcaffeine & The Belgian Waffle.
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
