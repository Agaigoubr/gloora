"use client";

import Image from 'next/image';
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { Averia_Serif_Libre } from "next/font/google";
import { motion } from 'framer-motion';
import NavHome from '@/components/Nav/Nav';
import Anim from "@/components/Anim/page";
import { GoX } from "react-icons/go";
import Pagemobil from "@/mobil/Pagemobil/page";
import { useRef, useState, useEffect } from 'react';

const averiaSerifLibre = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

export default function Home() {
  const videoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const carouselRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showOverlaye, setShowOverlaye] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  
  const carouselImages = [
    "/img/home.svg",
    "/img/home.svg",
    
  ];

  // Auto-scroll functionality for desktop carousel
  useEffect(() => {
    let intervalId;
    if (autoScroll) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change image every 5 seconds
    }
    
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoScroll, carouselImages.length]);

  // Auto-scroll functionality for mobile carousel
  useEffect(() => {
    let mobileIntervalId;
    if (autoScroll && carouselRef.current && showOverlay) {
      mobileIntervalId = setInterval(() => {
        carouselRef.current.scrollBy({
          left: 150, // Scroll distance
          behavior: 'smooth'
        });
        
        // Check if we're at the end of the carousel, if so, scroll back to start
        const isAtEnd = carouselRef.current.scrollLeft + carouselRef.current.clientWidth >= 
                        carouselRef.current.scrollWidth - 50;
        
        if (isAtEnd) {
          carouselRef.current.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        }
      }, 3000); // Scroll every 3 seconds
    }
    
    return () => {
      if (mobileIntervalId) {
        clearInterval(mobileIntervalId);
      }
    };
  }, [autoScroll, showOverlay]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const elem = videoRef.current;
    if (!elem) return;
  
    if (!document.fullscreenElement) {
      elem.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  // Functions for manual scrolling carousel
  const scrollPrev = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
    
    // Pause auto-scroll temporarily when manually navigating
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000); // Resume auto-scroll after 10 seconds
  };

  const scrollNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
    
    // Pause auto-scroll temporarily when manually navigating
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000); // Resume auto-scroll after 10 seconds
  };

  // Manual mobile carousel scroll functionality
  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      
      // Pause auto-scroll temporarily when manually navigating
      setAutoScroll(false);
      setTimeout(() => setAutoScroll(true), 10000); // Resume auto-scroll after 10 seconds
    }
  };

  return (
    <div className="relative">
      {/* Vue Desktop */}
      <div className="hidden md:block mt-6 ml-4 mr-4 relative">
        <Image 
          src={carouselImages[currentImageIndex]} 
          alt="image nature" 
          width={1200} 
          height={800} 
          className="w-full h-auto transition-opacity duration-500"
          priority
        />

        <div className={`${averiaSerifLibre.className} absolute top-[50%] left-[5%] z-10 text-white`}>
          <h1 className="leading-tight text-[60px]">Unlock Your Skin's</h1>
          <h1 className="leading-tight text-[60px]">Natural Beauty</h1>
          <h2 className="text-4xl mt-4">Discover the Secret to Flawless Skin</h2>
        </div>

        <div className="absolute flex items-center gap-4 bottom-10 left-20 z-10">
          <button 
            onClick={scrollPrev}
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-transparent hover:bg-gray-200 transition"
          >
            <IoIosArrowDropleft className="text-white text-3xl" />
          </button>
          <button 
            onClick={scrollNext}
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-transparent hover:bg-gray-200 transition"
          >
            <IoIosArrowDropright className="text-white text-3xl" />
          </button>
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 rounded-full transition-all ${
                idx === currentImageIndex ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
              onClick={() => {
                setCurrentImageIndex(idx);
                setAutoScroll(false);
                setTimeout(() => setAutoScroll(true), 10000);
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="absolute left-[990px] top-[425px] w-[317px] h-[433px] rounded-[30px] bg-white p-4 shadow-lg z-10">
          <div className={averiaSerifLibre.className}>
            <button className="absolute rounded-full w-[140px] h-[50px] left-3 top-4 text-white bg-black">Skin Care</button>
            <button className="absolute rounded-full w-[140px] h-[50px] left-40 top-4 text-black bg-red-100">Face Care</button>
          </div>
          <h1 className="absolute left-[10px] top-[80px] text-black text-3xl">Get -50% Off</h1>
          <h1 className="absolute left-[10px] top-[120px] text-[#F3A17C] text-xl">Gloora Pack</h1>
          <img className="absolute left-[4px] top-[150px]" src="/img/skin.png" alt="img" />
          <Anim />
          <button onClick={() => window.location.href = "/productshop"} className="transition-colors bg-[#f3a17c] hover:bg-primary/90 text-white font-medium text-[15px] flex items-center justify-center gap-[7px] w-[127px] h-[50px] px-2.5 py-[9px] rounded-full shadow-[inset_0px_12px_12px_#ce5c29] absolute top-[360px] left-[90px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none">Buy Now 
            <Image className="w-[27px] h-[27px]" width={27} height={27} alt="Frame" src="/icon/shop.svg"/>      
          </button>      
        </div>

        {/* Premier lecteur vidéo avec contrôles personnalisés */}
        <div className="absolute rounded-[50px] left-[730px] top-[425px] w-[256.01px] h-[433px] mr-10 z-10 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            disablePictureInPicture
  controlsList="nodownload nofullscreen noremoteplayback"
  className="w-full h-auto rounded-lg"
            src="/videos/1r.mp4"
          />

          {/* Bouton play/pause invisibe */}
          <div className="absolute inset-0 flex items-center justify-center">
          <button
  onClick={togglePlay}
  className="absolute w-20 h-20 opacity-0"
  aria-label="Play/Pause"
>
  {/* Icônes gardées pour accessibilité, mais elles sont invisibles */}
  {isPlaying ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
      <path d="M8 5v14l11-7z" />
    </svg>
  )}
</button>
{/* Icône d’agrandissement visible dans le coin */}
<button
  onClick={toggleFullscreen}
  className="absolute top-2 right-2 bg-white/30 hover:bg-white/40 p-1 rounded-full"
  aria-label="Agrandir"
>
  {/* Icône Fullscreen */}
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <polyline points="15 3 21 3 21 9" />
  <line x1="21" y1="3" x2="14" y2="10" />
  <polyline points="9 21 3 21 3 15" />
  <line x1="3" y1="21" x2="10" y2="14" />
</svg>
</button>
          </div>

          {/* Bouton mute/unmute en bas à droite */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 bg-white/30 backdrop-blur-sm rounded-full p-2 transition-opacity hover:bg-white/40"
            aria-label="Mute/Unmute"
          >
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </button>
        </div>
      </div>

      

      {/* Vue Mobile  ==> a modifier */} 
      <div className="block md:hidden relative">
        <Image className="w-[368px] h-[774px] mt-[10px] ml-[10px]" src="/img/homemobil.svg" alt="mobil" width={368} height={774} />

        <div className={`${averiaSerifLibre.className} absolute top-[15%] left-[5%] z-10 text-white`}>
          <h1 className="font-bold leading-tight text-[27px]">Unlock Your Skin's</h1>
          <h1 className="font-bold leading-tight text-[27px]">Natural Beauty</h1>
          <h2 className="text-[20px] mt-3">Discover the Secret to Flawless Skin</h2>

          {/* Video avec icône de lecture au centre */}
          <div className="absolute mt-[200px] ml-[20px] rounded-[40px] w-[81px] h-[137px] overflow-hidden">
            <video 
              ref={mobileVideoRef}
              autoPlay
              loop
              muted
              className='w-full h-full object-cover'
              src="/videos/1r.mp4" 
            />
            
            {/* Icône de lecture au centre */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/30 backdrop-blur-sm rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className='bg-amber-500 absolute rounded-[40px] mt-[370px] ml-[20px] w-[81px] h-[137px]'></div>
        </div>
       
        <button className="absolute rounded-[30px] bg-black w-[90px] h-[35px] left-[170px] top-[480px]">Skin Care</button>
        <button className="absolute rounded-[30px] bg-white w-[90px] h-[35px] left-[270px] top-[480px]">Face Care</button>

        <div className="absolute rounded-[30px] bg-white w-[191px] h-[223px] left-[170px] top-[520px]">
          <h1 className="absolute text-[20px] top-[10px] left-[30px]">Get -50% Off</h1>
          <h1 className="absolute text-[16px] text-[#F3A17C] top-[30px] left-[30px]">Gloora Pack</h1>
          <Image
            className='absolute mt-[50px] ml-[10px] rounded-[30px] w-[179px] h-[159px]'
            src="/img/mobil/skinm.png" 
            alt="skin" 
            width={179} 
            height={159} 
          />

          <button onClick={() => setShowOverlay(true)} className="absolute rounded-[30px] text-[12px] bg-[#F3A17C] w-[95px] h-[39px] left-[40px] top-[170px] text-white">
            <div className="relative flex items-center">
              <h1 className="mr-3 text-[12px] font-semibold">Buy Now</h1>
              <Image className="ml-1 w-6 h-6" src="/icon/shop.svg" alt="Shop Icon" width={24} height={24} />
            </div>
          </button>
        </div>

        {showOverlay && (
          <div className="fixed inset-0 flex bg-black/50 justify-center items-center z-50">
            <button 
              className="absolute top-[5px] right-4 p-2 rounded-full text-white hover:bg-glass transition"
              onClick={() => setShowOverlay(false)}
            >
              <GoX className="w-8 h-8" />
            </button>
       
            <button className='absolute mb-[490px] mr-[200px] bg-black rounded-[40px] w-[104px] h-[54px] text-white'>-66!</button>

            <h1 className='absolute text-[18px] mt-[500px] mr-[95px] text-[#3C3C3C]'>Winkle Remover + Retinol</h1>
            <h1 className='absolute fond-bold text-[24px] mt-[550px] mr-[255px] text-black'>$19.00</h1>

            <button className='absolute bg-[#F3A17C] w-[115px] h-[45px] rounded-[40px] mt-[550px] ml-[220px] text-white'>Buy Now</button>

            <Image src="/img/mobil/test1.png" className="p-2 py-[30px] rounded-[30px] w-[374px] h-[707px]" width={374} height={707} alt="image produit" />

            <div 
              ref={carouselRef} 
              className="flex overflow-x-auto scroll-smooth scrollbar-hide w-[440px] mt-[200px] ml-[0px] space-x-3 max-w-6xl mx-auto p-4 absolute"
            >
              {[...Array(8)].map((_, index) => (
                <div key={index} className="flex-shrink-0 rounded-[40px] bg-white w-[149px] h-[205px]">
                  <Image 
                    className="mt-[20px] ml-[40px]"
                    src="/img/test.png" 
                    alt="test" 
                    width={70} 
                    height={70} 
                  />

                  <p className="text-[#D0D0D0] text-[20px] absolute ml-[60px]">SPF</p>

                  <Image 
                    className="mt-[0px] ml-[20px]"
                    src="/img/icontest.png" 
                    alt="test" 
                    width={100} 
                    height={30} 
                  />

                  <h1 className="text-black ml-[20px] text-[15px]">Paula's Choice</h1>
                  <h1 className="text-black ml-[20px] text-[15px]">Skin Perfecting</h1>
                </div>
              ))}
            </div>
            
            {/* Navigation buttons for mobile carousel */}
            <div className="absolute bottom-10 left-4 flex items-center gap-4 z-50">
              <button 
                onClick={() => scrollCarousel('left')}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-transparent"
              >
                <IoIosArrowDropleft className="text-white text-2xl" />
              </button>
              <button 
                onClick={() => scrollCarousel('right')}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-transparent"
              >
                <IoIosArrowDropright className="text-white text-2xl" />
              </button>
            </div>
          </div>
        )}

        <button
          className='bg-red-300 absolute mb-[400px] h-[200px] w-[200px] rounded-[40px]'
          onClick={() => setShowOverlaye(true)}>
          test button page 3
        </button>
        
        {showOverlaye && <Pagemobil />}
      </div>
    </div>
  );
}