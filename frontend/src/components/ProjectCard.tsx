
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  isHighlighted?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  tags,
  liveUrl,
  githubUrl,
  isHighlighted = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "group overflow-hidden rounded-xl card-hover relative",
        isHighlighted ? "md:col-span-2" : "col-span-1",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden relative">
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 transition-opacity duration-300 z-10",
          isHovered ? "opacity-80" : "md:opacity-0"
        )} />
        
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        <div className={cn(
          "absolute bottom-0 left-0 right-0 p-6 z-20 transition-transform duration-500",
          isHovered ? "translate-y-0" : "md:translate-y-8 md:opacity-0",
          "opacity-100"
        )}>
          <h3 className="text-white font-display font-bold text-2xl mb-2">{title}</h3>
          <p className="text-white/80 mb-4 line-clamp-2">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-white/10 text-white/90 rounded text-xs">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3">
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white bg-accent/90 hover:bg-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
            
            {githubUrl && (
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white bg-foreground/20 hover:bg-foreground/30 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
