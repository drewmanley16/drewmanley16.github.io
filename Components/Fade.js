import React, { useEffect } from 'react';
import '/Users/drewmanley/Documents/Documents - Drew’s MacBook Air/Coding Projects/Portfolio/Portfolio2/portfolio2/src/Components/Fade.css'

const useScrollFadeIn = () => {
    useEffect(() => {
      const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
          }
        });
      };
  
      const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.1
      });
  
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach(element => observer.observe(element));
  
      return () => {
        fadeElements.forEach(element => observer.unobserve(element));
      };
    }, []);
  
    return (
      <div>
        <div className="fade-in">Content to fade in as you scroll</div>
        <div className="fade-in">More content</div>
        {/* Repeat for other elements as needed */}
      </div>
    );
  };
  
  export default useScrollFadeIn;