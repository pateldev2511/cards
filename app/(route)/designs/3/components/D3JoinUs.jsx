import Image from "next/image";

// components/JoinUs.js
export default function D3JoinUs() {
    return (
      <div id="join-us" className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between h-[70vh] bg-white">
        <div className="bg-blue-600 text-white p-8 md:p-16 w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center">
          <h2 className="text-5xl md:text-4xl font-bold mb-4">Join Us</h2>
          <p className="text-lg md:text-xl mb-6 text-center">
            Empower Our Women And Girls
          </p>
          <button className="bg-pink-500 text-white py-2 px-6 rounded-none hover:bg-pink-600 transition duration-200">
            Donate Now
          </button>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full">
          <img
            src="https://images.pexels.com/photos/3184438/pexels-photo-3184438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Join Us Image"
    
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }