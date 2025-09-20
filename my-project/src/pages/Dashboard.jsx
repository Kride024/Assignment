import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar fixed */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 ml-64 p-6 bg-gray-50">
          {/* Hero section */}
          <div className="bg-blue-400 rounded-lg p-8 text-white mb-6">
            <h1 className="text-2xl font-bold">Adidas Men Running Sneakers</h1>
            <p className="mt-2">Best comfort and design. Take it right to the edge.</p>
            <button className="mt-4 px-6 py-2 bg-white text-blue-600 rounded font-semibold">
              Shop Now
            </button>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((p) => (
              <div key={p} className="border rounded-lg p-4 bg-white shadow-sm">
                <div className="h-40 bg-gray-200 mb-4"></div>
                <h3 className="font-semibold">Nike Air Max 270 React</h3>
                <p className="text-blue-600 font-bold mt-2">$293.43</p>
                <p className="text-red-500 text-sm">24% OFF</p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-3 mt-8">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                className={`px-4 py-2 rounded ${
                  n === 3 ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
