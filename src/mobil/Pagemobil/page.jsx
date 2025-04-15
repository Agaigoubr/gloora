'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { GoX } from "react-icons/go";
import  { useState } from 'react';
import { classicNameResolver } from 'typescript';


export default function page() {
  const [, setShowOverlaye] = useState(false);
    
  const pcie = " 134.00 Dhs";
  const text2 = "Hoodies Blockout Uniq...";
  const text3 = "Delivery";
  const text4 = "Total";
  const pcie1 = "test"  ;


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
  
  



 

    <div className="mb-6">
    </div>
  </div>

  {/* Quantity Selector */}
  <div className="flex items-center justify-center gap-3 mr-[18px] mb-[60px]">
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
  

  {/* Decorative Elements */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
    <div className="absolute w-[410px] h-[249px] top-[85px] left-1/2 -translate-x-1/2 bg-white rounded-[32px]">

    <div className='bg-[#2F2F2F] w-[47px] h-[20px] rounded-[40px] ml-[120px] absolute mt-[40px] '></div>

    <img 
    className='absolute ml-[230px] mt-[15px]'
    src="/img/mobilpagete.png" alt="" />


    <h1 className='text-black text-[13px] mt-[40px] ml-[40px]  '>
    Product Info
    </h1>
    <h1 className='text-[#878787] text-[16px] mt-[1px] ml-[40px]  '>
    Hoodies Blockout Unique 
    <br />
    Style & Edition
    </h1>
    <h1 className='text-black text-[25px] ml-[40px]'>
{pcie}
    </h1>
   



   

    </div>




    <div className="absolute w-[410px] h-[148px] top-[335px] left-1/2 -translate-x-1/2 bg-white rounded-[32px]">
    <h1 className='text-[10px] text-[#878787] ml-[40px] mt-[40px]'>
    {text2}
    </h1> <h1 className='text-[10px] text-[#878787] ml-[40px] mt-[10px]'>
    {text2}
    </h1>
    
     <h1 className='text-[10px] text-[#878787] ml-[40px] mt-[10px]'>
    {text3}
    </h1>


    <h1 className='text-[13px] text-black ml-[40px] mt-[20px]'>
    {text4}


    </h1>
   

</div>



    <div className="absolute w-[410px] h-[326px] top-[484px] left-1/2 -translate-x-1/2 bg-white rounded-[32px]">

   <h1 className='text-[13px] font-bold text-black absolute ml-[40px] mt-[40px]'>Full Name</h1>





   <h1 className='text-[13px] font-bold text-black absolute ml-[40px] mt-[100px]'>
    Full Address
   </h1>
   <h1 className='text-[13px] font-bold text-black absolute ml-[40px] mt-[200px]'>
    Phone Number
   </h1>

  
    </div>



    <div className="bg-[#161616] absolute mt-[700px]  w-[259px] h-[70px] left-1/2 -translate-x-1/2  rounded-[32px]"></div>
  </div>

</div>


















           
  )
}
