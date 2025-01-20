import React from "react";
import Marquee from "react-fast-marquee";

const MarqCarousel = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-Black text-center mb-4" id="el-sfukqcej">
              Trusted by the best
            </h2>
            <div
              className="w-24 h-1 bg-[#E67825] mx-auto mb-6"
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
