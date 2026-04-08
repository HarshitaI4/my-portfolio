import { Award, BookOpen, Trophy, Zap } from 'lucide-react';

const certifications = [
  'Micro-Certification – ServiceNow',
  'Certified System Administrator (CSA) – ServiceNow',
  'Certified Application Developer (CAD) – ServiceNow',
  'OCI 2025 Certified AI Foundation Associate – Oracle',
  'C for Everyone: Programming Fundamentals - Coursera',
  'Python for Beginners - Simplilearn',
  'Introduction to HTML - Simplilearn',
  'AI for You - Oracle',
  'Research Methodology - NPTEL',
];

const workshops = [
  { name: 'PCB Design & Fabrication', org: 'Workshop' },
  { name: 'Machine Learning & Data Analytics using Python', org: 'Tvarana + Synxa' },
  { name: 'Industrial Embedded Systems & IoT', org: 'Kernel Masters' },
];

const highlights = [
  { label: 'Workshops', value: '3+', icon: BookOpen },
  { label: 'Certifications', value: '9+', icon: Award },
  { label: 'Projects', value: '3+', icon: Zap },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Workshops & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through workshops, training, and certifications
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={item.label}
              className="glass-hover p-6 rounded-2xl text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="font-display text-3xl font-bold text-gradient mb-1">
                {item.value}
              </div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div className="animate-slide-in-left">
            <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-3">
              <Trophy className="text-primary" />
              Certifications
            </h3>
            <div className="glass p-6 rounded-2xl">
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Workshops */}
          <div className="animate-slide-in-right">
            <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-3">
              <BookOpen className="text-secondary" />
              Workshops & Training
            </h3>
            <div className="space-y-4">
              {workshops.map((workshop, index) => (
                <div
                  key={index}
                  className="glass-hover p-6 rounded-2xl"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold mb-1">{workshop.name}</h4>
                      <p className="text-sm text-muted-foreground">{workshop.org}</p>
                    </div>
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      Workshop
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
