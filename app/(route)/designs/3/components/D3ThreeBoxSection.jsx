import React from 'react'

const D3ThreeBoxSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch text-center h-fit md:h-[20vh]">
      <div className="bg-pink-500 text-white py-8 px-4 w-full md:w-1/3 flex-grow">
        <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
        <p>Our Goal, Vision & Commitment</p>
      </div>
      <div className="bg-blue-500 text-white py-8 px-4 w-full md:w-1/3 flex-grow">
        <h2 className="text-2xl md:text-3xl font-bold">Our Events</h2>
        <p>Register & Help Make Change</p>
      </div>
      <div className="bg-indigo-500 text-white py-8 px-4 w-full md:w-1/3 flex-grow">
        <h2 className="text-2xl md:text-3xl font-bold">Get Involved</h2>
        <p>Volunteer, Participate, or Donate</p>
      </div>
    </div>
  )
}

export default D3ThreeBoxSection