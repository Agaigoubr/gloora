"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="mt-[200px]  md:w-[371px] w-[371px] py-12 md:h-[956px] md:px-8 px-4 flex flex-col gap-12 bg-[#F7F7F7] rounded-[50px]">
      {/* Product Categories */}
      <div>
        <p className="font-Neue font-medium text-lg mb-6">Product Categories</p>
        <div className="w-full inline-flex flex-row gap-4 items-center">
          <button
            type="button"
            role="checkbox"
            aria-checked="false"
            data-state="unchecked"
            value="on"
            className="peer h-4 w-4 shrink-0 border border-neutral-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neutral-900 data-[state=checked]:text-neutral-50 dark:border-neutral-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 dark:data-[state=checked]:bg-neutral-50 dark:data-[state=checked]:text-neutral-900 rounded-full"
          />
          <span>Skin Care</span>
        </div>
        <div className="w-full inline-flex flex-row gap-4 items-center">
          <button
            type="button"
            role="checkbox"
            aria-checked="false"
            data-state="unchecked"
            value="on"
            className="peer h-4 w-4 shrink-0 border border-neutral-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neutral-900 data-[state=checked]:text-neutral-50 dark:border-neutral-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 dark:data-[state=checked]:bg-neutral-50 dark:data-[state=checked]:text-neutral-900 rounded-full"
          />
          <span>Hair Care</span>
        </div>
        <div className="w-full inline-flex flex-row gap-4 items-center">
          <button
            type="button"
            role="checkbox"
            aria-checked="false"
            data-state="unchecked"
            value="on"
            className="peer h-4 w-4 shrink-0 border border-neutral-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neutral-900 data-[state=checked]:text-neutral-50 dark:border-neutral-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 dark:data-[state=checked]:bg-neutral-50 dark:data-[state=checked]:text-neutral-900 rounded-full"
          />
          <span>Makeup</span>
        </div>
      </div>

      {/* Filter by price */}
      <div>
        <p className="font-Neue font-medium text-lg mb-6">Filter by price</p>
        <span
          dir="ltr"
          data-orientation="horizontal"
          aria-disabled="false"
          className="relative flex w-full touch-none select-none items-center"
          style={{ "--radix-slider-thumb-transform": "translateX(-50%)" }}
        >
          <span
            data-orientation="horizontal"
            className="relative h-2 w-full grow overflow-hidden rounded-full bg-baseColor dark:bg-baseColor"
          >
            <span
              data-orientation="horizontal"
              className="absolute h-full bg-baseColor dark:bg-baseColor"
              style={{ left: "0%", right: "67%" }}
            />
            test
          </span>
          <span
            style={{
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              left: "calc(33% + 10.88px)",
            }}
          >
            <span
              role="slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-orientation="horizontal"
              data-orientation="horizontal"
              tabIndex={0}
              className="inline-flex justify-center items-center gap-2 h-7 w-16 rounded-full border-2 border-softGray bg-baseColor transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-50 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300"
              data-radix-collection-item
              aria-valuenow={33}
            >
              <span className="text-xs font-Neue text-white">$</span>
              <span className="h-4 w-4 inline-flex justify-center items-center bg-white rounded-full">
                <img
                  src="data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%206H2'%20stroke='%23F3A17C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.29295%206.8013L8.8097%207.18195C8.0268%207.7987%207.63535%208.10705%207.3177%207.9664C7%207.82575%207%207.34405%207%206.38065V5.61935C7%204.65596%207%204.17427%207.3177%204.03361C7.63535%203.89295%208.0268%204.20132%208.8097%204.81806L9.2929%205.1987C9.7643%205.57005%2010%205.75575%2010%206C10%206.24425%209.7643%206.42995%209.29295%206.8013Z'%20stroke='%23F3A17C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  alt=""
                />
              </span>
            </span>
          </span>
        </span>
      </div>

      {/* Filter by promotions */}
      <div>
        <p className="font-Neue font-medium text-lg mb-6">Filter by promotions</p>
        <span
          dir="ltr"
          data-orientation="horizontal"
          aria-disabled="false"
          className="relative flex w-full touch-none select-none items-center"
          style={{ "--radix-slider-thumb-transform": "translateX(-50%)" }}
        >
          <span
            data-orientation="horizontal"
            className="relative h-2 w-full grow overflow-hidden rounded-full bg-baseColor dark:bg-baseColor"
          >
            <span
              data-orientation="horizontal"
              className="absolute h-full bg-baseColor dark:bg-baseColor"
              style={{ left: "0%", right: "67%" }}
            />
            test
          </span>
          <span
            style={{
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              left: "calc(33% + 10.88px)",
            }}
          >
            <span
              role="slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-orientation="horizontal"
              data-orientation="horizontal"
              tabIndex={0}
              className="inline-flex justify-center items-center gap-2 h-7 w-16 rounded-full border-2 border-softGray bg-baseColor transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-50 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300"
              data-radix-collection-item
              aria-valuenow={33}
            >
              <span className="text-xs font-Neue text-white">$</span>
              <span className="h-4 w-4 inline-flex justify-center items-center bg-white rounded-full">
                <img
                  src="data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%206H2'%20stroke='%23F3A17C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.29295%206.8013L8.8097%207.18195C8.0268%207.7987%207.63535%208.10705%207.3177%207.9664C7%207.82575%207%207.34405%207%206.38065V5.61935C7%204.65596%207%204.17427%207.3177%204.03361C7.63535%203.89295%208.0268%204.20132%208.8097%204.81806L9.2929%205.1987C9.7643%205.57005%2010%205.75575%2010%206C10%206.24425%209.7643%206.42995%209.29295%206.8013Z'%20stroke='%23F3A17C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  alt=""
                />
              </span>
            </span>
          </span>
        </span>
      </div>
    </div>

  
  );
}
