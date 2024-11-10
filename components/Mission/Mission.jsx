"use client"
import { HERO_MISSIONS } from "@/constants/heroMissions";
import { motion } from "framer-motion";

function Mission() {
    return (
        <section className="h-full">
            <div className="flex flex-col sm:flex-row sm:gap-4">
                {HERO_MISSIONS.map((item, index) => {
                    return (
                        <motion.div
                            key={index}
                            whileInView={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center text-center my-4 sm:mb-0 w-full sm:w-1/3"
                        >
                            <span className="text-5xl text-stone-400">{item.icon}</span>
                            <h3 className="my-2 font-semibold text-xl sm:text-lg">
                                {item.title}
                            </h3>
                            <p className="text-center max-w-lg text-stone-400">
                                {item.description}
                            </p>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}

export default Mission