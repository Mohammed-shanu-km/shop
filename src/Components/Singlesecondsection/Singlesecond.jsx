import React, { useEffect, useState, useRef } from "react";
import Productdetaildslider from "../Productsdetailsilder/Productdetaildslider";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import product1 from "../../assets/wood1.jpg";
import product2 from "../../assets/wood2.jpg";
import { Link, useParams } from "react-router-dom";
import { categories } from "../../utils/data";

const Singlesecond = ({ data }) => {
  const [indexes, setIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleProductClick = (index) => {
    setIndex(index);
    if (sliderRef.current) {
      sliderRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className="">
        <div className="w-full px-[100px] py-[80px] sm-max:px-[20px] sm-max:py-[50px]">
          <div className="">
            <h1 className=" text-[32px] font-[600] sm-max:text-[24px] ">
              {data?.name}
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-[20px] mt-[20px] sm-max:grid sm-max:grid-cols-1">
            {data?.products?.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div
                  onClick={() => handleProductClick(index)}
                  className="h-[350px] p-[20px] w-full flex items-center justify-center border border-[#8080805e] rounded-[20px] shadow-lg relative cursor-pointer sm-max:h-[300px]"
                >
                  <img
                    className="h-[300px] object-cover w-full rounded-[10px] sm-max:h-[250px]"
                    src={item?.images[0]}
                    alt=""
                  />
                </div>
                <h1 className="mt-[10px] text-[18px] font-[600]">
                  {item?.product_name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        ref={sliderRef}
        className="w-full px-[100px] pt-[0px] pb-[80px] flex gap-[100px] sm-max:px-[20px] sm-max:flex sm-max:gap-[50px] sm-max:flex-col"
      >
        <div className="w-[50%] sm-max:w-[100%]">
          <Productdetaildslider data={data} index={indexes} />
        </div>
        <div className="w-[50%] mt-[10px] sm-max:w-[100%]">
          <div className="flex flex-col gap-[30px]">
            <h1 className="text-[24px] font-[500] text-[#23262f]">
              {data?.products[indexes]?.product_name}
            </h1>
            <div className="flex gap-[20px]">
              <p className="font-[400] text-[18px]">Size</p>
              <p>:</p>
              <p className="text-[gray]">Opulence</p>
            </div>
            <div className="flex gap-[20px]">
              <p className="font-[400] text-[18px]">Size</p>
              <p>:</p>
              <p className="text-[gray]">Opulence</p>
            </div>
            <div className="flex gap-[20px]">
              <p className="font-[400] text-[18px]">Size</p>
              <p>:</p>
              <p className="text-[gray]">Opulence</p>
            </div>
            <div className="flex gap-[20px]">
              <p className="font-[400] text-[18px]">Size</p>
              <p>:</p>
              <p className="text-[gray]">Opulence</p>
            </div>
            <h2 className="text-[18px] font-[600]">Description</h2>
            <div className="flex gap-[10px] items-center">
              <div className="flex items-center bg-[#23262f] h-[40px] w-[40px] justify-center">
                <RiFacebookFill className="text-[18px] text-white" />
              </div>
              <div className="flex items-center bg-[#23262f] h-[40px] w-[40px] justify-center">
                <FaWhatsapp className="text-[white] text-[18px]" />
              </div>
              <div className="flex items-center bg-[#23262f] h-[40px] w-[40px] justify-center">
                <FaInstagram className="text-[white] text-[18px]" />
              </div>
              <div className="flex items-center bg-[#23262f] h-[40px] w-[40px] justify-center">
                <RiYoutubeLine className="text-white text-[18px]" />
              </div>
              <button className="text-[white] font-[600] text-[1rem] px-[3rem] py-[0.7rem] bg-[#286f6c] rounded backdrop-blur-[2px] sm-max:px-[2rem]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singlesecond;
