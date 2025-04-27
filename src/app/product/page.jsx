"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(200);
  const [promotion, setPromotion] = useState(0);
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1); 
  const totalPages = 10;
  const router = useRouter();
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = new URLSearchParams({
          price: price.toString(),
          promotion: promotion.toString(),
          category,
          sortBy,
          page: currentPage.toString(), // Ajouté
        });
        const res = await fetch(`/api/products?${params.toString()}`);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, [price, promotion, category, sortBy, currentPage]);

  const SliderWithBadge = ({ min, max, value, onChange, isPrice = false }) => {
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [localValue, setLocalValue] = useState(value);

    useEffect(() => {
      setLocalValue(value);
    }, [value]);

    const calculatePercent = (val) => ((val - min) / (max - min)) * 100;
    const calculateValueFromPosition = (clientX) => {
      if (!sliderRef.current) return min;
      const rect = sliderRef.current.getBoundingClientRect();
      const position = clientX - rect.left;
      const percent = Math.max(0, Math.min(1, position / rect.width));
      return Math.round(min + percent * (max - min));
    };

    const handleStart = (e) => {
      e.preventDefault();
      setIsDragging(true);
      document.body.style.userSelect = "none";

      const clientX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
      const newValue = calculateValueFromPosition(clientX);
      setLocalValue(newValue);
    };

    const handleMove = (e) => {
      if (!isDragging) return;
      const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
      const newValue = calculateValueFromPosition(clientX);
      setLocalValue(newValue);
    };

    const handleEnd = () => {
      if (isDragging) {
        setIsDragging(false);
        document.body.style.userSelect = "";
        onChange(localValue);
      }
    };

    useEffect(() => {
      if (isDragging) {
        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mouseup", handleEnd);
        window.addEventListener("touchmove", handleMove);
        window.addEventListener("touchend", handleEnd);
      }
      return () => {
        window.removeEventListener("mousemove", handleMove);
        window.removeEventListener("mouseup", handleEnd);
        window.removeEventListener("touchmove", handleMove);
        window.removeEventListener("touchend", handleEnd);
      };
    }, [isDragging, localValue]);

    const percent = calculatePercent(localValue);

    return (
      <div className="relative w-full h-12 my-4" ref={sliderRef}>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-[#F3A17C]/20 rounded-full -translate-y-1/2" />
        <div className="absolute top-1/2 left-0 h-1 bg-[#F3A17C] rounded-full -translate-y-1/2" style={{ width: `${percent}%` }} />
        <div className="absolute top-1/2 left-0 w-3 h-3 rounded-full border-2 border-[#F3A17C] bg-white -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-3 h-3 rounded-full border-2 border-[#F3A17C] bg-white -translate-y-1/2" />

        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 cursor-grab active:cursor-grabbing"
          style={{ left: `${percent}%` }}
          onMouseDown={handleStart}
          onTouchStart={handleStart}
        >
          <div className="bg-[#F3A17C] text-white font-medium text-sm px-3 py-1.5 rounded-full flex items-center whitespace-nowrap">
            {isPrice ? `$${localValue}` : `${localValue}%`}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>

        <input
          type="range"
          min={min}
          max={max}
          value={localValue}
          onChange={(e) => {
            const newValue = parseInt(e.target.value);
            setLocalValue(newValue);
            onChange(newValue);
          }}
          className="absolute w-full h-12 opacity-0 cursor-pointer"
        />
      </div>
    );
  };

  return (
    <div className="w-full bg-white font-sans">
      {/* Banner */}
      <div className="relative w-full h-[280px] md:h-[400px] overflow-hidden rounded-[40px] mx-auto mt-32 max-w-7xl px-6">
        <Image src="/product/banner.png" alt="Banner" fill className="object-cover rounded-[40px]" priority />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-[40px]">
          <h1 className="text-white text-4xl md:text-5xl font-semibold">Gloora Products.</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <h2 className="text-[#F3A17C] text-2xl md:text-3xl font-light mb-12">All Gloora Products.</h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 bg-[#FAFAFA] p-8 rounded-[30px] border border-[#EEEEEE] space-y-12 shadow-sm">
            {/* Categories */}
            <div>
              {["All", "Face Care", "Body Care", "Hair Care"].map((cat) => (
                <div
                  key={cat}
                  onClick={() => {
                    setCategory(cat);
                    setCurrentPage(1); // reset la page en changeant de filtre
                  }}
                  className="flex items-center gap-3 mb-4 cursor-pointer"
                >
                  <div className={`w-5 h-5 rounded-full border ${cat === category ? "border-[#F3A17C] bg-[#F3A17C]" : "border-[#999] bg-white"} flex items-center justify-center`}>
                    {cat === category && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  <span className="text-black">{cat}</span>
                </div>
              ))}
            </div>

            {/* Filter by Price */}
            {/* Filter by Price */}
<div>
<h2 className="text-black text-l font-bold mb-2">Filter by price</h2>

  {/* Slider et labels ensemble */}
  <div className="relative w-full">
    {/* Slider */}
    <SliderWithBadge
      min={0}
      max={200}
      value={price}
      onChange={(val) => {
        setPrice(val);
        setCurrentPage(1);
      }}
      isPrice
    />

    {/* Labels */}
    <div className="absolute inset-x-0 top-full mt-2 flex justify-between text-xs text-black">
      <span>$0</span>
      <span>$200</span>
    </div>
  </div>
</div>

{/* Filter by Promotions */}
<div className="mt-6">
<h2 className="text-black text-l font-bold mb-2">Filter by promotions</h2>

  {/* Slider et labels ensemble */}
  <div className="relative w-full">
    <SliderWithBadge
      min={0}
      max={100}
      value={promotion}
      onChange={(val) => {
        setPromotion(val);
        setCurrentPage(1);
      }}
    />

    {/* Labels */}
    <div className="absolute inset-x-0 top-full mt-2 flex justify-between text-xs text-black">
      <span>0%</span>
      <span>100%</span>
    </div>
  </div>
</div>
          </aside>

          {/* Products */}
          <section className="flex-1">
            {/* Sort */}
            <div className="flex justify-end mb-8 relative">
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className="text-sm text-black border border-[#F3A17C] rounded-full px-6 py-2 pr-10 focus:outline-none appearance-none w-48"
              >
                <option value="latest">Sort by Latest</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#F3A17C] w-4 h-4 pointer-events-none" />
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.length > 0 ? (
                products.map((p) => {
                  
                  const discountedPrice = p.promotion > 0 ? (p.price * (1 - p.promotion / 100)).toFixed(2) : p.price.toFixed(2);

                  return (
                    <div
                      key={p.id}
                      onClick={() => router.push(`/product/${p.id}`)}
                      className="bg-white rounded-3xl overflow-hidden flex flex-col shadow-sm border border-[#F5F5F5] hover:shadow-md cursor-pointer"
                    >
                      <div className="relative bg-[#F9F9F9] w-full h-64 flex items-center justify-center p-6">
                        {p.promotion > 0 && (
                          <div className="absolute top-4 left-4 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                            -{p.promotion}%
                          </div>
                        )}
                        <Image
                          src={p.imageUrl || "/placeholder-product.png"}
                          alt={p.name}
                          width={160}
                          height={160}
                          className="object-contain"
                        />
                      </div>

                      <div className="flex items-center justify-center space-x-4 my-4">
                        <button className="w-10 h-10 rounded-full border border-[#F3A17C] flex items-center justify-center text-[#F3A17C] hover:bg-[#F3A17C]/10 transition">
                          <Image src="/icon/coeur.svg" alt="Add to favorites" width={20} height={20} />
                        </button>
                        <button className="w-10 h-10 rounded-full border border-[#F3A17C] flex items-center justify-center text-[#F3A17C] hover:bg-[#F3A17C]/10 transition">
                          <Image src="/icon/panier.svg" alt="Add to cart" width={20} height={20} />
                        </button>
                        <button className="w-10 h-10 rounded-full border border-[#F3A17C] flex items-center justify-center text-[#F3A17C] hover:bg-[#F3A17C]/10 transition">
                          <Image src="/icon/oeil.svg" alt="View details" width={20} height={20} />
                        </button>
                      </div>

                      <div className="text-center px-4 pb-6">
                        <p className="text-xs text-[#F3A17C] font-semibold tracking-widest uppercase mb-1">{p.category || "Accessories"}</p>
                        <h3 className="text-lg font-medium text-black mb-2">{p.name}</h3>

                        {p.promotion > 0 ? (
                          <div className="flex items-center justify-center space-x-2">
                            <p className="text-black text-lg font-bold">${discountedPrice}</p>
                            <p className="text-gray-400 line-through text-base">${p.price.toFixed(2)}</p>
                          </div>
                        ) : (
                          <p className="text-black text-lg font-semibold">${p.price.toFixed(2)}</p>
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center text-gray-400">No products found.</div>
              )}
            </div>

            {/* Pagination */}
<div className="flex items-center justify-center mt-12 space-x-4">
  {/* Page number */}
  <div className="text-gray-400 text-lg font-medium mr-4">
    Page {currentPage.toString().padStart(2, '0')}
  </div>

  {/* Previous */}
  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    className="w-10 h-10 flex items-center justify-center rounded-full border border-[#F3A17C] text-[#F3A17C] hover:bg-[#F3A17C]/10 transition"
    disabled={currentPage === 1}
  >
    <Image src="/icon/droite.svg" alt="Previous" width={20} height={20} />
  </button>

  {/* Next */}
  <button
    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    className="w-10 h-10 flex items-center justify-center rounded-full border border-[#F3A17C] text-[#F3A17C] hover:bg-[#F3A17C]/10 transition"
    disabled={currentPage === totalPages}
  >
    <Image src="/icon/gauche.svg" alt="Next" width={20} height={20} />
  </button>
</div>


          </section>
        </div>
      </div>
    </div>
  );
}
