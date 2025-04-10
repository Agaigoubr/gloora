import React from 'react'
import Image from 'next/image'

import Link from 'next/link'
export default function ProductGrid() {
  const products = Array(6).fill({
    name: "GLoora",
    subtitle: "Instant Anti-Rides",
    price: "$19.00",
    oldPrice: "$30.00",
    image: "/stor/pr.png", // ضع مسار الصورة هنا
  });

  return (
<div className="min-h-screen bg-gray-50 p-6">
  <div className="flex overflow-x-auto space-x-6 space-y-6 max-w-6xl mx-auto pb-4">
    {products.map((product, index) => (
      <div
        key={index}
        className="bg-white w-[567px] h-[705px] rounded-[40px] p-4 shadow-md hover:shadow-lg transition shrink-0"
      >
     
        <h1 className="text-black  mt-[50px] ml-[70px] text-[30px]">{product.name}</h1>


        <p className="text-black  mt-[0px] ml-[70px] text-[30px]">{product.subtitle}</p>

        <img
          src={product.image}
          alt={product.name}
          className="w-[475px] h-[385px] mt-[60px] ml-[30px] object-contain mb-4"
        />

        <div className="flex items-center gap-2">
          <span className="text-[25px]  font-bold text-black mt-[10px] ml-[30px]">{product.price}</span>
          <span className="text-sm line-through text-gray-400 mt-[10px]">{product.oldPrice}</span>
        
       <div className="mt-1  ml-[350px] flex justify-end"> 
          <Link href={"/"}>
          <button>
            <img
            className=' w-[70px] h-[69px] '
            src="icon/icona.svg" alt="stor" />
          </button>
          </Link>
        </div>
      </div>
</div>
    ))}
  </div>
</div>

  );
}
