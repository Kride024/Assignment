import React , { useContext } from "react";
import { ShoppingCart } from "lucide-react"; // cart icon
import { CartContext } from "../dashboard/CartContext"; // ✅ correct path

export default function Navbar() {
  const { cartTotal } = useContext(CartContext); // use context
  return (
    <header className="fixed top-0 left-0 w-full py-4 px-6 flex justify-between items-center z-10 bg-[#fff]">
      {/* Logo */}
      <div className="text-blue-500 font-bold text-xl font-['Poppins']">
        E-Comm
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-10 font-['Poppins'] text-[17px]">
        <a href="#" className="hover:text-sky-400 font-medium">HOME</a>
        <a href="#" className="hover:text-sky-400">BAG</a>
        <a href="#" className="hover:text-sky-400">SNEAKERS</a>
        <a href="#" className="hover:text-sky-400">BELT</a>
        <a href="#" className="hover:text-sky-400">CONTACT</a>
      </nav>

      {/* Right-aligned items */}
      <div className="flex items-center space-x-2 text-neutral-600">
        <ShoppingCart className="w-5 h-5 text-neutral-700" />
        <span className="font-['Proxima_Nova']">Items</span>
        <span className="font-['Proxima_Nova'] text-sm">${cartTotal.toFixed(2)}</span>
      </div>
    </header>
  );
}
