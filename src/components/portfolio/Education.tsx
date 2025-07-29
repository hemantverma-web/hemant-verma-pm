import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, BookOpen, Trophy } from "lucide-react";

const Education = () => {
  const certifications = [
    {
      title: "PMP Training",
      platform: "Simplilearn",
      date: "Oct 2023",
      type: "Professional Certification"
      link: "https://simpli-web.app.link/e/dvLrKzSQPDb"
    },
    {
      title: "Product Management",
      platform: "Great Learning",
      date: "Sep 2023",
      type: "Professional Certification"
      link: "https://verify.mygreatlearning.com/JBYIXLJN"
    },
    {
      title: "Project Management",
      platform: "Great Learning",
      date: "Sep 2023",
      type: "Professional Certification"
      link: "https://verify.mygreatlearning.com/WUMEMYJW"
    },
    {
      title: "Scrum Fundamentals",
      platform: "Academy Europe",
      date: "Aug 2023",
      type: "Agile Methodology"
      link: "https://www.academyeurope.org/wp-content/uploads/learn-press-cert/584f0456255da1ed760556de73635c50.png?fbclid=IwAR20a6ttvQG3icS9oZKOA0m0Rt8NbW_tkndvrbhJfZ-F5yJhKGJzBrGcPQQ"
    },
    {
      title: "Agile Project Management",
      platform: "Academy Europe",
      date: "Aug 2023",
      type: "Project Management"
      link: "https://www.academyeurope.org/wp-content/uploads/learn-press-cert/6ca9507e7124fa72a7e54d4039ebd9d8.png?fbclid=IwAR1yIrJBdtY-ecid4HSEkn5qmTnEsfR254XFjq8zcS_cBpH8vPIgZsvzXmE"
    },
    {
      title: "Learn JIRA with real-world examples (+Confluence bonus)",
      platform: "Udemy",
      date: "March 2023",
      type: "Tool Certification"
      link: "https://ude.my/UC-abb005d1-6ed8-4e71-9460-8c7c0efe212c"
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "NMITD, Mumbai University",
      year: "2022",
      grade: "77.9%, CGPA 8.93",
      highlights: [
        "Specialized in Software Engineering and Project Management",
        "Led Student Council Voting App development project",
        "Core committee member for Roobaroo Intercollegiate Event"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Patkar Varde College",
      year: "2019",
      grade: "62.2%",
      highlights: [
        "Foundation in Computer Science fundamentals",
        "Focused on software development and programming",
        "Active participation in technical events and workshops"
      ]
    }
  ];

  const projects = [
    {
      title: "Student Council Voting App",
      description: "Web-based transparent voting system implemented at NMITD",
      tech: ["Web Development", "Database Management", "Security"],
      impact: "Used by Navinchandra Mehta Institute of Technology and Development for student elections"
    },
    {
      title: "Roobaroo Intercollegiate Event",
      description: "Core committee member for large-scale intercollegiate event management",
      tech: ["Event Management", "Coordination", "Leadership"],
      impact: "Successfully organized event with 500+ participants"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Continuous learning through formal education and professional certifications 
              to stay ahead in project management and technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Education */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-primary">Academic Education</h3>
              </div>

              {education.map((edu, index) => (
                <Card key={index} className="p-6 card-gradient shadow-custom hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-primary mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-accent font-semibold mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.year}
                        </div>
                        <Badge variant="secondary" className="bg-success/10 text-success border-success/30">
                          {edu.grade}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-primary">Professional Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="p-4 card-gradient shadow-custom hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-accent text-sm font-medium mb-1">
                          {cert.platform}
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {cert.date}
                          </div>
                          <Badge 
                            variant="outline" 
                            className="text-xs border-accent/30 text-accent"
                          >
                            {cert.type}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Award className="w-5 h-5 text-accent" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Projects */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold text-primary">Notable Academic Projects</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="p-6 card-gradient shadow-custom hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Trophy className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-primary mb-2">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tech.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="secondary" 
                            className="text-xs bg-secondary/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-success rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="text-sm text-success font-medium">
                          {project.impact}
                        </p>
                      </div>
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

export default Education;
