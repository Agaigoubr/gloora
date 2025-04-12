import React from 'react';

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-white p-8 font-['PP_Neue_Montreal']">
      {/* Header */}
      <div className="relative mb-16 text-center">
        <h1 className="mx-auto text-[30px] font-medium leading-[36px] text-[#F3A17C]">
          Checkout Your Order
        </h1>
      </div>

      {/* Progress Steps */}
      <div className="relative mb-20 flex justify-center">
        {/* Step 1 - Select Product */}
        <div className="relative mr-32">
          <div className="h-[176px] w-[61px] rotate-[-90deg] rounded-[100px] bg-[#FFB18E] border border-white"></div>
          <div className="absolute left-[26px] top-[18px] text-[19px] font-medium leading-[23px] text-white">
            Select Product
          </div>
          <div className="absolute left-[149px] top-[-12px] h-[35px] w-[35px] rounded-full bg-[#8FF30C]"></div>
        </div>

        {/* Step 2 - Add Infos (current step) */}
        <div className="relative mr-32">
          <div className="h-[176px] w-[61px] rotate-[-90deg] rounded-[100px] bg-white border border-[#FFB18E]"></div>
          <div className="absolute left-[50%] top-[18px] translate-x-[-50%] text-[19px] font-medium leading-[23px] text-black">
            Add Infos
          </div>
          <div className="absolute left-[149px] top-[-12px] h-[35px] w-[35px] rounded-full bg-[#EAFFCF]"></div>
        </div>

        {/* Step 3 - Payed Order */}
        <div className="relative">
          <div className="h-[176px] w-[61px] rotate-[-90deg] rounded-[100px] bg-white border border-[#F1F1F1]"></div>
          <div className="absolute left-[50%] top-[18px] translate-x-[-50%] text-[19px] font-medium leading-[23px] text-[#E3DDDD]">
            Payed Order
          </div>
          <div className="absolute left-[149px] top-[-12px] h-[35px] w-[35px] rounded-full bg-[#EAFFCF]"></div>
        </div>

        {/* Connector lines */}
        <div className="absolute left-[550px] top-[324px] w-[84.5px] border border-[#F3A17C]"></div>
        <div className="absolute left-[874px] top-[324px] w-[84.5px] border border-[#F1F1F1]"></div>
      </div>

      {/* Main Content */}
      <div className="flex gap-8">
        {/* Left Column */}
        <div className="flex-1">
          {/* Delivery Information */}
          <div className="mb-12">
            <h2 className="mb-8 text-[24px] font-medium leading-[29px]">Delivery Information</h2>
            
            <div className="rounded-[67px] bg-[rgba(247,247,247,0.49)] p-8">
              {/* Name and Phone */}
              <div className="mb-8 flex gap-8">
                <div className="flex-1">
                  <label className="block text-[19px] font-medium leading-[23px]">Full Name</label>
                  <div className="mt-2 h-[59px] w-full rounded-[100px] border border-[#E0E0E0] p-4">
                    <span className="text-[16px] leading-[19px] text-[#DBD5D5]">Lula Risi</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <label className="block text-[19px] font-medium leading-[23px]">Phone Number</label>
                  <div className="mt-2 h-[59px] w-full rounded-[100px] border border-[#E0E0E0] p-4">
                    <span className="text-[16px] leading-[19px] text-[#DBD5D5]">+3307885-988</span>
                  </div>
                </div>
              </div>
              
              {/* Address */}
              <div>
                <label className="block text-[19px] font-medium leading-[23px]">Address</label>
                <div className="mt-2 h-[59px] w-full rounded-[100px] border border-[#E0E0E0] p-4">
                  <span className="text-[16px] leading-[19px] text-[#DBD5D5]">N12 Avenue Fourth Inm 12 P34</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h2 className="mb-8 text-[24px] font-medium leading-[29px]">Payment Method</h2>
            
            <div className="rounded-[67px] bg-[rgba(247,247,247,0.49)] p-8">
              <div className="flex gap-8">
                {/* Cash On Delivery (selected) */}
                <button className="flex items-center gap-2 rounded-[100px] bg-black p-3 px-4 text-white">
                  <div className="relative h-[35px] w-[35px] rounded-full bg-[#F3A17C]">
                    <div className="absolute left-[9.48%] right-[83.89%] top-[42.11%] bottom-[40.35%] border-2 border-white"></div>
                  </div>
                  <span className="text-[19px] font-medium leading-[23px]">Cash On Delivery</span>
                </button>
                
                {/* Online Payment */}
                <button className="flex items-center gap-2 rounded-[100px] bg-[#EDECEC] p-3 px-4 text-white">
                  <div className="relative h-[35px] w-[35px] rounded-full bg-[#E4E4E4]">
                    <div className="absolute left-[9.39%] right-[84.04%] top-[42.11%] bottom-[40.35%] border-2 border-white"></div>
                  </div>
                  <span className="text-[19px] font-medium leading-[23px]">Online Payment</span>
                </button>
                
                {/* POS On Delivery */}
                <button className="flex items-center gap-2 rounded-[100px] bg-[#EDECEC] p-3 px-4 text-white">
                  <div className="relative h-[35px] w-[35px] rounded-full bg-[#E4E4E4]">
                    <div className="absolute left-[9.62%] right-[83.65%] top-[42.11%] bottom-[40.35%] border-2 border-white"></div>
                  </div>
                  <span className="text-[19px] font-medium leading-[23px]">POS On Delivery</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="w-[556px] rounded-[67px] bg-[rgba(247,247,247,0.49)] p-8">
          <h2 className="mb-8 text-[24px] font-medium leading-[29px]">Order Summary</h2>
          
          {/* Products */}
          <div className="mb-12">
            {/* Product 1 */}
            <div className="mb-8 flex items-center">
              <div className="mr-6 h-[112px] w-[94px] rounded-[100px] border-2 border-[#F3A17C] bg-[#F7F7F7]">
                {/* Product image would go here */}
              </div>
              
              <div className="flex-1">
                <h3 className="text-[20px] font-medium leading-[24px]">Gloria Bag for Makeup</h3>
                <p className="text-[33px] font-medium leading-[40px] text-[#F3A17C]">$19.00</p>
              </div>
              
              <div className="flex h-[66px] w-[123px] items-center justify-center rounded-[100px] border-2 border-[#F3A17C]">
                <span className="text-[22px] font-medium leading-[26px] text-[#F3A17C]">01</span>
                <div className="ml-4">
                  <div className="h-[14px] w-[14px]">
                    <div className="h-0 w-[14px] rotate-[-90deg] border-2 border-[#F3A17C]"></div>
                    <div className="h-0 w-[14px] border-2 border-[#F3A17C]"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className="flex items-center">
              <div className="mr-6 h-[112px] w-[94px] rounded-[100px] border-2 border-[#F3A17C] bg-[#FDFDFD]">
                {/* Product image would go here */}
              </div>
              
              <div className="flex-1">
                <h3 className="text-[20px] font-medium leading-[24px]">Wrinkle Remover</h3>
                <p className="text-[33px] font-medium leading-[40px] text-[#F3A17C]">$39.00</p>
              </div>
              
              <div className="flex h-[66px] w-[123px] items-center justify-center rounded-[100px] border-2 border-[#F3A17C]">
                <span className="text-[22px] font-medium leading-[26px] text-[#F3A17C]">02</span>
                <div className="ml-4">
                  <div className="h-[14px] w-[14px]">
                    <div className="h-0 w-[14px] rotate-[-90deg] border-2 border-[#F3A17C]"></div>
                    <div className="h-0 w-[14px] border-2 border-[#F3A17C]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="my-4 border border-[#BDBDBD]"></div>
          
          {/* Order Totals */}
          <div className="space-y-6">
            <div className="flex justify-between">
              <span className="text-[24px] font-medium leading-[29px] text-[#BDBDBD]">Subtotal:</span>
              <span className="text-[33px] font-medium leading-[40px] text-[#F3A17C]">$58.00</span>
            </div>
            
            <div className="border border-[#BDBDBD]"></div>
            
            <div className="flex justify-between">
              <span className="text-[24px] font-medium leading-[29px] text-[#BDBDBD]">Shipping:</span>
              <span className="text-[33px] font-medium leading-[40px] text-[#F3A17C]">$00.00</span>
            </div>
            
            <div className="border border-[#BDBDBD]"></div>
            
            <div className="flex justify-between">
              <span className="text-[24px] font-medium leading-[29px] text-[#BDBDBD]">Total USD:</span>
              <span className="text-[33px] font-medium leading-[40px] text-[#F3A17C]">$58.00</span>
            </div>
          </div>
          
          {/* Checkout Button */}
          <button className="mt-12 flex w-[252px] items-center justify-center gap-10 rounded-[100px] bg-[#F3A17C] p-5 text-[25px] font-medium leading-[30px] text-white">
            Get Payed
            <div className="h-[39px] w-[39px]">
              <div className="absolute left-[8.33%] right-[8.33%] top-[33.33%] bottom-[12.5%] border-2 border-white"></div>
              <div className="absolute left-[41.67%] right-[41.67%] top-[50%] bottom-[50%] border-2 border-white"></div>
              <div className="absolute left-[27.08%] right-[27.08%] top-[12.5%] bottom-[54.17%] border-2 border-white"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;