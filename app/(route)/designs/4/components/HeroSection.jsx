import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative py-12 md:py-16 bg-gray-900 h-[60vh] flex items-center"
      style={{
        backgroundImage: "url('/design-images/bg/little-girl.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Tint overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center p-8 rounded-lg">
          <div className="grid gap-6 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Affordable Veterinary Care for Rescue Animals
            </h2>
            <p className="text-gray-100/50 text-lg">
              Our non-profit organization is dedicated to providing high-quality, affordable veterinary services to
              rescue groups and animal welfare organizations.
            </p>
            <div className="flex gap-4 py-2">
              <button className="bg-white/40 hover:bg-white hover:text-black text-slate-50 px-4 py-2 rounded">Learn More</button>
              <Link href="#" className="border border-white/30 px-4 py-2 rounded text-slate-50 hover:bg-white/80 hover:text-black transition-all ease-in-out">
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;