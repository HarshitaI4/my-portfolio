import { GraduationCap, Heart, Lightbulb, Users } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in ECE',
    status: 'Pursuing',
    institution: 'Ramachandra College of Engineering, Eluru',
    score: 'CGPA: 7.74',
  },
  {
    degree: 'Intermediate (MPC)',
    status: 'Completed',
    institution: 'Sri Chaitanya Jr College',
    score: '74%',
  },
  {
    degree: 'SSC',
    status: 'Completed',
    institution: 'Sree Balajee Vidyalayam, Machilipatnam',
    score: '100%',
  },
];

const softSkills = [
  { name: 'Team Work', icon: Users },
  { name: 'Problem Solving', icon: Lightbulb },
  { name: 'Adaptability', icon: Heart },
  { name: 'Knowledge Sharing', icon: GraduationCap },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Motivated and adaptable engineering student with strong analytical thinking and teamwork abilities, 
            seeking opportunities to apply academic knowledge in a professional environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="animate-slide-in-left">
            <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="text-primary" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="glass-hover p-6 rounded-2xl"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">{edu.degree}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'Pursuing' 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-secondary/20 text-secondary'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                  <p className="text-primary font-semibold">{edu.score}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="animate-slide-in-right">
            <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-3">
              <Heart className="text-secondary" />
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="glass-hover p-6 rounded-2xl flex flex-col items-center text-center"
                >
                  <skill.icon className="w-10 h-10 text-primary mb-3" />
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Additional Strengths */}
            <div className="glass p-6 rounded-2xl mt-4">
              <h4 className="font-semibold mb-4">Additional Strengths</h4>
              <div className="flex flex-wrap gap-2">
                {['Collaboration', 'Research Skills', 'Critical Thinking', 'Communication'].map((strength) => (
                  <span
                    key={strength}
                    className="bg-muted px-4 py-2 rounded-full text-sm text-muted-foreground"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
