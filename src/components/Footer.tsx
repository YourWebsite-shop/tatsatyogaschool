import React from "react";
import { TiLocation } from "react-icons/ti";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "@/assets/Logo-transparent.png";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="relative bg-black flex justify-between p-[64px]">
      <div className="space-y-[10px]">
        <p className="text-[white] text-[11px] ">About Us</p>
        <p className="text-[white] text-[11px]">Classes</p>
        <p className="text-[white] text-[11px]">Schdule</p>
        <p className="text-[white] text-[11px]">Instructors</p>
        <p className="text-[white] text-[11px]">Reviews</p>
        <p className="text-[white] text-[11px]">Prices</p>
        <p className="text-[white] text-[11px]">FAQ</p>
        <p className="text-[white] text-[11px] pt-8 ">Privacy Policy</p>
        <p className="text-[white] text-[11px]">Terms of Use</p>
      </div>
      <div className="absolute inset-0  flex flex-col items-center justify-end pb-[60px]">
        <Image
          src={Logo}
          alt="logo"
          width={1000}
          className="w-[85px] pb-[16px]"
        />
        <p className="text-white text-[10px] pb-[6px]">
          ©2025 Tatsat Yoga School
        </p>
        <p className="text-white text-[10px]">All right reserved</p>
      </div>

      <div className=" w-[300px]">
        <p className="text-[white] text-[10px] pb-[24px] ">
          We are always happy to answer all your questions. Feel free to contact
          us!
        </p>
        <div className="pb-[16px]">
          <p className="flex text-[white] text-[11px]">
            <TiLocation
              size={"30px"}
              className="mr-2 h-[21px] bg-gray-800 rounded-full p-0.5 mt-[2px] "
            />
            Bairaj Neelkanth Road, Laxman jhula, Rishikesh, Uttarakhand 249302
          </p>
        </div>
        <div className="flex text-white pb-[16px]">
          <BsTelephoneFill
            size={"22px"}
            className="mr-2  bg-gray-800 rounded-full p-0.5 -translate-y-[3px] "
          />
          <p className=" text-[white] text-[11px]">70888 55572</p>
        </div>
        <div className="pb-[30px]">
          <p className="flex text-[white] text-[11px] ">
            {" "}
            <IoMail
              size={"22px"}
              className="mr-2 bg-gray-800 rounded-full p-0.5 -translate-y-[2px] "
            />
            tatsayogaschool@gmail.com
          </p>
        </div>
        <div className="text-white">
          <p className="text-[white] text-[11px] ">
            Follow our news and updates on social media. We look forward to
            seeing you on the mat!
          </p>
          <div className="flex pt-4 gap-1">
            <div className="flex justify-center items-center bg-white text-black  rounded-full w-[24px] h-[24px] p-1">
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
  );
};

export default Footer;
