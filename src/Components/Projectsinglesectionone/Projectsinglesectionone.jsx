import React from "react";
import "./Single.css";
import { Link, useParams } from "react-router-dom";
import { categories } from "../../utils/data";

const Projectsinglesectionone = ({data}) => {

  return (
    <>
      <div className="project-hero">
        <div className="px-[100px] py-[100px] md-max:px-[50px] md-small:px-[50px] md-small:py-[50px] sm-max:px-[20px] sm-max:py-[20px]">
          <div className="flex flex-col   mt-[80px]">
            <h1 className="text-[45px] text-[white] font-[600] sm-max:text-[32px]">
              Our Brands
            </h1>
            <Link to={"/"}>
              {/* <h2 className="text-[20px] text-[white] sm-max:text-[16px]">
                Home/ {data?.name}
              </h2> */}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projectsinglesectionone;
