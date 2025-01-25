import React from "react";
import whyus1 from "@/assets/aboutsUs/why us (1).webp";
import whyus2 from "@/assets/aboutsUs/why us (2).webp";
import whyus3 from "@/assets/aboutsUs/why us (3).webp";
import { Button } from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";
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
    <div className="bg-[#EBE6E2] px-[84px] ">
      <div className="flex justify-between">
        <h1 className="text-[48px] font-bold ">Why Us?</h1>
        <Button>
          Read More
          <FaArrowRightLong />{" "}
        </Button>
      </div>
      <div className="flex flex-row gap-4">
        {WhyUsData.map((item) => (
          <div
            key={item.id}
            className="flex flex-row bg-[#A18E85] p-4 rounded-lg"
          >
            <div className="w-[60%]">
              <h1 className="text-[16px] font-semibold">{item.heading}</h1>
              <p className="text-[20px]">{item.description}</p>
            </div>
            <Image src={item.image} alt="image" width={1000} className="w-[40%] overflow-hidden" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
