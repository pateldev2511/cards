import React from "react";

const Design5HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen md:h-[75vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/D5/5.jpg')",
        backgroundPosition: "center 20%", // Moves the background image down
        backgroundSize: "cover", // Ensures the background image covers the container
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(0, 0, 0, 0.4)", // Adjust the tint color and opacity here
          zIndex: 1, // Ensure the overlay is above the image
        }}
      ></div>
      <div className="relative z-10 text-center text-white p-6" style={{ marginTop: '10%' }}>
        {/* Adjust the marginTop value to move the text down */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Liberty Veterans Foundation
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          Dedicated to the health and wellness of our veterans and their
          families.
        </p>

        <button className="mt-6 bg-blue-700 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-200">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Design5HeroSection;
