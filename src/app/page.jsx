"use client";
import useSWR from 'swr';
import next from "next";
import Image from "next/image";
import Rilat from "@/components/Rilat/page";
import Home from "@/app/Home/page";
import Prodact from "@/components/Prodact/Page";
import Prodacto from "@/components/Prodacto/Page";
import Stor from "@/components/Stor/page"
import Why from "@/components/Why/page";
import { motion } from 'framer-motion';
import AboutTxt from "@/components/AboutTxt/page";
import Mobil from "@/components/Mobil/page";




export default function home() {
  return (
    <main>

<Home /> 

<Rilat/>
<div className="hidden  md:block">
<Prodact  />
<Prodacto />


<Stor />
<Stor />
</div>


<Why />

<AboutTxt/>

    </main>
    
  
  )
  }