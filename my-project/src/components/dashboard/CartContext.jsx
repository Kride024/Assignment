import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartTotal, setCartTotal] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState("All"); // 🔹 new filter state

  const addToCart = (price) => {
    setCartTotal((prev) => prev + price);
  };

  return (
    <CartContext.Provider
      value={{ cartTotal, addToCart, selectedBrand, setSelectedBrand }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
