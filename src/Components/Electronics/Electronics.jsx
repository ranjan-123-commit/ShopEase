import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Home/ProductCard/ProductCard";

function Electronics() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchElectronicsProducts = async () => {

      try {

        const response = await axios.get(
          "http://localhost:9001/api/products/category/Electronics"
        );

        setProducts(response.data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchElectronicsProducts();

  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Electronics
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>
  );
}

export default Electronics;