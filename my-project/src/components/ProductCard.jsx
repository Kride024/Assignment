export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
      <img src={product.img} alt={product.name} className="rounded-lg w-full h-48 object-cover" />
      <h3 className="mt-4 text-lg font-medium">{product.name}</h3>
      <p className="text-sky-600 font-semibold">{product.price}</p>
      <button className="mt-3 w-full py-2 bg-sky-600 text-white rounded-xl hover:bg-sky-700">
        Add to Cart
      </button>
    </div>
  );
}
