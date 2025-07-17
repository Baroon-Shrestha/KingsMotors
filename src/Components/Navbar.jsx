import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock/unlock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const isActiveLink = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/cars", label: "Our Cars" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`text-2xl font-bold tracking-wide transition-all duration-300 ${
              isScrolled
                ? "text-black hover:text-gray-700"
                : "text-white hover:text-gray-200"
            }`}
          >
            Kings Motors
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-2 transition-all duration-300 group ${
                  isActiveLink(link.path)
                    ? isScrolled
                      ? "text-black"
                      : "text-white"
                    : isScrolled
                    ? "text-gray-700 hover:text-black"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {link.label}
                {/* Active indicator */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 ${
                    isActiveLink(link.path)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-all duration-300 p-2 rounded-md relative z-60 ${
              isScrolled || isOpen
                ? "text-black hover:text-gray-700 hover:bg-gray-100"
                : "text-white hover:text-gray-200 hover:bg-white/20"
            }`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-black">Menu</h2>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-100 transition-colors duration-200"
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col py-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={toggleMenu}
              className={`px-6 py-4 transition-all duration-300 border-l-4 flex items-center gap-3 ${
                isActiveLink(link.path)
                  ? "text-black bg-gray-50 border-black font-medium"
                  : "text-gray-700 hover:text-black hover:bg-gray-50 border-transparent hover:border-gray-300"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-lg">{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          <div className="text-center text-gray-500 text-sm">
            <p className="font-medium text-black mb-1">Kings Motors</p>
            <p>Your trusted car dealer</p>
          </div>
        </div>
      </div>
    </>
  );
}
