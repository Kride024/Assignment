// src/components/dashboard/CartContext.js
import React, { createContext, useState,useContext  } from "react";


// 1️⃣ Create the context
export const CartContext = createContext();

// 2️⃣ Create a provider component
export function CartProvider({ children }) {
  const [cartTotal, setCartTotal] = useState(0);

  // Function to add price to cart
  const addToCart = (price) => {
    setCartTotal((prev) => prev + price);
  };

  return (
    <CartContext.Provider value={{ cartTotal, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
