"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Averia_Serif_Libre } from "next/font/google";

const averiaSerifLibre = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

export default function Nav() {
  const pathname = usePathname(); // 👈 récupérer le chemin

  return (
    <>
      {/* Navbar Desktop */}
      <div className={`hidden md:block ${averiaSerifLibre.className}`}>
        <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-4 z-10 mt-10">

          {/* Logo */}
          <div className="flex items-center ml-10">
            <Image src="/logor.svg" alt="Logo" width={160} height={60} /> {/* Agrandi */}
          </div>

          {/* Navigation Links */}
          <div className="bg-[#F6F6F6] px-8 py-2 rounded-full flex space-x-10">
            <Link href="/" className={`${pathname === '/' ? 'text-[#F3A17C] font-semibold' : 'text-black hover:text-[#F3A17C]'}`}>Home</Link>

            <Link href="/product" className={`${pathname === '/product' ? 'text-[#F3A17C] font-semibold' : 'text-black hover:text-[#F3A17C]'}`}>Product</Link>

            <Link href="/about" className={`${pathname === '/about' ? 'text-[#F3A17C] font-semibold' : 'text-black hover:text-[#F3A17C]'}`}>About Us</Link>
          </div>

          {/* Icons & Contact Button */}
          <div className="flex items-center space-x-6 mr-10">
            {/* Panier */}
<div className="relative">
  <Link href="/cart">
    <Image src="/panier.svg" alt="Cart" width={30} height={30} />
    {/* Badge seulement si nécessaire */}
    <div className="absolute -top-2 -right-2 bg-[#F3A17C] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
      0
    </div>
  </Link>
</div>

            {/* Favoris */}
            <Link href="/favorites">
              <Image src="/klalb.svg" alt="Favorites" width={25} height={25} />
            </Link>

            {/* Contact */}
            <Link href="/contact">
              <button className="border border-black text-black px-5 py-1 rounded-full hover:bg-[#F3A17C] transition-colors">
                Contact
              </button>
            </Link>
          </div>

        </nav>
      </div>

      {/* Navbar Mobile */}
      <div className="block md:hidden top-1 left-1 w-full p-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            className="w-[160px] h-auto"
            src="/logor.svg"
            alt="Logo"
            width={160}
            height={60}
          />
        </Link>

        {/* Icons Mobile */}
        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Image src="/panier.svg" alt="Cart" width={30} height={30} />
          </Link>
          <Link href="/user">
            <Image src="/icon/men.svg" alt="User" width={30} height={30} />
          </Link>
        </div>
      </div>
    </>
  );
}
