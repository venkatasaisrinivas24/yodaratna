import React from 'react';
import { Star, Award, Users, Video, Gift, Globe } from 'lucide-react';

const Sponsors = () => {
  const sponsorCategories = [
    {
      id: 1,
      title: 'YODA RATNA',
      price: '₹ 3,00,000',
      image: '/images/gold.png',
      features: [
        { icon: Award, text: 'Title Branding on Key Awards', description: 'Premium placement on all award materials' },
        { icon: Globe, text: 'Logo on all Event Materials', description: 'Comprehensive brand visibility' },
        { icon: Users, text: 'VIP Interaction with Guests', description: 'Direct access to high-profile attendees' },
        { icon: Video, text: 'Brand Video Showcase & Media Coverage', description: 'Featured video presentation and press coverage' },
        { icon: Star, text: '5 VIP passes and on-stage acknowledgment', description: 'Maximum exposure and recognition' }
      ],
      website: 'www.yodaratna.com',
      color: 'from-pink-500 to-purple-600',
      borderColor: 'border-pink-500/50',
      isPremium: true
    },
    {
      id: 2,
      title: 'YODA RATNA',
      price: '₹ 2,00,000',
      image: '/images/silver.png',
      features: [
        { icon: Globe, text: 'Logo on select Materials and Social posts', description: 'Strategic brand placement' },
        { icon: Video, text: 'Mention in recap content', description: 'Post-event brand recognition' },
        { icon: Gift, text: 'Opportunity for Branded giveaways', description: 'Custom promotional items' },
        { icon: Star, text: '3 VIP Passes + on-Stage Promotion', description: 'Significant visibility and access' }
      ],
      website: 'www.yodaratna.com',
      color: 'from-purple-500 to-blue-600',
      borderColor: 'border-purple-500/50',
      isPremium: false
    },
    {
      id: 3,
      title: 'YODA RATNA',
      price: '₹ 1,00,000',
      image: '/images/bronze.png',
      features: [
        { icon: Globe, text: 'Logo on Event Kits and Banners', description: 'Visible brand presence' },
        { icon: Star, text: '2 VIP Passes', description: 'Limited VIP access' },
        { icon: Video, text: 'Recognition in Event recap', description: 'Post-event acknowledgment' },
        { icon: Users, text: 'Interaction with VIPs and Celebrities', description: 'Networking opportunities' }
      ],
      website: 'www.yodaratna.com',
      color: 'from-blue-500 to-cyan-600',
      borderColor: 'border-blue-500/50',
      isPremium: false
    },
    {
      id: 4,
      title: 'SPONSOR CATEGORY',
      price: 'Contact Us',
      image: '/images/black.png',
      features: [
        { icon: Globe, text: 'Shared Logo Presence', description: 'Group logo display' },
        { icon: Star, text: '1–2 VIP Passes', description: 'Limited VIP access' },
        { icon: Award, text: 'Group Acknowledgment', description: 'Collective recognition' },
        { icon: Gift, text: 'Distribute Brand Material', description: 'Promotional material distribution' }
      ],
      website: 'www.yodaratna.com',
      color: 'from-gray-500 to-gray-600',
      borderColor: 'border-gray-500/50',
      isPremium: false
    }
  ];

  return (
    <section id="sponsors" className="py-20 px-6 bg-gradient-to-b from-black to-purple-950/30">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            SPONSOR CATEGORIES
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Join us as a sponsor and be part of the prestigious Yoda Ratna Awards
          </p>
        </div>

        {/* Sponsor Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sponsorCategories.map((category, index) => (
            <div
              key={category.id}
              className={`relative flex flex-col justify-between h-full bg-black/50 backdrop-blur-sm border ${category.borderColor} rounded-2xl shadow-xl animate-on-scroll hover:scale-105 transition-all duration-300 ${
                category.isPremium ? 'ring-2 ring-pink-500/50' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col justify-between h-full p-6">
                {category.isPremium && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                      PREMIUM
                    </div>
                  </div>
                )}

                <div>
                  <div className="mb-4 w-full h-40 flex items-center justify-center bg-black rounded-xl">
                    <img
                      src={category.image}
                      alt={`${category.title} Logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
                      {category.title}
                    </h3>
                    <div className="text-3xl font-bold text-yellow-400 mb-4">
                      {category.price}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.features.map((feature, featureIndex) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={featureIndex} className="flex items-start gap-3 group">
                          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <FeatureIcon className="text-white" size={16} />
                          </div>
                          <div>
                            <p className="text-white font-semibold text-sm mb-1">
                              {feature.text}
                            </p>
                            <p className="text-gray-400 text-xs leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <a
                    href={`https://${category.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block bg-gradient-to-r ${category.color} text-white text-center px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300`}
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-black/30 border border-pink-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Sponsor Yoda Ratna Awards?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <h4 className="text-white font-semibold mb-2">High-Profile Audience</h4>
                <p className="text-gray-300 text-sm">
                  Connect with influential personalities and decision-makers
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="text-white" size={32} />
                </div>
                <h4 className="text-white font-semibold mb-2">Media Coverage</h4>
                <p className="text-gray-300 text-sm">
                  Extensive media presence and brand visibility
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <h4 className="text-white font-semibold mb-2">Prestigious Association</h4>
                <p className="text-gray-300 text-sm">
                  Align your brand with excellence and recognition
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Associate & Brand Partners */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
            ASSOCIATE & BRAND PARTNERS
          </h2>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
  {[
    'i1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png'
  ].map((filename, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center h-40 hover:scale-105 transition-transform duration-300"
    >
      <img
        src={`/images/${filename}`}
        alt={`Brand ${index + 1}`}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  ))}
</div>



        </div>
      </div>
    </section>
  );
};

export default Sponsors;
