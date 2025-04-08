import React from 'react'
import Image from 'next/image'
import { Averia_Serif_Libre } from "next/font/google";



const averiaSerifLibre = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // الأوزان لي بغيت
  style: ["normal", "italic"],
});




export default function Page() {
  return (
    <div className="hidden md:block relative">

<img 
        src="/logor.svg" 
        alt="Logo" 
        
        className='absolute w-[120px] h-[40px] left-[1070px] mt-[540px]'
        />

      <Image
        src="/img/footr.png"
        alt="Footer Image"
        width={1489}
        height={706}
        className="w-full h-auto"
        
      />



<div className={averiaSerifLibre.className}>
      <h1 className="absolute top-[50px] left-[50px] text-white text-[84px]">
      Timeless Elegance,
      <br />
      Crafted for you.
      </h1>

      


      </div>



      <div className="">
      <h1 className="absolute top-[100px] left-[1070px] text-white text-[20px]">
      © 2024 All right reserved      
      </h1>




      </div>


   

      <div className={averiaSerifLibre.className}>
      <h1 className="absolute top-[330px] left-[120px] text-white text-[30px]">
      100% Client Satisfaction
            </h1>
      </div>
        
     

     <img 
     className='absolute top-[325px] left-[60px] w-[50px] h-[50px]'
     src="/icon/smail.svg" 
     alt="smail" 
     />



<div >
      <h1 className="absolute top-[490px] left-[85px] text-white text-[25px]">
      Get offers and news
      
                  </h1>


<div className='bg-white absolute  rounded-[30px]  top-[540px] left-[80px] w-[325px] h-[57px]'>

<div className='bg-[#F4AD8C]  rounded-[30px] ml-[230px] mt-[7px] w-[87px] h-[42px]' >
     <img 
     className='absolute w-[40px] h-[40px] ml-[40px]'
     src="/icon/sahm.svg" 
     alt="shm" />
    

</div>

</div>





      </div>






    </div>
  )
}
