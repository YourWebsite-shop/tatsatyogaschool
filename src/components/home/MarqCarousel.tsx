"use client"
import React from "react";
import Marquee from "react-fast-marquee";
import mark1 from "@/assets/marques/mark1.jpg"
import mark2 from "@/assets/marques/mark2.jpg"
import mark3 from "@/assets/marques/mark3.jpg"
import mark4 from "@/assets/marques/mark4.jpg"
import mark5 from "@/assets/marques/mark5.jpg"
import mark6 from "@/assets/marques/mark6.jpg"
import mark7 from "@/assets/marques/mark7.jpg"
import mark8 from "@/assets/marques/mark8.jpg"
import Image from "next/image";

const MarqCarousel = () => {
  let imgArr = [mark1,
    mark2,
    mark3,
    mark4,
    mark5,
    mark6,
    mark7,
    mark8]
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
       {imgArr.map((img, i) => (
        <Image src={img} alt="" width={1000} className="w-44 mx-4" />
       ))}
      </Marquee>
    </div>
  );
};

export default MarqCarousel;
