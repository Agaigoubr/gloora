import React from 'react'

export default function page() {
  return (
    <div className="relative min-h-screen">
  {/* Contact Us Heading */}
  <h2 className="absolute left-1/2 top-[205px] -translate-x-1/2 font-['PP_Neue_Montreal'] text-3xl font-medium text-[#F3A17C]">
    Contact Us
  </h2>

  {/* Section Title */}
  <p className="absolute left-1/2 top-[268px] w-[580px] -translate-x-1/2 text-center font-['Averia_Serif_Libre'] text-3xl leading-[36px]">
    Transform Your Skin Elegantly with Our Luxurious and Effective Skincare
  </p>

  {/* Form Section */}
  <div className="absolute left-[calc(50%-397.5px-301.5px)] top-[500px] h-[630px] w-[795px] rounded-[67px] bg-[rgba(247,247,247,0.49)]">
    {/* Form Content */}
    <div className="p-8">
      <h3 className="absolute left-[82px] top-[437px] font-['PP_Neue_Montreal'] text-2xl font-medium leading-[29px]">
        Concat Us
      </h3>

      {/* Form Fields */}
      <div className="mt-28 space-y-8">
        {/* Full Name */}
        <div className="relative">
          <label className="absolute left-[115px] top-[544px] font-['PP_Neue_Montreal'] text-[19px] font-medium leading-[23px]">
            Full Name
          </label>
          <input 
            type="text" 
            placeholder="Laila Rssi" 
            className="absolute left-[111px] top-[584px] h-[59px] w-[300px] rounded-[100px] border border-[#E0E0E0] px-4 font-['PP_Neue_Montreal'] text-base placeholder-[#DBD5D5]"
          />
        </div>

        {/* Phone Number */}
        <div className="relative">
          <label className="absolute left-[461px] top-[544px] font-['PP_Neue_Montreal'] text-[19px] font-medium leading-[23px]">
            Phone Number
          </label>
          <input 
            type="tel" 
            placeholder="+3367868-988" 
            className="absolute left-[466px] top-[584px] h-[59px] w-[336px] rounded-[100px] border border-[#E0E0E0] px-4 font-['PP_Neue_Montreal'] text-base placeholder-[#DBD5D5]"
          />
        </div>

        {/* Subject */}
        <div className="relative">
          <label className="absolute left-[115px] top-[681px] font-['PP_Neue_Montreal'] text-[19px] font-medium leading-[23px]">
            Subject
          </label>
          <input 
            type="text" 
            placeholder="lailarssi@gmail.com" 
            className="absolute left-[111px] top-[721px] h-[59px] w-[691px] rounded-[100px] border border-[#E0E0E0] px-4 font-['PP_Neue_Montreal'] text-base placeholder-[#DBD5D5]"
          />
        </div>

        {/* Message */}
        <div className="relative">
          <label className="absolute left-[115px] top-[818px] font-['PP_Neue_Montreal'] text-[19px] font-medium leading-[23px]">
            Message
          </label>
          <textarea 
            placeholder="Message" 
            className="absolute left-[108px] top-[858px] h-[218px] w-[694px] rounded-[37px] border border-[#E0E0E0] p-4 font-['PP_Neue_Montreal'] text-base placeholder-[#DBD5D5]"
          />
        </div>

        {/* Submit Button */}
        <button className="absolute left-[67px] top-[1185px] flex h-[70px] w-[223px] items-center justify-center gap-10 rounded-[100px] bg-[#F3A17C] px-[30px] py-[20px]">
          <span className="font-['PP_Neue_Montreal'] text-[25px] font-medium leading-[30px] text-white">
            Send Message
          </span>
        </button>
      </div>
    </div>
  </div>

  {/* Contact Info Section */}
  <div className="absolute left-[calc(50%-556px/2+411px)] top-[500px] h-[630px] w-[556px] rounded-[67px] border-2 border-[#F3F3F3] p-8">
    <h3 className="absolute left-[943px] top-[437px] font-['PP_Neue_Montreal'] text-2xl font-medium leading-[29px]">
      Contact Info
    </h3>

    {/* New York */}
    <div className="absolute left-[957px] top-[547px]">
      <h4 className="font-['Averia_Serif_Libre'] text-[25px] leading-[30px] text-center">
        NEW YORK
      </h4>
      <p className="mt-4 w-[448px] font-['PP_Neue_Montreal'] text-[22px] font-medium leading-[26px] text-[#B1B1B1]">
        I've been using Gloora skincare products for the past six months, and the transformation in my skin has been incredible! +3566789-789 +4564767-667 support@gloora.com
      </p>
    </div>

    {/* Morocco */}
    <div className="absolute left-[957px] top-[828px]">
      <h4 className="font-['Averia_Serif_Libre'] text-[25px] leading-[30px] text-center">
        Morocco
      </h4>
      <p className="mt-4 w-[448px] font-['PP_Neue_Montreal'] text-[22px] font-medium leading-[26px] text-[#B1B1B1]">
        I've been using Gloora skincare products for the past six months, and the transformation in my skin has been incredible! +21256768-889 +21288765-099 support@gloora.com
      </p>
    </div>
  </div>
</div>
  )
}
