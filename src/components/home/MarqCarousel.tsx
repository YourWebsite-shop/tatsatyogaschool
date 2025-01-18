import React from "react";
import Marquee from "react-fast-marquee";

const MarqCarousel = () => {
  return (
    <div>
      <h2
        className="text-4xl md:text-5xl font-sanskrit text-[#E67825] leading-tight text-center pb-8"
        id="el-xf6qvkzw"
      >
        Trusted by the best
      </h2>
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
