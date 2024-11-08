import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoAddCircle } from "react-icons/io5";
import product1 from "../../assets/dimaond.jpeg";
import product2 from "../../assets/p2.png";
import product3 from "../../assets/p3.jpeg";
import product4 from "../../assets/p4.jpeg";
import product5 from "../../assets/p5.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Productslider.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function Productslider() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={20}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-cols-4 gap-[20px]">
            <div className="flex flex-col">
              <div className="h-[300px] w-full p-[20px] border border-[#8080805e] rounded-[10px] flex items-center justify-center shadow-lg relative">
                <img className="h-[100px]" src={product1} alt="" />
                <h1 className="absolute bottom-4 right-5">
                  <IoAddCircle className="text-[24px] text-[gray]" />
                </h1>
              </div>
              <h1 className="mt-[10px] text-[16px] font-[600]">
                Ceiling Light
              </h1>
              <p className="text-[12px] font-[200]">$75.00</p>
            </div>

            <div className="flex flex-col">
              <div className="h-[300px] w-full p-[20px] border border-[#8080805e] rounded-[10px] flex items-center justify-center relative shadow-lg">
                <img className="h-[250px]" src={product2} alt="" />
                <h1 className="absolute bottom-4 right-5 ">
                  <IoAddCircle className="text-[24px] text-[gray]" />
                </h1>
              </div>
              <h1 className="mt-[10px] text-[16px] font-[600]">
                Ceiling Light
              </h1>
              <p className="text-[12px] font-[200]">$75.00</p>
            </div>
            <div className="flex flex-col">
              <div className="h-[300px] w-full p-[20px] border border-[#8080805e] rounded-[10px] flex items-center justify-center shadow-lg relative">
                <img className="h-[200px]" src={product3} alt="" />
                <h1 className="absolute bottom-4 right-5 ">
                  <IoAddCircle className="text-[24px] text-[gray]" />
                </h1>
              </div>
              <h1 className="mt-[10px] text-[16px] font-[600]">
                Ceiling Light
              </h1>
              <p className="text-[12px] font-[200]">$75.00</p>
            </div>
            <div className="flex flex-col">
              <div className="h-[300px] w-full p-[20px] border border-[#8080805e] rounded-[10px] flex items-center justify-center shadow-lg relative">
                <img className="h-[200px]" src={product4} alt="" />
                <h1 className="absolute bottom-4 right-5 ">
                  <IoAddCircle className="text-[24px] text-[gray]" />
                </h1>
              </div>
              <h1 className="mt-[10px] text-[16px] font-[600]">
                Ceiling Light
              </h1>
              <p className="text-[12px] font-[200]">$75.00</p>
            </div>
            <div className="flex flex-col">
              <div className="h-[300px] w-full p-[20px] border border-[#8080805e] rounded-[10px] flex items-center justify-center shadow-lg relative">
                <img className="h-[200px]" src={product5} alt="" />
                <h1 className="absolute bottom-4 right-5 ">
                  <IoAddCircle className="text-[24px] text-[gray]" />
                </h1>
              </div>
              <h1 className="mt-[10px] text-[16px] font-[600]">
                Ceiling Light
              </h1>
              <p className="text-[12px] font-[200]">$75.00</p>
            </div>
            <div className="flex flex-col">
              <div className="h-[300px] w-full p-[20px] border border-[#8080805e] rounded-[10px] flex items-center justify-center relative shadow-lg">
                <img className="h-[200px]" src={product3} alt="" />
                <h1 className="absolute bottom-4 right-5 ">
                  <IoAddCircle className="text-[24px] text-[gray]" />
                </h1>
              </div>
              <h1 className="mt-[10px] text-[16px] font-[600]">
                Ceiling Light
              </h1>
              <p className="text-[12px] font-[200]">$75.00</p>
            </div>
            <div className="flex flex-col">
              <div className="h-[300px] w-full p-[20px] border border-[#8080805e] rounded-[10px] flex items-center justify-center shadow-lg relative">
                <img className="h-[200px]" src={product4} alt="" />
                <h1 className="absolute bottom-4 right-5 ">
                  <IoAddCircle className="text-[24px] text-[gray]" />
                </h1>
              </div>
              <h1 className="mt-[10px] text-[16px] font-[600]">
                Ceiling Light
              </h1>
              <p className="text-[12px] font-[200]">$75.00</p>
            </div>
            <div className="flex flex-col">
              <div className="h-[300px] w-full p-[20px] border border-[#8080805e] shadow-lg rounded-[10px] flex items-center justify-center relative">
                <img className="h-[250px]" src={product2} alt="" />
                <h1 className="absolute bottom-4 right-5 ">
                  <IoAddCircle className="text-[24px] text-[gray]" />
                </h1>
              </div>
              <h1 className="mt-[10px] text-[16px] font-[600]">
                Ceiling Light
              </h1>
              <p className="text-[12px] font-[200]">$75.00</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
