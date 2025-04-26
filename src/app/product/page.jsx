"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(100);
  const [promotion, setPromotion] = useState(0);
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("latest");

  useEffect(() => {
    const fetchProducts = async () => {
      const params = new URLSearchParams({
        price,
        promotion,
        category,
        sortBy,
      });
      const res = await fetch(`/api/products?${params.toString()}`);
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, [price, promotion, category, sortBy]);

  return (
    <div className="w-full bg-white font-sans">
      <div className="relative w-full h-[380px]">
        <Image src="/product/banner.png" alt="Banner" fill className="object-cover rounded-b-[30px]" />
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
          <h1 className="text-white text-4xl font-light">Gloora Products.</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        <h2 className="text-[#F3A17C] text-2xl mb-10">All Gloora Products.</h2>

        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="w-full lg:w-64 bg-[#FAF7F5] p-6 rounded-[20px] space-y-8">
            <div>
              <h3 className="text-sm font-semibold mb-4">Product Categories</h3>
              {["Face Care", "Body Care", "Hair Care"].map(cat => (
                <label key={cat} className="flex items-center space-x-2 mb-2">
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={category === cat}
                    onChange={() => setCategory(cat)}
                    className="accent-[#F3A17C]"
                  />
                  <span className="text-sm">{cat}</span>
                </label>
              ))}
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4">Filter by price</h3>
              <input type="range" min="0" max="200" value={price} onChange={(e) => setPrice(+e.target.value)} className="w-full accent-[#F3A17C]" />
              <p className="text-[#F3A17C] text-sm mt-1">${price}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4">Filter by promotions</h3>
              <input type="range" min="0" max="100" value={promotion} onChange={(e) => setPromotion(+e.target.value)} className="w-full accent-[#F3A17C]" />
              <p className="text-[#F3A17C] text-sm mt-1">{promotion}%</p>
            </div>
          </aside>

          <section className="flex-1">
            <div className="flex justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm text-[#F3A17C] border border-[#F3A17C] rounded-full px-4 py-2"
              >
                <option value="latest">Sort by Latest</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
              </select>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {products.map(p => (
                <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                  <div className="relative bg-[#F8F8F8] h-60 flex items-center justify-center">
                    {p.promotion > 0 && (
                      <div className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full">-{p.promotion}%</div>
                    )}
                    <Image src={p.imageUrl} alt={p.name} width={120} height={120} className="object-contain" />
                  </div>

                  <div className="p-4 space-y-1">
                    <p className="text-xs text-gray-400">{p.category?.replace("_", " ")}</p>
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-semibold">{p.name}</h3>
                      <div className="flex space-x-2">
                        <span className="text-gray-400 hover:text-[#F3A17C] cursor-pointer">♡</span>
                        <span className="text-gray-400 hover:text-[#F3A17C] cursor-pointer">🛒</span>
                        <span className="text-gray-400 hover:text-[#F3A17C] cursor-pointer">+</span>
                      </div>
                    </div>
                    <p className="text-sm font-bold">${p.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
