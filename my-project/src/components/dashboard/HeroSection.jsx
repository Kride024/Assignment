import React from "react";

export default function HeroSection() {
  return (
    <div className="relative bg-blue-400 h-80 rounded-lg overflow-hidden mb-8 flex items-center p-10">
      <div className="text-white z-10">
        <h1 className="text-4xl font-bold font-['Poppins']">Adidas Men Running</h1>
        <h2 className="text-5xl font-bold font-['Poppins'] my-2">Sneakers</h2>
        <p className="text-sm w-2/3 font-['Proxima_Nova']">
          Performance and design. Taken right to the edge.
        </p>
        <button className="mt-4 px-6 py-2 bg-white text-blue-500 font-semibold rounded-md hover:bg-gray-100 font-['Poppins']">
          SHOP NOW
        </button>
      </div>
     <img
  src="/products/ChatGPT Image Sep 21, 2025, 08_28_50 PM.png"
  alt="Adidas Sneakers"
  className="absolute right-0 top-0 h-full object-cover z-0"
/>
    </div>
  );
}
