"use client";

// compenets/JoinUs.js
export default function Design5JoinUs() {
  return (
    <div
      id="join-us"
      className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between h-[70vh] bg-white"
    >

      <div className="bg-blue-900 text-white p-8 md:p-16 w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center">
        <h2 className="text-5xl md:text-4xl font-bold mb-4">Join Us</h2>

        <p className="text-lg md:text-xl mb-6 text-center">
          Bridging the gap between military service and home, Providing
          exceptional health care for veterans and their families at no cost.
        </p>
        <button className="bg-blue-700 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-200">

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
