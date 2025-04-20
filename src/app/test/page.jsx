// components/AnimatedVideoGrid.jsx
'use client';

import { motion } from 'framer-motion';
import React from 'react'

export default function page() {
  return (
    <div className="relative">
    {/* Screenshot 2024-12-14 at 20.06.39 1 */}
    <video 
      className="absolute w-[220px] h-[399px] left-[1268px] top-[1458px] rounded-[27px] object-cover"
      src="/videos/1r.mp4"
      autoPlay
      loop
      muted
      playsInline
    ></video>
  
    {/* Screenshot 2024-12-14 at 20.01.16 1 */}
    <video 
      className="absolute w-[437px] h-[788px] left-[538px] top-[1389px] rounded-[40px] object-cover"
      src="/videos/1r.mp4"
      autoPlay
      loop
      muted
      playsInline
    ></video>
  
    {/* Frame (rotated arrow) - Keeping as original since it's not an image */}
    <div className="absolute w-[36px] h-[36px] left-[934px] top-[2135px] rotate-180">
      <div className="absolute left-[66.67%] right-[-16.67%] top-[79.17%] bottom-[-37.5%] border-2 border-white rotate-180"></div>
      <div className="absolute left-[83.33%] right-[16.67%] top-[83.33%] bottom-[-50%] border-2 border-white rotate-180"></div>
    </div>
  
    {/* Frame (plus sign) - Keeping as original since it's not an image */}
    <div className="absolute w-[36px] h-[36px] left-[581px] top-[2099px]">
      <div className="absolute left-[8.33%] right-[41.67%] top-[16.67%] bottom-[16.67%] border-2 border-white"></div>
      <div className="absolute left-[75%] right-[8.33%] top-[41.67%] bottom-[41.67%] border-2 border-white"></div>
    </div>
  
    {/* Screenshot 2024-12-14 at 20.03.16 1 */}
    <video 
      className="absolute w-[220px] h-[396px] left-[1011px] top-[1267px] rounded-[27px] object-cover"
      src="/videos/1r.mp4"
      autoPlay
      loop
      muted
      playsInline
    ></video>
  
    {/* Screenshot 2024-12-14 at 20.03.44 1 */}
    <video 
      className="absolute w-[220px] h-[405px] left-[25px] top-[1946px] rounded-[27px] object-cover"
      src="/videos/1r.mp4"
      autoPlay
      loop
      muted
      playsInline
    ></video>
  
    {/* Screenshot 2024-12-14 at 20.04.16 1 */}
    <video 
      className="absolute w-[220px] h-[398px] left-[1011px] top-[2151px] rounded-[27px] object-cover"
      src="/videos/1r.mp4"
      autoPlay
      loop
      muted
      playsInline
    ></video>
  
    {/* Screenshot 2024-12-14 at 20.04.23 1 */}
    <video 
      className="absolute w-[220px] h-[400px] left-[282px] top-[1619px] rounded-[27px] object-cover"
      src="/videos/1r.mp4"
      autoPlay
      loop
      muted
      playsInline
    ></video>
  
    {/* Screenshot 2024-12-14 at 20.05.04 1 */}
    <video 
      className="absolute w-[220px] h-[402px] left-[1011px] top-[1706px] rounded-[27px] object-cover"
      src="/videos/1r.mp4"
      autoPlay
      loop
      muted
      playsInline
    ></video>
  
    {/* Screenshot 2024-12-14 at 20.05.47 1 */}
    <video 
      className="absolute w-[220px] h-[401px] left-[282px] top-[2058px] rounded-[27px] object-cover"
      src="/videos/1r.mp4"
      autoPlay
      loop
      muted
      playsInline
    ></video>
  
    {/* Screenshot 2024-12-14 at 20.07.03 1 */}
    <video 
      className="absolute w-[220px] h-[411px] left-[1268px] top-[1902px] rounded-[27px] object-cover"
      src="/videos/1r.mp4"
      autoPlay
      loop
      muted
      playsInline
    ></video>
  
    {/* Screenshot 2024-12-14 at 20.08.46 1 */}
    <video 
      className="absolute w-[220px] h-[398px] left-[282px] top-[1182px] rounded-[27px] object-cover"
      src="/videos/1r.mp4"
      autoPlay
      loop
      muted
      playsInline
    ></video>
  
    {/* Screenshot 2024-12-14 at 20.10.49 1 */}
    <video 
      className="absolute w-[220px] h-[404px] left-[25px] top-[1484px] rounded-[27px] object-cover"
      src="/videos/1r.mp4"
      autoPlay
      loop
      muted
      playsInline
    ></video>
  </div>
  )
}
