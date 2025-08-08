// components/Navbar.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Flight Booking', path: 'https://dev.mazzakotrip.com/', external: true },
    { name: 'Visit Nepal', path: '/visit-nepal' },
    { name: 'Go Overseas', path: '/go-overseas' },
    { name: 'Special Packages', path: '/special-packages' },
    { name: 'News/Events/Blogs', path: '/news-events' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/images/logo.png" alt="Link Asia Tours" className="w-14 h-12 object-contain" />
            <span className="text-xl font-bold text-gray-800">Link Asia Tours</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-medium transition-all duration-300 hover:text-cyan-500 hover:scale-105 ${
                    isActive(item.path) ? 'text-cyan-500 font-bold' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-all duration-300 hover:text-cyan-500 hover:scale-105 ${
                    isActive(item.path) ? 'text-cyan-500 font-bold' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}

            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105">
              Log In
            </button>
            <button className="px-4 py-2 rounded-full border border-cyan-500 text-cyan-500 font-medium hover:bg-cyan-50 transition-all duration-300">
              Customer Service
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-cyan-500 focus:outline-none"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path) ? 'bg-cyan-50 text-cyan-500' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path) ? 'bg-cyan-50 text-cyan-500' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}

            <div className="pt-4 border-t border-gray-200 flex flex-col gap-2">
              <button className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium">
                Log In
              </button>
              <button className="w-full px-4 py-2 rounded-full border border-cyan-500 text-cyan-500 font-medium">
                Customer Service
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
