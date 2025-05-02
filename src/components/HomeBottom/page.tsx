"use client";

import { BsArrowUpRightCircleFill } from "react-icons/bs";

const HomeBottom = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-[#4BC7E7]">
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16">
          <button className="bg-white px-8 py-2 rounded-full text-[#154B94]">
            Get In Touch
          </button>
        </div>
        <div className="flex justify-between mt-16 pb-16">
          <div className="w-2/3">
            <h1 className="text-7xl font-semibold text-white">
              <span className="text-[#154B94]">Let’s Make</span> Travel Better{" "}
              <span className="text-[#154B94]">Together</span>
            </h1>
          </div>
          <div>
            <BsArrowUpRightCircleFill className="text-8xl text-[#154B94]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBottom;
