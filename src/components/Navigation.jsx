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
      dropdown: [
        'Web Development',
        'Mobile Apps',
        'Digital Marketing',
        'SEO Services',
        'Business Solutions',
        'LLMs&Chatbots',
        'Social Media Marketing',
      ],
    },
    {
      name: 'Who We Are',
      href: '/whoWeAre',
      dropdown: [
        { name: 'About Us', path: '/aboutus' },
        { name: 'Projects', path: '/projects' },
      ],
    },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavClick = (item) => {
    navigate(item.href);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo Left */}
          <Link to="/" className="flex items-center space-x-3 absolute left-0 top-1/2 transform -translate-y-1/2">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-gray-800 tracking-wide hover:text-blue-600 transition-all duration-300">
              GOTBAE
            </span>
          </Link>

          {/* Centered Nav Items */}
          <div className="hidden md:flex space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </a>

                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 z-50">
                    {item.dropdown.map((subItem) => {
                      const label = typeof subItem === 'string' ? subItem : subItem.name;
                      const path = typeof subItem === 'string' ? '/services' : subItem.path;
                      return (
                        <button
                          key={label}
                          onClick={() => {
                            navigate(path);
                            setActiveDropdown(null);
                            setIsOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:translate-x-1"
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle Right */}
          <button
            className="md:hidden absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-300 hover:scale-110"
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
                {item.dropdown && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.dropdown.map((subItem) => {
                      const label = typeof subItem === 'string' ? subItem : subItem.name;
                      const path = typeof subItem === 'string' ? '/services' : subItem.path;
                      return (
                        <button
                          key={label}
                          onClick={() => {
                            navigate(path);
                            setIsOpen(false);
                          }}
                          className="block text-left text-sm text-gray-600 hover:text-blue-600 transition"
                        >
                          ↳ {label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
