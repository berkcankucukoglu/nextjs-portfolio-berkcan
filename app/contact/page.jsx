"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { USER_INFO, CONTACT_PRIVACRY, PRIVACRY_CONTENT } from '@/constants';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";


function Contact() {

    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeIn" } }}
            className='py-12 xl:px-0 min-h-[80vh]'>
            <div className='container mx-auto'>
                <div className="flex flex-col md:flex-row gap-8">
                    {/* terms & privacy info */}
                    <div className='flex flex-col gap-10 max-w-[528px]'>
                        {PRIVACRY_CONTENT.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col gap-2">
                                    <motion.h2
                                        whileInView={{ opacity: 1 }}
                                        initial={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="text-2xl font-semibold text-center md:text-left">{item.title}
                                    </motion.h2>
                                    <ul className="flex flex-col gap-4">
                                        {item.listItems.map((item, index) => {
                                            return (
                                                <motion.li
                                                    key={index}
                                                    whileInView={{ opacity: 1 }}
                                                    initial={{ opacity: 0 }}
                                                    transition={{ duration: 1 }}
                                                    className="flex text-start px-4">
                                                    <p className="text-stone-300 tracking-tight sm:tracking-normal">
                                                        <span className="font-bold tracking-wider text-white">
                                                            <FontAwesomeIcon icon={faChevronRight} />&nbsp;
                                                        </span>
                                                        {item}
                                                    </p>
                                                </motion.li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                    {/* contact btn */}
                    <ul className="flex flex-col items-start gap-10">
                        {show ?
                            <>
                                {USER_INFO.contactInfo.map((item, index) => {
                                    return (
                                        <motion.li
                                            whileInView={{ opacity: 1 }}
                                            initial={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            key={index}
                                            className="flex items-center gap-6">
                                            <div className='hidden sm:flex items-center justify-center h-16 w-16 bg-[#27272c] text-accent rounded-md'>
                                                <div className='text-4xl'>{item.icon}</div>
                                            </div>
                                            <div className='flex-1'>
                                                <p className='text-stone-500'>{item.fieldName}</p>
                                                <h3 className='text-xl text-white'>{item.fieldValue}</h3>
                                            </div>
                                        </motion.li>
                                    );
                                })}
                            </> :
                            <>
                                <motion.ul
                                    className='list-disc pl-5'
                                    whileInView={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 1.25 }}
                                >
                                    {CONTACT_PRIVACRY.map((item, index) => (
                                        <li
                                            className="text-sm italic leading-relaxed tracking-tighter text-stone-500 py-1"
                                            key={index}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </motion.ul>
                                <motion.span
                                    whileInView={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    className="flex w-full justify-center items-center md:justify-start">
                                    <Button
                                        variant="outline_transparent"
                                        size="lg"
                                        onClick={toggleShow}>
                                        Show Contact Information
                                    </Button>
                                </motion.span>

                            </>
                        }
                    </ul>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact