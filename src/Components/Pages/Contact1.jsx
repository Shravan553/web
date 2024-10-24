import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle
} from 'lucide-react';

const Contact1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Cards */}
          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:-translate-y-1 transition-all duration-300">
            <div className="bg-blue-500/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Phone className="text-blue-400 w-6 h-6" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-400">Mon-Fri from 8am to 5pm</p>
            <p className="text-blue-400 mt-2">+1 (555) 000-0000</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:-translate-y-1 transition-all duration-300">
            <div className="bg-purple-500/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Mail className="text-purple-400 w-6 h-6" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-400">24/7 Support</p>
            <p className="text-purple-400 mt-2">support@example.com</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:-translate-y-1 transition-all duration-300">
            <div className="bg-green-500/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <MapPin className="text-green-400 w-6 h-6" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Office</h3>
            <p className="text-gray-400">Come say hello</p>
            <p className="text-green-400 mt-2">123 Business Ave, Suite 100</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="bg-gray-700/50 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="bg-gray-700/50 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  onChange={handleChange}
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full bg-gray-700/50 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                onChange={handleChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full bg-gray-700/50 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="w-full bg-gray-700/50 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 mr-3 text-blue-400" />
                  <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 mr-3 text-blue-400" />
                  <span>Saturday: 10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 mr-3 text-blue-400" />
                  <span>Sunday: Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">Quick Contact</h3>
              <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Start Live Chat
              </button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
          <div className="bg-gray-700/50 w-full h-64 rounded-lg flex items-center justify-center">
            <MapPin className="w-12 h-12 text-gray-500" />
            {/* Replace this div with your actual map integration */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact1;