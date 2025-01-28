import React from "react";
import whyus1 from "@/assets/aboutsUs/why us (1).webp";
import whyus2 from "@/assets/aboutsUs/Why us (2).webp";
import whyus3 from "@/assets/aboutsUs/why us (3).webp";
import LeftBottom from "@/assets/aboutsUs/left-bottom.png"

import Image from "next/image";

const WhyUsData = [
  {
    id: 1,
    image: whyus1,
    heading: "Authentic Yogic Tradition",
    description:
      "Situated in Rishikesh, our school offers a genuine approach to yoga, blending classical teachings with modern insights. Experience yoga's rich heritage in the world's yoga capital.",
  },
  {
    id: 2,
    image: whyus2,
    heading: "Experienced and Dedicated Instructors",
    description:
      "Our seasoned instructors provide personalised guidance and high-quality instruction, ensuring you receive the support needed to deepen your practice and achieve your goals.",
  },
  {
    id: 1,
    image: whyus3,
    heading: "Comprehensive and Flexible Programs",
    description:
      "We offer a variety of programs for all levels, including 100-Hour and 200-Hour Teacher Training, specialised workshops, and retreats, with flexible scheduling to fit your lifestyle.",
  },
];

const WhyUs = () => {
  return (
    <div className="relative">
      <Image src={LeftBottom} alt="Decorative background" className='absolute top-0  left-0 opacity-50 w-44 lg:w-56 translate-y-44 sm:translate-y-0' />
      <div className=" max-w-[1280px] mx-auto  bg-[#EBE6E2] lg:px-[16px] sm:px-[24px] px-[16px] mb-[80px] ">
      <div className="flex justify-between lg:pb-[28px] sm:pb-[20px] pb-[12px]">
        <h1 className="lg:text-[36px] sm:text-[32px] text-[24px] font-bold " data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">Why Us?</h1>
        {/* <Button className="!bg-transparent !hover:bg-transparent !hover:shadow-none !focus:ring-0 !focus:outline-none !border-none gap-2 ">
          <p className="lg:text-[16px] sm:text-[12px] text-[12px]">
          Read More
          </p>
          <FaArrowRightLong className="lg:text-[16px] text-[12px] sm:text-[14px]"/>
        </Button> */}
      </div>
      <div className="flex sm:flex-row flex-col lg:gap-12 sm:gap-6 gap-4">
        {WhyUsData.map((item) => (
          <div
            key={item.id}
            className="flex flex-row bg-[#E8DCC6] lg:p-4 sm:p-[8px] p-[10px] rounded-[10px] gap-2"
            data-aos="fade-up" data-aos-delay={`${item.id}00`} data-aos-duration="1000"
          >
            <div className="w-[60%]">
              <h1 className="lg:text-[16px] sm:text-[12px] text-[14px] font-semibold lg:pb-[12px] sm:pb-[8px] pb-[6px]">
                {item.heading}
              </h1>
              <p className="lg:text-[12px] sm:text-[10px] text-[12px]">{item.description}</p>
            </div>
            <Image
              src={item.image}
              alt="image"
              width={1000}
              className="w-[40%] object-cover overflow-hidden rounded-[10px]"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default WhyUs;
