
import React, { useState } from 'react';
import { Mail, User, Calendar, Check } from 'lucide-react';

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    ticketType: 'standard'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ticketTypes = [
    {
      type: 'standard',
      name: 'Standard Pass',
      price: '$299',
      features: ['Access to all runway shows', 'Welcome reception', 'Networking sessions', 'Event swag bag']
    },
    {
      type: 'premium',
      name: 'Premium Pass',
      price: '$599',
      features: ['All Standard Pass benefits', 'VIP seating', 'Exclusive designer meet & greets', 'Premium gift package', 'After-party access']
    },
    {
      type: 'vip',
      name: 'VIP Experience',
      price: '$999',
      features: ['All Premium Pass benefits', 'Private backstage tours', 'One-on-one designer consultations', 'Luxury accommodation', 'Personal styling session']
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log('Registration submitted:', formData);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <section id="registration" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-black/50 backdrop-blur-sm border border-green-500/30 rounded-2xl p-12">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Registration Successful!</h2>
            <p className="text-gray-300 text-lg mb-6">
              Thank you for registering for Fashion Week 2024. Check your email for confirmation details.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  company: '',
                  role: '',
                  ticketType: 'standard'
                });
              }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-purple-600 hover:to-pink-500 transition-all duration-300"
            >
              Register Another
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            Register Now
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Secure your spot at the most exclusive fashion event of the year
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Registration Form */}
          <div className="animate-on-scroll">
            <div className="bg-black/50 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Registration Details</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/50 border border-gray-600 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/50 border border-gray-600 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-gray-600 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <input
                  type="text"
                  name="company"
                  placeholder="Company/Organization"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300"
                />

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-pink-500 focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select Your Role</option>
                  <option value="designer">Fashion Designer</option>
                  <option value="buyer">Buyer</option>
                  <option value="journalist">Fashion Journalist</option>
                  <option value="photographer">Photographer</option>
                  <option value="influencer">Influencer</option>
                  <option value="student">Student</option>
                  <option value="other">Other</option>
                </select>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : 'Register Now'}
                </button>
              </form>
            </div>
          </div>

          {/* Ticket Options */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-white mb-6">Choose Your Experience</h3>
            
            <div className="space-y-4">
              {ticketTypes.map((ticket) => (
                <div
                  key={ticket.type}
                  className={`bg-black/50 backdrop-blur-sm border rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                    formData.ticketType === ticket.type
                      ? 'border-pink-500 bg-pink-500/10'
                      : 'border-pink-500/30 hover:border-pink-500/60'
                  }`}
                  onClick={() => setFormData({ ...formData, ticketType: ticket.type })}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">{ticket.name}</h4>
                      <p className="text-2xl font-bold text-pink-400">{ticket.price}</p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      formData.ticketType === ticket.type
                        ? 'border-pink-500 bg-pink-500'
                        : 'border-gray-400'
                    }`}>
                      {formData.ticketType === ticket.type && (
                        <Check size={16} className="text-white" />
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {ticket.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <Check size={16} className="text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
