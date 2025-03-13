import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://dummyjson.com/products`
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 flex-grow">
        <h2 className="text-xl font-bold mb-6 text-center">Product List</h2>

        {/* Product Grid */}
        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="relative border rounded-lg p-4 shadow-sm hover:shadow-md transition flex flex-col items-center group bg-white"
              >
                {/* Badge */}
                {product.discountPercentage > 20 && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    New Arrivals
                  </span>
                )}

                {/* Product Image */}
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-56 object-cover rounded-md"
                />

                {/* Product Info */}
                <h3 className="text-sm font-semibold text-center mt-2">{product.title}</h3>
                <p className="text-xs text-gray-500">⭐ {product.rating} (225 reviews)</p>

                {/* Price */}
                <div className="flex items-center space-x-2">
                  <p className="text-lg font-bold">${product.price}</p>
                  <p className="text-xs text-gray-500 line-through">${(product.price * (1 + product.discountPercentage / 100)).toFixed(2)}</p>
                </div>

                {/* Add to Cart Button (Muncul Saat Hover) */}
                <button className="mt-2 w-full bg-green-500 text-white py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;

