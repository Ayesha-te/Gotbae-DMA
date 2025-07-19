import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      dropdown: ['Web Development', 'Mobile Apps', 'Digital Marketing', 'SEO Services', 'Business Solutions','LLMs&Chatbots','Social Media Marketing']
    },
    {
      name: 'Who We Are',
      href: '/whoWeAre',
      dropdown: ['Blog', 'Projects']
    },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (item) => {
    if (item.href.startsWith('#')) {
      const el = document.querySelector(item.href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(item.href);
    }
    setIsOpen(false);
  };

  const handleDropdownClick = (itemName) => {
    if (itemName === 'Blog') navigate('/blog');
    else if (itemName === 'Projects') navigate('/projects');
    else navigate('/services');
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo + Company Name */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-gray-800 tracking-wide hover:text-blue-600 transition-all duration-300">
              GotBae
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 transform hover:scale-105"
                >
                  <span className="font-medium">{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />}
                </a>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 z-50">
                    {item.dropdown.map((subItem) => (
                      <button
                        key={subItem}
                        onClick={() => handleDropdownClick(subItem)}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:translate-x-1"
                      >
                        {subItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
              AI Assistant
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden transform transition-all duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-in fade-in slide-in-from-top-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:translate-x-2"
                >
                  {item.name}
                </a>

                {/* Mobile Dropdown */}
                {item.dropdown && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <button
                        key={subItem}
                        onClick={() => handleDropdownClick(subItem)}
                        className="block text-left text-sm text-gray-600 hover:text-blue-600 transition"
                      >
                        ↳ {subItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Button */}
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
              AI Assistant
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
