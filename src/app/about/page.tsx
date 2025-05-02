import Image from "next/image";
import React from "react";



const About = () => {

    return (
        <div className="max-w-[1500px] mx-auto lg:px-4 px-4 sm:px-6 lg:px-8 mt-4 mb-4 space-y-4">
            <div className="p-5 lg:p-10">
                {/* Hero Section */}
                <section className="flex flex-col gap-4 lg:gap-8 p-1 lg:p-4 bg-white">
                    <h2 className="[font-family:'DM_Sans',Helvetica] font-semibold text-2xl lg:text-4xl text-[#4BC7E7] tracking-[0] leading-[normal] whitespace-nowrap">
                        We Are CTT
                    </h2>
                    <h1 className="w-[1110px] text-3xl lg:text-7xl leading-tight font-bold">
                        <span className="text-[#154b94] font-h1">
                            Transforming Travel
                        </span>
                        <br />
                        <span className="text-[#154b94] font-h1">Through </span>
                        <span className="text-[#333333] font-h1">Technology</span>
                    </h1>


                </section>

                {/* Banner Image */}
                {/* Banner Image */}
                <div className="w-full h-[300px] lg:h-[400px] relative mt-5">
                    <Image
                        src="/plane.png"
                        alt="Ceylon Travel Technologies"
                        fill
                        className="object-cover rounded-lg"
                        priority
                    />
                </div>


                {/* Our Story Section */}
                <section className="">
                    <div className="grid text-[#333333] grid-cols-1 lg:grid-cols-[auto_1fr] gap-x-64 gap-y-6 mt-10 lg:mt-20 items-start text-lg">
                        {/* Heading + Arrow */}
                        <div className="flex items-center gap-4">
                            <div className="text-4xl lg:text-6xl text-[#154B94] font-bold">
                                Our Story
                            </div>
                            <img
                                className="w-[60px] h-[60px]"
                                alt="Arrow insert"
                                src="/a.png"
                            />
                        </div>

                        {/* Paragraph */}
                        <div className="max-w-xl">
                            <div className="text-[#333333] text-lg mt-0 lg:mt-4">
                                Founded in 2025, Ceylon Travel Technology (CTT) is a pioneering
                                travel technology company dedicated to reshaping the way people
                                plan, book, and experience travel. Our mission is to build
                                cutting-edge digital solutions that make travel easier, smarter,
                                and more accessible for everyone.
                            </div>
                        </div>
                    </div>



                    <div className="grid text-[#333333] grid-cols-1 lg:grid-cols-[auto_1fr] gap-x-15 gap-y-6 mt-20 items-start text-lg">
                        {/* Heading + Arrow */}


                        <img
                            className="w-full h-fill"
                            alt="Arrow insert"
                            src="/people.png"
                        />


                        {/* Paragraph */}
                        <div className="max-w-xl">
                            <div className="text-[#4BC7E7] text-5xl font-semibold">Our Vision</div>
                            <div className="text-[#333333] text-lg mt-4">
                                At Ceylon Travel Technology (CTT), our vision is to revolutionize the travel industry through cutting-edge digital innovations. We aim to bridge the gap between travelers and technology by offering seamless, secure, and efficient solutions that simplify the entire travel experience.
                            </div>
                        </div>
                    </div>


                </section>
            </div>




            <img className="w-fill h-full" src="/banner.png" />


        </div>
    );
};
export default About;