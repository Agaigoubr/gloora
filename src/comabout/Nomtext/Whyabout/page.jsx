import React from 'react'
import Image from 'next/image'
import { Averia_Serif_Libre } from "next/font/google";


const averiaSerifLibre = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // الأوزان لي بغيت
  style: ["normal", "italic"],
});









export default function Whyabout() {



  return (
   <div>

<img
    className='absolute mt-[1650px] ml-[30px] w-[1301px] h-[992px]' 
    src="/about/about3.png"
    alt="about3"

     />


<img
    className='absolute mt-[1950px] ml-[370px] w-[682px] h-[605px]' 
    src="/about/whyabouto.png"
    alt="about3"

     />





<div className={averiaSerifLibre.className}>
     <h1 className='absolute text-white text-[30px] mt-[2000px] ml-[600px] '>
     You will have
     <h1 className='mr-[20px]'/>
      a natural face by
     </h1>

     <h1 className='absolute text-white text-[100px] mt-[2060px] ml-[640px] '>
    89%
</h1>
</div>

<h1 className='absolute text-white text-[30px] mt-[2350px] ml-[600px] '>

That Why Gloora

</h1>


<h1 className='absolute text-white text-[20px] mt-[2420px] ml-[500px] '>

unique formulations combine the finest natural
<br />
 ingredients with advanced science to nourish,
 <br />
  rejuvenate, and protect your skin, giving you a
  <br />
   radiant, healthy glow.
</h1>


<h1 className='absolute text-[#F3A17C] text-[30px] mt-[2820px] ml-[570px] '>
Product Categories.
</h1>





<div className={averiaSerifLibre.className}>


<h1 className='absolute text-black text-[30px] mt-[2920px] ml-[420px] '>
Transform Your Skin Elegantly with Our
<h1 className='ml-[40px]'>
Luxurious and Effective Skincare
</h1>
</h1>


</div>

   </div>
 


    
  )
}
