import { cn } from '@/lib/utils'
import React from 'react'
import { AnimatedGridPattern } from '../ui/animated-grid-pattern'
import { HERO_SECTION_EN } from '@/lib/constants/en'
import AI_Prompt from '../kokonutui/ai-prompt'
import {ArrowRightIcon} from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-background relative flex min-h-screen w-full items-center justify-center overflow-hidden border p-6 sm:p-12 md:p-20">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.3}
        duration={2}
        repeatDelay={1}
        className={cn(
          "mask-[radial-gradient(1000px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%]"
        )}
      />
      <div className="asbolute inset-0 z-20 pt-6 sm:pt-8 bg-transparent">
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 sm:gap-8">
          <div className="max-w-3xl pe-16 sm:p-0 flex flex-col items-start sm:items-center justify-center gap-3">
            <Link href={"/"} className="flex items-center gap-2 px-2 py-1 rounded-full bg-accent/10 border border-border backdrop-blur-xs group hover:shadow-lg hover:bg-accent transition-all">
              <span className="text-sm text-neutral-700 font-normal">🎉</span>
              <span className="text-sm text-neutral-700 font-normal">New Version Available</span>
              <ArrowRightIcon className={`size-4 text-neutral-700 mx-1 group-hover:translate-x-1 transition-all`} />
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold sm:text-center">{HERO_SECTION_EN.title}</h1>
            <p className="text-sm sm:text-md md:text-lg sm:text-center text-neutral-700 font-normal">{HERO_SECTION_EN.description}</p>
            {/* <div className="flex items-center gap-2">
              <Button className='rounded-full! bg-blue-500 hover:bg-blue-600' size={'lg'}>{HERO_SECTION_EN.button}</Button>
              <Button variant={'outline'} className='rounded-full!' size={'lg'}>{HERO_SECTION_EN.button2}</Button>
            </div> */}
          </div>
          <div className="w-full pt-2 flex items-center">
            <AI_Prompt />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero