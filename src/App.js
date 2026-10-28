
import { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Navbar/Footer/Footer";

import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";

import CartProvider, {
  CartContext,
} from "./Components/Context/CartContext";


function AppContent() {
  const [search, setSearch] = useState("");

  const { addToCart, cartCount } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-[#fcfaf7]">
      {/* Navbar */}
      <Navbar
        search={search}
        setSearch={setSearch}
        cartCount={cartCount}
      />

      {/* Application Routes */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <Home
              search={search}
              onAddToCart={addToCart}
            />
          }
        />

        {/* Registration Page */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* Login Page */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Shopping Cart */}
        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* Checkout Page */}
        <Route
          path="/checkout"
          element={<Checkout />}
        />

        {/* Fallback for unknown routes */}
        <Route
          path="*"
          element={
            <div className="flex min-h-[50vh] flex-col items-center justify-center px-6 text-center">
              <h1 className="font-serif text-4xl font-bold text-slate-900">
                Page Not Found
              </h1>

              <p className="mt-3 text-slate-500">
                Sorry, the page you're looking for doesn't exist.
              </p>

              <a
                href="/"
                className="mt-6 rounded-xl bg-[#103653] px-6 py-3 font-semibold text-white hover:bg-[#194d73]"
              >
                Back to ShopEase
              </a>
            </div>
          }
        />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}


function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
