// src/components/dashboard/ProductGrid.js
import React, { useState, useMemo, useContext } from "react";
import { LayoutGrid, List } from "lucide-react"; // icons
import { CartContext } from "./CartContext"; // ✅ import context

// The data for all the products
const allProducts = [
  {
    id: 1,
    name: "Classic Sneaker",
    brand: "Orion",
    image: "https://placehold.co/400x400/0000FF/FFFFFF?text=Sneaker",
    cost: "$75.00",
    rating: 4,
  },
  {
    id: 2,
    name: "Vintage T-Shirt",
    brand: "RetroThreads",
    image: "https://placehold.co/400x400/FF0000/FFFFFF?text=T-Shirt",
    cost: "$25.00",
    rating: 5,
  },
  {
    id: 3,
    name: "Leather Wallet",
    brand: "Artisan Goods",
    image: "https://placehold.co/400x400/008000/FFFFFF?text=Wallet",
    cost: "$50.00",
    rating: 4,
  },
  {
    id: 4,
    name: "Denim Jacket",
    brand: "UrbanWear",
    image: "https://placehold.co/400x400/800080/FFFFFF?text=Jacket",
    cost: "$99.00",
    rating: 3,
  },
  {
    id: 5,
    name: "Minimalist Watch",
    brand: "Timepiece Co.",
    image: "https://placehold.co/400x400/FFA500/FFFFFF?text=Watch",
    cost: "$120.00",
    rating: 5,
  },
  {
    id: 6,
    name: "Running Shorts",
    brand: "Athletica",
    image: "https://placehold.co/400x400/808080/FFFFFF?text=Shorts",
    cost: "$30.00",
    rating: 4,
  },
  {
    id: 7,
    name: "Canvas Backpack",
    brand: "Vagabond",
    image: "https://placehold.co/400x400/00FFFF/000000?text=Backpack",
    cost: "$60.00",
    rating: 5,
  },
  {
    id: 8,
    name: "Beanie Hat",
    brand: "WinterWarm",
    image: "https://placehold.co/400x400/FF00FF/FFFFFF?text=Hat",
    cost: "$15.00",
    rating: 3,
  },
  {
    id: 9,
    name: "Striped Socks",
    brand: "Socktastic",
    image: "https://placehold.co/400x400/000000/FFFFFF?text=Socks",
    cost: "$10.00",
    rating: 4,
  },
  {
    id: 10,
    name: "Water Bottle",
    brand: "Hydrate",
    image: "https://placehold.co/400x400/A52A2A/FFFFFF?text=Bottle",
    cost: "$20.00",
    rating: 5,
  },
  // ... add remaining products as before
];

// ✅ Combined ProductCard (uses CartContext)
function ProductCard({ product, viewMode }) {
  const { addToCart } = useContext(CartContext); // use context

  const handleAddToCart = () => {
    const price = parseFloat(product.cost.replace("$", ""));
    addToCart(price); // update cart total
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-xl ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  const isRowView = viewMode === "row";

  return (
    <div
      className={`border border-gray-200 rounded-lg overflow-hidden shadow-md p-4 bg-white transform transition-transform hover:scale-105 ${
        isRowView ? "flex flex-col sm:flex-row items-center sm:items-stretch gap-6" : ""
      }`}
    >
      <img
        src={product.image}
        alt={product.name}
        className={`object-cover rounded ${
          isRowView ? "w-full sm:w-32 h-32 flex-shrink-0 mb-4 sm:mb-0" : "w-full h-48 mb-4"
        }`}
        onError={(e) => {
          e.target.src = "https://placehold.co/400x400/cccccc/000000?text=Image+Not+Found";
        }}
      />
      <div className={`flex-grow ${isRowView ? "flex flex-col sm:flex-row items-center sm:justify-between" : ""}`}>
        <div className="flex-grow flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
          <p className="text-gray-500 text-sm mb-1">{product.brand}</p>
          <div className="flex items-center my-2">{renderStars(product.rating)}</div>
          <p className="text-lg font-bold text-gray-900">{product.cost}</p>
        </div>
        <button
          onClick={handleAddToCart}
          className="mt-4 sm:mt-0 w-full sm:w-auto bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

// Pagination component
function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [...Array(totalPages).keys()].map((n) => n + 1);

  return (
    <div className="flex justify-center gap-3 mt-18">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`px-4 py-2 rounded-lg font-semibold ${
            pageNumber === currentPage
              ? "bg-blue-500 text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
          }`}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}

// Main ProductGrid component
export default function ProductGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortOption, setSortOption] = useState("Name");
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [viewMode, setViewMode] = useState("grid"); // State for view mode

  const allBrands = useMemo(() => {
    const brands = new Set(allProducts.map((p) => p.brand));
    return ["All", ...Array.from(brands).sort()];
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = selectedBrand === "All" ? allProducts : allProducts.filter((p) => p.brand === selectedBrand);

    if (sortOption === "Name") filtered.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortOption === "Price: Low to High") filtered.sort((a, b) => parseFloat(a.cost.slice(1)) - parseFloat(b.cost.slice(1)));
    else if (sortOption === "Price: High to Low") filtered.sort((a, b) => parseFloat(b.cost.slice(1)) - parseFloat(a.cost.slice(1)));

    return filtered;
  }, [selectedBrand, sortOption]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToDisplay = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedBrand, sortOption, itemsPerPage]);

  return (
    <div className="min-h-screen font-sans antialiased">
      {/* Filter and sort controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 p-4 rounded-lg">
        <div className="flex flex-wrap items-center gap-4 text-gray-700">
          <span className="text-lg font-semibold">{filteredProducts.length} items</span>

          <label htmlFor="brand-filter">Filter:</label>
          <select
            id="brand-filter"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {allBrands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>

          <label htmlFor="sort-by">Sort:</label>
          <select
            id="sort-by"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Name">Name</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
          </select>

          <label htmlFor="items-per-page">Show:</label>
          <select
            id="items-per-page"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={12}>12</option>
            <option value={20}>20</option>
          </select>
        </div>

        <div className="flex gap-3 mt-4 sm:mt-0">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-md transition-colors ${viewMode === "grid" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
          >
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("row")}
            className={`p-2 rounded-md transition-colors ${viewMode === "row" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Product list */}
      <div className={`${viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "flex flex-col"} gap-6 p-6`}>
        {productsToDisplay.length > 0 ? (
          productsToDisplay.map((product) => <ProductCard key={product.id} product={product} viewMode={viewMode} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">No products match your criteria.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />}
    </div>
  );
}
