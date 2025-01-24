import React from "react";
// Importing necessary icons for the footer
import { TiLocation } from "react-icons/ti";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// Importing the logo image
import Logo from "@/assets/Logo-transparent.png";
// Importing Image component from Next.js for optimized image handling
import Image from "next/image";
import { div } from "framer-motion/client";

// Footer functional component
const Footer: React.FC = () => {
  return (
    <div className="relative bg-[#EAE6E1] ">
      <div
        className="absolute bg-[#F57D49] flex items-center justify-center rounded-full lg:size-3 size-2 sm:size-3"
        style={{ left: "50%", transform: "translate(-50%, -50%)" }}
      ></div>
      <div className="flex">
        <div className="bg-black w-1/2 h-[80px] rounded-tr-[64px] "></div>
        <div className="bg-black w-1/2 h-[80px] rounded-tl-[64px]"></div>
      </div>
      <div className="relative bg-black flex justify-between lg:h-[40vh] h-[85vh] px-[64px] pb-[64px]">
        {/* Section for Quick Links */}
        <div className="absolute lg:space-y-[10px] space-y-[12px]">
          <p className="text-[white] lg:text-[11px] text-[16px] ">About Us</p>
          <p className="text-[white] lg:text-[11px] text-[16px]">Classes</p>
          <p className="text-[white] lg:text-[11px] text-[16px]">Schedule</p>
          <p className="text-[white] lg:text-[11px] text-[16px]">Instructors</p>
          <p className="text-[white] lg:text-[11px] text-[16px]">Reviews</p>
          <p className="text-[white] lg:text-[11px] text-[16px]">Prices</p>
          <p className="text-[white] lg:text-[11px] text-[16px]">FAQ</p>
          <p className="text-[white] lg:text-[11px] text-[16px] lg:pt-8 pt-16 ">Privacy Policy</p>
          <p className="text-[white] lg:text-[11px] text-[14px]">Terms of Use</p>
        </div>

        {/* Section for Logo and Copyright Information */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end pb-[60px]">
          <Image
            src={Logo} 
            alt="logo" 
            width={1000} 
            className="w-[95px] pb-[16px]" 
          />
          <p className="text-white text-[10px] pb-[6px]">
            ©2025 Tatsat Yoga School
          </p>
          <p className="text-white text-[10px]">All rights reserved</p>
        </div>

        {/* Section for Contact Information */}
        <div className="absolute right-0 pr-[64px]  w-[300px]">
          {/* Contact info introduction */}
          <p className="text-[white] text-[10px] pb-[24px]">
            We are always happy to answer all your questions. Feel free to
            contact us!
          </p>

          {/* Address section */}
          <div className="pb-[16px]">
            <p className="flex text-[white] text-[11px]">
              <TiLocation
                size={"30px"}
                className="mr-2 h-[21px] bg-gray-800 rounded-full p-0.5 mt-[2px] "
              />
              Bairaj Neelkanth Road, Laxman Jhula, Rishikesh, Uttarakhand 249302
            </p>
          </div>

          {/* Telephone section */}
          <div className="flex text-white pb-[16px]">
            <BsTelephoneFill
              size={"22px"}
              className="mr-2 bg-gray-800 rounded-full p-0.5 -translate-y-[3px] "
            />
            <p className=" text-[white] text-[11px]">70888 55572</p>
          </div>

          {/* Email section */}
          <div className="pb-[30px]">
            <p className="flex text-[white] text-[11px]">
              <IoMail
                size={"22px"}
                className="mr-2 bg-gray-800 rounded-full p-0.5 -translate-y-[2px] "
              />
              tatsayogaschool@gmail.com
            </p>
          </div>

          {/* Social Media Section */}
          <div className="text-white">
            <p className="text-[white] text-[11px]">
              Follow our news and updates on social media. We look forward to
              seeing you on the mat!
            </p>

            {/* Social media icons */}
            <div className="flex pt-4 gap-1">
              <div className="flex justify-center items-center bg-white text-black rounded-full w-[24px] h-[24px] p-1">
                <FaInstagram size={"16px"} />
              </div>
              <div className="rounded-full">
                <FaFacebook size={"24px"} />
              </div>
              <div className="flex justify-center items-center bg-white text-black w-[24px] h-[24px] p-1 rounded-full">
                <FaXTwitter size={"16px"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
