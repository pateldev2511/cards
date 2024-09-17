import React from 'react';

const  Design5ThreeBoxSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch text-center h-fit md:h-[12vh]">
      <div className="bg-blue-700 text-white py-4 px-2 w-full md:w-1/2 flex-grow">
        <h2 className="text-xl md:text-2xl font-bold">Our Mission</h2>
        <p className="text-sm md:text-base">We support veterans and their families through a holistic approach to well-being, emphasizing community connections and honoring their sacrifices.</p>
      </div>
      <div className="bg-blue-600 text-white py-4 px-2 w-full md:w-1/2 flew-grow">
        <h2 className="text-xl md:text-2xl font-bold">Get Involved</h2>
        <p className="text-sm md:text-base">Revitalize the Warrior Spirit by connecting those who serve with those they serve. This builds understanding and unity, enhancing support and respect on both sides.</p>
      </div>
    </div>
  );
}

export default   Design5ThreeBoxSection;
