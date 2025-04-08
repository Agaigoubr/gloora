
import React from 'react'
import Image from 'next/image'
import { Averia_Serif_Libre } from "next/font/google";
import Nomtext from '@/comabout/Nomtext/page';
import Whyabout from '@/comabout/Nomtext/Whyabout/page';

const averiaSerifLibre = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // الأوزان لي بغيت
  style: ["normal", "italic"],
});


export default function About() {
  return (
   
<div className='bg-white w-[1400px] h-[5400px] '>



<img
className=' absolute mt-[120px]  ' 
src="about/about.png" 
alt="about" />
  

  <img
className=' absolute mt-[770px] w-[841px] h-[588px] ' 
src="about/about2.png" 
alt="about" />





<h1 className=' absolute text-white text-2xl mt-[200px]  ml-[1100px]' >
Who we are ?
</h1>






<div className={averiaSerifLibre.className}>

<h1 className=' absolute text-white text-5xl mt-[280px]  ml-[900px]' >
Transform Your Skin Elegantly
<br />
 with Our Luxurious and Effective
 <br />
  Skincare
</h1>
</div>






<h1 className=' absolute text-white text-6xl mt-[620px]  ml-[900px]' >
Get -50% Off 
</h1>





< Nomtext/>
< Whyabout />
</div>



  
  )
}