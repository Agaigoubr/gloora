"use client";
import React from 'react'
import Image from 'next/image'
import { Averia_Serif_Libre } from "next/font/google";
import Test from '@/components/Test/page';
import Testt from "@/app/Testt/page";
import Prod from "@/app/productshop/Prod/page";


const averiaSerifLibre = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});


export default function Productshop() {
  return (
    <div className='bg-[#F7F7F7] w-[547px]  rounded-[40px] h-[578px] ml-[30px] mt-[250px] '>
      

      <img
      className='absolute w-[60px] h-[61px]'
      src="/icon/iconc.svg " alt="iconc" />



      <img 
      className='absolute w-[60px] h-[61px]'
      src="/icon/icona.svg " alt="icona" />


      <img
      className='absolute w-[449px] h-[322px] ml-[30px] mt-[100px]'
       src="img/prodct/prp.png" alt="prp" />

      <button className=' bg-black ml-[400px] top-[50px] rounded-[30px] w-[104px] h-[52px]'></button>

      <button className='absolute bg-[#8FF30C] w-[104px] h-[36px] rounded-[30px] left-[1200px] top-[340px] text-white'>
      IN STOCK
      </button>
        <h1 className=' absolute text-[25px] text-black ml-[620px] mt-[88px]'>
        Gloora Bag for Meakup
        </h1>

        <div className={averiaSerifLibre.className}>
        <h1 className=' absolute text-[15px] text-[#F18453] ml-[620px] mt-[70px]'>
        ACCESSORIES
        </h1>
</div>

        <h1 className=' absolute text-[15px] text-[#B7B7B7] ml-[620px] mt-[115px]'>
        Ref: 00GBM12
        </h1>

        <h1 className=' absolute text-[50px] text-[#F18453] ml-[620px] mt-[250px]'>
        $19.00
        </h1>


        <h1 className=' absolute text-[30px] text-[#B7B7B7] ml-[780px] mt-[270px]'>
        $30.00
        </h1>

        <div className={averiaSerifLibre.className}>


        <h1 className=' absolute text-[30px] text-[#B7B7B7] ml-[620px] mt-[370px]'>
        Transform Your Skin Elegantly with
        <br />
         Our Luxurious and Effective Skincare
        </h1>
        <div className=' absolute bg-red-100  w-[206px]  h-[80px] ml-[620px] mt-[500px] rounded-[40px]' >
          </div>
        <div className=' absolute bg-[#F3A17C]  w-[237px]  h-[78px] ml-[920px] mt-[500px] rounded-[40px]' >


</div>

<div className='bg-[#F7F7F7] absolute w-[547px] h-[483px]'>









  
</div>


</div>





<Testt/>

<Prod/>



    </div>


  )
}
