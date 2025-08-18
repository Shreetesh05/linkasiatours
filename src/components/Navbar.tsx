// components/Navbar.tsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // mobile only
  const location = useLocation();

  const navItems = [
    { name: "Flight Booking", path: "https://dev.mazzakotrip.com/", external: true },
    { name: "Visit Nepal", path: "/visit-nepal" },
    {
      name: "Go Overseas",
      path: "/go-overseas",
      dropdown: [
        { name: "India", path: "/overseas/India" },
        { name: "Vietnam", path: "/overseas/Vietnam" },
        { name: "Thailand", path: "/overseas/Thailand" },
        { name: "Malaysia", path: "/overseas/Malaysia" },
        { name: "Singapore", path: "/overseas/Singapore" },
        { name: "Cambodia", path: "/overseas/Cambodia" },
      ],
    },
    { name: "Special Packages", path: "/special-packages" },
    { name: "News/Events/Blogs", path: "/news-events" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto  ">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 ">
            <img src="/images/logo.png" alt="Link Asia Tours" className="w-14 h-12 object-contain" />
            <span className="text-xl font-bold text-gray-800">Link Asia Tours</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.name} className="relative group">
                    {/* Use a button so clicking doesn't navigate away; keeps dropdown open */}
                    <button
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      className={`text-sm font-medium transition-colors duration-200 hover:text-cyan-500 ${
                        isActive(item.path) ? "text-cyan-500 font-bold" : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </button>

                    {/* Dropdown (hover + focus-within keeps it open; z-50 to float above) */}
                    <div
                      className="absolute left-0 mt-2 hidden group-hover:block group-focus-within:block
                                 bg-white border rounded-md shadow-lg min-w-[200px] z-50 overflow-hidden"
                      role="menu"
                      tabIndex={-1}
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              if (item.external) {
                return (
                  <a
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium transition-colors duration-200 hover:text-cyan-500 ${
                      isActive(item.path) ? "text-cyan-500 font-bold" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-cyan-500 ${
                    isActive(item.path) ? "text-cyan-500 font-bold" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium hover:from-blue-600 hover:to-cyan-500 transition-all duration-300">
              Log In
            </button>
            <button className="px-4 py-2 rounded-full border border-cyan-500 text-cyan-500 font-medium hover:bg-cyan-50 transition-all duration-300">
              Customer Service
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="text-gray-700 hover:text-cyan-500 focus:outline-none"
              aria-label="Toggle menu"
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
              item.dropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    className={`w-full text-left px-3 py-2 rounded-md text-base font-medium flex justify-between items-center ${
                      isActive(item.path) ? "bg-cyan-50 text-cyan-600" : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === item.name && (
                    <div className="pl-6">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50"
                        >
                          {sub.name}
                        </Link>
                      ))}
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-3 py-2 rounded-md text-gray-500 hover:bg-gray-50"
                      >
                        Explore All
                      </Link>
                    </div>
                  )}
                </div>
              ) : item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path) ? "bg-cyan-50 text-cyan-600" : "text-gray-700 hover:bg-gray-50"
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
                    isActive(item.path) ? "bg-cyan-50 text-cyan-600" : "text-gray-700 hover:bg-gray-50"
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
