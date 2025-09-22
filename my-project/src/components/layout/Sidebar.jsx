import React from "react";
import { useCart } from "../dashboard/CartContext";

export default function Sidebar() {
  const { selectedBrand, setSelectedBrand } = useCart();

  const hotDeals = [
    { name: "Nike", count: 16 },
    { name: "Airmax", count: 48 },
    { name: "Adidas", count: 15 },
    { name: "Vans", count: 23 },
    { name: "All Stars", count: 1 },
    { name: "Puma", count: 95 },
  ];

  const brands = [
    { name: "Nike", count: 99 },
    { name: "Adidas", count: 99 },
    { name: "Siemens", count: 99 },
  ];

  return (
    <aside className="w-70 p-6">
      {/* Hot Deals */}
      <div className="mb-6 bg-neutral-100 p-4">
        <h2 className="text-zinc-800 text-xl font-medium font-['Poppins']">Hot Deals</h2>
        <ul className="mt-4 space-y-2 text-[16px] font-['Proxima_Nova'] text-neutral-800">
          {hotDeals.map((deal) => (
            <li
              key={deal.name}
              onClick={() => setSelectedBrand(deal.name)}
              className={`flex justify-between mt-5 cursor-pointer ${
                selectedBrand === deal.name ? "text-sky-500 font-semibold" : "hover:text-sky-400"
              }`}
            >
              <span>{deal.name}</span>
              <span className={selectedBrand === deal.name ? "" : "opacity-30"}>
                {deal.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Prices (unchanged) */}
      <div className="mb-6 bg-neutral-100 p-4">
        <h2 className="text-[20px] font-medium font-['Poppins']">Prices</h2>
        <p className="mt-4 text-[16px]">
          Range: <span className="ml-4">$13.99 – $25.99</span>
        </p>
        <div className="relative mt-6 w-full h-1.5 bg-zinc-800 opacity-10 rounded">
          <div className="absolute left-[20%] right-[10%] h-1.5 bg-sky-400 rounded"></div>
          <div className="absolute left-[20%] -top-1 w-4 h-4 rounded-full bg-sky-400 border-2 border-white"></div>
          <div className="absolute right-[10%] -top-1 w-4 h-4 rounded-full bg-sky-400 border-2 border-white"></div>
        </div>
      </div>

      {/* Brand list */}
      <div className="mb-6 bg-neutral-100 p-4">
        <h2 className="text-[20px] font-medium font-['Poppins']">Brand</h2>
        <ul className="mt-4 space-y-2 text-[16px] font-['Proxima_Nova']">
          {brands.map((brand) => (
            <li
              key={brand.name}
              onClick={() => setSelectedBrand(brand.name)}
              className={`flex justify-between mt-5 cursor-pointer ${
                selectedBrand === brand.name ? "text-sky-500 font-semibold" : "hover:text-sky-400"
              }`}
            >
              <span>{brand.name}</span>
              <span className={selectedBrand === brand.name ? "" : "opacity-30"}>
                {brand.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* More button */}
      <button className="w-full py-3 mt-10 text-[20px] font-medium font-['Poppins'] bg-neutral-200 rounded">
        MORE
      </button>
    </aside>
  );
}
