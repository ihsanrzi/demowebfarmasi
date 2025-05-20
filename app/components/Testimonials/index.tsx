"use client"
import React, { Component } from "react";
import Image from "next/image";


export default function ThreeSteps() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="font-headline text-base font-bold sm:text-3xl lg:text-4xl text-center">
        Timeline
      </h2>

      <div className="grid sm:grid-cols-3 gap-16 sm:gap-8 mt-16 sm:mt-24">
        {/* Step 1 */}
        <div className="text-center">
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-24 lg:h-24 mx-auto left-2">
              <Image src="/images/testimonial/reg.png" alt="hero-image" width={700} height={542} />
          </div>
          <h3 className="font-semibold text-xs sm:text-2xl mt-6 sm:mt-10">1. Pendaftaran</h3>
          <p className="leading-relaxed mt-4">
            Sebelum 9 Juli 2025.
          </p>
        </div>

        {/* Step 2 */}
        <div className="text-center">
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-24 lg:h-24 mx-auto left-2">
              <Image src="/images/testimonial/jul.png" alt="hero-image" width={700} height={542} />
          </div>
          <h3 className="font-semibold text-xl sm:text-2xl mt-6 sm:mt-10">2. Pelaksanaan</h3>
          <p className="leading-relaxed mt-4">
            9 Juli 2025.
          </p>
        </div>

        {/* Step 3 */}
        <div className="text-center">
             <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-24 lg:h-24 mx-auto left-2">
              <Image src="/images/testimonial/zoom.png" alt="hero-image" width={700} height={542} />
          </div>
          <h3 className="font-semibold text-xl sm:text-2xl mt-6 sm:mt-10">3. Waktu & Tempat</h3>
          <p className="leading-relaxed mt-4">
            Via Zoom Meeting | 08.00 - Selesai
          </p>
        </div>
     </div>
    </div>
  );
}
