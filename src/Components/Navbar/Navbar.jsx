
import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  UserRound,
  Menu,
} from "lucide-react";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 hover:text-orange-500 ${
      isActive ? "text-orange-500 font-semibold" : "text-gray-700"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          Shop<span className="text-orange-500">Ease</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/men" className={navLinkClass}>
            Men
          </NavLink>
          <NavLink to="/women" className={navLinkClass}>
            Women
          </NavLink>
          <NavLink to="/electronics" className={navLinkClass}>
            Electronics
          </NavLink>
          <NavLink to="/jewellery" className={navLinkClass}>
            Jewellery
          </NavLink>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="text-gray-700 transition hover:text-orange-500"
            onClick={() => {
              const searchInput = document.querySelector(
                "[data-product-search]"
              );
              searchInput?.focus();
              searchInput?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Search size={21} />
          </button>

          <Link
            to="/login"
            aria-label="Login"
            className="text-gray-700 transition hover:text-orange-500"
          >
            <UserRound size={21} />
          </Link>

          <Link
            to="/cart"
            aria-label="Shopping cart"
            className="text-gray-700 transition hover:text-orange-500"
          >
            <ShoppingCart size={22} />
          </Link>

          <button
            type="button"
            aria-label="Open navigation"
            className="text-gray-700 md:hidden"
            onClick={() => {
              const menu = document.getElementById("mobile-navigation");
              menu?.classList.toggle("hidden");
            }}
          >
            <Menu size={23} />
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <nav
        id="mobile-navigation"
        className="hidden border-t border-gray-100 bg-white px-5 py-4 md:hidden"
      >
        <div className="flex flex-col gap-4">
          <Link to="/" className="text-gray-700 hover:text-orange-500">
            Home
          </Link>
          <Link to="/men" className="text-gray-700 hover:text-orange-500">
            Men
          </Link>
          <Link to="/women" className="text-gray-700 hover:text-orange-500">
            Women
          </Link>
          <Link
            to="/electronics"
            className="text-gray-700 hover:text-orange-500"
          >
            Electronics
          </Link>
          <Link
            to="/jewellery"
            className="text-gray-700 hover:text-orange-500"
          >
            Jewellery
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
