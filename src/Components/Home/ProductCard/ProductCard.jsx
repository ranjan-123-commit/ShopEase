
import { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";

function ProductCard({ product, onAddToCart }) {
  const [wishlisted, setWishlisted] = useState(false);

  const title = product.title || product.name || "ShopEase Product";
  const image =
    product.imageUrl ||
    product.imageURL ||
    product.image ||
    product.thumbnail ||
    product.image_url;

  const price = Number(product.price ?? product.discountedPrice ?? 0);
  const originalPrice = Number(
    product.originalPrice ?? product.original_price ?? 0
  );
  const rating = Number(product.rating ?? 4.5);
  const reviewCount = Number(product.reviewCount ?? product.review_count ?? 0);

  const discount =
    originalPrice > price && originalPrice > 0
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

  const fallbackImage =
    "https://placehold.co/600x600/f5ede4/80502f?text=ShopEase";

  return (
    <article className="group min-w-0 overflow-hidden rounded-2xl border border-[#eee8e1] bg-white p-2.5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-3">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-[#f5f1ec]">
        <img
          src={image || fallbackImage}
          alt={title}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = fallbackImage;
          }}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <button
          type="button"
          onClick={() => setWishlisted((previous) => !previous)}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition ${
            wishlisted
              ? "bg-rose-50 text-rose-600"
              : "bg-white/95 text-slate-700 hover:text-rose-600"
          }`}
        >
          <Heart size={18} fill={wishlisted ? "currentColor" : "none"} />
        </button>

        {discount > 0 && (
          <span className="absolute bottom-2 left-2 rounded-md bg-rose-100 px-2 py-1 text-[10px] font-bold text-rose-700 sm:text-xs">
            {discount}% OFF
          </span>
        )}
      </div>

      <div className="px-0.5 pb-0.5 pt-3">
        <h3
          title={title}
          className="min-h-10 line-clamp-2 text-sm font-semibold leading-5 text-slate-800"
        >
          {title}
        </h3>

        <div className="mt-1 flex flex-wrap items-center gap-1.5 text-xs">
          <Star size={14} fill="#15803d" className="text-green-700" />
          <span className="font-semibold text-green-700">
            {Number.isFinite(rating) ? rating.toFixed(1) : "4.5"}
          </span>
          <span className="text-slate-400">
            ({reviewCount} reviews)
          </span>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="text-base font-bold text-slate-900">
            ₹{price.toLocaleString("en-IN")}
          </span>

          {discount > 0 && (
            <span className="text-xs text-slate-400 line-through">
              ₹{originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => onAddToCart?.(product)}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#103653] px-2 py-3 text-xs font-semibold text-white transition hover:bg-[#194d73] focus:outline-none focus:ring-2 focus:ring-[#103653] focus:ring-offset-2 sm:text-sm"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
