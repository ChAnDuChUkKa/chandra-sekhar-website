
import React from 'react';
import AnimatedText from './ui/AnimatedText';
import { Code, Monitor, Server } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="mb-6 reveal-animation translate-up">
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                About Me
              </span>
            </div>
            
            <AnimatedText
              text="Professional Full Stack Developer with a Frontend Focus"
              tag="h2"
              className="font-display font-bold text-3xl md:text-4xl mb-6 text-balance"
              delay={100}
              once
            />
            
            <div className="space-y-4">
              <AnimatedText
                text="I'm a passionate developer with 3 years of professional experience, specializing in creating elegant, user-centric web applications that blend form and function seamlessly."
                tag="p"
                className="text-foreground/70 leading-relaxed"
                delay={200}
                once
              />
              
              <AnimatedText
                text="At Muthoot Fincorp, I worked with Java and Spring Boot, while my internship experience introduced me to Node.js development, giving me a versatile perspective on both frontend and backend technologies."
                tag="p"
                className="text-foreground/70 leading-relaxed"
                delay={300}
                once
              />
              
              <AnimatedText
                text="I approach each project with meticulous attention to detail, focusing on clean code architecture and intuitive user experiences that exceed client expectations."
                tag="p"
                className="text-foreground/70 leading-relaxed"
                delay={400}
                once
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="glass p-8 rounded-2xl reveal-animation translate-up shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass p-6 rounded-xl transition-all duration-300 hover:shadow-md">
                  <Monitor className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Frontend</h3>
                  <p className="text-sm text-foreground/70">
                    Creating intuitive interfaces with React, Next.js, Vue.js, TypeScript and modern CSS frameworks.
                  </p>
                </div>
                
                <div className="glass p-6 rounded-xl transition-all duration-300 hover:shadow-md">
                  <Server className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Backend</h3>
                  <p className="text-sm text-foreground/70">
                    Experience with Java, Spring Boot, and basic Node.js for API development.
                  </p>
                </div>
                
                <div className="glass p-6 rounded-xl transition-all duration-300 hover:shadow-md">
                  <Code className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Development</h3>
                  <p className="text-sm text-foreground/70">
                    Implementing testing with Jest/Cypress, responsive design, and modern development practices.
                  </p>
                </div>
                
                <div className="glass p-6 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-1">3+</div>
                    <div className="text-sm text-foreground/70">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
