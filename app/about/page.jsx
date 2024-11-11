"use client"
import { USER_INFO, EXPERIENCES, EDUCATION, LICENSURE } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.25, ease: "easeIn" }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <Tabs
                    defaultValue="aboutme"
                    className="flex flex-col md:flex-row gap-16 md:gap-8">
                    <TabsList className="flex flex-col w-full md:w-1/3 max-w-96 mx-auto xl:mx-0 gap-6 md:gap-9">
                        <TabsTrigger value="aboutme">About Me</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="licensure">Licensure & Certification</TabsTrigger>
                        <Button variant="outline_tab" size="outline_tab" className="flex items-center gap-2">
                            <span className="text-base">Download Resume</span>
                            <FontAwesomeIcon icon={faDownload} className="w-auto h-6 text-lg" />
                        </Button>
                    </TabsList>

                    <div className="pb-5 md:pb-0 w-full md:w-2/3">
                        {/* about me */}
                        <TabsContent value="aboutme" className="w-full">
                            <div className="flex flex-col gap-8 text-center md:text-left mb-8">
                                <h3 className="text-4xl font-bold">Hello, World!</h3>
                                <p className="w-full text-white mx-auto xl:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora dicta quaerat sit error inventore repudiandae? Quasi est dicta autem!</p>
                            </div>
                            <div className="h-96 w-full">
                                <ul className="flex flex-col gap-7">
                                    {USER_INFO.info.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex items-center justify-center md:justify-start gap-4">
                                                <span className="text-white text-xl capitalize tracking-tighte sm:tracking-normal leading-10">{item.fieldName}:</span>
                                                <span className="text-stone-200 tracking-tighter sm:tracking-normal leading-10">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-8 text-center md:text-left mb-8">
                                <h3 className="text-4xl font-bold">My Experience</h3>
                                <p className="w-full text-white mx-auto xl:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora dicta quaerat sit error inventore repudiandae? Quasi est dicta autem!</p>
                            </div>
                            <ScrollArea className="h-96 w-full">
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
                                                    {exp.role} - {" "}
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
                                                            className="mr-2 mt-2 rounded bg-stone-900 px-2 py-2 text-sm font-medium text-stone-300"
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
                            </ScrollArea>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-8 text-center md:text-left mb-8">
                                <h3 className="text-4xl font-bold">My Education</h3>
                                <p className="w-full text-white mx-auto xl:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora dicta quaerat sit error inventore repudiandae? Quasi est dicta autem!</p>
                            </div>
                            <ScrollArea className="h-96 w-full">
                                <ul className="flex flex-col gap-7">
                                    {EDUCATION.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="bg-[#232329] p-6 rounded-xl flex flex-col justify-center items-start">
                                                <motion.span
                                                    whileInView={{ opacity: 1 }}
                                                    initial={{ opacity: 0 }}
                                                    transition={{ duration: 0.75 }}
                                                    className="text-stone-300">{item.timespan}</motion.span>
                                                <motion.h3
                                                    whileInView={{ opacity: 1 }}
                                                    initial={{ opacity: 0 }}
                                                    transition={{ duration: 1 }}
                                                    className="text-xl text-stone-200 max-w-64 mb-4">{item.faculty}</motion.h3>
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
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </TabsContent>

                        {/* licensure & certification */}
                        <TabsContent value="licensure" className="w-full">
                            <div className="flex flex-col gap-8 text-center md:text-left mb-8">
                                <h3 className="text-4xl font-bold">My Certificates & Licensure</h3>
                                <p className="w-full text-white mx-auto xl:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora dicta quaerat sit error inventore repudiandae? Quasi est dicta autem!</p>
                            </div>
                            <ScrollArea className="h-96 w-full">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                                    {LICENSURE.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="bg-[#232329] p-6 rounded-xl flex">
                                                {/* image */}
                                                <div className="relative p-4">
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
                                                </div>
                                                <div className="w-full ">
                                                    <span className="text-stone-500">Issued {item.issueDate}</span>
                                                    <h3 className="text-xl text-stone-200 mb-4">{item.issuingOrganization}</h3>
                                                    <div className="flex items-center w-full gap-3">
                                                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                                                        <p className="text-stone-500">{item.title}</p>
                                                    </div>
                                                    <div className="flex items-center w-full gap-3">
                                                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                                                        <p className="text-stone-500">{item.credentialText}</p>
                                                    </div>
                                                </div>
                                                {item.description}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default About