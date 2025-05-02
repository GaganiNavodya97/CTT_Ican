"use client";

import Image from "next/image";

const AppDetails = () => {
  return (
    <div className="max-w-[1500px] mx-auto lg:px-4 sm:px-6 lg:px-8 mt-4 mb-4 space-y-4">
       <div className="w-ull flex flex-col items-center lg:items-start lg:text-left">
        <div className="w-full space-y-4 lg:space-y-0 lg:flex justify-center lg:gap-4">
          <div className="w-full lg:w-1/3 bg-[#F8F8F8] rounded-lg p-6 ">
            <h3 className="text-xl font-semibold mb-2">
              Instant Flight Bookings
            </h3>
            <p className="text-[#7E7E7E]">
              Search, compare, and book flights effortlessly from your
              smartphone.
            </p>
            <div className="mt-2">
              <Image src="/app-01.svg" width={250} height={250} alt="app-01" />
            </div>
          </div>
          <div className="w-full lg:w-2/3 bg-[#F8F8F8] rounded-lg p-8">
            <div className="lg:flex lg:space-x-3">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Best Price Comparisons
                </h3>
                <p className="text-[#7E7E7E] lg:w-[20rem]">
                  Get the most competitive rates by comparing multiple airlines
                  in real-time.
                </p>
                <div className="mt-2 space-y-4 items-center justify-center">
                  <Image
                    src="/app-02.svg"
                    width={300}
                    height={200}
                    alt="app-01"
                  />
                  <Image
                    src="/app-03.svg"
                    width={300}
                    height={200}
                    alt="app-01"
                  />
                </div>
              </div>
              <div className="mt-16">
                <Image
                  src="/app-01.svg"
                  width={300}
                  height={300}
                  alt="app-01"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-ull flex flex-col items-center lg:items-start lg:text-left">
      <div className="w-full space-y-4 lg:space-y-0 lg:flex justify-center lg:gap-4">
          <div className="w-full lg:w-2/3 bg-[#F8F8F8] rounded-lg p-6 ">
          <div className="lg:flex lg:space-x-3">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                Easy Booking Management
                </h3>
                <p className="text-[#7E7E7E] lg:w-[20rem]">
                   Modify, reschedule, or cancel your flights effortlessly, all in one place
                </p>
                <div className="mt-2 space-y-4 items-center justify-center">
                  <Image
                    src="/app-04.svg"
                    width={300}
                    height={200}
                    alt="app-01"
                  />
                </div>
              </div>
              <div className="mt-16">
                <Image
                  src="/app-05.svg"
                  width={300}
                  height={300}
                  alt="app-01"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 bg-[#F8F8F8] rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-2">
                OCR Passport Scanning
            </h3>
            <p className="text-[#7E7E7E]">
                Quickly scan and auto-fill passport details for a hassle-free booking process
            </p>
            <div className="mt-2">
              <Image src="/app-06.svg" width={250} height={250} alt="app-01" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppDetails;
