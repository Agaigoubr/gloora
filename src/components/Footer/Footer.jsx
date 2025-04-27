import React from 'react';
import Image from 'next/image';
import { Averia_Serif_Libre } from "next/font/google";

const averiaSerifLibre = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

export default function Footer() {
  return (
    <div className="relative w-full bg-black">
      {/* Background Image */}
      <Image
        src="/img/footr.png"
        alt="Footer Background"
        width={1920}
        height={500}
        className="w-full h-auto object-cover"
      />
      
      {/* Container for all content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-5 md:p-8">
        {/* Top section with heading and copyright */}
        <div className="flex justify-between items-start">
          {/* Left Text */}
          <div className={`${averiaSerifLibre.className} text-white max-w-md md:max-w-xl`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
              Timeless Elegance,<br />
              Crafted for you.
            </h1>
            
            {/* Client satisfaction positioned directly below heading */}
            <div className="flex items-center mt-6 md:mt-8">
              {/* Smile Icon */}
              <Image
                src="/icon/smail.svg"
                alt="Smile Icon"
                width={24}
                height={24}
                className="w-6 h-6 mr-2"
              />
              
              {/* Satisfaction text */}
              <span className="text-white text-base md:text-lg">
                100% Client Satisfaction
              </span>
            </div>
          </div>
          
          {/* Copyright */}
          <p className="text-white text-xs md:text-sm">
            © 2024 All right reserved
          </p>
        </div>
        
        {/* Bottom section */}
        <div className="mt-auto">
          {/* Newsletter section */}
          <h2 className="text-white text-sm md:text-base mb-2">
            Get offers and news
          </h2>
          
          {/* Email input */}
          <div className="relative w-full max-w-xs">
            <input
              type="email"
              placeholder="your email@example.com"
              className="w-full h-10 rounded-full pl-4 pr-16 text-sm focus:outline-none bg-white"
            />
            <button className="absolute top-[3px] right-[3px] bg-[#F4AD8C] w-12 h-9 rounded-full flex items-center justify-center">
              <Image
                src="/icon/sahm.svg"
                alt="Arrow Icon"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>
        
       {/* Logo Bottom Right */}
       <div className="absolute bottom-5 right-16 md:bottom-8 md:-right-15">
  <Image
    src="/logo-footer.png"
    alt="GLOORA"
    width={240}
    height={96}
    className="h-auto w-auto"
  />
</div>
      </div>
    </div>
  );
}