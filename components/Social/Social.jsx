"use client"
import Link from "next/link"
import { EXTERNAL_LINKS } from "@/constants/externalLinks";

function Social() {
    return (
        <div className="flex gap-8">
            {EXTERNAL_LINKS.map((item, index) => {
                return (
                    <Link
                        key={index}
                        href={item.path}
                        target="_blank"
                        className="w-11 h-11 border border-stone-400 rounded-full flex justify-center items-center text-white text-2xl hover:border-accent hover:text-accent-hover hover:transition-all duration-200">
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social