import React, { useState, useEffect, useCallback } from 'react';

import img1 from '../assets/gallery_living_1773057165841.png';
import img2 from '../assets/gallery_bedroom_1773057183654.png';
import img3 from '../assets/gallery_kitchen_1773057199358.png';
import img4 from '../assets/gallery_exterior_1773057213047.png';
import img5 from '../assets/gallery_pool_1773057230090.png';

const slides = [
    { id: 1, img: img1, title: "Living Room",     tag: "INTERIORS" },
    { id: 2, img: img2, title: "Master Bedroom",  tag: "COMFORT" },
    { id: 3, img: img3, title: "Modern Kitchen",  tag: "LIFESTYLE" },
    { id: 4, img: img4, title: "Exterior View",   tag: "ARCHITECTURE" },
    { id: 5, img: img5, title: "Rooftop Pool",    tag: "AMENITIES" },
];

const Gallery = () => {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);

    const goTo = useCallback((index) => {
        if (animating) return;
        setAnimating(true);
        setCurrent(index);
        setTimeout(() => setAnimating(false), 700);
    }, [animating]);

    const prev = () => goTo((current - 1 + slides.length) % slides.length);
    const next = () => goTo((current + 1) % slides.length);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 lg:py-32 bg-luxury-black overflow-hidden">
            <div className="lux-container">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6 animate-fade-up">
                    <div>
                        <span className="text-gold uppercase tracking-[0.3em] text-[13px] font-bold mb-4 block">
                            Photo Gallery
                        </span>
                        <h2 className="text-5xl md:text-6xl lg:text-5xl font-heading leading-[1.1] text-white max-w-2xl">
                            Our <span className="text-gold italic">Gallery</span>
                        </h2>
                    </div>
                    {/* Slide counter */}
                    <div className="flex items-center gap-4">
                        <span className="text-4xl font-heading text-white">
                            {String(current + 1).padStart(2, '0')}
                        </span>
                        <div className="w-16 h-[1px] bg-gold/40"></div>
                        <span className="text-lg font-heading text-white/30">
                            {String(slides.length).padStart(2, '0')}
                        </span>
                    </div>
                </div>

                {/* Main Slider */}
                <div className="relative w-full h-[420px] md:h-[540px] overflow-hidden rounded-[4px] mb-6 animate-fade-up animate-delay-1">
                    {slides.map((slide, idx) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                                idx === current
                                    ? 'opacity-100 scale-100 z-10'
                                    : 'opacity-0 scale-105 z-0'
                            }`}
                        >
                            <img
                                src={slide.img}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                            {/* Slide Info */}
                            <div className="absolute bottom-8 left-8">
                                <span className="text-gold text-[11px] font-bold tracking-[0.3em] uppercase block mb-2">
                                    {slide.tag}
                                </span>
                                <h3 className="text-white font-heading text-3xl md:text-4xl drop-shadow-lg">
                                    {slide.title}
                                </h3>
                            </div>
                        </div>
                    ))}

                    {/* Prev / Next Arrow Buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-gold backdrop-blur-sm border border-white/20 transition-all duration-300 rounded-[2px]"
                    >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-gold backdrop-blur-sm border border-white/20 transition-all duration-300 rounded-[2px]"
                    >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Thumbnail Strip */}
                <div className="flex gap-3 overflow-x-auto pb-2 animate-fade-up animate-delay-1">
                    {slides.map((slide, idx) => (
                        <button
                            key={slide.id}
                            onClick={() => goTo(idx)}
                            className={`flex-shrink-0 relative w-24 h-16 md:w-32 md:h-20 overflow-hidden rounded-[2px] transition-all duration-300 ${
                                idx === current
                                    ? 'ring-2 ring-gold opacity-100'
                                    : 'opacity-40 hover:opacity-70'
                            }`}
                        >
                            <img
                                src={slide.img}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>

                {/* Dot Indicators */}
                <div className="flex items-center justify-center gap-3 mt-8">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goTo(idx)}
                            className={`transition-all duration-300 rounded-full ${
                                idx === current
                                    ? 'w-8 h-2 bg-gold'
                                    : 'w-2 h-2 bg-white/20 hover:bg-white/50'
                            }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Gallery;
