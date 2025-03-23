
import React from 'react';
import AnimatedText from './ui/AnimatedText';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Paymatrix Platform",
      description: "Led frontend development for a comprehensive payment platform processing over $10M in yearly transactions, integrating multiple payment gateways and improving user workflow.",
      imageSrc: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2874&auto=format&fit=crop",
      tags: ["Next.JS","React","JavaScript", "TypeScript", "Redux","Material UI","Tailwind CSS"],
      // liveUrl: "#",
      // githubUrl: "#",
      isHighlighted: true
    },
    {
      title: "Muthoot Fincorp Customer Portal",
      description: "Designed and developed a responsive customer dashboard for financial services with real-time data visualization and secure authentication.",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2826&auto=format&fit=crop",
      tags: ["Next.JS","React", "Redux","Java","Spring Boot", "SQL"],
      // liveUrl: "#",
      // githubUrl: "#",
      isHighlighted: false
    },
    {
      title: "E-Commerce Platform",
      description: "Built a full-featured e-commerce solution with product management, cart functionality, payment processing, and order tracking.",
      imageSrc: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2938&auto=format&fit=crop",
      tags: ["Next.js", "Tailwind CSS", "Java", "Springboot", "SQL"],
      // liveUrl: "#",
      // githubUrl: "#",
      isHighlighted: false
    },
    {
      title: "Real-Time Chat Application",
      description: "Developed a WebSocket-based chat application with real-time messaging, file sharing, and user presence indicators.",
      imageSrc: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=2874&auto=format&fit=crop",
      tags: ["Java", "Redis Pub/Sub", "Web Sockets", "AWS S3"],
      // liveUrl: "#",
      // githubUrl: "#",
      isHighlighted: false
    },
    {
      title: "Task Management System",
      description: "Created a collaborative project management tool with task assignment, progress tracking, and team communication features.",
      imageSrc: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2944&auto=format&fit=crop",
      tags: ["React", "TypeScript", "Node.js", "GraphQL", "MongoDB"],
      // liveUrl: "#",
      // githubUrl: "#",
      isHighlighted: false
    }
  ];

  return (
    <section id="projects" className="section relative overflow-hidden bg-gradient-to-b from-background to-secondary/50">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-6 reveal-animation translate-up">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
              My Work
            </span>
          </div>
          
          <AnimatedText
            text="Featured Projects"
            tag="h2"
            className="font-display font-bold text-3xl md:text-4xl mb-6"
            delay={100}
            once
          />
          
          <AnimatedText
            text="A curated selection of my professional work and side projects showcasing my skills and experience."
            tag="p"
            className="text-foreground/70 max-w-2xl mx-auto text-balance"
            delay={200}
            once
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-animation translate-up">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
