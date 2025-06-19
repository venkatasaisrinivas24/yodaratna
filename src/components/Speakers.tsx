import React from 'react';

const Organizers = () => {
  const organizers = [
    {
      name: 'BAVYA REDDY',
      title: 'CEO & DIRECTOR',
      image: '/images/bavyareddy.jpg',
      roles: [
        {
          position: 'Founder & CEO',
          organization: 'BBR Foundation',
          type: 'primary'
        },
        {
          position: 'Founder & CEO',
          organization: 'BBR Fashion Events',
          type: 'primary'
        },
        {
          position: 'Secretary and Executive Director',
          organization: 'Nitika Charitable Foundation',
          type: 'secondary'
        }
      ]
    },
    {
      name: 'PRASANNA REDDY',
      title: 'FOUNDER & PRESIDENT',
      image: '/images/Prasanna.jpg',
      roles: [
        {
          position: 'Founder & President',
          organization: 'Nitika Charitable Foundation',
          type: 'primary'
        },
        {
          position: 'Founder & President',
          organization: 'Vaastu Treasure Consultant',
          type: 'primary'
        }
      ]
    }
  ];

  return (
    <section id="organizers" className="py-20 px-6 bg-gradient-to-b from-black to-purple-950/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            ORGANIZERS
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Meet the visionary leaders behind Yoda Ratna Awards
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {organizers.map((organizer, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8 shadow-xl animate-on-scroll hover:border-pink-500/60 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={organizer.image}
                    alt={organizer.name}
                    className="w-full h-64 object-contain bg-black hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
                </div>

                {/* Name and Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
                  {organizer.name}
                </h3>
                <p className="text-xl text-yellow-400 font-semibold mb-6">
                  {organizer.title}
                </p>
              </div>
              
              {/* Roles */}
              <div>
                <h4 className="text-lg text-pink-400 font-bold mb-4 text-center">Leadership Roles</h4>
                <div className="space-y-3">
                  {organizer.roles.map((role, roleIndex) => (
                    <div 
                      key={roleIndex}
                      className="bg-black/30 border border-pink-500/20 rounded-lg p-4 hover:border-pink-500/40 transition-all duration-300 text-center"
                      style={{ animationDelay: `${(index * 0.2) + (roleIndex * 0.1)}s` }}
                    >
                      <p className="text-white font-semibold text-lg mb-1">
                        {role.position}
                      </p>
                      <p className="text-gray-300">
                        of {role.organization}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Organization Highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-lg border border-pink-500/30">
            <h5 className="text-pink-400 font-bold mb-3 text-lg">BBR Foundation</h5>
            <p className="text-gray-300 text-sm">Empowering communities through fashion and philanthropy</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-purple-500/20 to-yellow-500/20 rounded-lg border border-purple-500/30">
            <h5 className="text-purple-400 font-bold mb-3 text-lg">Nitika Charitable Foundation</h5>
            <p className="text-gray-300 text-sm">Dedicated to social welfare and charitable causes</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-yellow-500/20 to-pink-500/20 rounded-lg border border-yellow-500/30">
            <h5 className="text-yellow-400 font-bold mb-3 text-lg">Vaastu Treasure Consultant</h5>
            <p className="text-gray-300 text-sm">Expert consultation in Vaastu and traditional wisdom</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizers;
