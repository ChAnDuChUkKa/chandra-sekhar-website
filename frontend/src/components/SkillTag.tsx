
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillTagProps {
  name: string;
  icon: React.ReactNode;
  className?: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ name, icon, className }) => {
  return (
    <div 
      className={cn(
        "glass flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1",
        className
      )}
    >
      <span className="text-accent">{icon}</span>
      <span className="font-medium">{name}</span>
    </div>
  );
};

export default SkillTag;
