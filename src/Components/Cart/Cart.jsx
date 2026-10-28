import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

function Cart() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartTotal,
  } = useContext(CartContext);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (

        <p className="text-gray-500 text-lg">
          Your cart is empty.
        </p>

      ) : (

        <div>

          {/* PRODUCTS */}

          <div className="space-y-5">

            {cart.map((product) => (

              <div
                key={product.id}
                className="flex flex-col md:flex-row items-center gap-6 bg-white p-5 rounded-xl shadow"
              >

                {/* IMAGE */}

                <img
                  src={product.image}
                  alt={product.title}
                  className="w-32 h-32 object-cover rounded-lg"
                />

                {/* PRODUCT INFO */}

                <div className="flex-1">

                  <h2 className="text-xl font-semibold">
                    {product.title}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    ${product.price}
                  </p>

                </div>

                {/* QUANTITY */}

                <div className="flex items-center gap-3">

                  <button
                    onClick={() => decreaseQuantity(product.id)}
                    className="w-9 h-9 bg-gray-200 rounded-lg"
                  >
                    −
                  </button>

                  <span className="font-semibold">
                    {product.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(product.id)}
                    className="w-9 h-9 bg-gray-200 rounded-lg"
                  >
                    +
                  </button>

                </div>

                {/* REMOVE */}

                <button
                  onClick={() => removeFromCart(product.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

          {/* TOTAL */}

          <div className="mt-10 border-t pt-6 flex flex-col items-end">

            <h2 className="text-2xl font-bold">
              Total: ${cartTotal.toFixed(2)}
            </h2>

            <Link
              to="/checkout"
              className="mt-5 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
            >
              Checkout
            </Link>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;