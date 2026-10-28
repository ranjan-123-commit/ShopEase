 import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Details() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {

    axios
      .get(`http://localhost:9001/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [id]);

  if (!product) {
    return (
      <div className="text-center mt-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[500px] object-contain rounded-xl"
          />
        </div>

        {/* Product Information */}
        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            {product.title}
          </h1>

          <p className="text-gray-500 mt-4">
            Brand: {product.brand}
          </p>

          <p className="text-yellow-500 text-lg mt-4">
            ⭐ {product.rating}
          </p>

          <p className="text-3xl font-bold text-blue-600 mt-5">
            ${product.price}
          </p>

          <p className="text-gray-700 mt-6 leading-7">
            {product.description}
          </p>

          <p className="text-gray-500 mt-5">
            Category: {product.category}
          </p>

          <button
            className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default Details;