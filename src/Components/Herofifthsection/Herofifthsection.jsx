import React from "react";
import Productslider from "../ProductSlider/Productslider";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoAddCircle } from "react-icons/io5";

import { Link } from "react-router-dom";
import { categories } from "../../utils/data";

const Herofifthsection = () => {
  return (
    <>
      <div className="w-full px-[100px] pb-[80px] md-max:px-[50px] md-small:px-[50px]   sm-max:px-[20px] sm-max:py-[40px] ">
        <h1 className="text-[40px]  leading-[45x] font-[600] text-[#23262F] text-center sm-max:text-[24px]">
          Our Brands
        </h1>
        <p className="text-[16px] font-[400] mt-[20px] text-center leading-[30px]  ">
          The products we provide only for you as our service are selected from
          the
          <br className="sm-max:hidden" /> best products with number 1 quality in the world
        </p>
        <div className="mt-[50px] sm-max:mt-[30px]">
          <div className="grid grid-cols-3 gap-[20px] md-small:grid-cols-2 sm-max:grid sm-max:grid-cols-1">
            {categories?.map((item) => (
              <div className="flex flex-col">
                <Link to={item.url}>
                  <div className="h-[350px] p-[20px]  w-full flex items-center justify-center  border border-[#8080805e] rounded-[20px]  shadow-lg relative sm-max:h-[300px]">
                    <img
                      className="h-[300px] object-cover w-full rounded-[10px]  sm-max:h-[250px]"
                      src={item?.image}
                      alt=""
                    />
                  </div>
                </Link>
                <h1 className="mt-[10px] text-[18px] font-[600]">{item?.name}</h1>
                <div>
                
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="mt-[20px] flex items-center justify-center gap-[50px]">
     <div className="h-[30px] w-[40px] rounded-[50%] bg-[white] flex items-center justify-center shadow-white-button"><  IoIosArrowRoundBack   className="text-[23px]"/></div>
       <div className="h-[30px] w-[40px] rounded-[50%] bg-[white] flex items-center justify-center shadow-white-button"><IoIosArrowRoundForward  className="text-[23px]"/></div>
     </div> */}
      </div>
    </>
  );
};

export default Herofifthsection;
