import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section>
        <div
        className="absolute inset-0 max-h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"> </div>
        
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16 ">
        <div className="relative h-64 sm:h-80 lg:h-full ">
          <Image
            alt=""
            src="/hero-img.gif"
            layout="fill"
            className="absolute inset-0 h-full w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-slate-100 rounded-r-3xl">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-slate-100 rounded-l-3xl"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
          Explore and Integrate Stunning Web Templates Effortlessly
          </h2>

          <p className="mt-4 text-gray-600">
          Welcome to our comprehensive library of beautifully designed web templates. Whether you’re working with HTML/CSS/JavaScript or React, we’ve got you covered. Browse through our collection, view live demos, and seamlessly copy code snippets to elevate your web projects. Best of all, everything here is free and ready for you to use, making your development process smoother and more efficient.
          </p>

          {/* <a
            href="#"
            className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Get in Touch
          </a> */}
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero