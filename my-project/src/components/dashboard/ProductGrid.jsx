// src/components/dashboard/ProductGrid.jsx
import React, { useState, useMemo, useContext } from "react";
import { LayoutGrid, List } from "lucide-react"; // icons
import { CartContext, useCart } from "./CartContext"; // ✅ import context

// Product data
const allProducts = [
  { id: 1, name: "Moderns Sneaker", brand: "Nike", image: "https://placehold.co/400x400/0000FF/FFFFFF?text=Sneaker", cost: "$75.00", rating: 4 },
  { id: 2, name: "Vintage T-Shirt", brand: "Adidas", image: "https://placehold.co/400x400/FF0000/FFFFFF?text=T-Shirt", cost: "$25.00", rating: 5 },
  { id: 3, name: "Leather Wallet", brand: "Nike", image: "https://placehold.co/400x400/008000/FFFFFF?text=Wallet", cost: "$50.00", rating: 4 },
  { id: 4, name: "Denim Jacket", brand: "Airmax", image: "https://placehold.co/400x400/800080/FFFFFF?text=Jacket", cost: "$99.00", rating: 3 },
  { id: 5, name: "Minimalist Watch", brand: "Timepiece Co.", image: "https://placehold.co/400x400/FFA500/FFFFFF?text=Watch", cost: "$120.00", rating: 5 },
  { id: 6, name: "Running Shorts", brand: "Vans", image: "https://placehold.co/400x400/808080/FFFFFF?text=Shorts", cost: "$30.00", rating: 4 },
  { id: 7, name: "Canvas Backpack", brand: "All Stars", image: "https://placehold.co/400x400/00FFFF/000000?text=Backpack", cost: "$60.00", rating: 5 },
  { id: 8, name: "Beanie Hat", brand: "All Stars", image: "https://placehold.co/400x400/FF00FF/FFFFFF?text=Hat", cost: "$15.00", rating: 3 },
  { id: 9, name: "Striped Socks", brand: "Puma", image: "https://placehold.co/400x400/808080/FFFFFF?text=Shorts", cost: "$10.00", rating: 4 },
  { id: 10, name: "Water Bottle", brand: "Puma", image: "https://placehold.co/400x400/A52A2A/FFFFFF?text=Bottle", cost: "$20.00", rating: 5 },
  { id: 11, name: "Beanie Hat", brand: "All Stars", image: "https://placehold.co/400x400/FFA500/FFFFFF?text=Watch", cost: "$15.00", rating: 3 },
  { id: 12, name: "Beanie Hat", brand: "All Stars", image: "https://placehold.co/400x400/FF0000/FFFFFF?text=T-Shirt", cost: "$15.00", rating: 3 },
  { id: 13, name: "Beanie ", brand: "All Stars", image: "https://placehold.co/400x400/008000/FFFFFF?text=Wallet", cost: "$15.00", rating: 3 },
];

// ✅ ProductCard stays exactly same as original
function ProductCard({ product, viewMode }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const price = parseFloat(product.cost.replace("$", ""));
    addToCart(price);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-xl ${i < rating ? "text-yellow-400" : "text-gray-300"}`}>★</span>
      );
    }
    return stars;
  };

  const isRowView = viewMode === "row";

  return (
    <div className={`border border-gray-200 rounded-lg overflow-hidden shadow-md p-4 bg-white transform transition-transform hover:scale-105 ${isRowView ? "flex flex-col sm:flex-row items-center sm:items-stretch gap-6" : ""}`}>
      <img
        src={product.image}
        alt={product.name}
        className={`object-cover rounded ${isRowView ? "w-full sm:w-32 h-32 flex-shrink-0 mb-4 sm:mb-0" : "w-full h-48 mb-4"}`}
        onError={(e) => { e.target.src = "https://placehold.co/400x400/cccccc/000000?text=Image+Not+Found"; }}
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

// ✅ Pagination stays exactly same
function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [...Array(totalPages).keys()].map((n) => n + 1);
  return (
    <div className="flex justify-center gap-3 mt-18">
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg font-semibold ${page === currentPage ? "bg-blue-500 text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

// ✅ Main ProductGrid with full functionality (brand + dynamic price + pagination + view toggle)
export default function ProductGrid() {
  const { selectedBrand, priceRange, setSelectedBrand } = useCart(); // get dynamic brand & price from Sidebar
  const [sortOption, setSortOption] = useState("Name");
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const allBrands = useMemo(() => ["All", ...Array.from(new Set(allProducts.map((p) => p.brand))).sort()], []);

  // ✅ Filter + Price + Sorting
  const filteredProducts = useMemo(() => {
    let filtered = selectedBrand === "All" ? allProducts : allProducts.filter((p) => p.brand === selectedBrand);

    // Price filter
    filtered = filtered.filter((p) => {
      const price = parseFloat(p.cost.replace("$", ""));
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Sorting
    if (sortOption === "Name") filtered.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortOption === "Price: Low to High") filtered.sort((a, b) => parseFloat(a.cost.slice(1)) - parseFloat(b.cost.slice(1)));
    else if (sortOption === "Price: High to Low") filtered.sort((a, b) => parseFloat(b.cost.slice(1)) - parseFloat(a.cost.slice(1)));

    return filtered;
  }, [selectedBrand, priceRange, sortOption]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const productsToDisplay = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Reset page when filters change
  React.useEffect(() => setCurrentPage(1), [selectedBrand, priceRange, sortOption, itemsPerPage]);

  return (
    <div className="min-h-screen font-sans antialiased">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 p-4 rounded-lg">
        <div className="flex flex-wrap items-center gap-4 text-gray-700">
          <span className="text-lg font-semibold">{filteredProducts.length} items</span>

          {/* Brand filter */}
          <label htmlFor="brand-filter">Filter:</label>
          <select
            id="brand-filter"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {allBrands.map((brand) => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>

          {/* Sort */}
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

          {/* Items per page */}
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

        {/* Grid/Row view */}
        <div className="flex gap-3 mt-4 sm:mt-0">
          <button onClick={() => setViewMode("grid")} className={`p-2 rounded-md transition-colors ${viewMode === "grid" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}><LayoutGrid className="w-5 h-5" /></button>
          <button onClick={() => setViewMode("row")} className={`p-2 rounded-md transition-colors ${viewMode === "row" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}><List className="w-5 h-5" /></button>
        </div>
      </div>

      {/* Product list */}
      <div className={`${viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "flex flex-col"} gap-6 p-6`}>
        {productsToDisplay.length > 0
          ? productsToDisplay.map((product) => <ProductCard key={product.id} product={product} viewMode={viewMode} />)
          : <p className="col-span-full text-center text-gray-500">No products match your criteria.</p>
        }
      </div>

      {/* Pagination */}
      {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />}
    </div>
  );
}
