
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  PackageCheck,
  Headset,
} from "lucide-react";
import "./Hero.css";

const categories = [
  {
    name: "Men",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=400&q=85",
  },
  {
    name: "Women",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=400&q=85",
  },
  {
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=85",
  },
  {
    name: "Jewellery",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=400&q=85",
  },
];

function Hero() {
  return (
    <main className="shop-hero">
      <section className="hero-banner">
        <div className="hero-copy">
          <span className="hero-eyebrow">
            NEW SEASON · 2026
          </span>

          <h1>
            Style Today,
            <span>Brighter Tomorrow.</span>
          </h1>

          <p>
            Discover trendy fashion, the latest electronics,
            stunning jewellery and more — all in one place.
          </p>

          <Link to="/#products" className="hero-cta">
            Shop Now <ArrowRight size={20} />
          </Link>

          <div className="hero-rating">
            <span className="rating-stars">★★★★★</span>
            <span>Discover your next favourite</span>
          </div>
        </div>

        <div className="hero-promo">
          <span>DISCOVER YOUR STYLE</span>
          <strong>Made for your everyday.</strong>
          <small>Fashion · Technology · Jewellery</small>
        </div>

        <div className="hero-bottom">
          {categories.map((category) => (
            <Link
              to={`/category/${category.name}`}
              className="category-tile"
              key={category.name}
            >
              <img src={category.image} alt={category.name} />
              <span>{category.name}</span>
              <ArrowRight size={18} />
            </Link>
          ))}
        </div>
      </section>

      <section className="hero-benefits">
        <div>
          <Truck />
          <span>
            <strong>Free Shipping</strong>
            <small>On eligible orders</small>
          </span>
        </div>

        <div>
          <ShieldCheck />
          <span>
            <strong>Secure Shopping</strong>
            <small>Your security matters</small>
          </span>
        </div>

        <div>
          <PackageCheck />
          <span>
            <strong>Easy Returns</strong>
            <small>Simple return process</small>
          </span>
        </div>

        <div>
          <Headset />
          <span>
            <strong>Customer Support</strong>
            <small>We're here to help</small>
          </span>
        </div>
      </section>
    </main>
  );
}

export default Hero;
