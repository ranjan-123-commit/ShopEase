

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Search,
  Heart,
  ShoppingCart,
  UserRound,
  Menu,
  X,
} from "lucide-react";

function Navbar({ search = "", setSearch, cartCount = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "Men", to: "/men" },
    { name: "Women", to: "/women" },
    { name: "Electronics", to: "/electronics" },
    { name: "Jewellery", to: "/jewellery" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#eee5db] bg-[#fcfaf7]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <ShoppingBag
            size={29}
            className="text-[#80502f]"
            strokeWidth={2.3}
          />
          <span className="font-serif text-2xl font-bold tracking-tight text-slate-900">
            Shop<span className="text-[#80502f]">Ease</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-5 xl:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-sm font-medium text-slate-700 transition hover:text-[#80502f]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Search */}
        <div className="hidden max-w-xs flex-1 items-center rounded-xl border border-[#e8dfd5] bg-white px-3 py-2.5 lg:flex">
          <Search size={17} className="shrink-0 text-slate-400" />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch?.(event.target.value)}
            placeholder="Search for products..."
            aria-label="Search products"
            className="ml-2 min-w-0 flex-1 bg-transparent text-sm outline-none"
          />
        </div>

        {/* Account and cart actions */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <Link
            to="/login"
            title="Login"
            aria-label="Login"
            className="hidden text-slate-700 transition hover:text-[#80502f] sm:block"
          >
            <UserRound size={21} />
          </Link>

          <Link
            to="/register"
            className="hidden rounded-lg border border-[#80502f] px-3 py-2 text-sm font-semibold text-[#80502f] transition hover:bg-[#80502f] hover:text-white md:block"
          >
            Register
          </Link>

          <Link
            to="/cart"
            title="Shopping Cart"
            aria-label={`Shopping cart, ${cartCount} items`}
            className="relative text-slate-700 transition hover:text-[#103653]"
          >
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#103653] px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((previous) => !previous)}
            className="text-slate-700 lg:hidden"
          >
            {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[#eee5db] bg-white px-5 py-4 lg:hidden">
          <div className="mb-4 flex items-center rounded-lg border border-slate-200 px-3 py-2">
            <Search size={17} className="text-slate-400" />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch?.(event.target.value)}
              placeholder="Search products..."
              aria-label="Search products"
              className="ml-2 w-full outline-none"
            />
          </div>

          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-[#80502f]"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-[#80502f]"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-[#80502f]"
            >
              Register
            </Link>

            <Link
              to="/cart"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-[#80502f]"
            >
              Cart ({cartCount})
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
