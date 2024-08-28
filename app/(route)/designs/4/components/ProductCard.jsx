import Image from "next/image";
import React from "react";

const ProductCard = ({ imageSrc, altText, title, price }) => {
  return (
    <div className="group relative block bg-black rounded-md overflow-hidden min-w-[300px] max-w-[300px] min-h-[400px] mx-2">
      <Image
        alt={altText}
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-40"
      />

      <div className="relative p-4 sm:p-5 h-full flex flex-col justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-500">
            Price: ${price}
          </p>
          <p className="text-xl font-bold text-slate-300 sm:text-2xl">
            {title}
          </p>
        </div>

        <div className="flex justify-start items-end">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
