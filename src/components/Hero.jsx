import React from 'react';
const heroBg = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] scale-110 animate-[zoom_20s_infinite_alternate] z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 lux-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Title and Buttons */}
          <div className="lg:col-span-7 text-left text-white">
            <span className="section-title-sub text-white/80 mb-6 animate-fade-up block">Premium Construction & Design</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading mb-10 leading-[1.1] animate-fade-up animate-delay-1">
              Building Your <br /> <span className="text-gold italic">Vision</span>
            </h1>
            <div className="flex flex-col md:flex-row items-start gap-6 animate-fade-up animate-delay-3">
              <button className="btn-gold">View Projects</button>
              <button className="px-8 py-4 border border-white/30 text-white font-medium hover:bg-white hover:text-luxury-black transition-all duration-500 uppercase tracking-widest text-xs">
                Our Services
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-card p-8 md:p-10 rounded-sm">
              <h3 className="text-2xl font-heading text-white mb-8 text-center italic">Get A Quote</h3>
              <form className="space-y-6">
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-2 block">Full Name</label>
                  <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder:text-white/80 text-sm focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-2 block">Email Address</label>
                  <input type="email" placeholder="email@example.com" className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder:text-white/80 text-sm focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-2 block">Project Type</label>
                  <select className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors appearance-none">
                    <option>Residential Construction</option>
                    <option>Commercial Building</option>
                    <option>Interior Renovation</option>
                    <option>Structural Engineering</option>
                  </select>
                </div>
                <button type="submit" className="w-full btn-gold !py-4 shadow-xl">Send Inquiry Scan</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}} />
    </section>
  );
};

export default Hero;
