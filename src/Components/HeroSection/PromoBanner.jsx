
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

function PromoBanner() {
  const navigate = useNavigate();

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="relative mx-auto flex max-w-7xl flex-col overflow-hidden rounded-3xl bg-[#f3eee7] shadow-sm md:min-h-[300px] md:flex-row">

        {/* Left content */}
        <div className="relative z-10 flex flex-1 flex-col items-start justify-center p-7 sm:p-10 lg:p-14">

          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d9c9b5] bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#80664b]">
            <Sparkles size={15} />
            The ShopEase Edit
          </span>

          <h2 className="max-w-lg text-3xl font-extrabold leading-tight tracking-tight text-[#30271f] sm:text-4xl lg:text-5xl">
            Find your style.
            <span className="block text-[#9a7450]">
              Make it yours.
            </span>
          </h2>

          <p className="mt-4 max-w-md text-sm leading-7 text-[#75695d] sm:text-base">
            From everyday essentials to standout pieces, discover products
            that feel right for you.
          </p>

          <button
            type="button"
            onClick={() =>
              document.getElementById("products")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#30271f] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#4b3b2d]"
          >
            Explore Collection
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>

        {/* Right image */}
        <div className="relative min-h-[220px] flex-1 md:min-h-[300px]">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1100&q=85"
            alt="Fashion collection inspiration"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#30271f]/20 to-transparent md:bg-gradient-to-r md:from-[#f3eee7]/10 md:to-transparent" />

          <div className="absolute bottom-5 right-5 rounded-2xl border border-white/50 bg-white/85 px-5 py-3 shadow-lg backdrop-blur-md">
            <p className="text-xs font-medium text-[#75695d]">
              Your next favourite
            </p>
            <p className="mt-1 font-bold text-[#30271f]">
              Starts here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoBanner;
