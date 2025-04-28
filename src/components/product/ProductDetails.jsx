'use client';

export default function ProductDetails({ product }) {
  const isInStock = product?.stock > 0;
  const discount = product?.promotion || 0;
  const originalPrice = product?.price || 0;
  const discountedPrice = (originalPrice * (1 - discount / 100)).toFixed(2);

  return (
    <div className="flex flex-col w-full max-w-[500px] relative">
      {/* Badge Stock */}
      <div className="absolute right-0 top-2">
        <span className={`px-4 py-1 text-xs font-semibold rounded-full ${
          isInStock ? 'bg-lime-400 text-white' : 'bg-red-400 text-white'
        }`}>
          {isInStock ? 'IN STOCK' : 'OUT OF STOCK'}
        </span>
      </div>

      {/* Texte haut */}
      <div className="flex flex-col gap-1 mb-6">
        <span className="text-xs text-orange-400 uppercase tracking-widest">
          {product?.category || 'ACCESSORIES'}
        </span>
        <h1 className="text-2xl font-semibold text-gray-800">
          {product?.name || 'Product Name'}
        </h1>
        <span className="text-gray-400 text-xs">
          Ref: {product?.ref || 'N/A'}
        </span>
      </div>

      {/* Prix */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-4xl font-bold text-orange-300">${discountedPrice}</span>
        {discount > 0 && (
          <span className="text-2xl text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-md">
        {product?.shortDescription || "Transform Your Skin Elegantly with Our Luxurious and Effective Skincare"}
      </p>

      {/* Quantité + Boutons */}
      <div className="flex items-center gap-4">
        {/* Quantité */}
        <div className="flex items-center border border-orange-300 rounded-full overflow-hidden">
          <button className="px-4 py-2 text-orange-300 text-lg">−</button>
          <span className="px-4 text-base font-semibold text-gray-700">01</span>
          <button className="px-4 py-2 text-orange-300 text-lg">+</button>
        </div>

        {/* Buy Now + Icon */}
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center bg-orange-300 hover:bg-orange-400 text-white font-semibold py-3 px-8 rounded-full transition">
            Buy Now
          </button>
          <button className="bg-orange-100 text-orange-300 p-3 rounded-full">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 14h8"></path>
              <path d="M4 10h16"></path>
              <path d="M16 18l6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
