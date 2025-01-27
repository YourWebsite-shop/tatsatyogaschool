import React from "react";
import RightTop from "@/assets/aboutsUs/right-top.png"
import LeftBottom from "@/assets/aboutsUs/left-bottom.png"
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className="relative" >

<Image src={RightTop} alt="Decorative background" className='absolute top-0 right-0 opacity-50 w-96' />
<Image src={LeftBottom} alt="Decorative background" className='absolute bottom-0 left-0 opacity-50 w-80' />
    <div className="max-w-[1280px] mx-auto bg-[#EBE6E2] lg:px-[16px] sm:px-[24px] px-[16px]  flex md:flex-row flex-col gap-[12px] sm:gap-[32px] lg:gap-[48px] mb-[80px] lg:py-10 pt-[80px]">
      
      <div className=" text-gray-600 font-semibold text-[17px] sm:text-[18px] lg:text-[24px] sm:mt-[10px] whitespace-nowrap">
        <h1 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          {" "}
          <strong className="text-black">Who</strong> We Are
        </h1>
      </div>
      <div className="flex flex-col">
        <h1 className="text-black font-semibold text-[24px] sm:text-[30px] lg:text-[40px] pb-[10px] sm:pb-[16px] lg:pb-[20px] " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          Your Sanctuary for Transformation and Balance
        </h1>
        <p className="text-gray-700 text-[14px] sm:text-[16px] lg:text-[24px]" data-aos="fade-up" data-aos-delay="350" data-aos-duration="1000">
          Tatsat Yoga School blends ancient yogic wisdom with modern practices
          in the spiritual heart of Rishikesh. Our experienced instructors guide
          you on a journey of self-discovery, empowering you to harmonize your
          body, mind, and soul for a fulfilling life.
        </p>
        <div className="flex pt-[28px] sm:pt-[44px] gap-[24px] sm:gap-[52px] lg:gap-[60px] ">
          <div>
            <h1 className="text-[black] font-bold text-[16px] sm:text-[20px] lg:text-[28px] pb-[10px] sm:pb-[16px] lg:pb-[24px]" data-aos="fade-up" data-aos-delay="350" data-aos-duration="1000">
              Our vision :
            </h1>
            <p className="text-[12px] sm:text-[14px] lg:text-[18px] text-gray-700 " data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              Our vision at Tatsat Yoga School is to create a world where
              individuals find balance, peace, and purpose through the
              transformative power of yoga. By blending ancient wisdom with
              modern practices, we aspire to guide every individual toward
              holistic well-being and a deeper connection with themselves and
              the world around them.
            </p>
          </div>
          <div>
            <h1 className="text-[black] font-bold text-[16px]sm:text-[20px] lg:text-[28px] pb-[10px] sm:pb-[16px] lg:pb-[24px]" data-aos="fade-up" data-aos-delay="350" data-aos-duration="1000">
              Our values :
            </h1>
            <p className="text-[12px] sm:text-[14px] lg:text-[18px] text-gray-700 " data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              we value authenticity, blending ancient yogic traditions with
              modern practices. We empower individuals to achieve holistic
              growth in body, mind, and spirit, fostering an inclusive and
              supportive community. With integrity, compassion, and dedication,
              we guide our students towards connection with themselves, others,
              and the natural world.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WhoWeAre;
