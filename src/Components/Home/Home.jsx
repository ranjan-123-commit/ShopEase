import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  RefreshCw,
  Headset,
  Mail,
  Sparkles,
} from "lucide-react";
import ProductCard from "./ProductCard/ProductCard";

const API_URL = "http://localhost:9001/api/products";

const categories = [
  {
    name: "Men",
    image: "photo-1516257984-b1b4d707412e",
    description: "Timeless styles for modern men.",
  },
  {
    name: "Women",
    image: "photo-1483985988355-763728e1935b",
    description: "Fashion for every occasion.",
  },
  {
    name: "Electronics",
    image: "photo-1505740420928-5e560c06d30e",
    description: "Latest gadgets for a smarter you.",
  },
  {
    name: "Jewellery",
    image: "photo-1535632066927-ab7c9ab60908",
    description: "Elegant designs for every moment.",
  },
];

const imageUrl = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;

function Home({ search = "", onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all products returned by the backend.
  // There is intentionally NO 12-product limit.
  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      setLoading(true);
      setError("");

      try {
        const response = search.trim()
          ? await axios.get(`${API_URL}/search`, {
              params: { keyword: search.trim() },
              signal: controller.signal,
            })
          : await axios.get(API_URL, {
              signal: controller.signal,
            });

        setProducts(
          Array.isArray(response.data) ? response.data : []
        );
      } catch (err) {
        if (err.code !== "ERR_CANCELED") {
          console.error("Failed to load products:", err);
          setError(
            "Unable to load products. Please check your backend connection."
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, [search]);

  // Filter products by the selected category.
  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") {
      return products;
    }

    return products.filter((product) =>
      String(product.category ?? "")
        .toLowerCase()
        .includes(activeCategory.toLowerCase())
    );
  }, [products, activeCategory]);

  return (
    <main className="bg-[#fcfaf7] text-slate-900">
      {/* ================= HERO SECTION ================= */}
      <section className="relative mx-auto max-w-[1500px] overflow-hidden bg-[#eee1d3]">
        <div className="absolute inset-0">
          <img
            src={imageUrl("photo-1483985988355-763728e1935b")}
            alt="ShopEase fashion collection"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#f7eee4] via-[#f7eee4]/75 to-[#f7eee4]/10" />
        </div>

        <div className="relative mx-auto flex min-h-[320px] max-w-7xl items-center px-6 py-10 sm:px-10 lg:min-h-[400px]">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[#80502f]">
              New Season · 2026
            </p>

            <h1 className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-[#20170f] sm:text-6xl">
              Elevate Your
              <span className="block text-[#80502f]">
                Everyday Style.
              </span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-slate-700 sm:text-lg">
              Discover timeless styles, modern essentials and
              thoughtful details — all in one place.
            </p>

            <a
              href="#products"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#704323] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4e2e19]"
            >
              Shop Collection
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* ================= CATEGORY SECTION ================= */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              Shop by{" "}
              <span className="text-[#80502f]">Category</span>
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Explore our collections and find what you love.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setActiveCategory("All");
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden items-center gap-2 text-sm font-semibold text-[#704323] sm:flex"
          >
            View All <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              onClick={() => {
                setActiveCategory(category.name);
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative flex min-h-48 overflow-hidden rounded-2xl border border-[#eadfd3] bg-[#f0e3d6] text-left"
            >
              <img
                src={imageUrl(category.image)}
                alt={category.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#f7eee4]/95 via-[#f7eee4]/70 to-transparent" />

              <div className="relative z-10 flex max-w-[68%] flex-col items-start justify-center p-5">
                <h3 className="font-serif text-2xl font-bold">
                  {category.name}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-700">
                  {category.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#704323]">
                  Shop Now <ArrowRight size={14} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ================= PRODUCTS SECTION ================= */}
      <section
        id="products"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-12 sm:px-8"
      >
        <div className="mb-7 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#80502f]">
              <Sparkles size={15} />
              Curated for you
            </p>

            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              Our <span className="text-[#80502f]">Products</span>
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Discover our latest collection.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "All",
              "Men",
              "Women",
              "Electronics",
              "Jewellery",
            ].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2.5 text-xs font-semibold transition ${
                  activeCategory === category
                    ? "bg-[#103653] text-white shadow-md"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-[#103653] hover:text-[#103653]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse rounded-2xl bg-white p-3 shadow-sm"
              >
                <div className="aspect-square rounded-xl bg-slate-200" />
                <div className="mt-4 h-4 rounded bg-slate-200" />
                <div className="mt-3 h-4 w-1/2 rounded bg-slate-200" />
                <div className="mt-4 h-10 rounded bg-slate-200" />
              </div>
            ))}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="rounded-2xl border border-red-100 bg-red-50 p-8 text-center">
            <p className="text-red-700">{error}</p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-4 rounded-lg bg-[#103653] px-5 py-2.5 text-white hover:bg-[#194d73]"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && filteredProducts.length === 0 && (
          <div className="rounded-2xl border border-[#eadfd3] bg-white p-12 text-center">
            <h3 className="font-serif text-2xl font-semibold">
              No products found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another search or select a different category.
            </p>

            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className="mt-5 rounded-lg bg-[#103653] px-5 py-2.5 text-sm text-white hover:bg-[#194d73]"
            >
              View All Products
            </button>
          </div>
        )}

        {/* All filtered products: NO slice(0, 12) */}
        {!loading && !error && filteredProducts.length > 0 && (
          <>
            <p className="mb-5 text-sm text-slate-500">
              Showing all {filteredProducts.length} products
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id ?? product.asin}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </>
        )}
      </section>

      {/* ================= STORE BENEFITS ================= */}
      <section className="mx-auto max-w-7xl px-5 pb-5 sm:px-8">
        <div className="grid grid-cols-2 gap-5 rounded-3xl bg-[#f5ede4] px-5 py-7 sm:grid-cols-4 sm:px-8">
          {[
            {
              Icon: Truck,
              title: "Free Shipping",
              detail: "On eligible orders",
            },
            {
              Icon: ShieldCheck,
              title: "Secure Payments",
              detail: "Protected checkout",
            },
            {
              Icon: RefreshCw,
              title: "Easy Returns",
              detail: "Simple return process",
            },
            {
              Icon: Headset,
              title: "Customer Support",
              detail: "We're here to help",
            },
          ].map(({ Icon, title, detail }) => (
            <div key={title} className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#dfc8b1] bg-white text-[#80502f]">
                <Icon size={23} />
              </span>

              <div>
                <h3 className="font-serif text-sm font-bold sm:text-base">
                  {title}
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#eee0d0] px-6 py-10 sm:px-12">
          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border-[35px] border-white/30" />

          <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#80502f]">
                The ShopEase Edit
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
                A little style in your inbox.
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">
                Get updates on new arrivals, selected collections,
                and special offers.
              </p>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                alert("Thanks for subscribing to ShopEase!");
              }}
              className="flex w-full max-w-md gap-2 rounded-xl bg-white p-2 shadow-sm"
            >
              <Mail
                className="ml-2 mt-2.5 shrink-0 text-slate-400"
                size={19}
              />

              <input
                type="email"
                required
                placeholder="Enter your email"
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent px-2 text-sm outline-none"
              />

              <button
                type="submit"
                className="rounded-lg bg-[#103653] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#194d73]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
