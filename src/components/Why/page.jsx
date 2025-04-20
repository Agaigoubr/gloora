import React from 'react'
import { Averia_Serif_Libre } from "next/font/google";


import Image from 'next/image'





const averiaSerifLibre = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // الأوزان لي بغيت
  style: ["normal", "italic"],
});


export default function Why() {
  return (

  <div className="hidden md:block relative"  >



<img 
src='icon/why.svg'
className=' absolute    rounded-[30px] w-[682px] h-[605px] mt-[300px] ml-[325px]'/>




<div>



<div className='absolute w-[18px] h-[18px] rounded-[30px] mt-[350px] ml-[390px] bg-orange-500 '></div>
<div className='absolute w-[18px] h-[18px] rounded-[30px] mt-[350px] ml-[420px] bg-white '></div>
<div className='absolute w-[18px] h-[18px] rounded-[30px] mt-[350px] ml-[450px] bg-white '></div>
<img 
className='absolute w-[50px] h-[50.01px] ml-[900px] mt-[350px]'
src="/icon/in.svg" alt="nabta" />

<h1 className='absolute fond-bold text-3xl text-white mt-[640px] ml-[350px] ' >

  Why Gloora
</h1>


<h1 className='absolute fond-bold text-[20px] text-white mt-[720px] ml-[400px] ' >
unique formulations combine the finest natural
<br />
ingredients with advanced science to nourish,
<br />
 rejuvenate, and protect your skin, giving you a
 <br /> 
 radiant, healthy glow.
</h1>







<div className={averiaSerifLibre.className}>

<h1 className='absolute text-[100px] text-white mt-[590px] ml-[800px] ' >
89%
</h1>
</div>














</div>

     <img
   src="/img/why.png"
   alt='why'
   className='  w-[2498px] h-[1025px]'
  

   />



    






</div>


  )
}
