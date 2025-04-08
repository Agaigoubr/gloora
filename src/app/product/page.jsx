import React from 'react'
import Image from 'next/image';
 import { Averia_Serif_Libre } from "next/font/google";
import Teste from "@/components/Teste/page"
import Stor from "@/components/Teste/Stor/page"
import Link from 'next/link';


 const averiaSerifLibre = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});


 
export default function Product() {
  return (
<div>

<div className={averiaSerifLibre.className}>

    <h1 className='absolute text-white  text-[45px] mt-[400px] ml-[40px]'>
    Gloora Products.

    </h1>


</div>

    <img
    className='mt-[160px] w-[1432px] h-[518px]'
    src="/product/product.png"
     alt="product" />




<h1 className='absolute text-[#F3A17C]  text-[25px] mt-[70px] ml-[70px]'>
    All Gloora Products.

    </h1>

    <Teste />

<Stor />

</div>







)
}
