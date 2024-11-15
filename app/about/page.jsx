"use client"
import { USER_INFO, EXPERIENCES, EDUCATION, LICENSURE, CONTACT_PRIVACRY, ABOUT_CONTENT, CONTACT_TEXT, ABOUT_MISSIONS } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faChevronRight, faLink } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React, { useState } from 'react';
import Link from "next/link"

function About() {

    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.25, ease: "easeIn" }
            }}
            className="flex items-center justify-center py-12 xl:px-0 min-h-[80vh]">
            <div className="container mx-auto">
                <Tabs
                    defaultValue="aboutme"
                    className="flex flex-col md:flex-row gap-16 md:gap-8">
                    <TabsList className="flex flex-col w-full md:w-1/3 max-w-96 mx-auto xl:mx-0 gap-6 md:gap-9">
                        <TabsTrigger value="aboutme">About Me</TabsTrigger>
                        <TabsTrigger value="mission">Mission & Values</TabsTrigger>
                        <TabsTrigger value="experience">Experiences</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="licensure">Licensure & Certification</TabsTrigger>
                        <Button
                            variant="outline_tab"
                            size="outline_tab"
                            className="flex items-center gap-2 hover:text-accent"
                            onClick={(e) => {
                                e.preventDefault();
                                const confirmDownload = window.confirm(
                                    'PDF Format – Download Resume ?'
                                );
                                if (confirmDownload) {
                                    const downloadLink = document.createElement('a');
                                    downloadLink.href = '/berkcan_kucukoglu_resume.pdf';
                                    downloadLink.setAttribute('download', 'berkcan_kucukoglu_resume.pdf');
                                    document.body.appendChild(downloadLink);
                                    downloadLink.click();
                                    document.body.removeChild(downloadLink);
                                }
                            }}>
                            <span className="text-base">Download Resume</span>
                            <FontAwesomeIcon icon={faDownload} className="w-auto h-6 text-lg" />
                        </Button>
                    </TabsList>

                    <div className="w-full md:w-2/3">
                        {/* about me */}
                        <TabsContent value="aboutme" className="w-full">
                            <div className="flex flex-col gap-8 text-center md:text-left mb-8">
                                <h3 className="text-4xl font-bold">Hello, World!</h3>
                            </div>
                            <ScrollArea className="h-[30rem] w-full">
                                <motion.p
                                    whileInView={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 0.75 }}
                                    className="w-full text-white mx-auto xl:mx-0 px-2 mb-4 text-center md:text-start md:px-0">{ABOUT_CONTENT}</motion.p>
                                {/* show contact information */}
                                <ul className="flex flex-col gap-4">
                                    {show ?
                                        <>
                                            {USER_INFO.contactInfo.map((item, index) => {
                                                return (
                                                    <motion.li
                                                        whileInView={{ opacity: 1 }}
                                                        initial={{ opacity: 0 }}
                                                        transition={{ duration: 0.5 }}
                                                        key={index}
                                                        className="flex items-center justify-center md:justify-start gap-4">
                                                        <span className="text-stone-200 text-sm capitalize tracking-tighte sm:tracking-normal leading-10">{item.fieldName}:</span>
                                                        <span className="text-stone-200 text-lg tracking-tighter sm:tracking-normal leading-10">{item.fieldValue}</span>
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
                                                className="flex justify-center items-center md:justify-start">
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
                                <motion.p
                                    whileInView={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    className="w-full text-white mx-auto xl:mx-0 px-2 my-4 text-center md:text-start md:px-0">{CONTACT_TEXT}</motion.p>
                            </ScrollArea>
                        </TabsContent>

                        {/* mission & values */}
                        <TabsContent value="mission" className="w-full">
                            <div className="flex flex-col gap-8 text-center md:text-left mb-8">
                                <h3 className="text-4xl font-bold">Goals & Motivators</h3>
                            </div>
                            <ScrollArea className="h-[30rem] w-full">
                                {ABOUT_MISSIONS.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col gap-2 mt-4">
                                            <motion.h2
                                                whileInView={{ opacity: 1 }}
                                                initial={{ opacity: 0 }}
                                                transition={{ duration: 0.5 }}
                                                className="text-2xl font-semibold text-center md:text-left">{item.title}</motion.h2>
                                            <motion.p
                                                whileInView={{ opacity: 1 }}
                                                initial={{ opacity: 0 }}
                                                transition={{ duration: 1 }}
                                                className="w-full text-white text-center md:text-left mx-auto xl:mx-0">{item.description}</motion.p>
                                            <ul className="flex flex-col gap-4">
                                                {item.items.map((listItem, index) => {
                                                    return (
                                                        <motion.li
                                                            key={index}
                                                            whileInView={{ opacity: 1 }}
                                                            initial={{ opacity: 0 }}
                                                            transition={{ duration: 1 }}
                                                            className="flex items-start justify-center md:justify-start">
                                                            <p className="text-stone-300 tracking-tight sm:tracking-normal">
                                                                <span className="italic capitalize font-semibold tracking-wider text-white">
                                                                    <FontAwesomeIcon icon={faChevronRight} />&nbsp;{listItem.head}:&nbsp;</span>{listItem.text}
                                                            </p>
                                                        </motion.li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    )
                                })}
                            </ScrollArea>
                        </TabsContent>

                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col text-center md:text-left mb-8">
                                <h3 className="text-4xl font-bold">Experiences</h3>
                            </div>
                            <ScrollArea className="h-[30rem] w-full">
                                <div className="flex flex-col gap-7">
                                    {EXPERIENCES.map((exp, index) => (
                                        <div className="flex flex-wrap md:justify-between bg-[#232329] p-6 rounded-xl" key={index}>
                                            <motion.div
                                                whileInView={{ opacity: 1 }}
                                                initial={{ opacity: 0 }}
                                                transition={{ duration: 1 }}
                                                className="w-full max-w-xl md:w-1/3">
                                                <p className="mb-2 text-base md:text-sm lg:text-base text-stone-300">
                                                    {exp.timespan}
                                                </p>
                                            </motion.div>
                                            <motion.div
                                                whileInView={{ opacity: 1 }}
                                                initial={{ opacity: 0 }}
                                                transition={{ duration: 0.75 }}
                                                className="w-full max-w-xl md:w-2/3">
                                                <h3 className="mb-2 font-semibold text-stone-200">
                                                    {exp.role} <br />
                                                    <span className="text-sm text-stone-500">
                                                        {exp.company}
                                                    </span>
                                                </h3>
                                                <p className="my-2 text-stone-300">
                                                    {exp.description}
                                                </p>
                                                <div className="flex flex-wrap">
                                                    {exp.technologies.map((tech, index) => (
                                                        <motion.span
                                                            whileInView={{ opacity: 1 }}
                                                            initial={{ opacity: 0 }}
                                                            transition={{ duration: 1.25 }}
                                                            className="mr-2 mt-2 rounded bg-stone-900 px-2 py-2 text-sm font-medium text-stone-300 capitalize"
                                                            key={index}
                                                        >
                                                            {tech}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>
                                <motion.p
                                    whileInView={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    className="w-full text-white mx-auto xl:mx-0 px-2 my-4 text-center md:text-start md:px-0">{CONTACT_TEXT}</motion.p>
                            </ScrollArea>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-8 text-center md:text-left mb-8">
                                <h3 className="text-4xl font-bold">Education</h3>
                            </div>
                            <ScrollArea className="h-[30rem] w-full">
                                <ul className="flex flex-col gap-7">
                                    {EDUCATION.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="bg-[#232329] p-6 rounded-xl flex flex-col justify-center items-start gap-2">
                                                <motion.span
                                                    whileInView={{ opacity: 1 }}
                                                    initial={{ opacity: 0 }}
                                                    transition={{ duration: 0.75 }}
                                                    className="text-stone-300">{item.timespan}</motion.span>
                                                <motion.h3
                                                    whileInView={{ opacity: 1 }}
                                                    initial={{ opacity: 0 }}
                                                    transition={{ duration: 1 }}
                                                    className="text-xl text-stone-200 mb-4">{item.faculty}</motion.h3>
                                                <motion.div
                                                    whileInView={{ opacity: 1 }}
                                                    initial={{ opacity: 0 }}
                                                    transition={{ duration: 1 }}
                                                    className="flex items-center gap-3">
                                                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                                                    <p className="text-stone-500">{item.school}</p>
                                                </motion.div>
                                                <motion.div
                                                    whileInView={{ opacity: 1 }}
                                                    initial={{ opacity: 0 }}
                                                    transition={{ duration: 1.25 }}
                                                    className="w-full">
                                                    {item.description}
                                                </motion.div>
                                                {item.link && item.link.trim() !== '' && (
                                                    <motion.div
                                                        whileInView={{ opacity: 1 }}
                                                        initial={{ opacity: 0 }}
                                                        transition={{ duration: 1.5 }}
                                                        className="w-full md:w-auto">
                                                        <Link
                                                            href={item.link}
                                                            target="_blank"
                                                            className="flex justify-center items-center m-1 text-white text-lg uppercase border border-stone-500 rounded-md px-2 hover:text-accent hover:border-accent hover:transition-all duration-200 transform hover:scale-110"
                                                        >
                                                            Learn More&nbsp;<FontAwesomeIcon icon={faLink} />
                                                        </Link>
                                                    </motion.div>

                                                )}
                                                {item.link && item.link.trim() !== '' && (
                                                    <motion.p
                                                        whileInView={{ opacity: 1 }}
                                                        initial={{ opacity: 0 }}
                                                        transition={{ duration: 1 }}
                                                        className="w-full md:w-auto leading-relaxed text-stone-500">
                                                        Link:&nbsp;{item.link}
                                                    </motion.p>

                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                                <motion.p
                                    whileInView={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    className="w-full text-white mx-auto xl:mx-0 px-2 my-4 text-center md:text-start md:px-0">{CONTACT_TEXT}</motion.p>
                            </ScrollArea>
                        </TabsContent>

                        {/* licensure & certification */}
                        <TabsContent value="licensure" className="w-full">
                            <div className="flex flex-col gap-8 text-center md:text-left mb-8">
                                <h3 className="text-4xl font-bold">Certificates & Licensure</h3>
                            </div>
                            <ScrollArea className="h-[30rem] w-full">
                                <ul className="flex flex-col gap-7">
                                    {LICENSURE.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="bg-[#232329] p-6 rounded-xl flex">
                                                {/* image */}
                                                <motion.div
                                                    whileInView={{ opacity: 1 }}
                                                    initial={{ opacity: 0 }}
                                                    transition={{ duration: 0.75 }}
                                                    className="relative p-4">
                                                    <div className="w-12 h-12">
                                                        <Image
                                                            src={item.image}
                                                            priority
                                                            quality={100}
                                                            width={48}
                                                            height={48}
                                                            sizes="100vw"
                                                            alt={item.issuingOrganization}
                                                            className="object-contain rounded"
                                                        />
                                                    </div>
                                                </motion.div>
                                                <motion.div
                                                    whileInView={{ opacity: 1 }}
                                                    initial={{ opacity: 0 }}
                                                    transition={{ duration: 1 }}
                                                    className="w-full ">
                                                    <span className="text-stone-500">Issued {item.issueDate}</span>
                                                    <h3 className="text-xl text-stone-200 mb-4">{item.title}</h3>
                                                    <div className="flex items-center w-full gap-3">
                                                        <span className="text-stone-500"><FontAwesomeIcon icon={faChevronRight} className="text-accent" />&nbsp;Issued by:&nbsp;{item.issuingOrganization}</span>
                                                    </div>
                                                    <div className="flex items-center w-full gap-3">
                                                        <span className="text-stone-500"><FontAwesomeIcon icon={faChevronRight} className="text-accent" />&nbsp;{item.credentialText}</span>
                                                    </div>
                                                </motion.div>
                                                {item.description}
                                            </li>
                                        );
                                    })}
                                </ul>
                                <motion.p
                                    whileInView={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    className="w-full text-white mx-auto xl:mx-0 px-2 my-4 text-center md:text-start md:px-0">{CONTACT_TEXT}</motion.p>
                            </ScrollArea>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default About