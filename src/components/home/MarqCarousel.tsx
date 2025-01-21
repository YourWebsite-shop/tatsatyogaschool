import React from "react";
import Marquee from "react-fast-marquee";

const MarqCarousel = () => {
  return (
    <div>
      <h2
        className="lg:text-[36px] sm:text-[28px] text-[24px] font-bold text-Black lg:mb-4 sm:mb-2 mb-1 text-center"
        id="el-sfukqcej"
      >
        Trusted by the best
      </h2>
      <div
        className="lg:w-[96px] sm:w-[80px] w-[72px] h-1 bg-[#E67825] mx-auto lg:mb-6 sm:mb-5 mb-3"
        id="el-3zj1b12y"
      ></div>
      

      <Marquee>
        <div style={{ marginRight: "60px" }}>
          <p>yoga1</p>
        </div>
        <div style={{ marginRight: "60px" }}>
          <p>Yoga2</p>
        </div>
        <div style={{ marginRight: "60px" }}>
          <p>yoga3</p>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqCarousel;
