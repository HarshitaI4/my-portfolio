import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const floatingSkills = ['React', 'Node.js', 'Python', 'MongoDB'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center lg:text-left animate-slide-up">

            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Open to Work</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-gradient">Harshita Naga Lakshmi</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              SerViceNow Certified | Full Stack Developer
            </h2>

            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Passionate developer focused on building scalable web applications and smart solutions with strong interest in the ServiceNow platform.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">

              <a
                href="#contact"
                className="bg-gradient-primary px-8 py-3 rounded-full font-semibold text-foreground hover:opacity-90 transition-all hover:scale-105 glow-primary"
              >
                Contact Me
              </a>

              <a
                href="#projects"
                className="glass-hover px-8 py-3 rounded-full font-semibold text-foreground"
              >
                View Projects
              </a>

              <a
                href="/Harshita Naga Lakshmi - Jr Servicenow developer.pdf"
                download
                className="glass-hover px-8 py-3 rounded-full font-semibold text-foreground"
              >
                Download Resume
              </a>

            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://github.com/HarshitaI4" target="_blank" rel="noopener noreferrer" className="glass-hover p-3 rounded-full">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/penugonda-harshita-naga-lakshmi-00b272259" target="_blank" rel="noopener noreferrer" className="glass-hover p-3 rounded-full">
                <Linkedin size={20} />
              </a>
              <a href="mailto:harshitap.2401@gmail.com" className="glass-hover p-3 rounded-full">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center relative">
            <div className="relative">

              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-40 animate-pulse-glow" />
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-primary p-1 animate-float">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  
                  <img 
                    src="/myphoto.jpg"
                    alt="Harshita"
                    className="w-full h-full object-cover"
                  />

                </div>
              </div>

              {floatingSkills.map((skill, index) => (
                <div
                  key={skill}
                  className={`absolute glass px-4 py-2 rounded-full text-sm font-medium animate-float ${
                    index === 0 ? 'top-0 -left-8' :
                    index === 1 ? 'top-1/4 -right-12' :
                    index === 2 ? 'bottom-1/4 -left-16' :
                    'bottom-0 -right-4'
                  }`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-muted-foreground">Scroll Down</span>
          <ArrowDown size={20} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
