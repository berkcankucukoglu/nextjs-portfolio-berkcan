"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { USER_INFO } from "@/constants";

function Photo() {
    return (
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
                className="w-72 h-72 sm:w-96 sm:h-96 xl:w-[498px] xl:h-[498px]">
                <Image
                    src={USER_INFO.image}
                    priority
                    quality={100}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={`${USER_INFO.name} ${USER_INFO.surname}`}
                    className="object-contain"
                />
            </motion.div>
        </motion.div>
    )
}

export default Photo