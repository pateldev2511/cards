import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServiceSection = () => {
  return (
    <section className="py-12 md:py-16  flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/design-images/girl_and_dog_hands.webp"
              alt="Handmade dog collar charms"
              className="rounded-sm object-cover w-full"
              width="600"
              height="400"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
          </div>
          <div className="grid gap-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Handmade Accessories to Support Our Cause
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer a selection of handmade semi-precious dog collar charms
              and keychains through our Etsy store.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-all ease-in-out"
              >
                Shop Our Collection
              </Link>
              <Link
                href="#"
                className="border border-blue-500 px-4 py-2 rounded text-blue-500 hover:bg-blue-500 hover:text-white transition-all ease-in-out"
              >
                Find a Retailer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
