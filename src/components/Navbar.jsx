import React, { useState, useEffect } from 'react';
import logo from '../assets/img/logo.svg';
import eternityLogo from '../assets/img/Radiane1.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="lux-container flex justify-between items-center">
        {/* Logo */}
        <div className="w-48">
          <img
            src={isScrolled ? eternityLogo : logo}
            alt="Radiant Logo"
            className="w-full transition-all duration-500 object-contain"
          />
        </div>

        {/* Action Button */}
        <div className="flex items-center">
          <button className={`btn-gold flex items-center gap-2 ${isScrolled ? 'py-3 px-6' : ''}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
