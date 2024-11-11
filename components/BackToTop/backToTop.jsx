"use client"
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

function BackToTop() {
    const [backToTopBtn, setBackToTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopBtn(true)
            }
            else {
                setBackToTopBtn(false)
            }
        })
    }, [])
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div>
            {backToTopBtn && (
                <motion.span
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 25 }}
                    transition={{ duration: 0.75 }}
                    className='fixed right-0 bottom-24 rounded-l-full pr-5 py-1 pl-1 bg-stone-800 border-l-2 border-accent'>
                    <Button
                        variant="outline_stone"
                        size="back_to_top"
                        title='Back to Top'
                        onClick={scrollTop}>
                        <FontAwesomeIcon icon={faCircleChevronUp} className='text-2xl' />
                    </Button>
                </motion.span>
            )}
        </div>
    )
}

export default BackToTop