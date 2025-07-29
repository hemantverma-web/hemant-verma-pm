import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ProjectorIcon, 
  Users, 
  FileText, 
  Zap, 
  Brain, 
  BarChart3,
  Settings,
  MessageSquare
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: ProjectorIcon,
      title: "Project Management",
      skills: ["Agile Methodologies", "Scrum", "Project Planning", "Risk Management", "Stakeholder Management", "Resource Allocation"]
    },
    {
      icon: FileText,
      title: "Documentation & Analysis",
      skills: ["BRD/FRD Creation", "Wireframing", "User Stories", "Requirements Analysis", "MIS Reporting"]
    },
    {
      icon: Users,
      title: "Client & Team Management",
      skills: ["Client Onboarding", "Team Leadership", "Cross-functional Coordination", "Vendor Management", "Communication", "Conflict Resolution"]
    },
    {
      icon: BarChart3,
      title: "Product & Strategy",
      skills: ["Product Planning", "Roadmap Development", "Feature Prioritization", "User Research", "Competitive Analysis"]
    },
    {
      icon: Zap,
      title: "Quality & Testing",
      skills: ["QA/UAT", "Manual Testing", "Test Planning", "Bug Tracking", "Quality Assurance", "User Acceptance Testing"]
    },
    {
      icon: Brain,
      title: "AI & Productivity Tools",
      skills: ["ChatGPT", "Lovable.dev", "Productivity Enhancement"]
    }
  ];

  const tools = [
    { name: "Jira", category: "Project Management" },
    { name: "Redmine", category: "Project Management"},
    { name: "Trello", category: "Project Management" },
    { name: "Microsoft Office", category: "Productivity" },
    { name: "Google Docs", category: "Productivity" },
    { name: "Excel", category: "Analytics" },
    { name: "PowerPoint", category: "Presentation" },
    { name: "Gantt Charts", category: "Planning" },
    { name: "ChatGPT", category: "AI Tools" },
    { name: "Lovable.ai", category: "AI Tools" },
    { name: "Teams", category: "Communication" }  
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-primary-light/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit combining traditional project management expertise 
              with modern AI-driven productivity solutions
            </p>
          </div>

          {/* Core Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="p-6 card-gradient shadow-custom hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <category.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Tools & Technologies */}
          <Card className="p-8 card-gradient shadow-custom">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Settings className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-primary">
                  Tools & Technologies
                </h3>
              </div>
              <p className="text-muted-foreground">
                Proficient in industry-standard tools and cutting-edge AI technologies
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-secondary/50 hover:bg-accent/20 hover:text-accent transition-colors cursor-default"
                >
                  {tool.name}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Key Strengths */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center card-gradient shadow-custom">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">
                Communication
              </h4>
              <p className="text-muted-foreground text-sm">
                Excellent stakeholder communication and client relationship management
              </p>
            </Card>

            <Card className="p-6 text-center card-gradient shadow-custom">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">
                Innovation
              </h4>
              <p className="text-muted-foreground text-sm">
                Leveraging AI and modern tools to enhance productivity and delivery
              </p>
            </Card>

            <Card className="p-6 text-center card-gradient shadow-custom">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">
                Leadership
              </h4>
              <p className="text-muted-foreground text-sm">
                Proven ability to lead and coordinate cross-functional teams effectively
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
