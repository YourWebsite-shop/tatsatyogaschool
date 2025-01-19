import React from "react";
import heroTablet from "@/assets/aboutsUs/heroTablet.png";
import heroPC from "@/assets/aboutsUs/HeroPC.png";

import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="  overflow-hidden mx-[20px] sm:mx-[46px] flex items-center justify-center relative    bg-[#F5F3ED] lg:mx-[120px] 3xl:mx-[160px] mt-[32px] sm:mt-[42px] lg:mt-[91.82px] 3xl:mt-[62px]">
      <Image
        src={heroPC}
        alt="heropc"
        width={1000}
        height={1000}
        className="w-auto top-0  absolute h-full  rounded-xl sm:hidden"
      />
      <Image
        src={heroTablet}
        alt="heropc"
        width={1000}
        height={1000}
        className="w-full top-0  absolute h-full  rounded-xl hidden sm:block lg:hidden"
      />
      <Image
        src={heroPC}
        alt="heropc"
        width={1000}
        height={1000}
        className="w-full top-0  absolute h-full  rounded-3xl  hidden lg:block"
      />
      <div className="z-10 pl-[20px] sm:pl-[35px] lg:pl-[38px] sm:pr-[35px] pr-[11px] py-[30px] lg:py-[100px] 3xl:pb-[110px] sm:py-[60px] 3xl:pt-[110px] sm:pb-[37px]">
        <p className="text-white text-[13px] sm:text-[13px]  sm:pt-[16px] sm:leading-[26px] 3xl:text-[18px]   py-2 sm:py-6  leading-[19.5px] lg:text-[18px] lg:leading-[36px] text-center ">
          WELCOME TO TATSAT YOGA SCHOOL
        </p>

        <h5 className="text-white text-[28px] sm:text-[55px] font-[600] lg:text-[72px] text-center ">
          About Tatsat Yoga School
        </h5>
      </div>
    </div>
  );
};

export default Hero;
