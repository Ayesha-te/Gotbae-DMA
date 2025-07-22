import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import React from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 bg-gray-50 transition-all duration-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 transform transition-all duration-700 hover:scale-105">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-500 hover:text-blue-600">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-500 hover:text-gray-800 hover:scale-105">
            Ready to start your next project? Let's discuss how we can help transform your digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="transform transition-all duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 transition-all duration-300 hover:text-blue-600">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 hover:scale-105 transition-all duration-300">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+44 7470 089199</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 hover:scale-105 transition-all duration-300">
                <div className="bg-purple-600 text-white p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">info@gotbae.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 hover:scale-105 transition-all duration-300">
                <div className="bg-green-600 text-white p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600">22 Ashfield Lodge, NE4 6RL, Newcastle Upon Tyne, UK</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form
              action="https://formspree.io/f/xkgzjroz"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group"
              >
                <Send className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
                <span>Send Message</span>
              </button>

              {submitted && (
                <p className="text-green-600 font-medium mt-4">
                  ✅ Thank you! We'll get back to you shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
