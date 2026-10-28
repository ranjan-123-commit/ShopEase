
import { useContext, useState } from "react";
import axios from "axios";
import { CartContext } from "../Context/CartContext";

const API_BASE_URL = "http://localhost:9001/api";

function Checkout() {
  const { cart, cartTotal } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = async () => {
    if (loading) return;

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (!window.Razorpay) {
      alert("Razorpay Checkout is not loaded. Please refresh.");
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please log in before making a payment.");
        return;
      }

      // 1. Create a Razorpay order through Spring Boot.
      // NOTE: The backend must eventually calculate the amount
      // from trusted product prices instead of trusting cartTotal.
      const response = await axios.post(
        `${API_BASE_URL}/payment/create-order`,
        null,
        {
          params: { amount: cartTotal },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const razorpayOrder = response.data;

      if (!razorpayOrder.id || !razorpayOrder.keyId) {
        throw new Error("Invalid Razorpay order response.");
      }

      // 2. Configure Razorpay Checkout.
      const options = {
        key: razorpayOrder.keyId,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        name: "RANJANEase",
        description: "ShopEase purchase",
        order_id: razorpayOrder.id,

        handler: async (paymentResponse) => {
          try {
            console.log("Razorpay payment response received.");

            // 3. Verify the signature on the backend.
            // Payment endpoints are temporarily permitAll
            // during debugging, so no JWT header is sent here.
            const verificationResponse = await axios.post(
              `${API_BASE_URL}/payment/verify`,
              {
                razorpay_order_id:
                  paymentResponse.razorpay_order_id,
                razorpay_payment_id:
                  paymentResponse.razorpay_payment_id,
                razorpay_signature:
                  paymentResponse.razorpay_signature,
              }
            );

            if (verificationResponse.data?.verified === true) {
              alert(
                "Payment signature verified successfully!"
              );

              console.log(
                "Verification result:",
                verificationResponse.data
              );

              // Oracle order creation/status update and cart
              // clearing are not implemented in this version.
            } else {
              alert(
                "Payment could not be verified. Please contact support if needed."
              );
            }
          } catch (error) {
            console.error(
              "Payment verification failed:",
              error.response?.status,
              error.response?.data || error.message
            );

            alert(
              "Payment verification failed. Check the backend response."
            );
          } finally {
            setLoading(false);
          }
        },

        modal: {
          ondismiss: () => {
            setLoading(false);
            console.log("Razorpay Checkout closed.");
          },
        },

        theme: {
          color: "#2563eb",
        },
      };

      // 4. Open Razorpay Checkout.
      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", (failure) => {
        console.error(
          "Razorpay payment failed:",
          failure.error
        );

        setLoading(false);
        alert("Payment failed. Please try again.");
      });

      razorpay.open();
    } catch (error) {
      console.error(
        "Unable to start payment:",
        error.response?.status,
        error.response?.data || error.message
      );

      alert(
        error.response?.data?.message ||
          "Unable to start payment. Check the backend console."
      );

      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Checkout
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg">
          Your cart is empty.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Order items */}
          <div>
            <h2 className="text-2xl font-semibold mb-5">
              Your Order
            </h2>

            <div className="space-y-4">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 bg-white p-4 rounded-xl shadow"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold">
                      {product.title}
                    </h3>

                    <p className="text-gray-500">
                      ${product.price} × {product.quantity}
                    </p>
                  </div>

                  <p className="font-semibold">
                    $
                    {(
                      product.price * product.quantity
                    ).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Order summary */}
          <div className="bg-white p-6 rounded-xl shadow h-fit">
            <h2 className="text-2xl font-semibold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Items</span>
              <span>
                {cart.reduce(
                  (total, product) =>
                    total + product.quantity,
                  0
                )}
              </span>
            </div>

            <div className="flex justify-between border-t pt-4">
              <span className="text-xl font-bold">Total</span>

              <span className="text-xl font-bold text-blue-600">
                ${cartTotal.toFixed(2)}
              </span>
            </div>

            <button
              type="button"
              onClick={handlePlaceOrder}
              disabled={loading}
              className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : "Pay Now"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
