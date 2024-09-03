import React from 'react';

const D5HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-screen md:h-[75vh] flex items-center justify-center" style={{ backgroundImage: 'url(https://northeastern-my.sharepoint.com/personal/patel_saura_northeastern_edu/Documents/Hai%20Griff%20Bco/BearBrown/Pexels/pexels-brett-sayles-1340504.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center text-white p-6">
        <h1 className="text-4xl md:text-6xl font-bold">Liberty Veterans Foundation</h1>
        <p className="mt-4 text-lg md:text-2xl">Dedicated to the health and wellness of our veterans and their families</p>
        <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-200">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default D5HeroSection;
