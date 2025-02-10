import { useEffect, useState } from 'react';

const useHeaderStyles = (headerDarkMode: boolean): boolean => {
  const [darkMode, setDarkMode] = useState<boolean>(headerDarkMode || false);

  useEffect(() => {
    const headerStyles = () => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>('section.section-dark'));
      const header = document.querySelector<HTMLElement>('header');

      const frames = sections.map(section => ({
        start: section.offsetTop,




        
        end: section.offsetTop + section.getBoundingClientRect().height,
      }));

      let isDarkMode: boolean;

      if (window.pageYOffset <= 100) {
        isDarkMode = headerDarkMode || false;
      } else {
        isDarkMode = frames.some(frame => window.pageYOffset >= frame.start && window.pageYOffset < frame.end);
      }

      if (header) {
        header.classList.toggle('header-dark', isDarkMode);
      }

      setDarkMode(isDarkMode);
    };

    const handleScroll = () => {
      window.requestAnimationFrame(headerStyles);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerDarkMode]);

  return darkMode;
};

export default useHeaderStyles;
