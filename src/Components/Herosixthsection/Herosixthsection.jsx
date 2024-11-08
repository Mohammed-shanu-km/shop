import React from "react";
import image from '../../assets/ai.jpg'
import Testimonial from "../Testimonial/Testimonial";

const Herosixthsection = () => {
  return (
    <div className="w-full px-[100px] py-[80px] flex gap-[50px] items-center">
      <div className="w-[50%]">
        <h1  className="font-[600] text-[35px] leading-[45px] text-[#23262F]">What people are saying about us</h1>
        <div className="mt-[30px]">
            <Testimonial/>
        </div>
      </div>
      <div className="w-[50%]">
        <img className="h-full w-full object-cover rounded-[10px]" src={image} alt=""/>
      </div>
    </div>
  );
};

export default Herosixthsection;
