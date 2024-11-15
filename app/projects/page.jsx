"use client"
import Link from "next/link"
import { PROJECTS } from "@/constants/projectsConstants";
import { motion } from "framer-motion";
import Image from "next/image";

function Projecs() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { duration: 0.5, ease: "easeIn" }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-14"
                >
                    {PROJECTS.map((project, index) => {
                        return project.url && project.url.trim() !== '' ? (
                            <Link
                                href={project.url}
                                key={index}
                                target="_blank"
                                className="flex flex-1 flex-col justify-between gap-6 group p-3 border border-accent bg-[#232329] rounded-xl">
                                {/* content */}
                                <motion.div
                                    whileInView={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 0.75 }}
                                    className="w-full h-full flex flex-col">
                                    <h2 className="bg-gradient-to-r from-stone-300 to-accent bg-clip-text text-4xl tracking-tight text-transparent leading-none capitalize">{project.title}</h2>
                                    {/* image */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            transition: { duration: 0.25, ease: "easeIn" }
                                        }}
                                        className="w-full h-full relative">
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity: 1,
                                                transition: { duration: 0.25, ease: "easeInOut" }
                                            }}
                                            className="w-[262px] sm:w-auto max-w-72 my-4">
                                            <Image
                                                src={project.image}
                                                priority
                                                unoptimized
                                                quality={100}
                                                width={288}
                                                sizes="100vw"
                                                alt={project.title}
                                                className="object-contain rounded-lg"
                                            />
                                        </motion.div>
                                    </motion.div>
                                    <div className="w-full h-full">
                                        <p className="text-stone-400 group-hover:text-white">{project.description}</p>
                                    </div>
                                </motion.div>
                                {/* tech */}
                                <div className="w-full flex flex-wrap">
                                    {project.technologies.map((tech, index) => (
                                        <motion.span
                                            whileInView={{ opacity: 1 }}
                                            initial={{ opacity: 0 }}
                                            transition={{ duration: 1 }}
                                            className="mr-2 my-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 group-hover:text-white capitalize"
                                            key={index}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </Link>
                        ) : (
                            <div key={index} className="flex flex-1 flex-col justify-between gap-6 group p-3 border border-accent bg-[#232329] rounded-xl">
                                <motion.div
                                    whileInView={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 0.75 }}
                                    className="w-full h-full flex flex-col">
                                    <h2
                                        className="bg-gradient-to-r from-stone-300 to-accent bg-clip-text text-4xl tracking-tight text-transparent leading-none capitalize">
                                        {project.title}
                                    </h2>
                                    {/* image */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            transition: { duration: 0.25, ease: "easeIn" }
                                        }}
                                        className="w-full h-full relative">
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity: 1,
                                                transition: { duration: 0.25, ease: "easeInOut" }
                                            }}
                                            className="w-[262px] sm:w-auto max-w-72 my-4">
                                            <Image
                                                src={project.image}
                                                priority
                                                unoptimized
                                                quality={100}
                                                width={288}
                                                sizes="100vw"
                                                alt={project.title}
                                                className="object-contain rounded-lg"
                                            />
                                        </motion.div>
                                    </motion.div>
                                    <div className="w-full h-full">
                                        <p className="text-stone-400">{project.description}</p>
                                    </div>
                                </motion.div>
                                {/* tech */}
                                <div className="w-full flex flex-wrap">
                                    {project.technologies.map((tech, index) => (
                                        <motion.span
                                            whileInView={{ opacity: 1 }}
                                            initial={{ opacity: 0 }}
                                            transition={{ duration: 1 }}
                                            className="mr-2 my-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 capitalize"
                                            key={index}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Projecs