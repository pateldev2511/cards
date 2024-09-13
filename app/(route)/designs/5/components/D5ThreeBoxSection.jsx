import React from 'react';

const  D5ThreeBoxSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch text-center h-fit md:h-[15vh]">
      <div className="bg-blue-700 text-white py-4 px-2 w-full md:w-1/2 flex-grow">
        <h2 className="text-xl md:text-2xl font-bold">Our Mission</h2>
        <p className="text-sm md:text-base">Support and celebrate our veterans and their families by fostering strong community connections. We are committed to offering a comprehensive, holistic approach that addresses the needs of the body, heart, mind, and spirit. Through our programs and initiatives, we aim to restore well-being and honor the sacrifices made by our service members, ensuring they receive the care and respect they deserve.</p>
      </div>
      <div className="bg-blue-600 text-white py-4 px-2 w-full md:w-1/2 flex-grow">
        <h2 className="text-xl md:text-2xl font-bold">Get Involved</h2>
        <p className="text-sm md:text-base">Revitalize the Warrior Spirit by creating meaningful connections between those who serve and those they serve. By bridging these divides, we foster understanding and unity, enhancing the support and respect both groups receive.</p>
      </div>
    </div>
  );
}

export default  D5ThreeBoxSection;
