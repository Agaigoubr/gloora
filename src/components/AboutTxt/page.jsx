import React from 'react'
import Image from 'next/image'
import { Averia_Serif_Libre } from "next/font/google";


const averiaSerifLibre = Averia_Serif_Libre({
    subsets: ["latin"],
    weight: ["300", "400", "700"], // الأوزان لي بغيت
    style: ["normal", "italic"],
  });
  




export default function AboutTxt() {
  return (
    <div className='hidden md:block bg-white w-[1512px] h-[700px]'>
        <h1 className='absolute fond-bold text-3xl text-[#F4AD8C] ml-[200px] mt-[120px]'>
            About Us
            </h1>

            


            <div className={averiaSerifLibre.className}>
        <h1 className='absolute fond-bold text-6xl text-[#F4AD8C] ml-[200px] mt-[170px]'>
        We Are Gloora Cosmetic
            </h1>

             </div>

             <h1 className='absolute fond-bold text-5xl text-black ml-[200px] mt-[320px]'>
             Lorem ipsum dolor sit amet consectetur. In donec 
             <br />
             quis etiam molestie eleifend. Quam eu amet a in
             <br />
              fringilla turpis etiam id. Amet neque duis morbi 
              <br />
              blandit nec. Commodo neque dignissim et amet
              <br />
               pulvinar enim.
          

            </h1>





            <img 
            className=' absolute ml-[860px] mt-[150px]'
            src="/img/scrin/img1.png"
             alt="img1"
              />

<img 
            className=' absolute ml-[1200px] mt-[390px]'
            src="/img/scrin/img2.png"
             alt="img2"
              />


<img 
            className=' absolute ml-[550px] mt-[480px]'
            src="/img/scrin/img3.png"
             alt="img3"
              />
     



    </div>
    )
  }