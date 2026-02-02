"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_SECTION_EN } from '@/lib/constants/en';
import { AnimatedBeamDemo } from '../widgets/AnimatedBeam';
import Image from 'next/image';
import AboutUsImage from "../../assets/images/joel-filipe-VuwAfoHpxgs-unsplash.jpg"

const About = () => {
  return (
    <section className="w-full min-h-screen px-[6%] sm:px-[8%] md:px-[12%] py-20">
      <div className="container mx-auto px-6 grid grid-cols-12 gap-6 sm:gap-8">
        <div className="col-span-4"></div>
        <div className="col-span-8 space-y-6">
          <div className="max-w-xl space-y-6">
            <h1 className="text-6xl font-bold text-foreground">About Us</h1>
            <p className="text-lg font-medium text-neutral-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laborum esse nemo eos ipsa reiciendis, repellat facere velit aspernatur tum dolorem! Fugit eum delectus est vero. Eligendi praesentium modi illum qui molestias voluptate voluptatum magni aspernatur eum adipisci.</p>
          </div>
          <div className="w-full grid grid-cols-2">
            <h3 className="text-2xl col-span-1 font-semibold text-neutral-900">Core Philosophy</h3>
            <p className="text-base col-span-1 font-normal text-neutral-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente ea, accusamus repudiandae nulla soluta, aperiam, esse facilis nostrum numquam facere amet fuga tenetur. Ipsam, beatae. Quisquam, fugiat voluptatum.</p>
          </div>
          <Image src={AboutUsImage} alt='About us image' width={720} height={480} className='w-full h-auto object-cover rounded-lg' />
          <div className="w-full">
            <h3 className="text-2xl font-semibold text-neutral-900">Beedy AI Founder</h3>
            <div className="w-full">
              {Array.from({ length: 8 }).map((_, i) => {
                return (
                  <div className="border-b last:border-0 border-border py-6 flex items-center justify-between">
                    <div className="flex items-center justify-start gap-4">
                      <span className="text-md font-thin text-neutral-500">{i + 1}</span>
                      <span className="text-md text-neutral-900 font-medium">Nama Founder</span>
                    </div>
                    <span className="text-neutral-600 font-normal text-md">Peran Founder</span>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="text-sm font-thin text-neutral-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus magnam atque.</p>
        </div>
      </div>
    </section>
  );
}

export default About