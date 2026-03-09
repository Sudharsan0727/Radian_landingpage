import React from 'react';

const ProjectHighlights = () => {
    const amenities = [
        {
            title: "Outdoor Gym",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3-3a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0l-3 3ZM9.3 14.7a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3-3a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0l-3 3ZM10.5 7.5l6 6M4 20l3-3M3 11l3 3m12 3l3 3" />
                </svg>
            )
        },
        {
            title: "Basketball Hoop",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" strokeWidth="1"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13"/>
                </svg>
            )
        },
        {
            title: "Play Court",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth="1"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6v12M3 12h18M9 9a3 3 0 0 0 6 0m-6 6a3 3 0 0 1 6 0"/>
                </svg>
            )
        },
        {
            title: "Kids Play Area",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 18l3 3 3-3m-3 3V10m0-7a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13a4 4 0 1 0 8 0 4 4 0 0 0-8 0ZM15 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
                </svg>
            )
        },
        {
            title: "Sand Pit",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M18 10h-1.26A8 8 0 1 0 9 20h9a4 4 0 0 0 0-8ZM7 15l2 2 4-4"/>
                </svg>
            )
        },
        {
            title: "Premium Seating",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 18v3m16-3v3M3 14h18m-2-4v4m-14-4v4m2-4h10a2 2 0 0 1 2 2v2H5v-2a2 2 0 0 1 2-2Z"/>
                </svg>
            )
        },
        {
            title: "Jogging Track",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 5H19V7H13V5ZM13 9H19V11H13V9ZM13 13H19V15H13V13ZM13 17H19V19H13V17ZM5 5H11V19H5V5Z" />
                </svg>
            )
        },
        {
            title: "Zen Garden",
            icon: (
                <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9Zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7Z" />
                    <circle cx="12" cy="12" r="3" strokeWidth="1"/>
                </svg>
            )
        }
    ];

    return (
        <section id="highlights" className="py-24 lg:py-32 bg-luxury-gray relative overflow-hidden">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#be9874_1px,transparent_1px)] [background-size:40px_40px]"></div>
            </div>

            <div className="lux-container relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24 animate-fade-up">
                    <div className="max-w-xl text-center md:text-left">
                        <span className="text-gold uppercase tracking-[0.4em] text-[12px] font-bold mb-4 block">
                            LUXURY LIVING
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-luxury-black leading-[1.1]">
                            Project <span className="text-gold italic">Highlights</span>
                        </h2>
                    </div>
                    <div>
                        <button className="btn-gold !shadow-none hover:bg-luxury-black transition-all duration-500 whitespace-nowrap">
                            Schedule a Site Visit
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-y-20 gap-x-8">
                    {amenities.map((item, index) => (
                        <div 
                            key={index} 
                            className="group flex flex-col items-center text-center animate-fade-up animate-delay-1"
                        >
                            {/* Icon Wrapper with border and hover effect */}
                            <div className="relative mb-6 p-6 lg:p-8 rounded-full border border-gold/20 transition-all duration-500 group-hover:-translate-y-3 group-hover:border-gold">
                                <div className="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out shadow-sm -z-1"></div>
                                <div className="text-gold transition-colors duration-500 group-hover:text-luxury-black">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Heading */}
                            <h3 className="text-lg lg:text-xl font-heading text-luxury-black tracking-wide group-hover:text-gold transition-colors duration-300 px-4">
                                {item.title}
                            </h3>
                            
                            {/* Subtle line accent */}
                            <div className="w-0 h-[2px] bg-gold mt-4 group-hover:w-12 transition-all duration-500 origin-center"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectHighlights;
