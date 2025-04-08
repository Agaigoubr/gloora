import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from "react-icons/fi"; // أيقونة المينيو للموبايل
import { Averia_Serif_Libre } from "next/font/google";

const averiaSerifLibre = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

export default function Nav() {
  return (
    <>
      {/* Navbar خاص بالديسكتوب */}
      <div className={`hidden md:block ${averiaSerifLibre.className}`}>
        <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-4 z-10 mt-10">
          
          {/* Logo */}
          <div className="flex items-center ml-10">
            <Image src="/logor.svg" alt="Logo" width={120} height={40} />
          </div>

          {/* Navigation Links */}
          <div className="bg-white/60 px-6 py-2 rounded-full flex space-x-10">
            <Link href="/" className="text-black hover:text-red-400">Home</Link>
            <Link href="/product" className="text-black hover:text-red-400">Product</Link>
            <Link href="/about" className="text-black hover:text-red-400">About Us</Link>
          </div>

          {/* Icons & Contact Button */}
          <div className="flex items-center space-x-6 mr-10">
            <div className="relative">
              <Link href="/cart">
                <Image src="/haret.svg" alt="Cart" className="scale-125" width={30} height={30} />
              </Link>
              <span className="absolute -top-1 -right-1 bg-[#F3A17C] text-white text-xs rounded-full px-1">100</span>
            </div>

            <Link href="/favorites">
              <Image src="/klalb.svg" alt="Favorites" width={40} height={40} />
            </Link>

            <Link href="/contact">
              <button className="border border-black text-black px-4 py-1 rounded-full hover:bg-[#F3A17C]">
                Contact
              </button>
            </Link>
          </div>

        </nav>
      </div>

      {/* Navbar خاص بالموبايل */}
      <div className="block md:hidden fixed top-1 left-0 w-full  p-3 flex justify-between ">
      {/* Logo */}
      <Link href="/">
        <Image src="/logor.svg" alt="Logo" width={117} height={37} />
      </Link>

      {/* Icons */}
      <div className="flex items-center gap-3">
        <Link href="/">
          <Image src="/haret.svg" alt="Cart" className="scale-125" width={44} height={52} />
        </Link>
        <Link href="/">
          <Image src="/icon/men.svg" alt="User" className="scale-125" width={44} height={52} />
        </Link>
      </div>
    </div>
     
    
    </>
  );
}
