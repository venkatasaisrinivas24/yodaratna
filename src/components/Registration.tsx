import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const Registration = () => {
  const [activeTab, setActiveTab] = useState('model');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      age: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="registration" className="py-20 px-6 bg-gradient-to-b from-purple-950/30 to-black min-h-screen text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent mb-4">
            Register Your Interest
          </h2>
          <p className="text-gray-300">Choose your category below</p>
          <div className="flex justify-center mt-6 space-x-4">
            <button onClick={() => handleTabChange('model')} className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'model' ? 'bg-gradient-to-r from-pink-500 to-purple-600 ring-2 ring-pink-400 text-white' : 'bg-black/50 text-white hover:bg-pink-500/30 border border-pink-500/30'}`}>
              Model Registration
            </button>
            <button onClick={() => handleTabChange('makeup')} className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'makeup' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 ring-2 ring-cyan-400 text-white' : 'bg-black/50 text-white hover:bg-cyan-500/30 border border-cyan-500/30'}`}>
              Make-up for Warriors
            </button>
          </div>
        </div>

        {isSubmitted ? (
          <div className="bg-black/50 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Registration Successful!</h3>
            <p className="text-gray-300 mb-6">Thank you for registering. We will contact you soon with further details.</p>
            <button onClick={() => setIsSubmitted(false)} className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300">
              Register Another
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-2/3 bg-black/50 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {activeTab === 'model' ? 'Model Registration Form' : 'Make-up for Warriors Form'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} required className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300" />
                <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} required className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300" />
                <input name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} required type="email" className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300" />
                <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} required className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300" />
                <input name="age" placeholder="Age" value={formData.age} onChange={handleInputChange} required type="number" className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300" />
                <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-500 transition-all duration-300">
                  {activeTab === 'model' ? 'Register as Model' : 'Register for Make-up'}
                </button>
              </form>
            </div>

            <div className="lg:w-1/3 bg-gradient-to-b from-blue-900 to-black p-6 rounded-xl shadow-md flex flex-col justify-between">
              {activeTab === 'model' ? (
                <>
                  <div>
                    <h3 className="text-yellow-400 text-2xl font-bold mb-2">Model Registration</h3>
                    <p className="text-white text-lg mb-4">Unlock Your Path to Stardom!</p>
                    <h4 className="text-yellow-400 font-semibold mb-2">Program Benefits:</h4>
                    <ul className="list-disc list-inside text-sm text-white space-y-1">
                      <li>Trophy & Recognition</li>
                      <li>Choreography Sessions</li>
                      <li>Grooming & Personality Development</li>
                      <li>Certificate of Participation</li>
                    </ul>
                    <h4 className="text-yellow-300 mt-4 font-semibold mb-2">Additional Exclusive Benefits:</h4>
                    <ul className="list-disc list-inside text-sm text-white space-y-1">
                      <li>Ads & Brand Shoot Opportunities</li>
                      <li>Movies, Web Series & Albums</li>
                      <li>Media Coverage</li>
                      <li>Social Media Monetization</li>
                    </ul>
                  </div>
                  <div className="relative mt-6 text-center">
                    <div className="text-black font-bold text-md px-6 py-4 rounded-xl bg-yellow-400 border-4 border-black rotate-[2deg] shadow-lg">
                      Hurry up<br />Registration Fee: ₹5000/-
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="text-cyan-400 text-2xl font-bold mb-2">Make-up for Warriors</h3>
                    <p className="text-white text-lg mb-4">Creating Heroes Through Prosthetic Art</p>
                    <ul className="italic text-sm text-gray-300 space-y-1 mb-4">
                      <li>“Best Military Wound – Realistic Prosthetics”</li>
                      <li>“From Latex to Legacy – Tribute Through Art”</li>
                      <li>“Painted Pain, Real Valor – Soldier’s Story in Layers”</li>
                    </ul>
                    <h4 className="text-cyan-400 font-semibold mb-2">Benefits:</h4>
                    <ul className="list-disc list-inside text-sm text-white space-y-1">
                      <li>Certification of Achievement</li>
                      <li>Trophy & Recognition</li>
                      <li>Stage Opportunity</li>
                      <li>Media Coverage</li>
                      <li>Brand Promotion</li>
                    </ul>
                    <h4 className="text-cyan-300 mt-4 font-semibold mb-2">Additional Benefits:</h4>
                    <ul className="list-disc list-inside text-sm text-white space-y-1">
                      <li>Social Media Monetization Guidance</li>
                      <li>Opportunities in Movies, Ads & Shoots</li>
                    </ul>
                  </div>
                  <div className="relative mt-6 text-center">
                    <div className="text-black font-bold text-md px-6 py-4 rounded-xl bg-yellow-400 border-4 border-black rotate-[2deg] shadow-lg">
                      Hurry up<br />Registration Fee: ₹5000/-
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Registration;