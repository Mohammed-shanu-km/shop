import React from "react";
import image from "../../assets/bedrooms.jpg";

const Aboutsecond = () => {
  return (
    <div className="px-[100px] py-[100px] flex md-max:px-[50px] md-max:flex-col md-small:px-[50px] md-small:py-[60px] md-small:flex md-small:flex-col  sm-max:px-[20px] sm-max:py-[50px] sm-max:flex sm-max:flex-col">
      <div className="w-[50%] md-max:w-[100%] md-small:w-[100%] sm-max:w-[100%] ">
        <img
          className="h-[80vh] w-full object-cover md-max:h-[40vh] md-small:h-[50vh] sm-max:h-[40vh]"
          src={image}
          alt=""
        />
      </div>
      <div className="w-[50%] mt-[80px] bg-[white] h-[full] ml-[-100px] p-[30px] md-max:p-[0px] md-max:mt-[50px] md-max:ml-[0px] md-max:w-[100%] md-small:p-[0px] md-small:mt-[40px] md-small:w-[100%] md-small:ml-[0] sm-max:p-[0px] sm-max:mt-[40px] sm-max:w-[100%] sm-max:ml-[0]">
        <div className="flex flex-col gap-[20px]">
          <h3 className="uppercase text-[16px] text-[gray] font-[400]">
            About Us
          </h3>
          <h1 className="font-[600] text-[35px] leading-[48px] text-[#23262F] sm-max:text-[24px] sm-max:leading-[31px]">
            Expertise in Home Textile Manufacturing
          </h1>
          <div className="h-[3px] w-[100px] bg-[#286f6c] mt-[-10px] "></div>
          <p className="ml-[70px]  text-[16px] font-[400] text-[gray] md-max:ml-[0px] md-small:ml-[0px] sm-max:ml-[0px]">
            {/* At ABL Ceramica, we are artisans dedicated to a craft that blends
            tradition and innovation. For over 15 years, we have poured our
            passion into creating a wde range of porcelain products that honor
            the rich heritage of craftsmanship. Our journey has taken us across
            three countries, where we’ve honed our expertise and embraced
            cutting-edge technology to produce exceptional porcelain tiles, wash
            cabinets, toilets.
            <p>
              {" "}
              From the initial consumption of design to the final product, our
              focus is unwavering: to deliver stunning, durable porcelains that
              withstand the test of time */}
            Established in the UAE in 1992, the company has over 48 years of
            experience in the industry. It was founded by three partners, with
            Adv. V.C. Chacko as the primary founder, and was co-founded by Mr.
            Mathews Cherian and Mr. Jacob Chennamala. Together, they built a
            strong foundation that has contributed to the company’s longstanding
            reputation and growth within the UAE and beyond.{" "}
            <p className="mt-[10px]">
              Specializing in high-quality home textiles, the company offers a
              wide range of products, from comforters and quilts to bed sheets
              and cushions. Their commitment to quality has made them a trusted
              name in the industry, known for stylish and reliable household
              linens that meet diverse customer needs.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutsecond;
