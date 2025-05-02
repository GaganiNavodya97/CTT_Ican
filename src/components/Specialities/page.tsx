"use client";

import { GiPriceTag } from "react-icons/gi";
import { MdOutlinePattern } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { CiGlobe } from "react-icons/ci"
const Specialities = () => {
    return (
        <div className="flex flex-col items-center p-6 bg-[#F8F8F8]">
            <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-full flex space-x-4">
                    <div className="w-full lg:w-1/2 rounded-lg py-16 px-6 text-white bg-cover bg-center" style={{ backgroundImage:`url('/bg-02.svg')` }}>
                        <h1 className="text-4xl font-semibold">Why</h1>
                        <h1 className="text-4xl font-semibold">Choose Us ?</h1>
                        <p className="text-sm mt-4 lg:w-1/2 pb-4">At Ceylon Travel Technology (CTT), we are committed to revolutionizing the way you travel. Here’s why travelers and partners trust us</p>
                    </div>
                    <div className="w-full lg:w-1/2 rounded-lg grid grid-flow-col grid-rows-2 grid-cols-2">
                        <div className="p-6 bg-[#154B94] text-white rounded-tl-lg">
                            <GiPriceTag className="text-3xl" />
                            <h1 className="text-2xl mt-4 w-30">Competitive Pricing</h1>
                        </div>
                        <div className="p-6 bg-[#4BC7E7] text-[#154B94] rounded-bl-lg">
                            <MdSecurity className="text-3xl" />
                            <h1 className="text-2xl mt-4 w-30">Secure & Reliable</h1>
                        </div>
                        <div className="p-6 bg-[#4BC7E7] text-[#154B94] rounded-tr-lg">
                            <MdOutlinePattern className="text-3xl" />
                            <h1 className="text-2xl mt-4 w-30">Seamless Experience</h1>
                        </div>
                        <div className="p-6 bg-[#154B94] text-white rounded-br-lg">
                            <CiGlobe className="text-3xl" />
                            <h1 className="text-2xl mt-4 w-40">Local & Global Partnerships</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Specialities;