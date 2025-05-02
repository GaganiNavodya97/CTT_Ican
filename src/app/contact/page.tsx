"use client";
import Image from "next/image";
import { CiAt } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <div className="max-w-[1500px] px-4 mx-auto lg:px-4 sm:px-6 lg:px-8 mt-4 mb-4 space-y-4">
        <div className="w-full flex flex-col items-center mt-16">
          <h1 className="text-[#154B94] text-5xl font-semibold lg:text-center">
            Got Questions? <span className="text-[#4BC7E7]">Contact Us</span>
          </h1>
        </div>
        <div className="w-full flex flex-col items-center mt-8">
          <Image
            src="/contact.svg"
            alt="contact"
            width={1500}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <div className="w-full mt-8">
            <div className="flex">
                <div className="w-full lg:w-1/2 flex flex-col items-left justify-start">
                    <h1 className="text-4xl text-[#154B94] font-semibold">
                        Getting <span className="text-[#4BC7E7]">Touch</span>
                    </h1>
                    <p className="text-sm lg:text-[1.3rem] mt-2 mb-8 text-[#7E7E7E] w-full lg:w-[40rem]">
                        Trust is at the heart of what we do. When you choose Ceylon Travel Technologies
                    </p>
                    <div className="flex space-y-4">
                        <div className="p-2 bg-[#F8F8F8] rounded-full flex items-center justify-center">
                            <CiAt className="text-[#154B94] text-lg" />
                        </div>
                        <span className="text-sm  p-2 pl-4 font-semibold">info@ctt.lk</span>
                    </div>
                    <div className="flex space-y-4">
                        <div className="p-2 bg-[#F8F8F8] rounded-full flex items-center justify-center">
                            <FaPhoneAlt  className="text-[#154B94] text-lg" />
                        </div>
                        <span className="text-sm  p-2  pl-4 font-semibold">+94 784 555 222</span>
                    </div>
                    <div className="flex space-y-4">
                        <div className="p-2 bg-[#F8F8F8] rounded-full flex items-center justify-center">
                            <IoLocationSharp className="text-[#154B94] text-lg" />
                        </div>
                        <span className="text-sm  p-2 pl-4 font-semibold">No.9, School Lane, Colombo 03, Sri Lanka.</span>
                    </div>
                </div>
            </div>
        </div>
        <img className="w-fill h-full" src="/banner.png" />
      </div>
    </>
  );
};
export default Contact;
