import React from "react";
import "./Heroseventhsection.css";

const Heroseventhsection = () => {
  return (
    <>
      <div  className="hero-main flex gap-[100px] sm-max:gap-[0px] sm-max:flex sm-max:flex-col sm-max:items-center sm-max:justify-center    ">
        <div className="w-[50%] sm-max:w-[100%] sm-max:hidden "></div>
        <div className="w-[50%] sm-max:w-[100%]  ">
          <div className="flex flex-col gap-[20px]">
            <h1 className="font-[600] text-[40px] leading-[52px] text-[white] sm-max:text-[24px] sm-max:text-center sm-max:leading-[31px]">
              Get more discount
              <br /> Off your order
            </h1>
            <p className="text-[16px] font-[400] text-[white] sm-max:text-center">
              Join our mailing list
            </p>
            <div className=" sm-max:items-center sm-max:flex justify-center sm-max:ml-[-1px]">
            
              <button className="text-[white] font-[600] text-[1rem] px-[3rem] py-[0.7rem] bg-[black] rounded-lg sm-max:px-[2rem] ">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heroseventhsection;
