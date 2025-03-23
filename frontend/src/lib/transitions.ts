
import { useEffect } from 'react';

export const PageReveal = (delay: number = 0) => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-animation');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active');
          }, delay);
        }
      });
    }, {
      threshold: 0.15
    });
    
    revealElements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      revealElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [delay]);
};

export const CursorEffect = () => {
  useEffect(() => {
    const cursorHighlight = document.createElement('div');
    cursorHighlight.classList.add('cursor-highlight');
    document.body.appendChild(cursorHighlight);

    const updateCursorPosition = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursorHighlight.style.left = `${clientX}px`;
      cursorHighlight.style.top = `${clientY}px`;
    };

    const activateCursor = () => {
      cursorHighlight.classList.add('active');
    };

    const deactivateCursor = () => {
      cursorHighlight.classList.remove('active');
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', activateCursor);
    document.addEventListener('mouseleave', deactivateCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', activateCursor);
      document.removeEventListener('mouseleave', deactivateCursor);
      document.body.removeChild(cursorHighlight);
    };
  }, []);
};
