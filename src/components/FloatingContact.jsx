import { useState, useEffect } from 'react';
import { X, Bot } from "lucide-react";
import React from 'react';

const FloatingContact = () => {
  const [showAI, setShowAI] = useState(true);

  useEffect(() => {
    setShowAI(true);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* AI Assistant Modal */}
      {showAI && (
        <div className="w-80 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 transform transition-all duration-500 animate-in slide-in-from-bottom-4 fade-in hover:scale-105">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-900 hover:text-purple-600 transition-all duration-300">AI Assistant</h3>
            <button
              onClick={() => setShowAI(false)}
              className="text-gray-500 hover:text-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-90"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-3">
            <div className="bg-purple-50 p-3 rounded-lg hover:bg-purple-100 transition-all duration-300 hover:scale-105">
              <p className="text-sm text-gray-700 hover:text-purple-800 transition-all duration-300">
                👋 Hi! I'm your AI assistant. How can I help you today?
              </p>
            </div>
            <div className="space-y-2">
              <button className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-purple-100 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md">
                Tell me about your services
              </button>
              <button className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-purple-100 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md">
                Get a project quote
              </button>
              <button className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-purple-100 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md">
                Schedule a consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingContact;
