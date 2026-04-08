import { ExternalLink, Github, ShoppingCart, Car, Building } from 'lucide-react';

const projects = [
  {
    title: 'Online Shopping Cart System',
    description: 'Developed a full-stack e-commerce application with user authentication, product management, and order processing. Implemented admin panel for inventory control and user module for browsing and purchasing products.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    icon: ShoppingCart,
    type: 'Full Stack Application',
    github: 'https://github.com/HarshitaI4/shopping-cart'
  },
  {
    title: 'Online Car Website',
    description: 'Designed a responsive web application to showcase car listings, company services, and customer interaction features with dynamic UI components.',
    tags: ['React', 'CSS', 'JavaScript', 'Bootstrap'],
    icon: Car,
    type: 'Web Application',
    github: 'https://github.com/HarshitaI4/Project1'
  },
  {
    title: 'College Lab Management System',
    description: 'Built a web-based system to manage laboratory resources, track equipment usage, and handle user roles efficiently for students and administrators.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    icon: Building,
    type: 'Full Stack Application',
    github: 'https://github.com/HarshitaI4/college_labmanagement-main'
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my full-stack and web development projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="glass-hover rounded-2xl overflow-hidden group">
              
              <div className="h-40 bg-gradient-primary/20 flex items-center justify-center">
                <project.icon className="w-16 h-16 text-primary/50 group-hover:text-primary" />
              </div>

              <div className="p-6">
                <span className="text-xs text-primary">{project.type}</span>
                <h3 className="font-display text-xl font-semibold mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-muted px-2 py-1 rounded-md text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href={project.github} target="_blank" className="flex items-center gap-2 text-sm hover:text-primary">
                    <Github size={16} /> Code
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm hover:text-primary">
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;