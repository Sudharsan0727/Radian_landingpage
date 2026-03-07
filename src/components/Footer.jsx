import React from 'react';
import logo from '../assets/img/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-luxury-black text-white py-20">
      <div className="lux-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <img src={logo} alt="Radiant" className="w-48 mb-8" />
            <p className="text-white/60 text-sm mb-6">
              Leading the way in premium construction and architectural design. 
              We build structures that stand the test of time.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-heading mb-8">Contact</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>123 Luxury Road, Mediterranean City</li>
              <li>+1 (234) 567-890</li>
              <li>info@rixoshotel.com</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xl font-heading mb-8">Explore</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="#rooms" className="hover:text-gold transition-colors">Rooms</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-heading mb-8">Newsletter</h4>
            <p className="text-white/60 text-sm mb-6">Subscribe to our newsletter for latest updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 px-4 py-3 w-full text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button className="bg-gold px-6 py-3 hover:bg-gold-dark transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/40 text-xs uppercase tracking-widest">
          <p>© 2025 Rixos Hotel. All rights reserved.</p>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
