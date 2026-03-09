import React, { useRef, useState } from 'react';

const floorPlan1 = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop";
const floorPlan2 = "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop";
const floorPlan3 = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop";
const floorPlan4 = "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop";

const roomsData = [
    {
        id: 1,
        title: "Family Room", 
        img: floorPlan1,
        price: "₹ 85 L",
        beds: "2-4 Bed",
        area: "20 Sqm",
        extraInfo: "Breakfast",
        extraIcon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2v3h14v-3h3c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-2 5h-1V9h1v4z" />
            </svg>
        )
    },
    {
        id: 2,
        title: "Double Room", 
        img: floorPlan2,
        price: "₹ 1.35 Cr",
        beds: "4 Bed",
        area: "25 Sqm",
        extraInfo: "2 Bathroom",
        extraIcon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        id: 3,
        title: "Deluxe Suite", 
        img: floorPlan3,
        price: "₹ 2.15 Cr",
        beds: "3 Bed",
        area: "35 Sqm",
        extraInfo: "Balcony",
        extraIcon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
        )
    },
    {
        id: 4,
        title: "Penthouse", 
        img: floorPlan4,
        price: "₹ 3.50 Cr",
        beds: "5 Bed",
        area: "45 Sqm",
        extraInfo: "Pool View",
        extraIcon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    }
];

const RoomCard = ({ title, img, beds, area, extraInfo, extraIcon, price, onOpenPopup }) => (
    <div className="group relative h-[320px] lg:h-[450px] overflow-hidden rounded-[4px] cursor-pointer block-select-none">
        {/* Background Image */}
        <img 
            src={img} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 blur-[6px] group-hover:scale-110" 
        />
        
        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-black/40 to-black/20 opacity-90 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>

        {/* Centered Button (Always Visible) */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <button 
                onClick={onOpenPopup} 
                className="bg-gold text-white px-8 py-3.5 rounded-full uppercase tracking-widest text-xs font-bold pointer-events-auto hover:bg-white hover:text-luxury-black transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            >
                View Plan
            </button>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 pb-12 lg:p-12 lg:pb-16 flex justify-between items-end">
            
            {/* Left Info Block (Slides up on hover) */}
            <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                {/* Revealing Price */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-2">
                    <span className="text-2xl font-bold text-white tracking-wide">{price}</span>
                    <span className="text-sm text-white/70 font-sans ml-2">/ Starting</span>
                </div>
                
                <h3 className="text-3xl lg:text-[2rem] font-heading text-white mb-4 transition-colors duration-300 group-hover:text-gold">
                    {title}
                </h3>

                {/* Bottom Info Bar */}
                <div className="flex flex-wrap items-center gap-6 text-white/90 text-[13px] font-sans">
                    {/* Bed / Room info */}
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                        </svg>
                        <span>{beds}</span>
                    </div>
                    
                    {/* Area info */}
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        <span>{area}</span>
                    </div>

                    {/* Extra info (e.g. Bathroom, Breakfast) */}
                    {extraInfo && (
                        <div className="flex items-center gap-2">
                            <span className="text-gold">
                                {extraIcon}
                            </span>
                            <span>{extraInfo}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Right Arrow Button (Fades & slides in on hover) */}
            <div className="opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out delay-100 shrink-0 hidden sm:block">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white hover:bg-white hover:text-luxury-black transition-colors shadow-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
);

const Rooms = () => {
    const sliderRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const scrollPrev = () => {
        if (sliderRef.current) {
            const scrollAmount = sliderRef.current.clientWidth / (window.innerWidth >= 1024 ? 2 : 1);
            sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    const scrollNext = () => {
        if (sliderRef.current) {
            const scrollAmount = sliderRef.current.clientWidth / (window.innerWidth >= 1024 ? 2 : 1);
            sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="floor-construction" className="py-24 lg:py-32 bg-[#f8f5f0] relative">
            <style>{`
                .hide-scroll::-webkit-scrollbar {
                    display: none;
                }
                .hide-scroll {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
            
            <div className="lux-container">
                {/* Top Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20 gap-16 lg:gap-24">
                    
                    {/* Left Titles */}
                    <div className="max-w-xl animate-fade-up">
                        <span className="text-gold uppercase tracking-[0.3em] text-[13px] font-bold mb-4 block">
                            PROJECT DETAILS
                        </span>
                        <h2 className="text-5xl md:text-6xl lg:text-5xl font-heading leading-[1.1] text-luxury-black mb-0">
                            Floor <span className="text-gold italic">Construction</span>
                        </h2>
                    </div>

                    {/* Right Content & Controls */}
                    <div className="flex gap-8 lg:gap-16 items-center flex-1 justify-start lg:justify-end animate-fade-up animate-delay-1">
                        <p className="text-luxury-text text-lg leading-relaxed max-w-lg hidden lg:block">
                            The experience elementum sesue the aucan vestibulum usto sapien rutrum volutan donec fermen lorem ipsum quisque sodales miss in the varius drana miss.
                        </p>
                        
                        {/* Circle Navigation Arrows */}
                        <div className="flex gap-4 shrink-0">
                            <button 
                                onClick={scrollPrev}
                                className="w-12 h-12 rounded-full border border-luxury-black flex items-center justify-center text-luxury-black hover:bg-gold hover:border-gold hover:text-white transition-all duration-300 active:scale-95"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button 
                                onClick={scrollNext}
                                className="w-12 h-12 rounded-full border border-luxury-black flex items-center justify-center text-luxury-black hover:bg-gold hover:border-gold hover:text-white transition-all duration-300 active:scale-95"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slider Layout */}
                <div 
                    ref={sliderRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scroll animate-fade-up animate-delay-2"
                >
                    {roomsData.map((room) => (
                        <div key={room.id} className="snap-start shrink-0 w-full lg:w-[calc(50%-12px)]">
                            <RoomCard {...room} onOpenPopup={() => setSelectedImage(room.img)} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Full Screen Image Popup Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md animate-modal-overlay"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close Button */}
                    <button 
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/70 hover:text-white transition-colors z-50"
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    
                    {/* Image Container */}
                    <div 
                        className="relative max-w-6xl w-full mx-4 p-2 animate-modal-content" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={selectedImage} 
                            alt="Floor Plan Full View" 
                            className="w-full h-auto max-h-[85vh] object-contain rounded-sm shadow-2xl" 
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Rooms;
