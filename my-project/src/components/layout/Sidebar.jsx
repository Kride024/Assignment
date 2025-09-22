import React from "react";
import { useCart } from "../dashboard/CartContext";

export default function Sidebar() {
  const { selectedBrand, setSelectedBrand, priceRange, setPriceRange, selectedColor, setSelectedColor } = useCart();

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

  const colors = ["All", "Red", "Blue", "Green", "Yellow", "Orange", "Purple","Grey","SkyBlue","Pink"];

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
              <span className={selectedBrand === deal.name ? "" : "opacity-30"}>{deal.count}</span>
            </li>
          ))}
        </ul>

        {/* ✅ More Button */}
        <button className="mt-2 text-sm text-blue-500 hover:underline">
          More
        </button>
      </div>

      {/* Price Range */}
      <div className="mb-6 bg-neutral-100 p-4">
        <h2 className="text-[20px] font-medium font-['Poppins']">Prices</h2>
        <p className="mt-4 text-[16px]">
          Range: <span className="ml-2">${priceRange[0]} – ${priceRange[1]}</span>
        </p>
        <input
          type="range"
          min={0}
          max={200}
          value={priceRange[0]}
          onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
          className="w-full mt-4"
        />
        <input
          type="range"
          min={0}
          max={200}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          className="w-full mt-2"
        />
      </div>

      {/* Color Picker */}
      <div className="mb-6 bg-neutral-100 p-4">
        <h2 className="text-[20px] font-medium font-['Poppins']">Colors</h2>
        <div className="flex flex-wrap gap-2 mt-4">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full border-2 border-gray-200 transition-transform ${
                selectedColor === color ? "ring-2 ring-blue-500 scale-110" : ""
              }`}
              style={{ backgroundColor: color === "All" ? "#fff" : color.toLowerCase() }}
            />
          ))}
        </div>
      </div>

      {/* Brand List */}
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
              <span className={selectedBrand === brand.name ? "" : "opacity-30"}>{brand.count}</span>
            </li>
          ))}
        </ul>
      </div>
       {/* More button */}
      <button className="w-full py-3 mt-3 text-[20px] font-medium font-['Poppins'] bg-neutral-200 rounded">
        MORE
      </button>
    </aside>
  );
}
