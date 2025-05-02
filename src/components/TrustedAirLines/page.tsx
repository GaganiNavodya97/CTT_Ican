"use client";
import React, { useRef, useEffect, useState } from "react";

interface Props {
  items: { id: number; image: string }[];
}

const TrustedAirLines: React.FC<Props> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});
  useEffect(() => {
    items.forEach((item) => {
      const img = new Image();
      img.src = item.image;
      img.onload = () => {
        setLoadedImages((prev) => ({ ...prev, [item.id]: true }));
      };
    });
  }, [items]);
  

  useEffect(() => {
    const container = containerRef.current;
  
    const scrollContainer = () => {
      if (container) {
        const scrollAmount = container.scrollWidth / items.length;
        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    };
  
    intervalRef.current = setInterval(scrollContainer, 3000);
  
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [items]);

  const renderImage = (item: { id: number; image: string }) => (
    <div className="relative w-full h-full">
      {!loadedImages[item.id] && (
        <span className="absolute inset-0 flex justify-center items-center text-gray-500 z-10">
          Loading...
        </span>
      )}
      <img
        src={item.image}
        alt={`Image ${item.id}`}
        className={`object-contain w-full h-full transition-opacity duration-300 py-2 ${
          loadedImages[item.id] ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() =>
          setLoadedImages((prev) => ({ ...prev, [item.id]: true }))
        }
      />
    </div>
  );

  return (
    <div>
        <div className="flex justify-center items-center w-full py-8">
            <h1 className="lg:text-[2rem] font-medium">Our Trusted Airline Partners</h1>
        </div>
      <div className="flex justify-center items-center w-full">
        {/* Desktop view */}
        <div className="hidden lg:flex lg:gap-6 px-8 py-4 lg:grid lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-xl hover:shadow-lg duration-300 cursor-pointer h-[4rem] flex-shrink-0 px-4"
            >
              <div className="flex justify-center items-center h-full">
                {renderImage(item)}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view */}
        <div
          ref={containerRef}
          className="flex gap-4 p-4 overflow-x-auto scroll-smooth w-screen max-w-full lg:grid lg:grid-cols-4 lg:hidden scrollbar-hidden"
          onMouseEnter={() => {
            if (intervalRef.current) clearInterval(intervalRef.current);
          }}
          onMouseLeave={() => {
            intervalRef.current = setInterval(() => {
              const container = containerRef.current;
              if (container) {
                const scrollAmount = container.scrollWidth / items.length;
                container.scrollBy({
                  left: scrollAmount,
                  behavior: "smooth",
                });
              }
            }, 3000);
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-xl hover:shadow-lg duration-300 cursor-pointer h-[3rem] flex-shrink-0 w-32 md:w-64"
            >
              <div className="flex justify-center items-center h-full">
                {renderImage(item)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedAirLines;
