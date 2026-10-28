
import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 bg-gray-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <Link to="/" className="text-2xl font-bold text-white">
            Shop<span className="text-orange-500">Ease</span>
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
            Discover fashion, jewellery, electronics, and everyday essentials
            with ShopEase.
          </p>

          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400"
            >
              Instagram
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400"
            >
              X
            </a>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Shop Categories
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/men" className="hover:text-orange-400">Men</Link></li>
            <li><Link to="/women" className="hover:text-orange-400">Women</Link></li>
            <li><Link to="/electronics" className="hover:text-orange-400">Electronics</Link></li>
            <li><Link to="/jewellery" className="hover:text-orange-400">Jewellery</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Customer Service
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/login" className="hover:text-orange-400">My Account</Link></li>
            <li><Link to="/cart" className="hover:text-orange-400">Shopping Cart</Link></li>
            <li><Link to="/checkout" className="hover:text-orange-400">Checkout</Link></li>
            <li>
              <a href="mailto:support@example.com" className="hover:text-orange-400">
                Contact Support
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Contact Us
          </h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-orange-400" />
              <span>India</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-orange-400" />
              <a href="mailto:support@example.com" className="break-all hover:text-orange-400">
                support@example.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-orange-400" />
              <a href="tel:+910000000000" className="hover:text-orange-400">
                Contact by phone
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 px-6 py-5 text-center text-sm text-gray-500">
        © {currentYear} ShopEase. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
