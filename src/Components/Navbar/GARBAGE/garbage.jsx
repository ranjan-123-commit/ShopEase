 import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  Menu,
} from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            Shop<span className="text-blue-600">Ease</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-7">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Home
            </Link>

            <Link
              to="/men"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Men
            </Link>

            <Link
              to="/women"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Women
            </Link>

            <Link
              to="/electronics"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Electronics
            </Link>

            <Link
              to="/jewellery"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Jewellery
            </Link>
          </div>

          {/* Search */}
          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
            <Search size={19} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search products..."
              className="ml-2 w-full bg-transparent outline-none text-sm"
            />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-5">

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="text-gray-700 hover:text-red-500 transition"
            >
              <Heart size={22} />
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-blue-600 transition"
            >
              <ShoppingCart size={22} />

              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Login */}
            <Link
              to="/login"
              className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            >
              <User size={21} />
              <span className="font-medium">Login</span>
            </Link>

            {/* Mobile Menu */}
            <button className="md:hidden text-gray-700">
              <Menu size={25} />
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;