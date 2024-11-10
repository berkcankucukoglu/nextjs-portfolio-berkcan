import Link from "next/link"
import { Button } from "../ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { USER_INFO } from "@/constants";

function Header() {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex items-center justify-between">
                {/* Home Btn as Name for Desktop */}
                <Link href="/">
                    <h1 className="font-semibold text-2xl">
                        {USER_INFO.name}&nbsp;{USER_INFO.surname}
                    </h1>
                </Link>

                {/* nav >to> desktop */}
                <div className="hidden md:flex items-center">
                    <Nav />
                </div>

                {/* nav >to> mobile */}
                <div className="md:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header