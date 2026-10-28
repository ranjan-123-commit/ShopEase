
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Home/ProductCard/ProductCard";

function Men() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMenProducts() {
      try {
        const response = await axios.get(
          "http://localhost:9001/api/products/category/Men",
          { signal: controller.signal }
        );

        setProducts(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        if (err.code !== "ERR_CANCELED") {
          setError("Unable to load men's products.");
          console.error(err);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    fetchMenProducts();

    return () => controller.abort();
  }, []);

  return (
    <section className="min-h-screen bg-[#fcfaf7] px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-serif text-4xl font-bold text-slate-900">
          Men's <span className="text-[#80502f]">Collection</span>
        </h1>

        <p className="mb-8 mt-2 text-slate-500">
          Explore our collection of men's fashion and essentials.
        </p>

        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : products.length === 0 ? (
          <p className="text-slate-500">No men's products found.</p>
        ) : (
          <>
            <p className="mb-5 text-sm text-slate-500">
              {products.length} products found
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id ?? product.asin}
                  product={product}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Men;
