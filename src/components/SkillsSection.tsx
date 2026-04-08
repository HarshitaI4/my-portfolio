import { Code, Database, Layout, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'ServiceNow',
    icon: Code,
    skills: ['ServiceNow Administration', 'Workflows', 'Forms', 'Reports'],
    color: 'primary',
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    color: 'secondary',
  },
  {
    title: 'Backend & Database',
    icon: Database,
    skills: ['Node.js', 'Express', 'MongoDB'],
    color: 'accent',
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
    color: 'primary',
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass-hover p-6 rounded-2xl">
              
              <div className={`w-12 h-12 rounded-xl bg-${category.color}/20 flex items-center justify-center mb-4`}>
                <category.icon className={`w-6 h-6 text-${category.color}`} />
              </div>

              <h3 className="font-display text-xl font-semibold mb-4">{category.title}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="bg-muted px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;