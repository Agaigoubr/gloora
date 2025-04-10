import React from 'react'
import Image from 'next/image'

import Link from 'next/link'
export default function ProductGrid() {
  const products = Array(6).fill({
    name: "GLoora",
    subtitle: "Instant Anti-Rides",
    price: "$19.00",
    oldPrice: "$30.00",
    image: "/img/prodct/prodact1.png", // ضع مسار الصورة هنا
  });

  return (
<div className="min-h-screen bg-gray-50 p-6">
  <div className="flex overflow-x-auto space-x-6 space-y-6 max-w-6xl mx-auto pb-4">
    {products.map((product, index) => (
      <div
        key={index}
        className="bg-white w-[567px] h-[705px] rounded-[40px] p-4 shadow-md hover:shadow-lg transition shrink-0"
      >
     
        <h3 className="text-gray-800 font-semibold mt-[10px] ml-[40px] text-[20px]">{product.name}</h3>



        <p className="text-sm text-gray-500 mb-2">{product.subtitle}</p>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain mb-4"
        />

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">{product.price}</span>
          <span className="text-sm line-through text-gray-400">{product.oldPrice}</span>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition">
            🛒
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}
