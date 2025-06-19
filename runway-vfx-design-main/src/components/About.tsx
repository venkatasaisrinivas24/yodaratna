
import React from 'react';
import { Users, Camera, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Attendees' },
    { icon: Camera, value: '50+', label: 'Designers' },
    { icon: Clock, value: '3', label: 'Days' }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
              About Fashion Week
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Experience the pinnacle of fashion innovation at our exclusive three-day event. 
              Witness groundbreaking designs, connect with industry leaders, and discover 
              the future of style in an immersive, luxurious environment.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              From avant-garde runway shows to intimate designer talks, Fashion Week 2024 
              brings together the most influential voices in fashion, creating an 
              unforgettable celebration of creativity and style.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="mb-3 flex justify-center">
                      <IconComponent className="text-pink-400 group-hover:text-yellow-400 transition-colors duration-300" size={32} />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="animate-on-scroll relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop"
                alt="Fashion Event"
                className="w-full h-96 object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-500 to-pink-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
