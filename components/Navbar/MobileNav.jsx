"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from '../ui/sheet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { NAV_LINKS } from '@/constants/navLinks';
import { USER_INFO } from '@/constants';


function MobileNav() {
    const pathName = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <FontAwesomeIcon icon={faChartSimple} size='2xl' rotation={270} className='hover:text-accent-hover' />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetTitle className="sr-only">{null}</SheetTitle>
                <SheetDescription className="sr-only">{null}</SheetDescription>
                <div className="my-20 text-center text-2xl">
                    {/* Home Btn as Name for Mobile */}
                    <Link href="/">
                        <SheetTrigger className="font-semibold text-xl">{USER_INFO.name}&nbsp;{USER_INFO.surname}</SheetTrigger>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {NAV_LINKS.map((link, index) => {
                        return <Link
                            href={link.path}
                            key={index}>
                            <SheetTrigger className={`${link.path === pathName && "text-accent border-b-2 border-accent"} w-auto h-8 box-border text-xl capitalize font-medium hover:text-accent-hover transition-all`}>{link.name}</SheetTrigger>
                        </Link>
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav