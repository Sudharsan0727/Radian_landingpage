import React from 'react';
const project1 = "https://images.unsplash.com/photo-1590644365607-1c5a919ca411?q=80&w=2070&auto=format&fit=crop";
const project2 = "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop";
const project3 = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop";

const RoomCard = ({ title, price, img, delay }) => (
  <div className={`group relative overflow-hidden animate-fade-up ${delay}`}>
    <div className="relative h-[500px] overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <button className="btn-gold opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
          Book Now
        </button>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black/80 to-transparent">
      <div className="flex justify-between items-end">
        <div>
          <span className="text-gold text-xs uppercase tracking-widest mb-2 block">{price}</span>
          <h3 className="text-2xl font-heading">{title}</h3>
        </div>
        <div className="w-12 h-[1px] bg-gold mb-3"></div>
      </div>
    </div>
  </div>
);

const Rooms = () => {
  return (
    <section id="rooms" className="section-padding bg-white">
      <div className="lux-container">
        <div className="text-center mb-16 animate-fade-up">
          <span className="section-title-sub">Our Portfolio</span>
          <h2 className="section-title-main">Featured <span className="text-gold italic">Projects</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <RoomCard 
            title="Modern Corporate Plaza" 
            price="Commercial" 
            img={project1} 
            delay="animate-delay-1" 
          />
          <RoomCard 
            title="Luxury Residential Tower" 
            price="Residential" 
            img={project2} 
            delay="animate-delay-2" 
          />
          <RoomCard 
            title="Urban Infrastructure" 
            price="Industrial" 
            img={project3} 
            delay="animate-delay-3" 
          />
        </div>
      </div>
    </section>
  );
};

export default Rooms;
