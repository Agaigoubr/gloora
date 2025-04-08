"use client";
import React from "react";
import Image from "next/image";

const ProductCard = ({ discount, category, title, description, price, oldPrice, image, icona, iconb, iconc, video }) => {
  return (
    <div 
      className=" relative flex bg-red-50 shadow-lg p-6 rounded-[30px] mt-[1780px]" 
      style={{ width: "1000px", height: "467px", position: "absolute", top: "1010px", left: "329px" }}
    >
      {/* زر الخصم */}
      <div className="absolute top-4 left-4 bg-black text-white text-lg px-4 py-2 rounded-full">{discount}%</div>

      {/* المحتوى النصي */}
      <div className="flex-1 flex flex-col justify-center pl-10">
        <h1 className="text-orange-400 text-lg uppercase">{category}</h1>
        <h2 className="text-4xl font-semibold mt-2">{title}</h2>
        <p className="text-gray-500 text-lg mt-4">{description}</p>
        <div className="flex items-center mt-6">
          <span className="text-black text-3xl font-bold">${price}</span>
          <span className="text-gray-400 line-through ml-4 text-2xl">${oldPrice}</span>
        </div>
      </div>

      {/* الصورة */}
      <div className="w-[400px] flex justify-center items-center">
      <Image src={image} alt={title} width={400} height={400} className="rounded-lg object-cover" />
     
      <Image  src={icona} alt={title} width={70} height={69} className="absolute object-cover mb-[355px] ml-[330px]" />


      <Image  src={iconb} alt={title} width={55} height={55} className="absolute object-cover mt-[375px] ml-[330px]" />

      <Image  src={iconc} alt={title} width={55} height={55} className="absolute object-cover mt-[375px] ml-[180px]" />
      

      <video src={video} alt={title} width={259} height={200} className="absolute  rounded-[30px] object-cover " />
        

      

        <button className="absolute  rounded-[30px] bg-white h-[50px] w-[104px]  mt-[10px] mr-[2040px] mb-[400px] "> -30%

</button>



      </div>
    </div>
  );
};

export default function ProductGrid() {
  return (
    <div  >
      <ProductCard
        discount="-30"
        category="ACCESSORIES"
        title="Gloora Bag for Makeup"
        description="This bag is designed to be modern, timeless, and versatile while reflecting your multi-faceted ambitions."
        price="19.00"
        oldPrice="30.00"
        image="/img/prod2.png"
        icona="/icon/icona.svg"
        iconb="/icon/iconb.svg"
        iconc="/icon/iconc.svg"

        video="/videos/1r.mp4"


      />
      </div>
  );
}












const ProductCardto = ({ discount, category, title, description, price, oldPrice, image }) => {
    return (
      <div 
        className="relative flex bg-red-50 shadow-lg p-6 rounded-[30px] mt-[2300px]" 
        style={{ width: "1000px", height: "467px", position: "absolute", top: "1010px", left: "39px" }}
      >
        {/* زر الخصم */}
        <div className="absolute top-4 left-4 bg-black text-white text-lg px-4 py-2 rounded-full">{discount}%</div>
  
        {/* المحتوى النصي */}
        <div className="flex-1 flex flex-col justify-center pl-10">
          <h1 className="text-orange-400 text-lg uppercase">{category}</h1>
          <h2 className="text-4xl font-semibold mt-2">{title}</h2>
          <p className="text-gray-500 text-lg mt-4">{description}</p>
          <div className="flex items-center mt-6">
            <span className="text-black text-3xl font-bold">${price}</span>
            <span className="text-gray-400 line-through ml-4 text-2xl">${oldPrice}</span>
          </div>
        </div>
  
        {/* الصورة */}
        <div className="w-[400px] flex justify-center items-center">
          <Image src={image} alt={title} width={400} height={400} className="rounded-lg object-cover" />
        </div>
      </div>
    );
  };

  export  function ProductGridto() {
    return (
      <div  >
        <ProductCard
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
  