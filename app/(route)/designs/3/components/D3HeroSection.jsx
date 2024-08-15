import React from 'react'

const D3HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-screen md:h-[75vh] flex items-center justify-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/7491157/pexels-photo-7491157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white p-6 ">
        <h1 className="text-3xl md:text-5xl font-bold">Empowering Women <br/>& Girls Worldwide</h1>
      </div>
    </div>
  )
}

export default D3HeroSection