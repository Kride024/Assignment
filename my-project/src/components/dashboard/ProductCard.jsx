// src/components/ProductCard.js

import React from "react";
import { CartContext } from "./CartContext"; // ✅ import context
// You can also import the images directly if they're in the src folder
// import sneakerImage from "../assets/sneaker.jpg";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  console.log("CartContext:", useContext(CartContext));

   const handleAddToCart = () => {
    // Convert cost string "$75.00" to number
    const price = parseFloat(product.cost.replace("$", ""));
    addToCart(price); // update cart total
  };
  // Function to generate star rating based on the number
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-xl ${i < rating ? "text-yellow-400" : "text-gray-300"}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-gray-600">Brand: {product.brand}</p>
      <div className="flex items-center my-2">
        {renderStars(product.rating)}
      </div>
      <p className="text-lg font-bold">{product.cost}</p>
      <button  onClick={handleAddToCart} // ✅ wire context function here 
      className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
}