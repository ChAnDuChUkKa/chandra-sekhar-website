
import React, { useEffect, useRef } from 'react';
import AnimatedText from './ui/AnimatedText';
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const moveX = x * 10;
      const moveY = y * 10;
      
      const layers = heroRef.current.querySelectorAll('.parallax-layer');
      layers.forEach((layer, index) => {
        const depth = (index + 1) * 0.5;
        const moveXWithDepth = moveX * depth;
        const moveYWithDepth = moveY * depth;
        (layer as HTMLElement).style.transform = `translate3d(${moveXWithDepth}px, ${moveYWithDepth}px, 0)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl parallax-layer"></div>
        <div className="absolute left-1/4 bottom-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl parallax-layer"></div>
      </div>

      <div className="container max-w-4xl mx-auto px-4 text-center">
        <div className="mb-4 inline-block">
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full animate-fade-in">
            Full Stack Developer
          </span>
        </div>
        
        <div className="mb-8 overflow-hidden">
          <AnimatedText
            text="Engineering Speed, Efficiency & Scalable Frontend Magic"
            tag="h1"
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-balance"
            delay={100}
            once
          />
          
          <AnimatedText
            text="I turn complex problems into seamless, high-performance web experiences—because every millisecond counts"
            tag="p"
            className="text-foreground/70 max-w-2xl mx-auto text-lg md:text-xl text-balance"
            delay={300}
            once
          />
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in opacity-0" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-foreground/50 hover:text-accent transition-colors">
          <ArrowDownCircle className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
