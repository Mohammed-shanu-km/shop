import React, { useState, useEffect } from "react";
import "./Hero.css";
import { useInView } from "react-intersection-observer";

const Counter = ({ targetCount, formatMillion }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // Duration for counting animation
      const increment = targetCount / (duration / 50);

      const counter = setInterval(() => {
        start += increment;
        if (start >= targetCount) {
          setCount(targetCount);
          clearInterval(counter);
        } else {
          setCount(Math.ceil(start));
        }
      }, 50);

      return () => clearInterval(counter);
    }
  }, [inView, targetCount]);

  // Format only "Happy Customers" to display "1M+" if targetCount is 1 million
  const formattedCount = formatMillion && count >= 1000000 ? "1M+" : `${count}+`;

  return (
    <h2 ref={ref} className="text-[40px] font-[600] text-[#ffffff] sm-max:text-[30px]">
      {formattedCount}
    </h2>
  );
};

const Hero = () => {
  return (
    <div className="hero-section flex items-center justify-center flex-col relative">
      <div className="flex flex-col gap-[1.25rem]">
        <h1 className="font-[600] text-[#ffffff] text-[4rem] text-center leading-[4.75rem] md-max:text-[3rem] md-small:text-[2.5rem] md-small:leading-[3.2rem] md-max:leading-[3.5rem] sm-max:text-[28px] sm-max:leading-[30px]">
          Crafting Comfort for Homes
          <br /> Worldwide
        </h1>
        <p className="text-center text-[1.25rem] text-[#ffffff] leading-[30px] font-[100] md-max:text-[1rem] md-small:text-[18px] md-small:px-[30px] sm-max:text-[16px] sm-max:leading-[24px] sm-max:px-[20px]">
          Our products, trusted by millions worldwide, enhance lives and
          businesses across diverse markets.
          <br className="sm-max:hidden md-small:hidden" /> Committed to
          quality, we deliver reliable solutions globally.
        </p>
      </div>
      <div className="h-[80px] w-full bg-gradient-to-t from-white to-transparent absolute bottom-0"></div>
      <div className="px-[100px] absolute bottom-[-70px] w-full md-max:px-[40px] md-small:px-[50px] sm-max:px-[20px] sm-max:bottom-[-120px]">
        <div className="h-auto w-full p-[20px] flex items-center justify-evenly bg-[#045c50] rounded-[15px] md-small:flex md-small:flex-col md-small:gap-[60px] sm-max:flex sm-max:flex-col sm-max:gap-[50px]">
          <div className="flex gap-[100px] md-max:gap-[50px] sm-max:gap-[40px]">
            <div className="flex flex-col text-center">
              <Counter targetCount={51} />
              <h3 className="text-[20px] font-[200] text-[#ffffff] leading-[25px] sm-max:text-[16px]">
                Textile
                <br /> Industry
              </h3>
            </div>
            <div className="h-[100px] w-[1px] bg-[white]"></div>
            <div className="flex flex-col text-center">
              <Counter targetCount={1000000} formatMillion={true} /> {/* Happy Customers Counter */}
              <h3 className="text-[20px] font-[200] text-[#ffffff] leading-[25px] sm-max:text-[16px]">
                Happy
                <br /> Customers
              </h3>
            </div>
          </div>
          <div className="flex gap-[100px] md-max:gap-[50px] sm-max:gap-[40px]">
            <div className="h-[100px] w-[1px] bg-[white] md-small:hidden sm-max:hidden"></div>
            <div className="flex flex-col text-center">
              <Counter targetCount={30} />
              <h3 className="text-[20px] font-[200] text-[#ffffff] leading-[25px] sm-max:text-[16px]">
                Years In
                <br /> UAE
              </h3>
            </div>
            <div className="h-[100px] w-[1px] bg-[white]"></div>
            <div className="flex flex-col text-center">
              <Counter targetCount={6} />
              <h3 className="text-[20px] font-[200] text-[#ffffff] leading-[25px] sm-max:text-[16px]">
                Brands
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
