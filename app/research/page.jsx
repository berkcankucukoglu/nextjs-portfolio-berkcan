"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import { RESEARCHES } from '@/constants/researchConstants';
import ResearchSliderButtons from '@/components/ResearchSliderButtons/ResearchSliderButtons';

function Research() {
    const [research, setResearch] = useState(RESEARCHES[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setResearch(RESEARCHES[currentIndex]);
    }
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeIn" } }}
            className='min-h-20 flex flex-col justify-center py-12 xl:px-0'>
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-8">
                    <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className='flex flex-col gap-8 h-1/2'>
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {research.num}
                            </div>
                            {/* category */}
                            <h2 className='text-5xl font-bold leading-none text-white group-hover:text-accent transition-all duration-300 capitalize'>
                                {research.category} research
                            </h2>
                            {/* description */}
                            <p className="text-white">{research.description}</p>
                            {/* stack */}
                            <ul className='flex gap-4'>
                                {research.stack.map((item, index) => {
                                    return (
                                        <li key={index} className='text-xl text-accent'>
                                            {item}
                                            {index !== research.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-stone-300"></div>
                            {/* buttons */}
                            <div className='flex items-center gap-4'>
                                {/* live research btn */}
                                <Link href={research.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-20 h-20 rounded-full bg-stone-700 flex justify-center items-center group'>
                                                <FontAwesomeIcon icon={faArrowRight} className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live research</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github research btn */}
                                <Link href={research.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-20 h-20 rounded-full bg-stone-700 flex justify-center items-center group'>
                                                <FontAwesomeIcon icon={faArrowRight} className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repo</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-1/2'>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className='xl:h-[520px] mb-12'
                            onSlideChange={handleSlideChange}
                        >
                            {RESEARCHES.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className='w-full'>
                                        <div className='h-[460px] relative group flex justify-center items-center bg-stone-600'>
                                            {/* overlay */}
                                            <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'>

                                            </div>
                                            {/* image */}
                                            <div className='relative w-full h-full'>
                                                <Image
                                                    src={research.image}
                                                    fill
                                                    className='object-cover'
                                                    alt={research.title}>
                                                </Image>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/* slider buttons */}
                            <ResearchSliderButtons containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-2xl w-[44px] h-[44px] flex justify-center items-center transition-all" iconStyles="text-primary" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section >
    )
}

export default Research