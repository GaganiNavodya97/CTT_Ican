"use client";

import TrustedAirLines from "@/components/TrustedAirLines/page";
import FlagshipProduct from "@/components/FlagshipProduct/page"; 
import AppDetails from "@/components/AppDetails/page";
import Specialities from "@/components/Specialities/page";

export default function Home() {
  const items=[
    {id: 1, image: "/TrustedAirLines/Sri_Lankan.svg"},
    {id: 2, image: "/TrustedAirLines/qatar.svg"},
    {id: 3, image: "/TrustedAirLines/singapor.svg"},
    {id: 4, image: "/TrustedAirLines/British_Airways.svg"},
    {id: 5, image: "/TrustedAirLines/AirAsia_Logo.svg"},
    {id: 6, image: "/TrustedAirLines/Turkish_airlines_logo.svg"},
    {id: 7, image: "/TrustedAirLines/air_arabia.svg"},
    {id: 8, image: "/TrustedAirLines/Tai.svg"},
  ]

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
        <div className="w-full h-2/3 bg-cover bg-center transition-opacity duration-700 rounded-lg opacity-100 bg-black" style={{ backgroundImage:`url('/landing-page-imge.webp')` }}>
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex text-center lg:w-[30rem] lg:justify-start lg:align-left h-full pt-20 lg:text-left">
              <h1 className="text-4xl lg:text-[3.5rem] text-white font-semibold">Transforming Travel Through Technology</h1>
            </div>
            <div className="flex w-full justify-center align-center text-center lg:w-[30rem] lg:justify-start lg:align-left lg:text-left">
              <span className="text-white test-sm mt-2">Innovative digital solutions for seamless travel experiences.</span>
            </div>
            <div className="mt-4 mb-16 pb-6 flex w-full justify-center align-center text-center lg:justify-start lg:align-left lg:text-left">
              <button className="px-10 py-2 rounded-full text-white bg-[#154B94]">Learn more</button>
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
            <TrustedAirLines items={items}/>
          </div>
        </div>
        <div className="w-full mt-4">
            <FlagshipProduct/>
        </div>
        <div className="w-full mt-4">
            <AppDetails/> 
        </div>
        <div className="w-full mt-4">
            <Specialities/>
        </div>
    </div>
  );
}
