"use claint";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';




export default function page() {
  return (

<div className="relative w-full  overflow-hidden">
  {/* Main product container */}
  <div className="absolute w-[709px] h-[483px] left-[calc(50%-354.5px+301.5px)] top-[857px] bg-[rgba(247,247,247,0.49)] rounded-[67px]"></div>

  {/* Price display */}
  <div className="absolute w-[122px] h-[46px] left-[1234px] top-[1238px] font-['PP_Neue_Montreal'] font-medium text-[38px] leading-[46px] text-[#F3A17C]">565.00</div>
  <div className="absolute w-[114px] h-[29px] left-[1108px] top-[1251px] font-['PP_Neue_Montreal'] font-medium text-[24px] leading-[29px] text-[#BDBDBD]">Total MAD:</div>

  {/* Product image section */}
  <div className="absolute w-[547px] h-[578px] left-[99px] top-[204px] bg-[#F7F7F7] rounded-[67px]">
    <div className="absolute w-[449px] h-[322px] left-[152px] top-[326px] bg-red-100"></div>
    
    {/* Image thumbnails */}
    <div className="absolute flex gap-4 left-[148px] top-[644px]">
      <div className="w-[79px] h-[94px] bg-red-100 border-2 border-[#E7E7E7] rounded-[100px]">
        <div className="w-[64px] h-[45px] mx-auto mt-[18px] bg-red-300 rounded-[110px]"></div>
      </div>
      <div className="w-[79px] h-[94px] bg-red-100 border-2 border-[#E7E7E7] rounded-[100px]">
        <div className="w-[64px] h-[45px] mx-auto mt-[18px] bg-red-300 rounded-[110px] rotate-[-90deg]"></div>
      </div>
      <div className="w-[79px] h-[94px] bg-red-100 border border-[#E7E7E7] rounded-[39.5px]"></div>
    </div>
    <div className="absolute w-[29px] h-[3px] left-[173px] top-[735px] border-[7px] border-[#F3A17C]"></div>
  </div>

  {/* Product info */}
  <div className="absolute left-[729px] top-[335px]">
    <div className="w-[95px] h-[17px] font-['Averia_Serif_Libre'] font-normal text-[14px] leading-[17px] text-[#F18453]">ACCESSORIES</div>
    <div className="w-[271px] h-[32px] mt-[17px] font-['PP_Neue_Montreal'] font-medium text-[27px] leading-[32px] text-[#030303]">Gloora Bag for Meakup</div>
    <div className="w-[102px] h-[19px] mt-[35px] font-['PP_Neue_Montreal'] font-medium text-[16px] leading-[19px] text-[#B7B7B7]">Ref: 00GBM12</div>
    
    <div className="flex items-end mt-[48px] gap-4">
      <div className="w-[178px] h-[72px] font-['PP_Neue_Montreal'] font-medium text-[60px] leading-[72px] text-[#F3A17C]">$19.00</div>
      <div className="w-[98px] h-[36px] mb-[9px] font-['PP_Neue_Montreal'] font-medium text-[30px] leading-[36px] text-[#B7B7B7]">$30.00</div>
    </div>
    
    <div className="absolute w-[488px] h-[57px] top-[237px] font-['Averia_Serif_Libre'] font-normal text-[27px] leading-[33px] text-[#979797]">
      Transform Your Skin Elegantly with Our Luxurious and Effective Skincare
    </div>
    
    <div className="absolute left-[0px] top-[367px] flex gap-[40px]">
      <div className="flex flex-row justify-center items-center py-[22px] px-[24px] gap-[40px] w-[206px] h-[80px] border-[3px] border-[#F3A17C] rounded-[100px]">
        <div className="w-[24px] h-[0px] border-[3px] border-[#F3A17C]"></div>
        <div className="w-[30px] h-[36px] font-['PP_Neue_Montreal'] font-medium text-[30px] leading-[36px] text-[#F3A17C]">01</div>
        <div className="relative w-[24px] h-[24px]">
          <div className="absolute w-[24px] h-[0px] left-[0px] top-[12px] border-[3px] border-[#F3A17C] rotate-[-90deg]"></div>
          <div className="absolute w-[24px] h-[0px] left-[0px] top-[12px] border-[3px] border-[#F3A17C]"></div>
        </div>
      </div>
      
      <div className="flex flex-row justify-center items-center py-[20px] px-[30px] gap-[40px] w-[237px] h-[79px] bg-[#F3A17C] rounded-[100px]">
        <div className="font-['PP_Neue_Montreal'] font-medium text-[25px] leading-[30px] text-white">Buy Now</div>
        <div className="relative w-[39px] h-[39px] bg-white rounded-full rotate-90">
          <div className="absolute left-[50%] right-[20%] top-[24%] border-[2.5px] border-[#F18453] rotate-90"></div>
          <div className="absolute left-[61%] right-[20%] top-[53%] border-[2.5px] border-[#F18453] rotate-90"></div>
        </div>
      </div>
    </div>
  </div>

  {/* In stock badge */}
  <div className="absolute flex justify-center items-center py-[8px] px-[14px] w-[104px] h-[36px] left-[1307px] top-[352px] bg-[#8FF30C] rounded-[100px]">
    <div className="font-['PP_Neue_Montreal'] font-medium text-[17px] leading-[20px] text-white">IN STOCK</div>
  </div>

  {/* Customer info section */}
  <div className="absolute w-[547px] h-[483px] left-[99px] top-[857px] bg-[rgba(247,247,247,0.49)] rounded-[67px]">
    <div className="absolute flex left-[148px] top-[920px] gap-4">
      <div className="flex justify-center items-center py-[16px] px-[24px] w-[159px] h-[52px] bg-black rounded-[100px]">
        <div className="font-['PP_Neue_Montreal'] font-medium text-[17px] leading-[20px] text-white">DESCRIPTION</div>
      </div>
      <div className="flex justify-center items-center py-[16px] px-[24px] w-[201px] h-[52px] bg-[#E7E7E7] rounded-[100px]">
        <div className="font-['PP_Neue_Montreal'] font-medium text-[17px] leading-[20px] text-white">ADDITIONAL INFOS</div>
      </div>
    </div>
    
    <div className="absolute w-[398px] h-[176px] left-[154px] top-[1020px] font-['PP_Neue_Montreal'] font-medium text-[22px] leading-[26px] text-black">
      Lorem ipsum dolor sit amet consectetur. In donec quis etiam molestie eleifend. Quam eu amet a in fringilla turpis etiam id. Amet neque duis morbi blandit nec. Commodo neque dignissim et amet pulvinar enim.
    </div>
  </div>

  {/* Form section */}
  <div className="absolute left-[760px] top-[920px]">
    <div className="font-['PP_Neue_Montreal'] font-medium text-[19px] leading-[23px] text-black">Nom Complet</div>
    <div className="w-[300px] h-[59px] mt-[21px] border border-[#E0E0E0] rounded-[100px]"></div>
    <div className="w-[66px] h-[19px] mt-[2px] ml-[28px] font-['PP_Neue_Montreal'] font-medium text-[16px] leading-[19px] text-[#DBD5D5]">Laila Rssi</div>
    
    <div className="mt-[56px] font-['PP_Neue_Montreal'] font-medium text-[19px] leading-[23px] text-black">Adresse</div>
    <div className="w-[300px] h-[59px] mt-[21px] border border-[#E0E0E0] rounded-[100px]"></div>
    <div className="w-[221px] h-[19px] mt-[2px] ml-[28px] font-['PP_Neue_Montreal'] font-medium text-[16px] leading-[19px] text-[#DBD5D5]">N12 Avenue Fountin Imm 12 P34</div>
  </div>

  <div className="absolute left-[1106px] top-[920px]">
    <div className="font-['PP_Neue_Montreal'] font-medium text-[19px] leading-[23px] text-black">Telephone</div>
    <div className="w-[256px] h-[59px] mt-[21px] border border-[#E0E0E0] rounded-[100px]"></div>
    <div className="w-[110px] h-[19px] mt-[2px] ml-[28px] font-['PP_Neue_Montreal'] font-medium text-[16px] leading-[19px] text-[#DBD5D5]">+3367868-988</div>
    
    <div className="mt-[134px] w-[183px] h-[23px] font-['PP_Neue_Montreal'] font-medium text-[19px] leading-[23px] text-black">Livraison Gratuite❤️🔥</div>
  </div>

  {/* Buy Now button at bottom */}
  <div className="absolute flex justify-center items-center py-[20px] px-[30px] w-[237px] h-[79px] left-[754px] top-[1210px] bg-[#F3A17C] rounded-[100px]">
    <div className="font-['PP_Neue_Montreal'] font-medium text-[25px] leading-[30px] text-white">Buy Now</div>
    <div className="relative w-[39px] h-[39px] ml-[40px]">
      <div className="absolute left-[8%] right-[8%] top-[33%] border-[2.5px] border-white"></div>
      <div className="absolute left-[41%] right-[41%] top-[50%] border-[2.5px] border-white"></div>
      <div className="absolute left-[27%] right-[27%] top-[12%] border-[2.5px] border-white"></div>
    </div>
  </div>

  {/* Related products title */}
  <div className="absolute w-[226px] h-[36px] left-[calc(50%-113px+3px)] top-[1415px] font-['PP_Neue_Montreal'] font-medium text-[30px] leading-[36px] text-[#F3A17C]">Related Products</div>
</div>
)
  }