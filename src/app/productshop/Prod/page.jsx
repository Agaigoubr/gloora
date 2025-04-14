"use client";
import Image from 'next/image';
import cosmeticTinJar from './mobi.png';
import cosmeticTinJar2 from './mobi.png';
import screenshot1 from './mobi.png';
import screenshot2 from './mobi.png';
import screenshot3 from './mobi.png';

const RelatedProducts = () => {
  return (
    <div className="relative w-full min-h-[2000px]">
      {/* Related Products Title */}
      <h2 className="absolute left-1/2 -translate-x-1/2 top-[1415px] w-[226px] h-[36px] font-['PP_Neue_Montreal'] font-medium text-[30px] leading-[36px] text-[#F3A17C] text-center">
        Related Products
      </h2>

      {/* Navigation Arrows */}
      <div className="absolute w-[64px] h-[64px] left-[1458px] top-[1720px] rotate-180">
        <div className="absolute left-[56.25%] right-[31.25%] top-[66.67%] bottom-0 border-3 border-[#F3A17C] rotate-180"></div>
      </div>
      
      <div className="absolute w-[64px] h-[64px] left-[59px] top-[1720px] scale-y-[-1]">
        <div className="absolute left-[43.75%] right-[43.75%] top-[66.67%] bottom-0 border-3 border-[#F3A17C] scale-y-[-1]"></div>
      </div>

      {/* Product Cards */}
      <div className="absolute w-[280px] h-[333px] left-[146px] top-[1509px] bg-[#F7F7F7] rounded-[29px]">
        <div className="absolute w-[104px] h-[54px] left-[9px] top-[6px] bg-black rounded-[29px]">
          <span className="absolute left-[26px] top-[14px] font-['PP_Neue_Montreal'] font-medium text-[22px] leading-[26px] text-white">-52%</span>
        </div>
        <div className="absolute w-[261px] h-[187px] left-[16px] top-[76px]">
          <Image src={screenshot1} alt="Product" layout="fill" objectFit="contain" />
        </div>
        <span className="absolute left-[5px] top-[353px] font-['Averia_Serif_Libre'] font-normal text-[14px] leading-[17px] text-[#F18453]">ACCESSORIES</span>
        <span className="absolute left-[5px] top-[377px] font-['PP_Neue_Montreal'] font-medium text-[19px] leading-[23px] text-[#030303]">Gloora Bag for Meakup</span>
        <span className="absolute left-[5px] top-[399px] font-['PP_Neue_Montreal'] font-medium text-[19px] leading-[23px] text-black">$19.00</span>
        <span className="absolute left-[72px] top-[403px] font-['PP_Neue_Montreal'] font-medium text-[14px] leading-[17px] text-[#B7B7B7]">$30.00</span>
        
        {/* Color selection buttons */}
        <div className="absolute w-[43px] h-[43px] left-[24px] top-[307px] bg-white border border-[#FFB18E] rounded-full -rotate-90"></div>
        <div className="absolute w-[43px] h-[44px] left-[67px] top-[307px] bg-white border border-[#FFB18E] rounded-full -rotate-90"></div>
        <div className="absolute w-[28px] h-[28px] left-[75px] top-[272px]">
          <div className="absolute left-[8.33%] right-[8.34%] top-[33.33%] bottom-[12.5%] border border-[#F3A17C] border-1.5"></div>
          <div className="absolute left-[41.67%] right-[41.66%] top-[50%] bottom-[50%] border border-[#F3A17C] border-1.5"></div>
          <div className="absolute left-[27.08%] right-[27.09%] top-[12.5%] bottom-[54.17%] border border-[#F3A17C] border-1.5"></div>
        </div>
        <div className="absolute w-[43px] h-[43px] left-[111px] top-[307px] bg-white border border-[#FFB18E] rounded-full -rotate-90"></div>
        <div className="absolute w-[28px] h-[28px] left-[118px] top-[273px]">
          <div className="absolute left-[8.33%] right-[8.34%] top-[33.33%] bottom-[41.67%] border border-[#F3A17C] border-1.5"></div>
          <div className="absolute left-[62.5%] right-[31.25%] top-[56.25%] bottom-[33.33%] border border-[#F3A17C] border-1.5"></div>
          <div className="absolute left-[83.33%] right-[8.34%] top-[45.83%] bottom-[45.83%] border border-[#F3A17C] border-1.5"></div>
          <div className="absolute left-[8.33%] right-[83.34%] top-[45.83%] bottom-[45.83%] border border-[#F3A17C] border-1.5"></div>
          <div className="absolute left-[31.25%] right-[62.5%] top-[56.25%] bottom-[33.33%] border border-[#F3A17C] border-1.5"></div>
          <div className="absolute left-[12.04%] right-[86.64%] top-[65.01%] bottom-[34.34%] border border-[#F3A17C] border-1.5"></div>
        </div>
      </div>

      {/* Second Product Card */}
      <div className="absolute w-[280px] h-[333px] left-[461px] top-[1509px] bg-[#FCFCFC] rounded-[29px]">
        <div className="absolute w-[104px] h-[54px] left-[7px] top-[6px] bg-black rounded-[29px]">
          <span className="absolute left-[26px] top-[14px] font-['PP_Neue_Montreal'] font-medium text-[22px] leading-[26px] text-white">-26%</span>
        </div>
        <div className="absolute w-[263px] h-[213px] left-[8px] top-[79px]">
          <Image src={screenshot2} alt="Product" layout="fill" objectFit="contain" />
        </div>
        <span className="absolute left-[5px] top-[353px] font-['Averia_Serif_Libre'] font-normal text-[14px] leading-[17px] text-[#F18453]">FACE CARE</span>
        <span className="absolute left-[5px] top-[377px] font-['PP_Neue_Montreal'] font-medium text-[19px] leading-[23px] text-[#030303]">Winkle Remover</span>
        <span className="absolute left-[5px] top-[399px] font-['PP_Neue_Montreal'] font-medium text-[19px] leading-[23px] text-black">$19.00</span>
        <span className="absolute left-[72px] top-[403px] font-['PP_Neue_Montreal'] font-medium text-[14px] leading-[17px] text-[#B7B7B7]">$30.00</span>
      </div>

      {/* Third Product Card */}
      <div className="absolute w-[280px] h-[333px] left-[776px] top-[1509px] bg-[#F7F7F7] rounded-[29px]">
        <div className="absolute w-[104px] h-[54px] left-[7px] top-[6px] bg-black rounded-[29px]">
          <span className="absolute left-[26px] top-[14px] font-['PP_Neue_Montreal'] font-medium text-[22px] leading-[26px] text-white">-30%</span>
        </div>
        <div className="absolute w-[234px] h-[238px] left-[40px] top-[70px]">
          <Image src={screenshot3} alt="Product" layout="fill" objectFit="contain" />
        </div>
        <span className="absolute left-[5px] top-[353px] font-['Averia_Serif_Libre'] font-normal text-[14px] leading-[17px] text-[#F18453]">FACE CARE</span>
        <span className="absolute left-[5px] top-[377px] font-['PP_Neue_Montreal'] font-medium text-[19px] leading-[23px] text-[#030303]">Retinol Gloora</span>
        <span className="absolute left-[5px] top-[399px] font-['PP_Neue_Montreal'] font-medium text-[19px] leading-[23px] text-black">$19.00</span>
        <span className="absolute left-[72px] top-[403px] font-['PP_Neue_Montreal'] font-medium text-[14px] leading-[17px] text-[#B7B7B7]">$30.00</span>
      </div>

      {/* Fourth Product Card */}
      <div className="absolute w-[280px] h-[333px] left-[1091px] top-[1509px] bg-[#F7F7F7] rounded-[29px]">
        <div className="absolute w-[104px] h-[54px] left-[7px] top-[6px] bg-black rounded-[29px]">
          <span className="absolute left-[26px] top-[14px] font-['PP_Neue_Montreal'] font-medium text-[22px] leading-[26px] text-white">-12%</span>
        </div>
        <div className="absolute w-[146px] h-[150px] left-[62.78px] top-[116.25px] -rotate-[7.55deg]">
          <Image src={cosmeticTinJar} alt="Product" layout="fill" objectFit="contain" />
        </div>
        <div className="absolute w-[182px] h-[145px] left-[68.31px] top-[159.3px] -rotate-[2.93deg]">
          <Image src={cosmeticTinJar2} alt="Product" layout="fill" objectFit="contain" className="mix-blend-multiply" />
        </div>
        <span className="absolute left-[5px] top-[353px] font-['Averia_Serif_Libre'] font-normal text-[14px] leading-[17px] text-[#F18453]">FACE CARE</span>
        <span className="absolute left-[5px] top-[377px] font-['PP_Neue_Montreal'] font-medium text-[19px] leading-[23px] text-[#030303]">Budy Care</span>
        <span className="absolute left-[5px] top-[399px] font-['PP_Neue_Montreal'] font-medium text-[19px] leading-[23px] text-black">$19.00</span>
        <span className="absolute left-[72px] top-[403px] font-['PP_Neue_Montreal'] font-medium text-[14px] leading-[17px] text-[#B7B7B7]">$30.00</span>
      </div>
    </div>
  );
};

export default RelatedProducts;