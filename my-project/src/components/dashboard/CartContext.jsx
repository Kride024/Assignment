// src/components/dashboard/CartContext.jsx
import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartTotal, setCartTotal] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState("All"); 
  const [priceRange, setPriceRange] = useState([0, 150]); // min and max
  const [selectedColor, setSelectedColor] = useState(""); // for color picker

  const addToCart = (price) => setCartTotal((prev) => prev + price);

  return (
    <CartContext.Provider
      value={{
        cartTotal,
        addToCart,
        selectedBrand,
        setSelectedBrand,
        priceRange,
        setPriceRange,
        selectedColor,
        setSelectedColor,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// custom hook for convenience
export function useCart() {
  return useContext(CartContext);
}
