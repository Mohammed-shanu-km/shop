import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-[#045c50]">
      <div className="px-[100px] py-[40px] lg-small:px-[80px] md-max:px-[40px] md-small:px-[20px] sm-max:px-[15px] ">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[50px] w-[100%]">
            <h1 className="text-[42px] text-[white] max-w-[50%] leading-[60px] font-[500] lg-small:text-[50px] lg-small:leading-[60px] md-max:text-[50px] md-max:leading-[60px] md-small:text-[45px] md-small:max-w-[100%] md-small:text-[35px] md-small:leading-[50px] sm-max:text-[32px] sm-max:leading-[45px] sm-max:max-w-[100%] ">
            Best Quality Products For Your{" "}
              <span className="text-[white]">Home Lifestyle</span>
            </h1>
            {/* <div className="flex justify-between w-[100%]">
            <div className="flex gap-[20px] text-[white] text-[18px]">
              <a href="#home">Home</a>
              <a href="#service">Service</a>
              <a href="#project">Project</a>
              <a href="#contact">Contact</a>
            </div>
            </div> */}
            <div className="flex justify-between sm-max:flex-col gap-[50px] ">
              <div className="flex gap-[20px] text-[white] text-[18px] sm-max:text-[16px]">
                <Link to={'/'}>
              <h2 >Home</h2>
              </Link>
              <Link to={'/about-us'}>
              <h2 >About Us</h2>
              </Link>
              <Link to={'/wpc-doors-and-frames'}>
              <h2 >Brands</h2>
              </Link>
              <Link to={'/contact-us'}>
              <h2 >Contact Us</h2>
              </Link>

              </div>
              <div className="flex gap-[20px]">
              <FaFacebook className="text-[white] text-[20px]" />
          <FaInstagram className="text-[white] text-[20px]" />
          <FaWhatsapp className="text-[white] text-[20px] " />

              </div>

            </div>
          
          </div>
          {/* <div className="flex gap-[20px] mb-[-200px] sm-max:hidden">
          <FaFacebook className="text-[white] text-[20px]" />
          <FaInstagram className="text-[white] text-[20px]" />
          <FaWhatsapp className="text-[white] text-[20px] " />
          </div> */}
        
        </div>
        <div className="w-[100%] h-[1px] bg-[#8b8686] mt-[70px]"></div>
        <div className="flex items-center justify-center">
          <h1 className="pt-[20px] text-[white]">
            aiwa © 2024. All rights reserved.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;