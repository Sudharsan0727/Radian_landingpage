import React from 'react';
import about1 from '../assets/img/about1.png';
import about2 from '../assets/img/about2.png';

const AboutUs = () => {
    return (
        <section id="about" className="section-padding bg-white overflow-hidden">
            <div className="lux-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    
                    {/* Left Content Column */}
                    <div className="animate-fade-up">
                        <span className="text-gold uppercase tracking-[0.3em] text-[13px] font-bold mb-4 block">
                            ABOUT RADIANT
                        </span>
                        
                        <h2 className="text-5xl md:text-6xl lg:text-5xl font-heading mb-10 leading-[1.1] text-luxury-black">
                            Laid-Back Places For <br /> <span className="text-gold italic">Kindred Spirits</span>
                        </h2>
                        
                        <div className="space-y-6 mb-12">
                            <p className="text-xl text-luxury-text leading-relaxed">
                                Welcome to the <span className="font-bold text-luxury-black">best five-star resort hotel</span> in New York. The experience elementum sesue the aucan vestibulum alesun usto in sapien rutrum volutan donec fermen.
                            </p>
                            <p className="text-xl text-luxury-text leading-relaxed">
                                Lorem ipsum quisque sodales miss in the varius drana miss turpis softtiton tellus in the fermen.
                            </p>
                        </div>

                        {/* Action Row */}
                        <div className="flex flex-wrap items-center gap-6">
                            <button className="btn-gold !shadow-none hover:!translate-y-0 transition-all duration-300">
                                Download Brochure
                            </button>
                            
                            <a href="tel:+12345678910" className="bg-luxury-black text-white px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gold transition-all duration-300">
                                Call Now
                            </a>
                        </div>
                    </div>

                    {/* Right Images Column */}
                    <div className="flex gap-4 md:gap-8 animate-fade-up animate-delay-2 h-[400px] lg:h-[500px] items-center">
                        {/* First Image - Floating Up/Down */}
                        <div className="flex-1 h-[80%] overflow-hidden rounded-2xl shadow-lg mt-12 bg-luxury-gray animate-float">
                            <img 
                                src={about1} 
                                alt="Resort Life" 
                                className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                            />
                        </div>
                        
                        {/* Second Image - Floating Up/Down Delayed for staggered motion */}
                        <div className="flex-1 h-[80%] overflow-hidden rounded-2xl shadow-lg mb-12 bg-luxury-gray animate-float-delayed">
                            <img 
                                src={about2} 
                                alt="Luxury Details" 
                                className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;
