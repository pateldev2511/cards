"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/d6/d6-hero-img.webp",
    "/d6/d6-hero-img2.webp",
    "/d6/d6-hero-img3.webp",
  ];
  const slideIntervalRef = useRef(null);
  const slideDuration = 4000; // 4 seconds

  const startSlideShow = () => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }, slideDuration);
  };

  const stopSlideShow = () => {
    clearInterval(slideIntervalRef.current);
  };

  useEffect(() => {
    startSlideShow();
    return () => {
      stopSlideShow();
    };
  }, []);

  const handleMouseEnter = () => {
    stopSlideShow();
  };

  const handleMouseLeave = () => {
    startSlideShow();
  };

  return (
    <section className="bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Empowering the Homeless
            </h1>
            <p className="text-lg md:text-xl">
              The Homeless Outreach Project is committed to providing essential
              services and long-term solutions to address homelessness in our
              community.
            </p>
            <div className="flex gap-2">
              <Button>Get Involved</Button>
              <Button className="text-black" variant="outline">
                Donate Now
              </Button>
            </div>
          </div>
          <div
            className="relative mx-auto rounded-lg overflow-hidden w-full h-[400px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {slides.map((slide, index) => (
              <Image
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
                fill
                className={`object-cover transition-opacity duration-500 ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ))}
            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full focus:outline-none ${
                    currentSlide === index ? "bg-white" : "bg-gray-500"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
