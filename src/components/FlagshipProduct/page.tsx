"use client";

import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

const FlagshipProduct = () => {
  const appFeatures = [
    { id: 1, text: "Simplified steps for quick reservations" },
    { id: 2, text: "Enjoy discounts available just for app users" },
    { id: 3, text: "Stay informed with live flight notifications" },
    { id: 4, text: "Hassle-free and safe transactions" },
  ];
  return (
    <div className="flex flex-col items-center p-4 bg-[#F8F8F8]">
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex justify-center items-center text-center pt-4">
          <h1 className="text-2rem lg:text-[3rem] font-semibold">
            Our <span className="text-[#154B94]">Flagship</span> Product
          </h1>
        </div>

        {/* Subtext */}
        <div>
          <p className="text-center text-sm lg:text-[1.3rem] mt-2 mb-8 text-[#7E7E7E] w-full lg:w-[40rem] mx-auto">
            Sri Lanka’s first flight booking app, offering seamless bookings,
            best prices, and secure payments for a smarter travel experience
          </p>
        </div>

        {/* Content Row: Image + Text */}
        <div className="w-full pt-4 flex flex-col lg:flex-row items-center lg:items-start justify-between lg:gap-16">
          {/* Image Left */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/FlagshipImg.svg"
              alt="Flagship Product"
              width={300}
              height={300}
              className="rounded-lg w-full h-auto"
            />
          </div>

          {/* Right Content */}
          {/* Right Content */}
          <div className="w-full lg:w-1/2 mt-8 ">
            <div className="text-lg">
              <h1 className="text-[3rem] font-semibold">iCan Fly</h1>
            </div>
            <div>
              <p className="text-[1.2rem] mt-2 mb-8 text-[#7E7E7E] w-full lg:w-[30rem]">
                Experience the ease of booking air tickets anytime, anywhere
                with the iCan Ticketing App.
              </p>
            </div>
            <div className="w-full lg:w-[30rem]">
              {appFeatures.map((feature) => (
                <div key={feature.id} className="flex items-center mb-4">
                  <FaCircleCheck className="text-[#4ac2e6] text-2xl mr-2" />
                  <span className="text-sm ml-2">{feature.text}</span>
                </div>
              ))}
            </div>
            <div className="w-full pt-16 flex flex-row items-center lg:items-start gap-4 lg:gap-6">
              <div className="block space-y-4 items-center justify-center">
                <div>
                  <Image
                    src="/google play.svg"
                    width={200}
                    height={200}
                    alt="Google Play"
                  />
                </div>
                <div>
                  <Image
                    src="/app store.svg"
                    width={200}
                    height={200}
                    alt="App Store"
                  />
                </div>
              </div>
              <div className="block space-y-4 items-center justify-center">
                <Image
                  src="/app-qr.svg"
                  width={140}
                  height={140}
                  alt="QR code"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagshipProduct;
