
import React from 'react';

const Speakers = () => {
  const speakers = [
    {
      name: 'Elena Rodriguez',
      title: 'Creative Director',
      company: 'Avant Couture',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face',
      bio: 'Pioneering sustainable luxury fashion with innovative design approaches.'
    },
    {
      name: 'Marcus Chen',
      title: 'Fashion Technologist',
      company: 'Future Wear',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face',
      bio: 'Leading the integration of technology and fashion for next-gen wearables.'
    },
    {
      name: 'Sofia Martinelli',
      title: 'Runway Designer',
      company: 'Milan Studios',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face',
      bio: 'Creating bold, architectural fashion pieces that redefine modern style.'
    },
    {
      name: 'David Park',
      title: 'Fashion Photographer',
      company: 'Visual Arts Co.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop&crop=face',
      bio: 'Capturing the essence of fashion through innovative photography techniques.'
    },
    {
      name: 'Isabella Foster',
      title: 'Brand Strategist',
      company: 'Luxury Brands Inc.',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop&crop=face',
      bio: 'Building iconic fashion brands through strategic vision and market insights.'
    },
    {
      name: 'Alexandre Dubois',
      title: 'Textile Innovation',
      company: 'Fabric Future',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face',
      bio: 'Developing revolutionary fabrics for the future of sustainable fashion.'
    }
  ];

  return (
    <section id="speakers" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            Featured Speakers
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Learn from industry pioneers and visionaries shaping the future of fashion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group relative bg-black/50 backdrop-blur-sm border border-pink-500/30 rounded-xl overflow-hidden hover:border-pink-500/60 transition-all duration-300 hover:scale-105 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-pink-400 transition-colors duration-300">
                  {speaker.name}
                </h3>
                <p className="text-pink-400 font-medium mb-1">{speaker.title}</p>
                <p className="text-yellow-400 text-sm mb-4">{speaker.company}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{speaker.bio}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-500 transition-all duration-300">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
