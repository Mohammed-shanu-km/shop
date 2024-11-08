import React from "react";
import image from "../../assets/home.jpg";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const Herosecondsection = () => {
  return (
    <>
      <div className="w-full px-[100px] pt-[100px] flex gap-[100px] md-max:px-[40px] md-max:pt-[70px] sm-max:gap-[50px] sm-max:px-[20px] sm-max:pt-[50px] sm-max:flex sm-max:flex-col-reverse">
        <div className="w-[50%] sm-max:w-[100%]">
          <div className="w-full h-[400px] md-max:h-[400px] sm-max:h-[300px]">
            <img
              className="h-full w-full object-cover rounded-[10px] "
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="w-[50%] flex flex-col gap-[25px] sm-max:w-[100%]">
          <h1
            className="font-[600] text-[35px] leading-[45px] text-[#23262F] sm-max:text-[24px] sm-max:leading-[31px]
"
          >
            We Create your home
            <br /> More Aestetic
          </h1>
          <p className="text-[18px] font-[400] leading-[25px] sm-max:text-[16px] sm-max:leading-[24px]">
            Furnitre power is a software as services for multiperpose business
            management system,{" "}
          </p>
          <div className="flex gap-[20px]">
            <div>
              <IoCheckmarkDoneCircleSharp className="text-[25px]" />
            </div>
            <div className="flex flex-col gap-[7px]">
              <h1 className="font-[600] text-[20px] text-[#23262F] sm-max:text-[18px]">
                Valuation Services
              </h1>
              <p className="text-[16px] font-[400] sm-max:text-[14px]">
                Sometimes features require a short description. This can be
                detailed description
              </p>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <div>
              <IoCheckmarkDoneCircleSharp className="text-[25px]" />
            </div>
            <div className="flex flex-col gap-[7px]">
              <h1 className="font-[600] text-[20px] text-[#23262F] sm-max:text-[18px]">
                Valuation Services
              </h1>
              <p className="text-[16px] font-[400] sm-max:text-[14px]">
                Sometimes features require a short description. This can be
                detailed description
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosecondsection;
