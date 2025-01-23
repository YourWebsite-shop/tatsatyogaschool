import React from "react";


import { IoFlowerOutline } from "react-icons/io5";
import { WiMoonWaningCrescent5 } from "react-icons/wi";

const Benefits = () => {
  return (
    <div className="bg-[#EAE6E1] px-[80px] py-[100px]">
      <h1 className="kaftan-text text-center text-[53px] font-medium text-[#1A1A1A] pb-[72px]">
        BENEFITS OF YOGA PRACTICE
      </h1>
      <div className="grid flex-row gap-[38px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 ">
        <div className=" flex flex-col items-center">
          <div className="pt-4 hidden lg:block absolute">
            <WiMoonWaningCrescent5 className="relative text-[#F57D49] rotate-180 text-[18px] translate-x-32 translate-y-2 " />
          </div>
          <div className="bg-[#F57D49] rounded-full p-2 mb-5">
            <IoFlowerOutline className="text-white text-[60px]" />
          </div>
          <h2 className="text-[22px] text-[#1A1A1A] font-[500] text-center pb-2">
            Physical Health
          </h2>
          <p className="text-[14px] font-[400] text-[#1A1A1A]  text-center">
            Yoga helps to increase flexibility, strength, and endurance. Regular
            practice can reduce chronic pain, improve joint and muscle health,
            and strengthen the cardiovasclar system
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="pt-4 hidden lg:block absolute">
            <WiMoonWaningCrescent5 className="relative text-[#F57D49] rotate-180 text-[24px] translate-x-32 translate-y-2 " />
          </div>
          <div className="bg-[#F57D49] rounded-full p-2 mb-5">
            <IoFlowerOutline className="text-white text-[60px]" />
          </div>
          <h2 className="text-[22px] text-[#1A1A1A] font-[500] text-center pb-2">
            MENTAL CLARITY
          </h2>
          <p className="text-[14px] font-[400] text-[#1A1A1A]  text-center">
            Regular Yoga and meditation can help improve concentration, memory,
            and mental clarity. This contributes to greater productivity and the
            ability to focus on tasks.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="pt-4 hidden lg:block absolute">
            <WiMoonWaningCrescent5 className="relative text-[#F57D49] text-[24px] translate-x-40 translate-y-2 " />
          </div>
          <div className="bg-[#F57D49] rounded-full p-2 mb-5">
            <IoFlowerOutline className="text-white text-[60px]" />
          </div>
          <h2 className="text-[22px] font-[500] text-[#1A1A1A] text-center pb-2">
            SLEEP QUALITY
          </h2>
          <p className="text-[14px] font-[400] text-[#1A1A1A]  text-center">
            Pracitcing yoga helps to relax the body and mind, which can improve
            sleep quality and reduce sleep problems such as insomnia. Meditating
            before bed can also help calm the mind and make it easier to fall
            asleep.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
        <div className="pt-4 hidden lg:block absolute">
            <WiMoonWaningCrescent5 className="relative text-[#F57D49] text-[18px] translate-x-40 translate-y-2 " />
          </div>
          <div className="bg-[#F57D49] rounded-full p-2 mb-5">
            <IoFlowerOutline className="text-white text-[60px]" />
          </div>
          <h2 className="text-[22px] text-[#1A1A1A] font-[500] text-center pb-2">
            INNER PEACE
          </h2>
          <p className="text-[14px] font-[400] text-[#1A1A1A]  text-center">
            Yoga and meditation can help you find inner harmony, balace, and
            peace. They promote mindfulness and spirituality growth, which helps
            you better understand yourself and your emotions.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-[#F57D49] rounded-full p-2 mb-5">
            <IoFlowerOutline className="text-white text-[60px] " />
          </div>
          <h2 className="text-[22px] text-[#1A1A1A] font-[500] text-center pb-2">
            REDUCE STRESS
          </h2>
          <p className="text-[14px] font-[400] text-[#1A1A1A]  text-center">
            Meditation and breathing practices, which are an integral part of
            yoga, are effective in reducing stress and anxiety. They help calm
            the mind, improve mood, and reduce symptoms of depression.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
