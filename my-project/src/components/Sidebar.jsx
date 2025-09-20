export default function Sidebar() {
  return (
    <aside className="w-64 bg-neutral-100 p-6 fixed top-0 left-0 h-full overflow-y-auto">
      {/* Hot Deals */}
      <div className="mb-6">
        <h2 className="text-xl font-medium font-['Poppins']">Hot Deals</h2>
        <ul className="mt-4 space-y-2 text-lg font-['Proxima_Nova'] text-neutral-800">
          <li className="flex justify-between">
            <span>Nike</span>
            <span className="opacity-30">16</span>
          </li>
          <li className="flex justify-between text-sky-400">
            <span>Airmax</span>
            <span>48</span>
          </li>
          <li className="flex justify-between">
            <span>Adidas</span>
            <span className="opacity-30">15</span>
          </li>
          <li className="flex justify-between">
            <span>Vans</span>
            <span className="opacity-30">23</span>
          </li>
          <li className="flex justify-between">
            <span>All Stars</span>
            <span className="opacity-30">1</span>
          </li>
        </ul>
      </div>

      {/* Prices */}
      <div className="mb-6">
        <h2 className="text-xl font-medium font-['Poppins']">Prices</h2>
        <p className="mt-2">Range: $13.99 – $25.99</p>
        <div className="relative mt-3 w-full h-1.5 bg-zinc-800 opacity-10 rounded">
          <div className="absolute left-[20%] right-[10%] h-1.5 bg-blue-500 rounded"></div>
          <div className="absolute left-[20%] -top-1 w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>
          <div className="absolute right-[10%] -top-1 w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>
        </div>
      </div>

      {/* Colors */}
      <div className="mb-6">
        <h2 className="text-xl font-medium font-['Poppins']">Color</h2>
        <div className="flex gap-3 mt-3">
          <span className="w-6 h-6 rounded-full bg-blue-600"></span>
          <span className="w-6 h-6 rounded-full bg-red-500"></span>
          <span className="w-6 h-6 rounded-full bg-black"></span>
          <span className="w-6 h-6 rounded-full bg-yellow-400"></span>
          <span className="w-6 h-6 rounded-full bg-pink-500"></span>
          <span className="w-6 h-6 rounded-full bg-stone-200"></span>
        </div>
      </div>

      {/* Brands */}
      <div className="mb-6">
        <h2 className="text-xl font-medium font-['Poppins']">Brand</h2>
        <ul className="mt-4 space-y-2 text-lg font-['Proxima_Nova']">
          <li className="flex justify-between">
            <span>Nike</span>
            <span className="opacity-30">99</span>
          </li>
          <li className="flex justify-between text-sky-400">
            <span>Nike</span>
            <span>99</span>
          </li>
          <li className="flex justify-between">
            <span>Adidas</span>
            <span className="opacity-30">99</span>
          </li>
          <li className="flex justify-between">
            <span>Siemens</span>
            <span className="opacity-30">99</span>
          </li>
        </ul>
      </div>

      {/* More */}
      <button className="w-full py-3 mt-10 text-lg font-medium font-['Poppins'] bg-neutral-200">
        MORE
      </button>
    </aside>
  );
}
