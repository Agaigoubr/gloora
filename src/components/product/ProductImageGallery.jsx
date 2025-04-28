'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductImageGallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [discount, setDiscount] = useState(null);

  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0].url);
    }
    setDiscount("-52%");
  }, [images]);

  if (images.length === 0) {
    return <div className="text-center text-gray-500">Aucune image disponible</div>;
  }

  return (
    <div className="flex flex-col w-full max-w-[400px]">
      {/* Image principale */}
      <div className="w-full bg-gray-50 rounded-3xl p-6 relative overflow-hidden">
        {/* Icônes */}
        <div className="flex gap-2 absolute top-4 left-4 z-10">
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-orange-200">
            <Image src="/icon/coeur.svg" alt="Favorite" width={20} height={20} />
          </button>
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-orange-200">
            <Image src="/icon/panier.svg" alt="Cart" width={20} height={20} />
          </button>
        </div>

        {/* Badge réduction */}
        {discount && (
          <div className="absolute top-4 right-4 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
            {discount}
          </div>
        )}

        {/* Image principale */}
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Produit principal"
            className="object-contain w-full h-64 mx-auto"
          />
        ) : (
          <div className="text-gray-400 h-64 flex items-center justify-center">Chargement...</div>
        )}
      </div>

      {/* Miniatures */}
      <div className="flex justify-center gap-4 mt-6">
        {images.slice(0, 3).map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image.url)}
            className={`w-12 h-12 rounded-full overflow-hidden border-2 ${
              selectedImage === image.url ? 'border-orange-300' : 'border-transparent'
            }`}
          >
            <img
              src={image.url}
              alt={`Miniature ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
