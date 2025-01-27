import React from "react";
// Importing necessary icons for the footer
import { TiLocation } from "react-icons/ti";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

// Importing the logo image
import Logo from "@/assets/Logo-transparent.png";
// Importing Image component from Next.js for optimized image handling
import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

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
      <div className=" bg-black flex justify-between lg:px-[82px] lg:pb-[20px] sm:px-[40px] px-[18px]">
        {/* Section for Quick Links */}
        <div className=" hidden sm:block p-[18px] sm:p-[0px] pb-[84px] sm:pb-[0px] lg:space-y-[15px] sm:space-y-[12px] space-y-[12px]  ">
          <div>
            <Link href="/aboutus">
              <p
                className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px] cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="900"
              >
                About Us
              </p>
            </Link>
          </div>
          <div>
            <Link href="/#ourClasses">
              <p
                className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px] cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="900"
              >
                Classes
              </p>
            </Link>
          </div>
          <div>
            <Link href="/#benefits">
              <p
                className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px]"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="900"
              >
                Benefits
              </p>
            </Link>
          </div>
          <div>
            <Link href="/aboutus#instructors">
              <p
                className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px]"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="900"
              >
                Instructors
              </p>
            </Link>
          </div>
          <div>
            <Link href="#testimonials">
              <p
                className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px]"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="900"
              >
                Reviews
              </p>
            </Link>
          </div>
          <div>
            <Link href="/#contactus">
              <p
                className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px]"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="900"
              >
                Contact Us
              </p>
            </Link>
          </div>
          <div>
            <Link href="/#faq">
              <p
                className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px]"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="900"
              >
                FAQ
              </p>
            </Link>
          </div>
          <p
            className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px] lg:pt-8 sm:pt-16 pt-8 hidden sm:block"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="900"
          >
            Privacy Policy
          </p>
          <p
            className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px] hidden sm:block"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="900"
          >
            Terms of Use
          </p>
        </div>

        {/* Section for Logo and Copyright Information */}
        <div className="lg:flex flex-col sm:flex-col sm:items-center items-start justify-end  pb-[52px] sm:text-center text-left lg:translate-x-36 hidden ">
          <Image
            src={Logo}
            alt="logo"
            width={1000}
            className="lg:w-[140px] sm:w-[120px] w-[140px] lg:pb-[16px] sm:pb-[10px] sm:left-0 sm:mx-auto "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="900"
          />

          <p
            className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px] pb-[6px]"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="900"
          >
            ©2025 Tatsat Yoga School
          </p>
          <p
            className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px] mb-[20px] sm:mb-[0px]"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="900"
          >
            All rights reserved
          </p>
          <p
            className="text-[#EAE6E1] lg:text-[11px] sm:text-[16px] text-[14px] sm:hidden block mb-[10px] sm:mb-[0px]"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="900"
          >
            Privacy Policy
          </p>
          <p
            className="text-[#EAE6E1] lg:text-[11px] sm:text-[16px] text-[14px] sm:hidden block"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="900"
          >
            Terms of Use
          </p>
        </div>

        {/* Section for Contact Information */}
        <div className="right-0 lg:pr-[0px] sm:pr-[40px] px-[18px] sm:px-0 lg:w-[400px] sm:w-1/2">
          {/* Contact info introduction */}
          <p
            className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px] lg:pb-[24px] sm:pb-[30px] pb-[20px] "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="900"
          >
            We are always happy to answer all your questions. Feel free to
            contact us!
          </p>

          {/* Address section */}
          <div className="lg:pb-[16px] sm:pb-[20px] pb-[16px]">
            <div
              className="flex text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px]  "
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="900"
            >
              <p className="aspect-square ">
                <TiLocation className="lg:mr-2 mr-1 h-[24px] w-[28px] sm:h-[21px] sm:w-[30px] lg:h-[32px] lg:w-[32px] bg-gray-800 rounded-full p-0.5 lg:-translate-y-1 sm:mt-[3px] mt-[0px] " />
              </p>
              Bairaj Neelkanth Road, Laxman Jhula, Rishikesh, Uttarakhand 249302
            </div>
          </div>

          {/* Telephone section */}
          <div
            className="flex text-[#EAE6E1] lg:pb-[16px] sm:pb-[20px] pb-[16px]"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="900"
          >
            <div className="aspect-square">
              <BsTelephoneFill className="lg:mr-2 h-[24px] w-[24px] mr-1 sm:h-[21px] sm:w-[21px] lg:h-[30px] lg:w-[30px] bg-gray-800 rounded-full p-0.5 sm:mt-[2px] lg:-translate-y-1 sm:mb-[0px] mb-[2px]" />
            </div>
            <p className=" text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px]">
              70888 55572
            </p>
          </div>

          {/* Email section */}
          <div className="lg:pb-[30px] sm:pb-[36px] pb-[26px]">
            <div
              className="flex text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px]"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="900"
            >
              <p className="aspect-square">
                <IoMail className="lg:mr-2 mr-1 h-[24px] w-[24px] sm:h-[21px] sm:w-[21px] lg:h-[30px] lg:w-[30px] bg-gray-800 rounded-full p-0.5 lg:-translate-y-2 sm:mt-[3px] mb-[2px] sm:mb-[0px] " />
              </p>
              tatsayogaschool@gmail.com
            </div>
          </div>

          {/* Social Media Section */}
          <div
            className="text-[#EAE6E1]"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="900"
          >
            <p className="text-[#EAE6E1] lg:text-[11px] sm:text-[16px] text-[14px]">
              Follow our news and updates on social media. We look forward to
              seeing you on the mat!
            </p>

            {/* Social media icons */}
            <div className="flex lg:pt-[24px] sm:pt-[20px] pt-[12px] lg:gap-3 sm:gap-2 gap-2">
              <div className="flex justify-center items-center bg-[#EAE6E1]  text-black rounded-full p-1">
                <Link href="https://www.instagram.com/tatsatyogaschool/">
                  <FaInstagram className="lg:h-[28px] lg:w-[28px] sm:h-[20px] sm:w-[20px] h-[26px] w-[26px]" />
                </Link>
              </div>
              <div className="rounded-full ">
                <Link href="https://www.facebook.com/people/Tatsat-Yoga-School/61560289661838/">
                  <FaFacebook className="lg:h-[38px] lg:w-[38px] sm:h-[30px] sm:w-[30px] h-[34px] w-[34px] text-[#EAE6E1] " />
                </Link>
              </div>
              <div className="flex justify-center items-center bg-[#EAE6E1]  text-black p-1 rounded-full">
                <FaYoutube className="lg:h-[28px] lg:w-[28px] sm:h-[20px] sm:w-[20px] h-[26px] w-[26px]" />
              </div>
            </div>
          </div>
          <div className="flex mb-[64px]">
            {/* Section for Logo and Copyright Information */}
            <div className="flex flex-col sm:flex-col sm:items-center items-start justify-end lg:pb-[0px]  sm:text-center text-left sm:-translate-x-[102px] lg:hidden mt-10 ">
              <Image
                src={Logo}
                alt="logo"
                width={1000}
                className="lg:w-[140px] sm:w-[120px] w-[140px] lg:pb-[16px] sm:pb-[10px] sm:left-0 sm:mx-auto "
              />

              <p className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px] pb-[6px]">
                ©2025 Tatsat Yoga School
              </p>
              <p className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px] mb-[20px] sm:mb-[0px]">
                All rights reserved
              </p>
              <p className="text-[#EAE6E1] lg:text-[11px] sm:text-[16px] text-[14px] sm:hidden block mb-[10px] sm:mb-[0px]">
                Privacy Policy
              </p>
              <p className="text-[#EAE6E1] lg:text-[11px] sm:text-[16px] text-[14px] sm:hidden block">
                Terms of Use
              </p>
            </div>
            {/* Section for Quick Links */}
            <div className=" block sm:hidden space-y-[12px] translate-x-9 translate-y-14">
              <p className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px]">
                About Us
              </p>
              <p className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px] ">
                Classes
              </p>
              <p className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px]">
                Schedule
              </p>
              <p className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px]">
                Instructors
              </p>
              <p className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px]">
                Reviews
              </p>
              <p className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px]">
                Prices
              </p>
              <p className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px]">
                FAQ
              </p>
              <p className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px] lg:pt-8 sm:pt-16 pt-8 hidden sm:block">
                Privacy Policy
              </p>
              <p className="text-[#EAE6E1] lg:text-[14px] sm:text-[16px] text-[14px] hidden sm:block">
                Terms of Use
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
