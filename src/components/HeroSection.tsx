import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const floatingSkills = ['React', 'Node.js', 'Python', 'MongoDB'];

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-gradient">Harshita Naga Lakshmi</span>
            </h1>

            <h2 className="text-xl text-muted-foreground mb-6">
              ServiceNow Certified | Full Stack Developer
            </h2>

            <div className="flex gap-4 justify-center lg:justify-start mb-6">
              <a href="#contact" className="bg-gradient-primary px-6 py-3 rounded-xl">
                Contact
              </a>
              <a href="#projects" className="glass-hover px-6 py-3 rounded-xl">
                Projects
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://github.com/HarshitaI4" target="_blank"><Github /></a>
              <a href="https://linkedin.com" target="_blank"><Linkedin /></a>
              <a href="mailto:harshitap.2401@gmail.com"><Mail /></a>
            </div>
          </div>

          <div className="flex-1 flex justify-center relative">

            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">

              <img 
                src="/myphoto.jpg"
                className="w-full h-full object-cover"
              />

              {floatingSkills.map((skill, index) => (
                <div
                  key={skill}
                  className="absolute bg-muted px-3 py-1 rounded-full text-sm"
                  style={{
                    top: `${20 + index * 20}%`,
                    left: index % 2 === 0 ? '-60px' : '220px',
                    animation: 'float 5s ease-in-out infinite',
                    animationDelay: `${index * 1}s`
                  }}
                >
                  {skill}
                </div>
              ))}

            </div>

          </div>
        </div>

        <div className="text-center mt-10">
          <ArrowDown />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
