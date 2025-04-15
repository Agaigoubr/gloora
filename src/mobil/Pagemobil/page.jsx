'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { GoX } from "react-icons/go";
import  { useState } from 'react';


export default function page() {
  const [, setShowOverlaye] = useState(false);
    

  return (
    


    <div className="fixed inset-0 flex  bg-white/50 shadow-lg ring-1
ring-black/5 backdrop-blur-md justify-center items-center z-50">
             
<button 
           className="absolute top-[5px] right-4 p-2 rounded-full text-white  hover:bg-glass transition"
           onClick={() => setShowOverlaye(false)}
         >
           <GoX className="w-8 h-8" />
         </button>
     









         <div className="relative w-full max-w-[464px] min-h-screen mt-[400px] p-5 font-sans">
  {/* Header */}

  {/* Product Card 1 */}
  <div className="bg-white rounded-[32px] p-6 mb-8 shadow-md">

   
      {/* More size options would go here */}
    </div>

  

  {/* Form Section */}
  <div className="bg-white rounded-[32px] p-6 mb-8 shadow-md">
    <div className="mb-6">
      <label className="block text-xs text-black mb-1">Full Name</label>
      <div className="border border-[#ECECEC] rounded-lg h-12 px-4 flex items-center">
        <span className="text-[#CDCDCD]">Nom Complet</span>
      </div>
    </div>

    <div className="mb-6">
      <label className="block text-xs text-black mb-1">Full Adresse</label>
      <div className="border border-[#ECECEC] rounded-lg h-12 px-4 flex items-center">
        <span className="text-[#CDCDCD]">Ville, Adress</span>
      </div>
    </div>

    <div className="mb-6">
      <label className="block text-xs text-black mb-1">Phone Number</label>
      <div className="border border-[#ECECEC] rounded-lg h-12 px-4 flex items-center">
        <span className="text-[#CDCDCD]">+212 666-666666</span>
      </div>
    </div>
  </div>

  {/* Quantity Selector */}
  <div className="flex items-center justify-center gap-4 mb-8">
    <button className="w-10 h-10 bg-[#ECECEC] rounded-lg flex items-center justify-center">
      <span className="w-4 h-[1px] bg-black"></span>
    </button>
    <div className="w-12 h-10 border border-[#ECECEC] rounded-lg flex items-center justify-center">02</div>
    <button className="w-10 h-10 bg-[#ECECEC] rounded-lg flex items-center justify-center relative">
      <span className="w-4 h-[1px] bg-black"></span>
      <span className="w-4 h-[1px] bg-black rotate-90 absolute"></span>
    </button>
  </div>

  {/* Buy Button */}
  <div className="flex gap-3">
    <button className="flex-1 h-16 bg-black text-white rounded-full flex items-center justify-center gap-2">
      <span>Acheter Maintenant</span>
    </button>
    <button className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
      <div className="w-6 h-6 relative">
        <span className="absolute w-4 h-[1px] bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
        <span className="absolute w-4 h-[1px] bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90"></span>
      </div>
    </button>
  </div>

  {/* Decorative Elements */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
    <div className="absolute w-[410px] h-[249px] top-[85px] left-1/2 -translate-x-1/2 bg-white rounded-[32px]"></div>
    <div className="absolute w-[410px] h-[148px] top-[335px] left-1/2 -translate-x-1/2 bg-white rounded-[32px]"></div>
    <div className="absolute w-[410px] h-[326px] top-[484px] left-1/2 -translate-x-1/2 bg-white rounded-[32px]"></div>
  </div>
</div>
















</div>



           
  )
}
