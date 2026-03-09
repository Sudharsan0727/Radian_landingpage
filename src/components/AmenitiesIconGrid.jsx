import React from 'react';

const AmenitiesIconGrid = () => {
    // 6 Premium amenities mirroring the structure
    const allAmenities = [
        {
            title: "Pick Up & Drop",
            description: "Elite chauffeur services for your destination.",
            icon: (
                <svg className="w-12 h-12 lg:w-14 lg:h-14" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16h16M5 16v-2.5a2.5 2.5 0 012.5-2.5h9a2.5 2.5 0 012.5 2.5V16" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 11L9 7h6l1 4" />
                    <circle cx="7.5" cy="18" r="2" />
                    <circle cx="16.5" cy="18" r="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5l4-2 3 2" />
                </svg>
            )
        },
        {
            title: "Parking Space",
            description: "Spacious, secure parking with 24/7 surveillance.",
            icon: (
                <svg className="w-12 h-12 lg:w-14 lg:h-14" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 8h3a3 3 0 010 6h-3v-6zm0 6v4" />
                </svg>
            )
        },
        {
            title: "Room Service",
            description: "Exquisite gourmet meals delivered right to you.",
            icon: (
                <svg className="w-12 h-12 lg:w-14 lg:h-14" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 16h14m-7-2v-4m0 0a2 2 0 110-4 2 2 0 010 4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 14a6 6 0 0112 0H6z" />
                </svg>
            )
        },
        {
            title: "Swimming Pool",
            description: "Temperature-controlled pool with stunning views.",
            icon: (
                <svg className="w-12 h-12 lg:w-14 lg:h-14" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15c3-3 6-3 9 0s6 3 9 0M3 19c3-3 6-3 9 0s6 3 9 0" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8V4M8 8V4M16 8V4" />
                </svg>
            )
        },
        {
            title: "Fibre Internet",
            description: "Blazing fast high-speed digital connectivity.",
            icon: (
                <svg className="w-12 h-12 lg:w-14 lg:h-14" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10a10 10 0 0114 0M8 14a6 6 0 018 0M12 18h.01" />
                </svg>
            )
        },
        {
            title: "Breakfast",
            description: "Start each morning with artisanal delicacies.",
            icon: (
                <svg className="w-12 h-12 lg:w-14 lg:h-14" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 8h10M6 8v6a4 4 0 004 4h2a4 4 0 004-4V8M6 8H4M16 8h2a3 3 0 013 3v1a3 3 0 01-3 3h-2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16" />
                </svg>
            )
        }
    ];

    return (
        <section id="features" className="py-16 lg:py-24 bg-white relative">
            <div className="lux-container max-w-[1300px] relative z-10">
                
                {/* Asymmetric Split Layout */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-24">
                    
                    {/* Left Column: Info & Button */}
                    <div className="w-full lg:w-[35%] animate-fade-up">
                        <span className="text-gold uppercase tracking-[0.3em] text-[13px] font-bold mb-4 block">
                            HOTEL SERVICES
                        </span>
                        
                        <h2 className="text-5xl md:text-6xl lg:text-5xl font-heading leading-[1.1] text-luxury-black mb-6">
                            AMENITIES
                        </h2>
                        
                        <p className="text-xl text-luxury-text leading-relaxed mb-10 max-w-sm">
                            Discover a world of unparalleled convenience and luxury curated specifically for your modern lifestyle needs.
                        </p>
                        
                        <button className="btn-gold !shadow-none hover:!translate-y-0 transition-all duration-300">
                            All Amenities
                        </button>
                    </div>

                    {/* Right Column: Grid of Exactly 6 Cards */}
                    <div className="w-full lg:w-[65%]">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up animate-delay-1">
                            {allAmenities.map((item, index) => (
                                <div 
                                    key={index} 
                                    className="group bg-[#f8f5f0] rounded-[4px] min-h-[220px] p-6 flex flex-col items-center justify-center text-center transition-all duration-500 hover:bg-[#be9874] hover:-translate-y-2 cursor-pointer shadow-sm relative overflow-hidden"
                                >
                                    <div className="flex flex-col items-center justify-center transition-transform duration-500 group-hover:-translate-y-2">
                                        {/* Thin Minimal Icon */}
                                        <div className="text-[#be9874] group-hover:text-white transition-colors duration-500 mb-4">
                                            {item.icon}
                                        </div>

                                        {/* Standard Capitalized Title */}
                                        <h4 className="text-[17px] font-heading font-normal text-[#222222] group-hover:text-white transition-colors duration-500 tracking-wide">
                                            {item.title}
                                        </h4>
                                    </div>
                                    
                                    <div className="absolute bottom-4 left-0 right-0 px-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        <p className="!text-white text-[13px] font-sans leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AmenitiesIconGrid;
