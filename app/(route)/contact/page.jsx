import React from "react";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { Mail, Facebook, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black p-4 md:p-8 lg:p-16">
      <div className="w-full max-w-7xl mx-auto mt-2">
        <div className="bg-zinc-800 bg-opacity-90 shadow-lg rounded-md p-4 md:p-8 lg:p-12 mt-4">
          <h1 className="w-full h-fit text-center text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">Coming Soon...</h1>
          <div className="grid sm:grid-cols-2 items-start gap-8 md:gap-14 p-4 md:p-8 mx-auto max-w-full">
            <div>
              <h1 className="text-gray-100 text-2xl md:text-3xl font-extrabold">Let&apos;s Talk</h1>
              <p className="text-xs md:text-sm text-gray-200 mt-4">
                Have some big idea or brand to develop and need help? Then reach out we&apos;d love to hear about your project and provide help.
              </p>

              <div className="mt-8 md:mt-12">
                <h2 className="text-gray-100 text-base font-bold">Email</h2>
                <ul className="mt-4">
                  <li className="flex items-center">
                    <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="text-zinc-600" size={20} />
                    </div>
                    <Link href="mailto:info@example.com" className="text-zinc-400 text-sm ml-4">
                      <small className="block">Mail</small>
                      <strong>info@example.com</strong>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-8 md:mt-12">
                <h2 className="text-gray-100 text-base font-bold">Socials</h2>
                <ul className="flex mt-4 space-x-4">
                  <li className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <Link href="https://facebook.com">
                      <Facebook className="text-zinc-600" size={20} />
                    </Link>
                  </li>
                  <li className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <Link href="https://linkedin.com">
                      <Linkedin className="text-zinc-600" size={20} />
                    </Link>
                  </li>
                  <li className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <Link href="https://instagram.com">
                      <Instagram className="text-zinc-600" size={20} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full bg-black text-gray-100 rounded-md py-2.5 px-4 border border-zinc-600 text-sm outline-blue-600" disabled />
              <input type="email" placeholder="Email" className="w-full bg-black text-gray-100 rounded-md py-2.5 px-4 border border-zinc-600 text-sm outline-blue-600" disabled />
              <input type="text" placeholder="Subject" className="w-full bg-black text-gray-100 rounded-md py-2.5 px-4 border border-zinc-600 text-sm outline-blue-600" disabled />
              <textarea placeholder="Message" rows="6" className="w-full bg-black text-gray-100 rounded-md px-4 border border-zinc-600 text-sm pt-2.5 outline-blue-600" disabled></textarea>
              <button type="button" disabled className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-3 w-full mt-6">Send</button>
            </form>
          </div>
        </div>
      </div>
      <AnimatedGridPattern
        numSquares={200}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={0.5}
        className={cn(
          "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-50%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
};

export default Contact;