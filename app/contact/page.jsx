"use client"
import React from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { USER_INFO } from '@/constants';
import { motion } from 'framer-motion';


function Contact() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeIn" } }}
            className='py-12'>
            <div className='container mx-auto'>
                <div className="flex flex-col xl:flex-row gap-8">
                    {/* form */}
                    <div className='xl:h-1/2 order-2 xl:order-none'>
                        <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl' action="">
                            <h3 className='text-4xl text-accent'>Title Connect</h3>
                            <p className='text-stone-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam ad repellendus. Iste, hic? Corporis rerum nesciunt tempora harum dolore?
                            </p>
                            {/* input */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <Input type="firstname" placeholder="Firstname" />
                                <Input type="lastname" placeholder="Lastname" />
                                <Input type="email" placeholder="Email address" />
                                <Input type="phone" placeholder="Phone number" />
                            </div>
                            {/* select */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a contact reason..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Pease select a reason</SelectLabel>
                                        <SelectItem value="test1">Reason1</SelectItem>
                                        <SelectItem value="test2">Reason2</SelectItem>
                                        <SelectItem value="test3">Reason3</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea className="h-52" placeholder="Type your message here..." />
                            {/* btn */}
                            <Button variant="outline" className="max-w-60">
                                <span className="text-base">Send Message</span>
                            </Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className='flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
                        <ul className='flex flex-col gap-10'>
                            {USER_INFO.contactInfo.map((item, index) => {
                                return (
                                    <li key={index} className='flex items-center gap-6'>
                                        <div className='w-14 h-14 xl:h-20 xl:w-20 bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                                            <div className='text-3xl xl:text-4xl'>{item.icon}</div>
                                        </div>
                                        <div className='flex-1'>
                                            <p className='text-stone-500'>{item.fieldName}</p>
                                            <h3 className='text-xl'>{item.fieldValue}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact