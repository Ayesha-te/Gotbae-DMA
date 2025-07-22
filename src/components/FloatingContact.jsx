import { useState, useEffect } from 'react';
import { X, Bot } from 'lucide-react';
import React from 'react';
import axios from 'axios';

const FloatingContact = () => {
  const [showAI, setShowAI] = useState(true);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "👋 Hi! I'm your AI assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post(
        'https://945af4d5-59ca-4498-a0aa-b2125875ed1a-00-4kq39wyzasol.pike.replit.dev/chat',
        { message: input }
      );

      console.log("RECEIVED:", res.data); // ✅ Debug

      const reply = {
  sender: 'bot',
  text: res.data.reply || "⚠️ No reply text found."

};

      setMessages((prev) => [...prev, reply]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: '⚠️ Sorry, something went wrong.' },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {showAI ? (
        <div className="w-80 h-[480px] bg-white rounded-xl shadow-2xl border border-gray-200 p-4 flex flex-col justify-between transition-all duration-500 hover:scale-105">
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-900 hover:text-purple-600 transition-all duration-300">
              GotbaeBot
            </h3>
            <button
              onClick={() => setShowAI(false)}
              className="text-gray-500 hover:text-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-90"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto space-y-2 mb-2 pr-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`text-sm p-2 rounded-lg max-w-[80%] ${
                  msg.sender === 'user'
                    ? 'bg-purple-100 ml-auto text-right'
                    : 'bg-gray-100 text-left'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-sm bg-gray-100 p-2 rounded-lg w-fit text-left">
                ...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex space-x-2">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg text-sm"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowAI(true)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300"
        >
          <Bot className="w-4 h-4" />
          Open Assistant
        </button>
      )}
    </div>
  );
};

export default FloatingContact;
