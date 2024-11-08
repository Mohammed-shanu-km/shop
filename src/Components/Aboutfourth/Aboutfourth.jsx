import React from "react";
import image from '../../assets/hand.jpg'

const Aboutfourth = () => {
  return (
    <div className="w-full px-[100px] pb-[80px] flex flex-row-reverse gap-[100px] md-max:px-[50px] md-small:px-[50px] md-small:gap-[50px] md-small:flex-col sm-max:gap-[50px] sm-max:flex sm-max:flex-col sm-max:px-[20px] ">
      <div className="w-[50%] md-small:w-[100%] sm-max:w-[100%]">
        <div className="flex flex-col gap-[20px]">
          <h1 className="font-[600] text-[40px] leading-[48px] text-[#23262F] sm-max:text-[24px]">
            Our core values
          </h1>
          <div className="h-[2px] w-[100px] bg-[#286f6c] mt-[-15px] sm-max:mt-[-20px]"></div>
          <div className="flex flex-col gap-[20px] pl-[10px] sm-max:pl-[0px]">
            <div className="flex flex-col gap-[8px]">
              <h2 className="font-[600] text-[20px] text-[#23262F]">Responsive Service</h2>
              <p className="text-[16px] font-[400] text-[gray]">
              Best quality products for your home lifestyle. 
              </p>
            </div>
           
       
           
          </div>
        </div>
      </div>
      <div className="w-[50%] md-small:w-[100%] sm-max:w-[100%] ">
        <img className="h-full w-full "  src={image} alt/>
      </div>
    </div>
  );
};

export default Aboutfourth;
