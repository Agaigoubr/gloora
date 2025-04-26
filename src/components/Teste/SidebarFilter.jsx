// components/Teste/page.jsx
"use client";
import React from "react";

export default function SidebarFilter({ value, promotion, setValue, setPromotion }) {
  const min = 0;
  const max = 200;

  return (
    <div className="w-[371px] p-6 bg-[#F7F7F7] rounded-[50px]">
      <p className="font-Neue font-medium text-lg mb-6">Filter by price</p>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <p>${value}</p>

      <p className="font-Neue font-medium text-lg mt-8 mb-6">Filter by promotions</p>
      <input
        type="range"
        min={min}
        max={max}
        value={promotion}
        onChange={(e) => setPromotion(Number(e.target.value))}
      />
      <p>{promotion}%</p>
    </div>
  );
}
