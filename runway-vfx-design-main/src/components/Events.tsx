
import React, { useState } from 'react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('runway');

  const eventCategories = {
    runway: {
      title: 'Runway Shows',
      events: [
        {
          title: 'Avant-Garde Showcase',
          time: '10:00 AM - 12:00 PM',
          description: 'Experimental designs pushing fashion boundaries',
          image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop'
        },
        {
          title: 'Luxury Couture',
          time: '2:00 PM - 4:00 PM',
          description: 'High-end fashion from renowned designers',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop'
        },
        {
          title: 'Sustainable Fashion',
          time: '6:00 PM - 8:00 PM',
          description: 'Eco-friendly designs for conscious consumers',
          image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop'
        }
      ]
    },
    talks: {
      title: 'Designer Talks',
      events: [
        {
          title: 'Future of Fashion Tech',
          time: '11:00 AM - 12:30 PM',
          description: 'Innovation in fashion technology and design',
          image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop'
        },
        {
          title: 'Sustainable Practices',
          time: '3:00 PM - 4:30 PM',
          description: 'Ethical fashion and environmental responsibility',
          image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop'
        }
      ]
    },
    workshops: {
      title: 'Workshops',
      events: [
        {
          title: 'Fashion Photography',
          time: '9:00 AM - 11:00 AM',
          description: 'Master the art of fashion photography',
          image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop'
        },
        {
          title: 'Pattern Making',
          time: '1:00 PM - 3:00 PM',
          description: 'Learn professional pattern creation techniques',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop'
        }
      ]
    }
  };

  return (
    <section id="events" className="py-20 px-6 bg-gradient-to-b from-black to-purple-950/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            Events & Shows
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover an incredible lineup of runway shows, designer talks, and interactive workshops
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 animate-on-scroll">
          <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 border border-pink-500/30">
            {Object.entries(eventCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventCategories[activeTab as keyof typeof eventCategories].events.map((event, index) => (
            <div
              key={index}
              className="group bg-black/50 backdrop-blur-sm border border-pink-500/30 rounded-xl overflow-hidden hover:border-pink-500/60 transition-all duration-300 hover:scale-105 animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-pink-400 font-medium">
                  {event.time}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
