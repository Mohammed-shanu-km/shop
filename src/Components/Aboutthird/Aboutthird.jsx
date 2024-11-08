import React from "react";

const Aboutthird = () => {
  return (
    <div className="w-full pb-[80px]  md-small:pb-[50px] sm-max:pb-[40px] sm-max:">
      <div className="h-auto w-full bg-[#045c50] p-[100px] md-max:p-[50px] md-small:p-[50px] sm-max:p-[20px]">
        <div className="flex items-center w-full gap-[100px]  md-small:flex-col md-small:gap-[20px] sm-max:flex-col sm-max:gap-[20px]">
          <div className="flex flex-col  w-[20%] md-small:w-[100%]  sm-max:w-[100%] ">
            <h1 className="text-[32px] text-[white] sm-max:text-[25px]">Our Mission</h1>
          </div>
          <div className="w-[80%]  md-small:w-[100%] sm-max:w-[100%]">
          <p className="text-[18px] font-[200] leading-[32px] text-white sm-max:text-[16px]">
            Combine tradition with innovation to deliver premium, eco-friendly
            home textile solutions. Through our in-house brands, we are
            dedicated to creating beautiful, durable and sustainable products
            that meet the evolving needs of modern households, while
            contributing positively to the environment and society.
          </p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white my-8"></div>
        <div className="flex justify-between gap-[100px] md-small:flex-col md-small:gap-[20px] sm-max:flex-col sm-max:gap-[10px]">
          <div className="flex flex-col gap-[10px] w-[20%] md-small:w-[100%] sm-max:w-[100%]">
            <h1 className="text-[32px] text-[white] sm-max:text-[25px]">Our Vision </h1>
          </div>
          <div className="w-[80%] md-small:w-[100%] sm-max:w-[100%]">
          <p className="text-[18px] font-[200] leading-[32px] text-white sm-max:text-[16px]">
          To be a global leader in the home textile industry, crafting innovative, sustainable and high-quality products that enhance the comfort and style of homes worldwide. 
          </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Aboutthird;
