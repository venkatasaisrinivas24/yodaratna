
import React, { useState } from 'react';
import { Clock, MapPin, Users } from 'lucide-react';

const Agenda = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const agendaData = {
    1: {
      date: 'March 15, 2024',
      events: [
        {
          time: '09:00 AM',
          title: 'Registration & Welcome',
          location: 'Main Lobby',
          type: 'registration',
          attendees: '500+'
        },
        {
          time: '10:00 AM',
          title: 'Opening Ceremony',
          location: 'Grand Auditorium',
          type: 'ceremony',
          attendees: '500+'
        },
        {
          time: '11:30 AM',
          title: 'Avant-Garde Showcase',
          location: 'Runway A',
          type: 'runway',
          attendees: '300'
        },
        {
          time: '02:00 PM',
          title: 'Future of Fashion Tech',
          location: 'Conference Hall B',
          type: 'talk',
          attendees: '150'
        },
        {
          time: '04:00 PM',
          title: 'Luxury Couture Show',
          location: 'Runway A',
          type: 'runway',
          attendees: '300'
        },
        {
          time: '07:00 PM',
          title: 'Welcome Gala Dinner',
          location: 'Rooftop Terrace',
          type: 'social',
          attendees: '200'
        }
      ]
    },
    2: {
      date: 'March 16, 2024',
      events: [
        {
          time: '09:00 AM',
          title: 'Fashion Photography Workshop',
          location: 'Studio 1',
          type: 'workshop',
          attendees: '50'
        },
        {
          time: '11:00 AM',
          title: 'Sustainable Fashion Panel',
          location: 'Conference Hall A',
          type: 'talk',
          attendees: '200'
        },
        {
          time: '01:00 PM',
          title: 'Pattern Making Workshop',
          location: 'Workshop Space',
          type: 'workshop',
          attendees: '30'
        },
        {
          time: '03:30 PM',
          title: 'Emerging Designers Showcase',
          location: 'Runway B',
          type: 'runway',
          attendees: '250'
        },
        {
          time: '06:00 PM',
          title: 'Sustainable Fashion Show',
          location: 'Runway A',
          type: 'runway',
          attendees: '300'
        },
        {
          time: '08:30 PM',
          title: 'After Party',
          location: 'VIP Lounge',
          type: 'social',
          attendees: '150'
        }
      ]
    },
    3: {
      date: 'March 17, 2024',
      events: [
        {
          time: '10:00 AM',
          title: 'Industry Networking',
          location: 'Exhibition Hall',
          type: 'networking',
          attendees: '400'
        },
        {
          time: '12:00 PM',
          title: 'Brand Strategy Masterclass',
          location: 'Conference Hall A',
          type: 'talk',
          attendees: '100'
        },
        {
          time: '02:30 PM',
          title: 'International Designer Show',
          location: 'Runway A',
          type: 'runway',
          attendees: '350'
        },
        {
          time: '05:00 PM',
          title: 'Closing Ceremony',
          location: 'Grand Auditorium',
          type: 'ceremony',
          attendees: '500+'
        },
        {
          time: '07:00 PM',
          title: 'Awards Gala',
          location: 'Ballroom',
          type: 'social',
          attendees: '300'
        }
      ]
    }
  };

  const getEventColor = (type: string) => {
    const colors = {
      registration: 'from-blue-500 to-cyan-500',
      ceremony: 'from-purple-500 to-pink-500',
      runway: 'from-pink-500 to-red-500',
      talk: 'from-green-500 to-emerald-500',
      workshop: 'from-orange-500 to-yellow-500',
      social: 'from-violet-500 to-purple-500',
      networking: 'from-indigo-500 to-blue-500'
    };
    return colors[type as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="agenda" className="py-20 px-6 bg-gradient-to-b from-purple-950/30 to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            Event Agenda
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Three days of fashion innovation, networking, and unforgettable experiences
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex justify-center mb-12 animate-on-scroll">
          <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 border border-pink-500/30">
            {[1, 2, 3].map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedDay === day
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Day {day}
              </button>
            ))}
          </div>
        </div>

        {/* Agenda Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              {agendaData[selectedDay as keyof typeof agendaData].date}
            </h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 to-purple-600"></div>

            {agendaData[selectedDay as keyof typeof agendaData].events.map((event, index) => (
              <div
                key={index}
                className="relative flex items-start mb-8 group animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className={`relative z-10 w-4 h-4 rounded-full bg-gradient-to-r ${getEventColor(event.type)} mr-6 mt-2 group-hover:scale-125 transition-transform duration-300`}>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 animate-pulse opacity-50"></div>
                </div>

                {/* Event card */}
                <div className="flex-1 bg-black/50 backdrop-blur-sm border border-pink-500/30 rounded-xl p-6 hover:border-pink-500/60 transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-pink-400 font-bold text-lg">{event.time}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getEventColor(event.type)} text-white`}>
                          {event.type}
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors duration-300">
                        {event.title}
                      </h4>
                      
                      <div className="flex flex-wrap gap-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-yellow-400" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-green-400" />
                          <span>{event.attendees} attendees</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
