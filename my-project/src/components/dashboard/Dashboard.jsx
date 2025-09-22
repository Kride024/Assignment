import React from "react";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";
import HeroSection from "./HeroSection";
import ProductGrid from "./ProductGrid";
import { CartProvider } from "./CartContext"; // ✅ import context


export default function Dashboard() {
  return (
 <CartProvider> {/* wrap everything so children can use context */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1 pt-16">
          <Sidebar />
          <main className="flex-1 p-6">
            <HeroSection />
            <ProductGrid />
          </main>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}
