import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-sky-600">SneakerShop</span>
          </div>

          {/* Middle Section */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-sky-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-sky-600">Shop</a>
            <a href="#" className="text-gray-700 hover:text-sky-600">About</a>
            <a href="#" className="text-gray-700 hover:text-sky-600">Contact</a>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <button className="relative">
              <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">3</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
