import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Events from '../components/Events';
import Sponsors from '../components/Sponsors';
import Speakers from '../components/Speakers';
import Agenda from '../components/Agenda';
import Registration from '../components/Registration';
import Contact from '../components/Contact';
import LoadingScreen from '../components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate preloader (3s)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Animate sections when they enter the viewport
  useEffect(() => {
    if (!isLoading) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.classList.contains('animate-fade-in')) {
              entry.target.classList.add('animate-fade-in');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    }
  }, [isLoading]);

  // Render loading screen first
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white overflow-x-hidden scroll-smooth">
      <Navigation />
      <Hero />
      <About />
      <Events />
      <Sponsors />
      <Speakers />
      <Agenda />
      <Registration />
      <Contact />
    </div>
  );
};

export default Index;
