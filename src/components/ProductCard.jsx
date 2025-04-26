import Image from "next/image";

export default function ProductCard({ product }) {
  const discount = product.promotion;
  const discountedPrice = (
    product.price -
    (product.price * discount) / 100
  ).toFixed(2);

  return (
    <div className="bg-white rounded-3xl p-4 shadow-sm relative hover:shadow-md transition">
      {/* Badge de promotion */}
      {discount > 0 && (
        <div className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full">
          -{discount}%
        </div>
      )}

      {/* Image produit */}
      <div className="flex justify-center items-center h-[160px] mb-4">
        <Image
          src={product.image}
          alt={product.name}
          width={150}
          height={150}
          className="object-contain max-h-[150px]"
        />
      </div>

      {/* Catégorie */}
      <p className="text-[11px] uppercase text-gray-500 tracking-widest mb-1">
        {product.category}
      </p>

      {/* Nom produit */}
      <h2 className="text-sm font-semibold text-gray-800 mb-2">{product.name}</h2>

      {/* Prix */}
      <div className="flex items-center space-x-2">
        <span className="text-black font-bold">${discountedPrice}</span>
        {discount > 0 && (
          <span className="text-gray-400 line-through text-sm">${product.price}</span>
        )}
      </div>
    </div>
  );
}
