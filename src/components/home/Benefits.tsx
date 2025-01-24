import React from "react";
import Image from "next/image";

import { IoFlowerOutline } from "react-icons/io5";
import { WiMoonWaningCrescent5 } from "react-icons/wi";

import SleepQuality from "@/assets/benefits/sleep.png"
import ReduceStress from "@/assets/benefits/stress.png"
import PhysicalHealth from "@/assets/benefits/health.png"
import MentalClarity from "@/assets/benefits/clarity.png"
import InnerPeace from "@/assets/benefits/peace.png"

const gridData = [
  {
    id: 1,
    title: "Physical Health",
    description:
      "Yoga helps to increase flexibility, strength, and endurance. Regular practice can reduce chronic pain, improve joint and muscle health, and strengthen the cardiovascular system.",
    icon: (
      <Image src={ PhysicalHealth } alt='' className="lg:w-[60px] sm:w-[48px] w-[32px]" />
    ),
    crescentIcon: (
      <WiMoonWaningCrescent5 className="text-[#F57D49] rotate-180 text-[18px] hidden lg:block absolute left-1/2 -translate-x-1/2" />
    ),
  },
  {
    id: 2,
    title: "Mental Clarity",
    description:
      "Regular Yoga and meditation can help improve concentration, memory, and mental clarity. This contributes to greater productivity and the ability to focus on tasks.",
    icon: (
      <Image src={ MentalClarity } alt='' className="lg:w-[60px] sm:w-[48px] w-[32px]" />
    ),
    crescentIcon: (
      <WiMoonWaningCrescent5 className="text-[#F57D49] rotate-180 text-[24px] hidden lg:block absolute left-1/2 -translate-x-1/2" />
    ),
  },
  {
    id: 3,
    title: "Sleep Quality",
    description:
      "Practicing yoga helps to relax the body and mind, which can improve sleep quality and reduce sleep problems such as insomnia. Meditating before bed can also help calm the mind and make it easier to fall asleep.",
    icon: (
      // <SleepQuality className="text-white lg:text-[60px] sm:text-[48px] text-[32px]" />
      <Image src={ SleepQuality } alt='' className="lg:w-[60px] sm:w-[48px] w-[32px]" />
    ),
    crescentIcon: (
      <WiMoonWaningCrescent5 className="text-[#F57D49] text-[24px] hidden lg:block absolute left-1/2 -translate-x-1/2" />
    ),
  },
  {
    id: 4,
    title: "Inner Peace",
    description:
      "Yoga and meditation can help you find inner harmony, balance, and peace. They promote mindfulness and spiritual growth, which helps you better understand yourself and your emotions.",
    icon: (
      <Image src={ InnerPeace } alt='' className="lg:w-[60px] sm:w-[48px] w-[32px]" />
    ),
    crescentIcon: (
      <WiMoonWaningCrescent5 className="text-[#F57D49] text-[18px] hidden lg:block absolute left-1/2 -translate-x-1/2" />
    ),
  },
  {
    id: 5,
    title: "Reduce Stress",
    description:
      "Meditation and breathing practices, which are an integral part of yoga, are effective in reducing stress and anxiety. They help calm the mind, improve mood, and reduce symptoms of depression.",
    icon: (
      <Image src={ ReduceStress } alt='' className="lg:w-[60px] sm:w-[48px] w-[32px]" />
    ),
    crescentIcon: null, // No crescent icon for this item
  },
];

const Benefits = () => {
  return (
    <div className="bg-[#EAE6E1] lg:px-[80px] sm:px:[50px] px-[20px] py-[100px]">
      <h1 className="kaftan-text text-center lg:text-[53px] sm:text-[36px] text-[24px] font-medium text-[#1A1A1A] lg:pb-[72px] sm:pb-[56px] pb-[32px] ">
        BENEFITS OF YOGA PRACTICE
      </h1>
      <div className="grid flex-row gap-[38px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {gridData.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            {item.crescentIcon && (
              <div className="pt-4 relative w-full">{item.crescentIcon}</div>
            )}
            <div className="bg-[#F57D49] rounded-full lg:p-2 p-1 lg:mb-5 sm:mb-3 mb-2 flex justify-center items-center">
              {item.icon}
            </div>
            <h2 className="lg:text-[22px] text-[18px] text-[#1A1A1A] font-[500] text-center pb-2">
              {item.title}
            </h2>
            <p className="sm:text-[14px] text-[13px] font-[400] text-[#1A1A1A] px-[28px] text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
