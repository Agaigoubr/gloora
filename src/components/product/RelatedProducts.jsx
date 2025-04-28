'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function RelatedProducts({ category, currentProductId }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchRelatedProducts() {
      try {
        const res = await fetch(`/api/related-products?category=${category}&currentProductId=${currentProductId}`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits liés:', error);
      }
    }

    fetchRelatedProducts();
  }, [category, currentProductId]);

  if (!products || products.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-center text-[24px] font-bold text-[#333] mb-10">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} className="group">
            <div className="relative bg-[#f9f9f9] rounded-2xl overflow-hidden p-4 flex flex-col items-center">
              {/* Badge -% */}
              <div className="absolute top-4 left-4 bg-black text-white text-[12px] font-semibold px-2 py-1 rounded-full">
                -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
              </div>

              {/* Product Image */}
              <img
                src={product.images[0]?.url || '/placeholder.png'}
                alt={product.name}
                className="w-[120px] h-[120px] object-contain transition-transform duration-300 group-hover:scale-105"
              />

              {/* Product Name */}
              <h3 className="text-center text-sm font-semibold mt-4 mb-2 text-[#333]">{product.name}</h3>

              {/* Prices */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-[#FA5A45] font-bold">${product.price.toFixed(2)}</span>
                <span className="text-gray-400 text-sm line-through">${product.oldPrice.toFixed(2)}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
