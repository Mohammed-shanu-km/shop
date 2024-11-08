import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Storeswiper from "../Storeswiper/Storeswiper";

const Herothirdsection = () => {
  return (
    <div
    
      className="w-full pl-[100px] py-[100px]  flex  gap-[30px] sm-max:pl-[20px] sm-max:py-[50px] sm-max:flex sm-max:flex-col "
    >
      <div className="w-[20%] h-[350px] p-[20px] flex flex-col justify-between sm-max:flex sm-max:flex-col  sm-max:w-[100%] sm-max:h-[70px] sm-max:p-[0px]">
        <h1 className="text-[35px] leading-[45px] font-[600] text-[#23262F] sm-max:text-[24px] sm-max:leading-[31px]">
          New In Store Now
        </h1>
        <p className="font-[400] text-[16px] sm-max:mt-[5px]  ">
          Get the latest items immediately with promo prices
        </p>
        <div className="sm-max:hidden">
          <button className="flex items-center gap-[5px] text-[16px] underline font-[500]">
            Check All
          </button>
        </div>
      </div>
      <div className="w-[80%] sm-max:w-[100%] sm-max:mt-[20px]">
        <Storeswiper />
      </div>
    </div>
  );
};

export default Herothirdsection;
