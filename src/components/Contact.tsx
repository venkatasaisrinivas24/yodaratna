import React, { useState } from 'react';
import { Mail, MapPin, Clock, Bell, Phone, Globe } from 'lucide-react';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log('Contact form submitted:', contactForm);

      setTimeout(() => {
        setIsSubmitted(false);
        setContactForm({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Hyderabad, Telangana, India', 'The City of Pearls']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['yodaratana@gmail.com']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 8501887794', '+91 7989083605']
    },
    {
      icon: Clock,
      title: 'Event Hours',
      details: ['March 15-17, 2024', '9:00 AM - 10:00 PM', 'Registration: 8:00 AM daily']
    },
    {
      icon: Globe,
      title: 'Website',
      details: ['www.yodaratna.com']
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-black to-purple-950/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions? We're here to help make your Fashion Week experience unforgettable
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Column */}
          <div className="animate-on-scroll">
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-300">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Embedded Google Map */}
            <div className="mt-8 rounded-xl overflow-hidden aspect-video shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.25176871577!2d78.40804555!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1750327148193!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="animate-on-scroll">
            <div className="bg-black/50 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bell size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-300">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300"
                  />
                  <select
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-pink-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select Subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="registration">Registration Help</option>
                    <option value="press">Press & Media</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="technical">Technical Support</option>
                  </select>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300 resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-pink-500/30 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            {['Instagram', 'Twitter', 'LinkedIn', 'YouTube'].map((social) => (
              <a
                key={social}
                href=" #"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
          <p className="text-gray-500">
            © 2025 Yoda Ratna Awards . All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
