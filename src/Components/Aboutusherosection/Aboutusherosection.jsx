import React from "react";
import "./Aboutherosection.css";
import { Link } from "react-router-dom";

const Aboutusherosection = () => {
  return (
    <div className="about-herosection">
      <div className="px-[100px] py-[100px] md-max:px-[50px] md-small:px-[40px] sm-max:px-[20px] sm-max:py-[20px]">
        <div className="flex flex-col  mt-[80px]">
          <h1 className="text-[45px] text-[white] font-[600] sm-max:text-[32px]">
            Abouts Us
          </h1>
          <Link to={"/"}>
            <h2 className="text-[20px] text-[white] sm-max:text-[16px] ">
              Home/About
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Aboutusherosection;
