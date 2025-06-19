
import React, { useState, useEffect } from 'react';
import { ArrowDown, Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set event date (example: 30 days from now)
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-black to-pink-900/50"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1920')] bg-cover bg-center opacity-30"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-pink-500/50 to-yellow-500/50 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent animate-fade-in">
            FASHION WEEK
          </h1>
          <h2 className="text-2xl md:text-4xl font-light text-gray-300 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            The Future of Style
          </h2>
        </div>

        {/* Event Details */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 text-gray-300 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-2">
            <Calendar className="text-pink-400" />
            <span>March 15-17, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-yellow-400" />
            <span>Milan Fashion Center</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <h3 className="text-xl mb-6 text-gray-300">Event Starts In</h3>
          <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={item.label} className="bg-black/50 backdrop-blur-sm border border-pink-500/30 rounded-lg p-4 hover:border-pink-500/60 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-pink-400">{item.value.toString().padStart(2, '0')}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '2s' }}>
          <button 
            onClick={() => document.querySelector('#registration')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button 
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300"
          >
            Learn More
          </button>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToNext}
          className="animate-bounce text-white hover:text-pink-400 transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
