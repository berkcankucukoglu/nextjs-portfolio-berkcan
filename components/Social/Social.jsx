"use client"
import Link from "next/link"
import { EXTERNAL_LINKS } from "@/constants";

function Social() {
    return (
        <div className="flex gap-4 sm:gap-8">
            {EXTERNAL_LINKS.map((item, index) => {
                return (
                    <Link
                        key={index}
                        href={item.path}
                        target="_blank"
                        className="flex justify-center items-center text-white text-4xl hover:text-accent hover:transition-all duration-200 transform hover:scale-110">
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social