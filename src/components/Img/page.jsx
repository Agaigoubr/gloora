import Image from "next/image";

export default function Page() {
  return (
    <div className="relative"> {/* العنصر الأب يجب أن يكون relative */}
      
      {/* الصورة الأولى (mobii.png) - ستكون في الخلفية */}
      <img
        src="/img/mobi.png" 
        alt="صورة الخلفية"
       
      />
      
      {/* الصورة الثانية (mobi.png) - ستكون فوق الأولى */}
      <img
        className="absolute top-[260px] left-[330px]"  /* تبدأ من أعلى الزاوية */
        src="/img/mobii.png" 
        alt="صورة المقدمة"
     
      />
      
    </div>
  );
}