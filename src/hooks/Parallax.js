import { useEffect } from 'react';

const Parallax = (elements, speed) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      elements.forEach((element) => {
        const parallaxSpeed = element.getAttribute('data-speed') || speed;
        const translateY = -scrollPosition * parallaxSpeed;

        element.style.transform = `translateY(${translateY}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elements, speed]);
};

export default Parallax;
