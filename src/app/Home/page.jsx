"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { Averia_Serif_Libre } from "next/font/google";
import { motion } from 'framer-motion';
import NavHome from '@/components/Nav/Nav';
import Anim from "@/components/Anim/page";
import { GoX } from "react-icons/go";
import Pagemobil from "@/mobil/Pagemobil/page";

const averiaSerifLibre = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showOverlaye, setShowOverlaye] = useState(false);

  return (
    <div className="relative">
      {/* Desktop View */}
      <div className="hidden md:block mt-6 ml-4 mr-4 relative">
        <img src="/img/home.svg" alt="nature image" className="w-full h-auto" />

        <div className={`${averiaSerifLibre.className} absolute top-[50%] left-[5%] z-10 text-white`}>
          <h1 className="leading-tight text-[60px]">Unlock Your Skin's</h1>
          <h1 className="leading-tight text-[60px]">Natural Beauty</h1>
          <h2 className="text-4xl mt-4">Discover the Secret to Flawless Skin</h2>
        </div>

        <div className="absolute flex items-center gap-4 bottom-10 left-20 z-10">
          <button className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-transparent hover:bg-gray-200 transition">
            <IoIosArrowDropleft className="text-white text-3xl" />
          </button>
          <button className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-transparent hover:bg-gray-200 transition">
            <IoIosArrowDropright className="text-white text-3xl" />
          </button>
        </div>

        <div className="absolute left-[990px] top-[425px] w-[317px] h-[433px] rounded-[30px] bg-white p-4 shadow-lg z-10">
          <div className={averiaSerifLibre.className}>
            <button className="absolute rounded-full w-[140px] h-[50px] left-3 top-4 text-white bg-black">Skin Care</button>
            <button className="absolute rounded-full w-[140px] h-[50px] left-40 top-4 text-black bg-red-100">Face Care</button>
          </div>
          <h1 className="absolute left-[10px] top-[80px] text-black text-3xl">Get -50% Off</h1>
          <h1 className="absolute left-[10px] top-[120px] text-[#F3A17C] text-xl">Gloora Pack</h1>
          <img className="absolute left-[4px] top-[150px]" src="img/skin.png" alt="img" />
          <Anim />
          <button onClick={() => window.location.href = "/productshop"} className="transition-colors bg-[#f3a17c] hover:bg-primary/90 text-white font-medium text-[15px] flex items-center justify-center gap-[7px] w-[127px] h-[50px] px-2.5 py-[9px] rounded-full shadow-[inset_0px_12px_12px_#ce5c29] absolute top-[360px] left-[90px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none">Buy Now 
          <img className="w-[27px] h-[27px]" alt="Frame" src="/icon/shop.svg"/>
           

          
          </button>
        
        </div>

        <video controls autoPlay loop muted src="/videos/1r.mp4" className="absolute rounded-[50px] left-[730px] top-[425px] w-[256.01px] h-[433px] mr-10 z-10" />
      </div>

      {/* Mobile View */}
      <div className="block md:hidden relative">
        <img className="w-[368px] h-[774px] mt-[10px] ml-[10px]" src="/img/homemobil.svg" alt="mobil" />

        <div className={`${averiaSerifLibre.className} absolute top-[15%] left-[5%] z-10 text-white`}>
          <h1 className="font-bold leading-tight text-[27px]">Unlock Your Skin's</h1>
          <h1 className="font-bold leading-tight text-[27px]">Natural Beauty</h1>
          <h2 className="text-[20px] mt-3">Discover the Secret to Flawless Skin</h2>
     
          
          <video src="/videos/1r.mp4" 
        className='absolute mt-[200px] ml-[20px] rounded-[40px] w-[81px] h-[137px]'>
  
        </video>
        <img className='absolute mt-[200px] ml-[84px]' 
          src="/icon/v1.svg" alt="v1" />

        <div className='bg-amber-500 absolute rounded-[40px] mt-[370px] ml-[20px] w-[81px] h-[137px]  '>

        </div>
    
        </div>
       
        <button className="absolute rounded-[30px] bg-black w-[90px] h-[35px] left-[170px] top-[480px]">Skin Care</button>
        <button className="absolute rounded-[30px] bg-white w-[90px] h-[35px] left-[270px] top-[480px]">Face Care</button>

        <div className="absolute rounded-[30px] bg-white w-[191px] h-[223px] left-[170px] top-[520px]">
          <h1 className="absolute text-[20px] top-[10px] left-[30px]">Get -50% Off</h1>
          <h1 className="absolute text-[16px] text-[#F3A17C] top-[30px] left-[30px]">Gloora Pack</h1>
          <img
          className='absolute mt-[50px]  ml-[10px] rounded-[30px] w-[179px] h-[159px]'
          src="img/mobil/skinm.png" alt="skin" />

          <button onClick={() => setShowOverlay(true)} className="absolute rounded-[30px] text-[12px]  bg-[#F3A17C] w-[95px] h-[39px] left-[40px] top-[170px] text-white ">
            
          <div className="relative flex items-center">
  <h1 className="mr-3  text-[12px] font-semibold">Buy Now</h1>
  <img className="ml-1 w-6 h-6" src="icon/shop.svg" alt="Shop Icon" />
</div>

            
            </button>
        </div>

        {showOverlay && (

         <div className="fixed inset-0 flex bg-black/50 justify-center items-center   z-50">

         
         <button 
           className="absolute top-[5px] right-4 p-2 rounded-full text-white  hover:bg-glass transition"
           onClick={() => setShowOverlay(false)}
         >
           <GoX className="w-8 h-8" />
         </button>
       
   
         <button className='absolute mb-[490px] mr-[200px] bg-black rounded-[40px] w-[104px] h-[54px] text-white'>-66!</button>

         <h1 className=' absolute  text-[18px] mt-[500px] mr-[95px] text-[#3C3C3C] '>Winkle Remover + Retinol</h1>
         <h1 className=' absolute fond-bold text-[24px] mt-[550px] mr-[255px] text-black '>$19.00</h1>

<button className='absolute bg-[#F3A17C] w-[115px] h-[45px] rounded-[40px] mt-[550px] ml-[220px] text-white'>Buy Now</button>


            <img  src="/img/mobil/test1.png" className="p-2  py-[30px] rounded-[30px]  w-[374px] h-[707px]" >





</img>












<div className="flex overflow-x-auto  w-[440px] mt-[200px] ml-[0px] space-x-3 max-w-6xl mx-auto p-4  absolute">
  <div className="flex-shrink-0 rounded-[40px] bg-white w-[149px] h-[205px]">

  <img 
    className="mt-[20px] ml-[40px]"
    src="/img/test.png" alt="test" />

<p className="text-[#D0D0D0] text-[20px]  absolute ml-[60px]">SPF</p>

    <img 
    className="mt-[0px] ml-[20px]"
    src="/img/icontest.png" alt="test" />

<h1 className="text-black ml-[20px] text-[15px] ">
    Paula’s Choice
   
    </h1>
    <h1 className="text-black ml-[20px] text-[15px] ">
Skin Perfecting
   
    </h1>
  </div>






  <div className="flex-shrink-0 rounded-[40px] bg-white w-[149px] h-[205px]">

<img 
  className="mt-[20px] ml-[40px]"
  src="/img/test.png" alt="test" />

<p className="text-[#D0D0D0] text-[20px]  absolute ml-[60px]">SPF</p>

  <img 
  className="mt-[0px] ml-[20px]"
  src="/img/icontest.png" alt="test" />

<h1 className="text-black ml-[20px] text-[15px] ">
  Paula’s Choice
 
  </h1>
  <h1 className="text-black ml-[20px] text-[15px] ">
Skin Perfecting
 
  </h1>
</div><div className="flex-shrink-0 rounded-[40px] bg-white w-[149px] h-[205px]">

<img 
  className="mt-[20px] ml-[40px]"
  src="/img/test.png" alt="test" />

<p className="text-[#D0D0D0] text-[20px]  absolute ml-[60px]">SPF</p>

  <img 
  className="mt-[0px] ml-[20px]"
  src="/img/icontest.png" alt="test" />

<h1 className="text-black ml-[20px] text-[15px] ">
  Paula’s Choice
 
  </h1>
  <h1 className="text-black ml-[20px] text-[15px] ">
Skin Perfecting
 
  </h1>
</div><div className="flex-shrink-0 rounded-[40px] bg-white w-[149px] h-[205px]">

<img 
  className="mt-[20px] ml-[40px]"
  src="/img/test.png" alt="test" />

<p className="text-[#D0D0D0] text-[20px]  absolute ml-[60px]">SPF</p>

  <img 
  className="mt-[0px] ml-[20px]"
  src="/img/icontest.png" alt="test" />

<h1 className="text-black ml-[20px] text-[15px] ">
  Paula’s Choice
 
  </h1>
  <h1 className="text-black ml-[20px] text-[15px] ">
Skin Perfecting
 
  </h1>
</div><div className="flex-shrink-0 rounded-[40px] bg-white w-[149px] h-[205px]">

<img 
  className="mt-[20px] ml-[40px]"
  src="/img/test.png" alt="test" />

<p className="text-[#D0D0D0] text-[20px]  absolute ml-[60px]">SPF</p>

  <img 
  className="mt-[0px] ml-[20px]"
  src="/img/icontest.png" alt="test" />

<h1 className="text-black ml-[20px] text-[15px] ">
  Paula’s Choice
 
  </h1>
  <h1 className="text-black ml-[20px] text-[15px] ">
Skin Perfecting
 
  </h1>
</div><div className="flex-shrink-0 rounded-[40px] bg-white w-[149px] h-[205px]">

<img 
  className="mt-[20px] ml-[40px]"
  src="/img/test.png" alt="test" />

<p className="text-[#D0D0D0] text-[20px]  absolute ml-[60px]">SPF</p>

  <img 
  className="mt-[0px] ml-[20px]"
  src="/img/icontest.png" alt="test" />

<h1 className="text-black ml-[20px] text-[15px] ">
  Paula’s Choice
 
  </h1>
  <h1 className="text-black ml-[20px] text-[15px] ">
Skin Perfecting
 
  </h1>
</div><div className="flex-shrink-0 rounded-[40px] bg-white w-[149px] h-[205px]">

<img 
  className="mt-[20px] ml-[40px]"
  src="/img/test.png" alt="test" />

<p className="text-[#D0D0D0] text-[20px]  absolute ml-[60px]">SPF</p>

  <img 
  className="mt-[0px] ml-[20px]"
  src="/img/icontest.png" alt="test" />

<h1 className="text-black ml-[20px] text-[15px] ">
  Paula’s Choice
 
  </h1>
  <h1 className="text-black ml-[20px] text-[15px] ">
Skin Perfecting
 
  </h1>
</div><div className="flex-shrink-0 rounded-[40px] bg-white w-[149px] h-[205px]">

<img 
  className="mt-[20px] ml-[40px]"
  src="/img/test.png" alt="test" />

<p className="text-[#D0D0D0] text-[20px]  absolute ml-[60px]">SPF</p>

  <img 
  className="mt-[0px] ml-[20px]"
  src="/img/icontest.png" alt="test" />

<h1 className="text-black ml-[20px] text-[15px] ">
  Paula’s Choice
 
  </h1>
  <h1 className="text-black ml-[20px] text-[15px] ">
Skin Perfecting
 
  </h1>
</div>



  </div>













</div>







        )}


<button
className='bg-red-300  absolute mb-[400px] h-[200px]  w-[200px] rounded-[40px]'
onClick={() => setShowOverlaye(true)} >test button page 3</button>




{showOverlaye && (


<Pagemobil/>

        



  
)}











































      </div>










  </div>






































  );
}