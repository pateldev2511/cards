import React from 'react';

const Design5ThreeBoxSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch text-center h-fit md:h-[12vh]">
      <div className="bg-blue-700 text-white py-4 px-2 w-full md:w-1/3 flex-grow">
        <h2 className="text-xl md:text-2xl font-bold">Our Mission</h2>
        <p className="text-sm md:text-base">We offer free total wellness care on our campus for eligible veterans and their immediate family.</p>
      </div>
      <div className="bg-blue-600 text-white py-4 px-2 w-full md:w-1/3 flex-grow">
        <h2 className="text-xl md:text-2xl font-bold">Get Involved</h2>
        <p className="text-sm md:text-base">Volunteer on our campus, participate in fundraising events and support our cause. </p>
      </div>
      <div className="bg-blue-500 text-white py-4 px-2 w-full md:w-1/3 flex-grow">
        <h2 className="text-xl md:text-2xl font-bold">Donate</h2>
        <p className="text-sm md:text-base">Revitalize the Warrior Spirit by supporting those who serve and those they serve. </p>
      </div>
    </div>
  );
}

export default Design5ThreeBoxSection;
