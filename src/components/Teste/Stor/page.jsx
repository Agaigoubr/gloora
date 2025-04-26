// components/Teste/Stor/page.jsx
import React from 'react';

export default function ProductGrid({ products }) {
  return (
    <div className="flex flex-wrap gap-6 justify-center py-10">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-xl shadow-md w-[280px]">
          <img src={product.image_url} alt={product.name} className="w-full h-[200px] object-cover rounded-md" />
          <h3 className="mt-2 font-bold">{product.name}</h3>
          <p>Prix: ${product.price}</p>
          <p>Promo: {product.promotion}%</p>
        </div>
      ))}
    </div>
  );
}
