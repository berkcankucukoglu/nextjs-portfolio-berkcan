"use client"
import { USER_INFO, FOOTER_CONTENT, FOOTER_AUTHOR, CURRENT_DATE, SITE_LAST_UPDATE_TIME } from '@/constants';
import { motion } from "framer-motion";
import Social from '../Social/Social';

function Footer() {
    return (
        <footer className="py-8 ">
            <div className="container mx-auto flex flex-col gap-4">
                {/* border */}
                <div className="w-full border-t border-stone-600"></div>
                {/* top part */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    {/* quote */}
                    <div className="flex flex-col gap-2">
                        <motion.p
                            whileInView={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-sm leading-relaxed">{FOOTER_CONTENT}
                        </motion.p>
                        <motion.p
                            whileInView={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-sm leading-relaxed italic">
                            ―&nbsp;{FOOTER_AUTHOR}
                        </motion.p>
                    </div>
                    {/* icons */}
                    <Social />
                </div>
                {/* bottom part */}
                <div>
                    <motion.p
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-sm italic leading-relaxed tracking-tighter text-center text-stone-500 md:text-start">
                        ©&nbsp;{CURRENT_DATE.year}&nbsp;Made by&nbsp;{USER_INFO.name}&nbsp;{USER_INFO.surname}.&nbsp;<span className='font-bold not-italic capitalize'>Last Update:&nbsp;{SITE_LAST_UPDATE_TIME}</span>
                    </motion.p>
                </div>
            </div>
        </footer>
    )
}

export default Footer