"use client"
import { useSwiper } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function ResearchSliderButtons({ containerStyles, btnStyles, iconStyles }) {
    const swiper = useSwiper();
    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                <FontAwesomeIcon icon={faChevronLeft} className={iconStyles} />
            </button>
            <button className={btnStyles} onClick={() => swiper.slideNext()}>
                <FontAwesomeIcon icon={faChevronRight} className={iconStyles} />
            </button>
        </div >
    )
}

export default ResearchSliderButtons