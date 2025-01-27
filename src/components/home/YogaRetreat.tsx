import React from "react";
import Image from "next/image";
import yogaRetreat from "@/assets/home/YogaRetreatDark.webp";

const YogaRetreat = () => {
  return (
    <div className="bg-[#EAE6E1] h-[80vh] pt-5 md:py-16 relative overflow-hidden lg:rounded-t-[64px] md:mt-[180px]">
      
      <Image
        src={yogaRetreat}
        alt="yogaretreat"
       width={1000}
       
        className="rounded-t-[64px] w-full h-full lg:h-auto object-cover lg:-translate-y-[300px]"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="samarkan-text text-center text-white text-[16px] lg:text-[40px] px-10"   data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          &quot;Vasamsi Jirnani Yatha Vihaya, Nawani Grihnati Naroparani, Tatha Sharirani Vihaya Jirna, Niyani Samyati Nawani Dehi&quot;
        </p>

        <div className="bg-[#F57D49] rounded-full lg:size-4 size-2 sm:size-3 lg:my-8 sm:my-6 my-4"></div>
        <p className=" text-center text-white lg:text-[20px] sm:text-[16px] text-[12px] " data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">B.K.S IYENGAR</p>
      </div>
    </div>
  );
};

export default YogaRetreat;
