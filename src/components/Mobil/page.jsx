export default function BestSellersSection() {
  return (
    <div className="relative w-full h-[5000px] bg-black overflow-hidden">
      {/* image 962 */}
      <div className="absolute w-[1726px] h-[1487px] left-[-107px] top-[3521px] bg-[url('/image.png')] bg-cover"></div>

      {/* image 961 */}
      <div className="absolute w-[915px] h-[1178px] left-[404px] top-[3771px] bg-[url('/image.png')] bg-cover"></div>

      {/* Rectangle 728 */}
      <div className="absolute w-[447px] h-[969px] left-[535px] top-[3796px] 
        bg-gradient-to-b from-[rgba(255,254,254,0.38)] via-transparent to-[rgba(255,254,254,0.38)]
        backdrop-blur-[8px] rounded-[61px]"></div>

      {/* image 1077 */}
      <div className="absolute w-[141px] h-[43px] left-[686px] top-[3810px] bg-[url('/image.png')] bg-cover rounded-[60px]"></div>

      {/* Frame 1763 */}
      <div className="absolute w-[447px] h-[267px] left-[535px] top-[4391px]">
        {/* محتوى إضافي هنا لو فيه داخل الفريم */}
      </div>

      {/* Rectangle 733 */}
      <div className="absolute w-[372px] h-[62px] left-[570px] top-[4658px]
        bg-gradient-to-b from-[rgba(255,255,255,0.11)] to-[rgba(0,0,0,0.11)]
        shadow-[inset_0px_4px_30px_9px_rgba(0,0,0,0.08)]
        backdrop-blur-[20px] rounded-full box-border"></div>

      {/* Gloora Best Sellers */}
      <div className="absolute w-[214px] h-[29px] left-[649px] top-[4674px]
        text-white font-medium text-[24px] leading-[29px] font-['PP_Neue_Montreal']">
        Gloora Best Sellers
      </div>

      {/* Frame Icon */}
      <div className="absolute w-[27px] h-[24px] left-[543px] top-[4536px]">
        {/* ممكن تحط أيقونة أو صورة */}
      </div>
    </div>
  );
}
