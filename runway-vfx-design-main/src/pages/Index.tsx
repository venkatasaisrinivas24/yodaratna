
import React, { useEffect, useState } from 'react';
import { ArrowDown, Calendar, Users, MapPin, Mail, Camera, Clock } from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';
import Events from '../components/Events';
import Speakers from '../components/Speakers';
import Agenda from '../components/Agenda';
import Registration from '../components/Registration';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import LoadingScreen from '../components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for animations
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Initialize scroll animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      }, observerOptions);

      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => observer.observe(el));

      return () => {
        animatedElements.forEach((el) => observer.unobserve(el));
      };
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Events />
      <Speakers />
      <Agenda />
      <Registration />
      <Contact />
    </div>
  );
};

export default Index;
