"use client";

// compenets/JoinUs.js
export default function Design5JoinUs() {
  return (
    <div
      id="join-us"
      className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between h-[70vh] bg-white"
    >
      <div className="bg-blue-700 text-white p-8 md:p-16 w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold text-center mb-8 ">Join Us</h2>
        <p className="text-lg md:text-xl mb-6 text-center">
          Bridging the Gap Between Military Service and Home, Providing
          Exceptional Health Care for Veterans and Their Families at No Cost.
        </p>
        <button className="bg-white text-blue-500 font-medium py-2 px-6 rounded hover:bg-gray-200 transition duration-200">
          Donate Now
        </button>
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <img
          src="/D5/14.jpg"
          alt="Join Us Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
