import Navbar from '@/app/_components/Navbar'
import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <>
    <Navbar />
    
    <div className="grid h-screen place-content-center bg-black px-4">
  <div className="text-center">
    <h1 className="text-9xl font-black text-gray-100">404</h1>

    <p className="text-2xl font-bold tracking-tight text-gray-300 sm:text-4xl">Uh-oh!</p>

    <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>

    <Link
      href="/"
      className="mt-6 inline-block rounded bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring"
    >
      Go Back Home
    </Link>
  </div>
</div>
</>
  )
}

export default notFound