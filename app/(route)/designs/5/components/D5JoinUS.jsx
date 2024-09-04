"use client";

// compenets/JoinUs.js
export default function D5JoinUs() {
  return (
    <div
      id="join-us"
      className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between h-[70vh] bg-white"
    >
      <div className="bg-blue-700 text-white p-8 md:p-16 w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center">
        <h2 className="text-5xl md:text-4xl font-bold mb-4">Join Us</h2>
        <p className="text-lg md:text-xl mb-6 text-center">
          Bridging the Gap Between Military Service and Home, Providing
          Exceptional Health Care for Veterans and Their Families at No Cost.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-200">
          Donate Now
        </button>
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <img
          src="https://northeastern-my.sharepoint.com/:i:/r/personal/patel_saura_northeastern_edu/Documents/Hai%20Griff%20Bco/BearBrown/Pexels/20_0813_1113.jpg?csf=1&web=1&e=vBQ82g"
          alt="Join Us Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
