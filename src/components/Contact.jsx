import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    // Load the Sender script
    const script = document.createElement('script');
    script.innerHTML = `
      (function (s, e, n, d, er) {
        s['Sender'] = er;
        s[er] = s[er] || function () {
          (s[er].q = s[er].q || []).push(arguments)
        }, s[er].l = 1 * new Date();
        var a = e.createElement(n),
            m = e.getElementsByTagName(n)[0];
        a.async = 1;
        a.src = d;
        m.parentNode.insertBefore(a, m)
      })(window, document, 'script', 'https://cdn.sender.net/accounts_resources/universal.js', 'sender');
      sender('8ab1c8bc388046')
    `;
    document.head.appendChild(script);
    
    // Wait for script to load then initialize form
    script.onload = () => {
      // Force re-render of the form
      if (window.sender) {
        window.sender('form:init');
      }
    };
    
    return () => {
      // Cleanup if component unmounts
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-6">Get In Touch</h1>
        <p className="text-xl text-center mb-16">
          Ready to start your next project? Let's discuss how we can help transform your digital presence
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information side */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-center">
                <div className="bg-blue-600 text-white p-4 rounded-full">
                  {/* Phone icon */}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Phone</h3>
                  <p>+44 7470 089199</p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-center">
                <div className="bg-purple-600 text-white p-4 rounded-full">
                  {/* Email icon */}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Email</h3>
                  <p>info@gotbae.com</p>
                </div>
              </div>
              
              {/* Address */}
              <div className="flex items-center">
                <div className="bg-green-600 text-white p-4 rounded-full">
                  {/* Location icon */}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Address</h3>
                  <p>22 Ashfield Lodge, NE4 6RL, Newcastle Upon Tyne, UK</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form side */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            
            {/* THIS IS WHERE THE FORM WILL APPEAR */}
            <div 
              style={{ textAlign: "left" }} 
              className="sender-form-field" 
              data-sender-form-id="en5J3l"
            ></div>

            {/* Fallback message in case form doesn't load */}
            <div id="form-fallback">
              <p className="text-gray-600 mt-4">
                If the form doesn't appear, please refresh the page or contact us directly at info@gotbae.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;