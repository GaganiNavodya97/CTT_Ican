"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-[#154B94] text-white shadow-md mt-auto py-16">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="block lg:flex justify-between items-center mb-8">
                <div className="mb-4 lg:mb-0 lg:flex w-full justify-between items-center lg:w-1/4 lg:justify-start lg:align-left">
                    <Image src="/logo-white.png" alt="Logo" width={80} height={80} className="inline-block mr-2" />
                </div>
                <div className="w-full my-4 lg:my-0 lg:w-1/2">
                    <nav className="w-full block space-y-4 items-center justify-center lg:flex lg:space-y-0 lg:space-x-8">
                        <div><Link href="/" className="">Home</Link></div>
                        <div><Link href="/services" className="">Privacy Policy</Link></div>
                        <div><Link href="/about" className="">About Us</Link></div>
                        <div><Link href="/contact" className="">Contact us</Link></div>
                    </nav>
                </div>
                <div className="w-full mt-8 lg:mt-0 lg:w-1/4">
                    <div className="w-full flex space-x-8 items-center justify-center">
                        <Link href="">
                            <FaFacebook className="text-2xl text-white hover:text-[#154B94] transition duration-300" />
                        </Link>
                        <Link href="">
                            <FaInstagram className="text-2xl text-white hover:text-[#154B94] transition duration-300" />
                        </Link>
                        <Link href="">
                            <BsTwitterX className="text-2xl text-white hover:text-[#154B94] transition duration-300" />
                        </Link>
                        <Link href="">
                            <FaLinkedin className="text-2xl text-white hover:text-[#154B94] transition duration-300" />
                        </Link>
                    </div>
                </div>
            </div>
            <hr className="mb-8 lg:hidden"/>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="block space-y-4 items-center justify-center lg:hidden">
                    <div><Link href="/" className="text-sm">Privacy Policy</Link></div>
                    <div><Link href="/" className="text-sm">Terms of Service</Link></div>
                    <div><Link href="/" className="text-sm">Cookies Settings</Link></div>
                </div>
                <div className="mt-4 w-full lg:mt-0 lg:flex space-x-8 items-center justify-center">
                    <p className="text-sm">© 2023 Ceylon Travel Technologies. All rights reserved.</p>
                    <Link href="/" className="hidden lg:flex text-sm">Privacy Policy</Link>
                    <Link href="/" className="hidden lg:flex text-sm">Terms of Service</Link>
                    <Link href="/" className="hidden lg:flex text-sm">Cookies Settings</Link>
                </div>
            </div>
            </div>
        </footer>
    );
}
export default Footer;