import React from 'react';

const  Design5ThreeBoxSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch text-center h-fit md:h-[15vh]">
      <div className="bg-blue-700 text-white py-4 px-2 w-full md:w-1/2 flex-grow">
        <h2 className="text-xl md:text-2xl font-bold">Our Mission</h2>
        <p className="text-sm md:text-base">We celebrate and support veterans and their families with a holistic approach to well-being, fostering community connections and honoring their sacrifices.</p>
      </div>
      <div className="bg-blue-600 text-white py-4 px-2 w-full md:w-1/2 flex-grow">
        <h2 className="text-xl md:text-2xl font-bold">Get Involved</h2>
        <p className="text-sm md:text-base">Revitalize the Warrior Spirit by creating connections between those who serve and those they serve. This fosters understanding and unity, boosting support and respect for both.</p>
      </div>
    </div>
  );
}

export default   Design5ThreeBoxSection;
