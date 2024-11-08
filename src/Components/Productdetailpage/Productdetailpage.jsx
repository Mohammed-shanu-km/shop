import React from "react";
import Productdetaildslider from "../Productsdetailsilder/Productdetaildslider";
import product1 from "../../assets/dimaond.jpeg";
import product2 from "../../assets/p2.png";
import product3 from "../../assets/pill.jpg";
import product4 from "../../assets/bed.jpeg";
import product5 from "../../assets/spread.jpg";
import image from "../../assets/com.jpg";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { TbPointFilled } from "react-icons/tb";

const Productdetailpage = () => {
  return (
    <>
      <div className="w-full px-[100px] pt-[100px] md-max:px-[50px]  md-small:px-[50px] sm-max:px-[20px] sm-max:pt-[50px]">
        <div className="flex gap-[100px] md-max:items-center md-small:flex-col md-small:gap-[50px] sm-max:flex-col sm-max:gap-[50px] ">
          <div className="w-[50%] md-small:w-[100%]  sm-max:w-[100%]">
            {/* <Productdetaildslider /> */}
            <div className="h-[400px] w-full p-[20px] border border-[#8080805e] rounded-[10px] flex items-center justify-center shadow-lg md-small:h-[450px] ">
              <img
                className="h-[360px] w-full object-cover md-small:h-[400px]"
                src={product4}
                alt=""
              />
            </div>
          </div>
          <div className="w-[50%] md-small:w-[100%] sm-max:w-[100%]">
            <div className="flex flex-col gap-[20px] ">
              <h1 className="font-[600] text-[30px] leading-[34px] text-[#23262F]">
                Cuddles
              </h1>

              <h1 className="font-[600] text-[18px] text-[#23262F]">
                About this item
              </h1>
              <div className="flex gap-[10px] mt-[0px] ">
                <div className=" md-small:hidden sm-max:hidden">
                  <TbPointFilled className=" text-[20px] mt-[10px] " />
                </div>
                <p className="text-[16px] font-[400]  leading-[30px] mt-[5px] ">
                  We believe that everyone deserves a peaceful, restorative
                  night’s sleep in an environment of warmth and comfort. Our
                  products are designed to envelop you in coziness, turning
                  everyday sleep into a comforting embrace. Committed in
                  creating home textile products that promote relaxation,
                  well-being and a sense of sanctuary.
                </p>
              </div>
              <div className="flex gap-[10px] ">
                <div className=" md-small:hidden sm-max:hidden">
                  <TbPointFilled className="text-[black] text-[20px] mt-[5px]" />
                </div>
                <p className="text-[16px] font-[400]  leading-[30px] ">
                  Individuals and families seeking high-quality, comfortable and
                  cozy bedding solutions that enhance their sleep environment.
                </p>
              </div>
              <div className="flex gap-[10px]">
                <div className="md-small:hidden sm-max:hidden">
                  <TbPointFilled className="text-[black] text-[20px] mt-[5px]" />
                </div>
                <p className="text-[16px] font-[400]  leading-[30px] ">
                  reliable, high-quality, warm, and comforting.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[80px] sm-max:py-[40px]">
          <h1 className="font-[600] text-[32px] leading-[34px] text-[#23262F]">
            Our Brands
          </h1>
          <div className="grid grid-cols-3 gap-[20px] mt-[30px] md-small:grid-cols-2 sm-max:grid-cols-1">
            <div className="flex flex-col">
              <div className="h-[350px] w-full p-[20px] border border-[#8080805e] rounded-[10px] flex items-center justify-center shadow-lg ">
                <img
                  className="h-[300px] object-cover "
                  src={product5}
                  alt=""
                />
              </div>
              <h1 className="mt-[10px] text-[16px] font-[600]">Trends</h1>
            </div>
            <div className="flex flex-col">
              <div className="h-[350px] w-full p-[20px] border border-[#8080805e] rounded-[10px] flex items-center justify-center shadow-lg ">
                <img
                  className="h-[300px] object-cover "
                  src={product3}
                  alt=""
                />
              </div>
              <h1 className="mt-[10px] text-[16px] font-[600]">Flowers</h1>
            </div>
            <div className="flex flex-col">
              <div className="h-[350px] w-full p-[20px] border border-[#8080805e] rounded-[10px] flex items-center justify-center shadow-lg ">
                <img
                  className="h-[300px] w-full object-cover "
                  src={image}
                  alt=""
                />
              </div>
              <h1 className="mt-[10px] text-[16px] font-[600]">Diamonds</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productdetailpage;
