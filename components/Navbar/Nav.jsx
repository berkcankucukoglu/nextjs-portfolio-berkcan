"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants/navLinks";

function Nav() {
    const pathName = usePathname();
    return (
        <nav className="flex gap-8 items-start h-8 box-border">
            {NAV_LINKS.map((link, index) => {
                return <Link href={link.path} key={index} className={`${link.path === pathName && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent-hover transition-all`}>
                    {link.name}</Link>
            })}

        </nav>
    )
}

export default Nav