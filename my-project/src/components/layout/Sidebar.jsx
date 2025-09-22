import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-70  p-6 ">
      {/* Hot Deals */}
      <div className="mb-6 bg-neutral-100 p-4">
        <h2 className="w-28 h-10 justify-start text-zinc-800 text-xl font-medium font-['Poppins'] ">Hot Deals</h2>
        <ul className="mt-4 space-y-2 text-[16px] font-regular  font-['Proxima_Nova'] text-neutral-800">
          <li className="flex justify-between mt-6 "><span>Nike</span><span className="opacity-30">16</span></li>
          <li className="flex justify-between text-sky-400 mt-5"><span>Airmax</span><span>48</span></li>
          <li className="flex justify-between mt-5"><span>Adidas</span><span className="opacity-30">15</span></li>
          <li className="flex justify-between mt-5"><span>Vans</span><span className="opacity-30">23</span></li>
          <li className="flex justify-between mt-5"><span>All Stars</span><span className="opacity-30">1</span></li>
          <li className="flex justify-between mt-5"><span>Adidas</span><span className="opacity-30">95</span></li>
        </ul>
      </div>

      {/* Prices */}
      <div className="mb-6 bg-neutral-100  p-4   ">
        <h2 className="w-28 h-10 text-[20px] justify-start text-zinc-800 text-xl font-medium font-['Poppins']">Prices</h2>
        <p className="mt-4 text-[16px]">Range: <span className="ml-4">$13.99 – $25.99</span></p>
        <div className="relative mt-6 w-full h-1.5 bg-zinc-800 opacity-10 rounded">
          <div className="absolute left-[20%] right-[10%] h-1.5 bg-sky-400 rounded"></div>
          <div className="absolute left-[20%] -top-1 w-4 h-4 rounded-full bg-sky-400 border-2 border-white"></div>
          <div className="absolute right-[10%] -top-1 w-4 h-4 rounded-full bg-sky-400 border-2 border-white"></div>
        </div>
      </div>

      {/* Colors */}
      <div className="mb-6  bg-neutral-100  p-4  ">
        <h2 className="text-[20px] font-medium font-['Poppins']">Color</h2>
        <div className="flex gap-3 mt-6">
          <span className="w-6 h-6 rounded-full bg-blue-600"></span>
          <span className="w-6 h-6 rounded-full bg-red-500"></span>
          <span className="w-6 h-6 rounded-full bg-black"></span>
          <span className="w-6 h-6 rounded-full bg-yellow-400"></span>
          <span className="w-6 h-6 rounded-full bg-pink-500"></span>
          <span className="w-6 h-6 rounded-full bg-stone-200"></span>
        </div>
      </div>

      {/* Brands */}
      <div className="mb-6 bg-neutral-100  p-4">
        <h2 className="text-[20px] font-medium font-['Poppins']">Brand</h2>
        <ul className="mt-4 space-y-2 text-[16px] font-['Proxima_Nova']">
          <li className="flex justify-between mt-6"><span>Nike</span><span className="opacity-30">99</span></li>
          <li className="flex justify-between text-sky-400 mt-5"><span>Nike</span><span>99</span></li>
          <li className="flex justify-between mt-5"><span>Adidas</span><span className="opacity-30">99</span></li>
          <li className="flex justify-between mt-5"><span>Siemens</span><span className="opacity-30">99</span></li>
        </ul>
      </div>

      {/* More */}
      <button className="w-full py-3 mt-10 text-[20px] font-medium font-['Poppins'] bg-neutral-200 rounded">
        MORE
      </button>
    </aside>
  );
}
