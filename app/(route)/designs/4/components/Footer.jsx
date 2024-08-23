import { FacebookIcon, InstagramIcon, PawPrintIcon, TwitterIcon } from 'lucide-react'
import React from 'react'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-primary-foreground py-8">
    <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <PawPrintIcon className="w-8 h-8" />
        <span className="text-lg font-semibold">PetBuddy</span>
      </div>
      <nav className="flex items-center gap-6">
        <Link href="#">About</Link>
        <Link href="#">Services</Link>
        <Link href="#">Shop</Link>
        <Link href="#">Contact</Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link href="#"><FacebookIcon className="w-6 h-6" /><span className="sr-only">Facebook</span></Link>
        <Link href="#"><TwitterIcon className="w-6 h-6" /><span className="sr-only">Twitter</span></Link>
        <Link href="#"><InstagramIcon className="w-6 h-6" /><span className="sr-only">Instagram</span></Link>
      </div>
    </div>
  </footer>
  )
}

export default Footer