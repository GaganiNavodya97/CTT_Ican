"use client";

import Link from "next/link";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();
    const linkClass = (href: string) =>
        pathname === href
            ? "text-[#154B94]"
            : "text-gray-700 hover:text-[#154B94]";
    return(
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-0 md:py-4 ">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-xl font-bold">
                      <Image src="/logo.svg" alt="Logo" width={40} height={40} className="inline-block mr-2" />
                    </Link>
                    {/* Navigation Menu (Desktop) */}
                    <nav className="hidden md:flex space-x-8 md:items-center">
                        <Link href="/" className={linkClass("/home")}>Home</Link>
                        <Link href="/services" className={linkClass("/services")}>Privacy Policy</Link>
                        <Link href="/about" className={linkClass("/about")}>About Us</Link>
                        <Link href="/contact" className={linkClass("/contact")}>Contact us</Link>
                    </nav>
                    {/* Hamburger Menu (Mobile) */}
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-700 hover:text-[#154B94] focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md p-2" aria-label="Toggle Menu">
                            <CiMenuBurger className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;