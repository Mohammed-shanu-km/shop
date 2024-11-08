import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import man from "../../assets/man.jpeg";
import { Autoplay } from "swiper/modules"; // Only import Autoplay module

export default function Testimonial() {
  return (
    <>
      <Swiper
        pagination={false} // Completely hide pagination bullets
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Set autoplay with delay
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex gap-[10px]">
            <div className="flex gap-[10px] items-center">
              <img
                className="h-[70px] w-[70px] rounded-full object-cover"
                src={man}
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="mt-[10px] text-[16px] font-[600]">Josh Smith</h2>
                <p className="text-[12px] font-[200]">
                  Manager of The New York Times
                </p>
              </div>
            </div>
          </div>
          <p className="mt-[40px] text-[16px] font-[400] leading-[30px]">
            “They have a perfect touch for making something so professional,
            interesting, and useful for a lot of people.”
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-[10px]">
            <div className="flex gap-[10px] items-center">
              <img
                className="h-[70px] w-[70px] rounded-full object-cover"
                src={man}
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="mt-[10px] text-[16px] font-[600]">Josh Smith</h2>
                <p className="text-[12px] font-[200]">
                  Manager of The New York Times
                </p>
              </div>
            </div>
          </div>
          <p className="mt-[40px] text-[16px] font-[400] leading-[30px]">
            “They have a perfect touch for making something so professional,
            interesting, and useful for a lot of people.”
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-[10px]">
            <div className="flex gap-[10px] items-center">
              <img
                className="h-[70px] w-[70px] rounded-full object-cover"
                src={man}
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="mt-[10px] text-[16px] font-[600]">Josh Smith</h2>
                <p className="text-[12px] font-[200]">
                  Manager of The New York Times
                </p>
              </div>
            </div>
          </div>
          <p className="mt-[40px] text-[16px] font-[400] leading-[30px]">
            “They have a perfect touch for making something so professional,
            interesting, and useful for a lot of people.”
          </p>
        </SwiperSlide>

        {/* Add more SwiperSlide components as needed */}
        
      </Swiper>
    </>
  );
}
