import React, { useState } from "react";
import { Mail, Phone, Send, Sparkles } from "lucide-react";

const CosmicContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! ✨ Thank you for reaching out. We'll get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="relative min-h-screen py-20 px-6 lg:px-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 80 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 2,
        })).map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full shadow-lg animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle nebula glows */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-purple-900/10 to-black/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              CONTACT
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start something amazing together? Let's connect and bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-gray-900/70 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <Send className="text-purple-400" size={24} /> Send Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
              >
                <Send size={20} /> Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gray-900/70 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30 shadow-xl flex items-center gap-4">
              <div className="bg-purple-900/30 p-3 rounded-full">
                <Mail className="text-purple-400" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-gray-300">tshegofatsononyane009@gmail.com</p>
              </div>
            </div>

            <div className="bg-gray-900/70 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30 shadow-xl flex items-center gap-4">
              <div className="bg-purple-900/30 p-3 rounded-full">
                <Phone className="text-purple-400" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="text-gray-300">+27 81 503 8545</p>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1); }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CosmicContactForm;