import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="  w-full h-auto rounded-[50px] grid md:grid-cols-3 grid-cols-1 grid-rows-2 gap-6 ml-[400px]">
      <div className="w-full col-span-1 row-span-1">
        <div className="w-[956px] h-[280px] bg-[#F7F7F7] rounded-3xl p-4 flex justify-between items-start flex-col">
          <div className="w-full">
            <div className="inline-flex items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:focus:ring-neutral-300 border-transparent hover:bg-neutral-900/80 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/80 px-4 py-2 rounded-full bg-black text-white font-Neue text-sm font-light">
              -19%
            </div>
          </div>
          <div className="w-full inline-flex items-center justify-center">
            <img src="/assets/prodact-BRcdz_eM.png" alt="" />
          </div>
          <div className="w-full flex flex-row gap-2">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 w-11 h-11 rounded-full border border-baseColor bg-white shadow-xl p-0">
              <img
                src="data:image/svg+xml,%3csvg%20width='22'%20height='20'%20viewBox='0%200%2022%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.4626%201.99415C15.7809%200.349232%2013.4404%201.01211%2012.0344%202.06801C11.4578%202.50096%2011.1696%202.71743%2011%202.71743C10.8304%202.71743%2010.5422%202.50096%209.9656%202.06801C8.55962%201.01211%206.21909%200.349232%203.53744%201.99415C0.0180689%204.15294%20-0.77828%2011.2749%207.33953%2017.2834C8.88572%2018.4278%209.6588%2019%2011%2019C12.3412%2019%2013.1143%2018.4278%2014.6605%2017.2834C22.7783%2011.2749%2021.9819%204.15294%2018.4626%201.99415Z'%20stroke='%23F3A17C'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e"
                alt=""
              />
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 w-11 h-11 rounded-full border border-baseColor bg-white shadow-xl p-0">
              <img
                src="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.4168%209.33325H23.5622C24.2911%209.33325%2024.6556%209.33325%2024.9224%209.4509C26.1027%209.9713%2025.575%2011.2825%2025.3764%2012.2247C25.3407%2012.394%2025.2247%2012.5381%2025.062%2012.6153C24.3873%2012.9355%2023.9147%2013.5427%2023.7907%2014.2489L23.0993%2018.1857C22.7952%2019.9178%2022.6912%2022.3933%2021.1733%2023.6135C20.0596%2024.4999%2018.455%2024.4999%2015.2456%2024.4999H12.7547C9.54539%2024.4999%207.94073%2024.4999%206.82703%2023.6135C5.30911%2022.3932%205.20511%2019.9178%204.90094%2018.1857L4.20958%2014.2489C4.08556%2013.5427%203.61302%2012.9355%202.93831%2012.6153C2.77562%2012.5381%202.65961%2012.394%202.62393%2012.2247C2.42536%2011.2825%201.89763%209.9713%203.07797%209.4509C3.34481%209.33325%203.70926%209.33325%204.43813%209.33325H8.75017"
                alt="ss"
              />
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 w-11 h-11 rounded-full border border-baseColor bg-white shadow-xl p-0">
             
             
             
            </button>
          </div>
        </div>
        <div className="w-full inline-flex items-start justify-evenly flex-col p-4">
          <p className="text-sm font-Averia font-normal text-baseColor uppercase">
            Skin Care
          </p>
          <a href="/products/1">
            <p className="text-lg font-Neue font-medium">Anti-Aging Cream</p>
          </a>
          <div className="w-full inline-flex gap-4 items-center">
            <span className="font-Neue text-lg text-black">29.99$</span>
            <span className="font-Neue text-xc text-black/50 font-light">
              29.99$
            </span>
          </div>
        </div>
      </div>
      <div className="w-full col-span-1 row-span-1">
        <div className="w-full h-[280px] bg-[#F7F7F7] rounded-3xl p-4 flex justify-between items-start flex-col">
          <div className="w-full">
            <div className="inline-flex items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:focus:ring-neutral-300 border-transparent hover:bg-neutral-900/80 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/80 px-4 py-2 rounded-full bg-black text-white font-Neue text-sm font-light">
              -19%
            </div>
          </div>
          <div className="w-full inline-flex items-center justify-center">
            <img src="/assets/prodact-BRcdz_eM.png" alt="ss" />
          </div>
          <div className="w-full flex flex-row gap-2">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 w-11 h-11 rounded-full border border-baseColor bg-white shadow-xl p-0">
              
            
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 w-11 h-11 rounded-full border border-baseColor bg-white shadow-xl p-0">
              <img
                src="data:image/svg+xml,%3csvg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M13.4168 9.33325H23.5622C24.2911 9.33325 24.6556 9.33325 24.9224 9.4509C26.1027 9.9713 25.575 11.2825 25.3764 12.2247C25.3407 12.394 25.2247 12.5381 25.062 12.6153C24.3873 12.9355 23.9147 13.5427 23.7907 14.2489L23.0993 18.1857C22.7952 19.9178 22.6912 22.3933 21.1733 23.6135C20.0596 24.4999 18.455 24.4999 15.2456 24.4999H12.7547C9.54539 24.4999 7.94073 24.4999 6.82703 23.6135C5.30911 22.3932 5.20511 19.9178 4.90094 18.1857L4.20958 14.2489C4.08556 13.5427 3.61302 12.9355 2.93831 12.6153C2.77562 12.5381 2.65961 12.394 2.62393 12.2247C2.42536 11.2825 1.89763 9.9713 3.07797 9.4509C3.34481 9.33325 3.70926 9.33325 4.43813 9.33325H8.75017"
                alt=""
              />
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 w-11 h-11 rounded-full border border-baseColor bg-white shadow-xl p-0">
           
            </button>
          </div>
        </div>
        <div className="w-full inline-flex items-start justify-evenly flex-col p-4">
          <p className="text-sm font-Averia font-normal text-baseColor uppercase">
            Skin Care
          </p>
          <a href="/products/3">
            <p className="text-lg font-Neue font-medium">Vitamin C Serum</p>
          </a>
          <div className="w-full inline-flex gap-4 items-center">
            <span className="font-Neue text-lg text-black">24.99$</span>
            <span className="font-Neue text-xc text-black/50 font-light">
              24.99$
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
