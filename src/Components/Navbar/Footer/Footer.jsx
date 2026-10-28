
import {
  ShoppingBag,
  ArrowUpRight,
  Mail,
} from "lucide-react";

function Footer() {
  const quickLinks = [
    "Home",
    "Men",
    "Women",
    "Electronics",
    "Jewellery",
  ];

  const customerLinks = [
    "Contact Us",
    "Shipping Policy",
    "Returns & Refunds",
    "FAQs",
    "Terms & Conditions",
  ];

  const socialLinks = [
    { label: "Facebook", symbol: "f" },
    { label: "Instagram", symbol: "◎" },
    { label: "YouTube", symbol: "▶" },
  ];

  return (
    <footer className="bg-[#21170f] text-white">
      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">

        {/* Brand section */}
        <div>
          <a
            href="/"
            className="inline-flex items-center gap-2"
          >
            <ShoppingBag
              size={29}
              className="text-[#d7ae85]"
              strokeWidth={2.2}
            />

            <span className="font-serif text-2xl font-bold">
              Shop
              <span className="text-[#d7ae85]">Ease</span>
            </span>
          </a>

          <p className="mt-4 max-w-xs text-sm leading-6 text-[#d4c6b8]">
            Your destination for fashion, electronics, jewellery
            and everyday essentials. Discover a little more style
            in every day.
          </p>

          {/* Social links */}
          <div className="mt-5 flex gap-3">
            {socialLinks.map(({ label, symbol }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm font-bold text-[#e6d6c7] transition duration-300 hover:border-[#d7ae85] hover:bg-[#d7ae85] hover:text-[#21170f]"
              >
                {symbol}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-serif text-lg font-bold">
            Quick Links
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-[#d4c6b8]">
            {quickLinks.map((item) => (
              <li key={item}>
                <a
                  href="/"
                  className="transition hover:text-[#d7ae85]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer service */}
        <div>
          <h3 className="font-serif text-lg font-bold">
            Customer Care
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-[#d4c6b8]">
            {customerLinks.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="transition hover:text-[#d7ae85]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-serif text-lg font-bold">
            Stay in the Loop
          </h3>

          <p className="mt-4 text-sm leading-6 text-[#d4c6b8]">
            Get updates on new arrivals, curated collections
            and special offers.
          </p>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              alert("Thanks for subscribing to ShopEase!");
            }}
            className="mt-5 flex overflow-hidden rounded-lg bg-white p-1"
          >
            <label
              htmlFor="footer-email"
              className="sr-only"
            >
              Email address
            </label>

            <input
              id="footer-email"
              type="email"
              required
              placeholder="Your email address"
              className="min-w-0 flex-1 px-3 py-2 text-sm text-slate-900 outline-none"
            />

            <button
              type="submit"
              aria-label="Subscribe"
              className="flex items-center justify-center rounded-md bg-[#103653] px-3 text-white transition hover:bg-[#194d73]"
            >
              <ArrowUpRight size={19} />
            </button>
          </form>

          <p className="mt-3 flex items-center gap-2 text-xs text-[#bca995]">
            <Mail size={14} />
            No spam. Just the good stuff.
          </p>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 text-xs text-[#c5b5a5] sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} ShopEase.
            All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="#"
              className="transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
