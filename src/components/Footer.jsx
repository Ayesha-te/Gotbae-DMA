import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/logo.png'; // ✅ Make sure this path and filename are correct

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white transition-all duration-500">
      {/* Wavy Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 transform transition-all duration-1000 hover:scale-105"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#f9fafb"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Intro */}
          <div className="transform transition-all duration-500 hover:scale-105">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="GotBae Logo" className="w-12 h-12 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110" />
              <div>
                <h3 className="text-xl font-bold hover:text-blue-400 transition-all duration-300">GotBae</h3>
                <p className="text-sm text-gray-400 hover:text-gray-300 transition-all duration-300">Digital Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 hover:text-gray-300 transition-all duration-300">
              Transforming businesses through innovative digital solutions. Your success is our mission.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/gotbae-ltd/posts/?feedView=all" target="_blank" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/gotbaetd/" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://x.com/Gotbaeltd" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61567688457845&locale=en_GB" target="_blank" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="transform transition-all duration-500 hover:scale-105">
            <h4 className="text-lg font-semibold mb-6 hover:text-blue-400 transition-all duration-300">Services</h4>
            <ul className="space-y-3">
              <li><a href="/ServicesPage" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:translate-x-2">Web Development</a></li>
              <li><a href="/ServicesPage" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:translate-x-2">App Development</a></li>
              <li><a href="/Servicespage" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:translate-x-2">Social Media Marketing</a></li>
              <li><a href="/ServicesPage" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:translate-x-2">LLMs & AI Chatbots</a></li>
            </ul>
          </div>

          {/* Who We Are */}
          <div className="transform transition-all duration-500 hover:scale-105">
            <h4 className="text-lg font-semibold mb-6 hover:text-blue-400 transition-all duration-300">Who We Are</h4>
            <ul className="space-y-3">
              <li><a href="/WhoWeAre" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:translate-x-2">About Us</a></li>
              <li><a href="/whoWeAre" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:translate-x-2">Our Mission</a></li>
              <li><a href="/AboutUs" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:translate-x-2">Our Story</a></li>
            </ul>
          </div>

          {/* Blog & Projects */}
          <div className="transform transition-all duration-500 hover:scale-105">
            <h4 className="text-lg font-semibold mb-6 hover:text-blue-400 transition-all duration-300"> Projects</h4>
            <ul className="space-y-3">
              <li><a href="/Projects" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:translate-x-2">Our Projects</a></li>
              <li><a href="/ServicesPage" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:translate-x-2">Our Services</a></li>
              <li><a href="/Blog" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:translate-x-2">Our Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center hover:scale-105 transition-all duration-300">
          <p className="text-gray-400 hover:text-white transition-all duration-300">
            © 2024 GotBae. All rights reserved. |
            <a href="/privacy-policy" className="ml-2 hover:text-white transition-all duration-300">Privacy Policy</a> |
            <a href="/terms-of-service" className="ml-2 hover:text-white transition-all duration-300">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
