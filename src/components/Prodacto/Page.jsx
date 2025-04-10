"use client";
import React from "react";
import Image from "next/image";

// مكون بطاقة المنتج المتقدمة (مع رموز وفيديو)
const ProductCardFull = ({
  discount,
  category,
  title,
  description,
  price,
  oldPrice,
  image,
  icona,
  iconb,
  iconc,
  video,
}) => {
  return (
    <div className="relative flex bg-[#F7F7F7] shadow-lg p-6 rounded-[30px] mt-[30px] w-[1000px] h-[467px] ml-[310px] overflow-hidden">
      {/* شارة الخصم */}
      <div className="absolute top-4 left-4 bg-black text-white text-lg px-4 py-2 rounded-full">
        {discount}%
      </div>

      {/* النصوص */}
      <div className="flex-1 flex flex-col justify-center pl-10">
        <h1 className="text-[#F18453] text-lg uppercase">{category}</h1>
        <h2 className="text-4xl font-semibold mt-2">{title}</h2>
        <p className="text-gray-500 text-lg mt-4">{description}</p>
        <div className="flex items-center mt-6">
          <span className="text-black text-3xl font-bold">${price}</span>
          <span className="text-gray-400 line-through ml-4 text-2xl">${oldPrice}</span>
        </div>
      </div>

      {/* الجهة اليمنى */}
      <div className="relative w-[400px] flex justify-center items-center">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="rounded-lg object-cover"
        />

        {/* رموز إضافية */}
        <Image
          src={icona}
          alt="icon a"
          width={70}
          height={69}
          className="absolute top-2 right-[40px]"
        />
        <Image
          src={iconb}
          alt="icon b"
          width={55}
          height={55}
          className="absolute bottom-4 right-[40px]"
        />
        <Image
          src={iconc}
          alt="icon c"
          width={55}
          height={55}
          className="absolute bottom-4 right-[170px]"
        />

        {/* الفيديو */}
   
      </div>

    
    </div>



  );
};

// مكون شبكة لبطاقة المنتج المتقدمة
export default function ProductGrid() {
  return (
    <div className="flex justify-center items-center flex-col">
      <ProductCardFull
        discount="-30"
        category="ACCESSORIES"
        title="Gloora Bag for Makeup"
        description="This bag is designed to be modern, timeless, and versatile while reflecting your multi-faceted ambitions."
        price="19.00"
        oldPrice="30.00"
        image="/img/prod.png"
        icona="/icon/icona.svg"
        iconb="/icon/iconb.svg"
        iconc="/icon/iconc.svg"
        video="/videos/1r.mp4"
      />
    </div>
  );
}

// مكون بطاقة بسيطة بدون رموز أو فيديو
const ProductCardSimple = ({
  discount,
  category,
  title,
  description,
  price,
  oldPrice,
  image,
}) => {
  return (
    <div className="relative flex bg-red-50 shadow-lg p-6 rounded-[30px] mt-32 w-[1000px] h-[467px]">
      {/* شارة الخصم */}
      <div className="absolute top-4 left-4 bg-black text-white text-lg px-4 py-2 rounded-full">
        {discount}%
      </div>

      {/* النصوص */}
      <div className="flex-1 flex flex-col justify-center pl-10">
        <h1 className="text-orange-400 text-lg uppercase">{category}</h1>
        <h2 className="text-4xl font-semibold mt-2">{title}</h2>
        <p className="text-gray-500 text-lg mt-4">{description}</p>
        <div className="flex items-center mt-6">
          <span className="text-black text-3xl font-bold">${price}</span>
          <span className="text-gray-400 line-through ml-4 text-2xl">${oldPrice}</span>
        </div>
      </div>

      {/* صورة المنتج */}
      <div className="w-[400px] flex justify-center items-center">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

// مكون شبكة للبطاقات البسيطة
export function ProductGridSimple() {
  return (
    <div className="flex justify-center items-center flex-col">
      <ProductCardSimple
        discount="-30"
        category="ACCESSORIES"
        title="Gloora Bag for Makeup"
        description="This bag is designed to be modern, timeless, and versatile while reflecting your multi-faceted ambitions."
        price="19.00"
        oldPrice="30.00"
        image="/img/prod.png"
      />
    </div>
  );
}
