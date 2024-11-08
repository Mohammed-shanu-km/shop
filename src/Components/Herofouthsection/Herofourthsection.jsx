import React from "react";
import last from "../../assets/aiwa.jpg";
import { TbPointFilled } from "react-icons/tb";

const Herofourthsection = () => {
  return (
    <>
      <div className="w-full px-[100px] pt-[180px] pb-[80px] flex flex-row-reverse   gap-[100px] md-max:px-[50px] md-max:items-center md-small:px-[50px] md-small:pt-[150px]  md-small:flex-col-reverse md-small:gap-[60px] sm-max:gap-[50px] sm-max:px-[20px] sm-max:flex sm-max:flex-col sm-max:flex-col-reverse sm-max:pb-[40px]">
        <div className="w-[50%] md-small:w-[100%] sm-max:w-[100%]">
          <h1
            className="text-[35px] leading-[45px] font-[600] text-[#23262F] sm-max:text-[24px] sm-max:leading-[31px]
"
          >
            Cuddles
          </h1>
          <div className="flex gap-[10px] mt-[20px]">
            <div className=" md-small:hidden sm-max:hidden">
              <TbPointFilled className=" text-[20px] mt-[10px] sm-max:hidden" />
            </div>
            <p className="text-[16px] font-[400]  leading-[30px] mt-[5px] ">
              We believe that everyone deserves a peaceful, restorative night’s
              sleep in an environment of warmth and comfort. Our products are
              designed to envelop you in coziness, turning everyday sleep into a
              comforting embrace. Committed in creating home textile products
              that promote relaxation, well-being and a sense of sanctuary.
            </p>
          </div>
          <div className="flex gap-[10px] mt-[20px]">
            <div className="  md-small:hidden sm-max:hidden">
              <TbPointFilled className="text-[black] text-[20px] mt-[5px] sm-max:hidden" />
            </div>
            <p className="text-[16px] font-[400]  leading-[30px] ">
            Individuals and families seeking high-quality,
              comfortable and cozy bedding solutions that enhance their sleep
              environment.
            </p>
          </div>
          <div className="flex gap-[10px] mt-[20px]">
            <div className=" md-small:hidden sm-max:hidden">
              <TbPointFilled className="text-[black] text-[20px] mt-[5px] sm-max:hidden" />
            </div>
            <p className="text-[16px] font-[400]  leading-[30px] ">
             reliable, high-quality, warm, and comforting.
            </p>
          </div>
        </div>
        <div className="w-[50%] md-small:w-[100%] sm-max:w-[100%]">
          <img
            className="h-[400px] w-full object-cover rounded-[10px] md-small:h-[400px] sm-max:h-[300px]"
            src={last}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Herofourthsection;
