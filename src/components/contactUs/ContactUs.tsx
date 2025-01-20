"use client";
import React, { ReactElement } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";

const ContactDetail = ({
  icon,
  title,
  description,
}: {
  icon: ReactElement;
  title: string;
  description: string;
}) => (
  <div className="flex items-start">
    {icon}
    <div>
      <h4 className="font-medium text-neutral-800">{title}</h4>
      <p className="text-neutral-600">{description}</p>
    </div>
  </div>
);

const ContactUs = () => {
  return (
    <div>
      <section id="contact" className="pt-[60px] sm:pt-[80px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-16 animate__animated animate__fadeIn"
            id="el-d9xysvqk"
          >
            <h2 className="text-4xl font-bold text-Black mb-4" id="el-sfukqcej">
              Begin Your Journey
            </h2>
            <div
              className="w-24 h-1 bg-[#E67825] mx-auto mb-6"
              id="el-3zj1b12y"
            ></div>
            <p className="text-xl text-gray-500" id="el-bvy7ul6w">
              Take the first step towards transformation. Contact us for more
              information about our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <div>
              <form className="">
                <div className="flex sm:flex-row justify-between py-6 ">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-neutral-600 font-semibold"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full py-3 px-4 border-b border-b-neutral-800  "
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Phone"
                      className="block text-sm font-semibold text-neutral-600"
                    >
                      Phone *
                    </label>
                    <input
                      type="text"
                      id="Phone"
                      name="Phone"
                      required
                      className="mt-1 block w-full py-3 px-4 border-b border-b-neutral-800  "
                    />
                  </div>
                </div>

                <div className="flex sm:flex-row justify-between py-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-neutral-600"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full py-3 px-4 border-b border-b-neutral-800 "
                    />
                  </div>
                  <div className="pr-8">
                    <label
                      htmlFor="program"
                      className="block text-sm font-semibold text-neutral-600 pb-4"
                    >
                      Program Interest *
                    </label>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<IoChevronDown />}
                        w="full"
                        py={3}
                        px={4}
                        borderBottom="2px"
                        borderColor="#98A2B3"
                      >
                        Select a Program
                      </MenuButton>
                      <MenuList w="full">
                        <MenuItem>200 Hour YTT</MenuItem>
                        <MenuItem>300 Hour YTT</MenuItem>
                        <MenuItem>Drop-in classes</MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-neutral-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 block w-full py-3 px-4 border-b border-b-neutral-800 "
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E67825] text-neutral-900 py-3 px-6 rounded-md hover:bg-[#E6782590] transition-colors duration-300 mt-8"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information Section */}
            <div className="space-y-8 ">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-[16px] sm:text-[36px] lg:text-[48px] font-semibold text-neutral-800 mb-6">
                  Contact us
                </h3>
                <ContactDetail
                  icon={
                    <svg
                      className="w-6 h-6 text-[#E67825] mt-1 mr-4 mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        id="el-emzm7ion"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        id="el-fsdis13v"
                      ></path>
                    </svg>
                  }
                  title=""
                  description="Laxman Jhula Road, Rishikesh, Uttarakhand, India"
                />
                <ContactDetail
                  icon={
                    <svg
                      className="w-6 h-6 text-[#E67825] mt-1 mr-4 mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        id="el-y5u3uyua"
                      ></path>
                    </svg>
                  }
                  title=""
                  description="info@tatsatyoga.com"
                />
                <ContactDetail
                  icon={
                    <svg
                      className="w-6 h-6 text-[#E67825] mt-1 mr-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        id="el-5ngpp0si"
                      ></path>
                    </svg>
                  }
                  title=""
                  description="+91 123 456 7890"
                />

                <div className="flex flex-row gap-6 text-[20px] pt-6 ">
                  <FaFacebook className="text-[#E67825]" />
                  <FaInstagram className="text-[#E67825]" />
                  <FaXTwitter className="text-[#E67825]" />
                </div>
              </div>
              {/* Socials Section */}
              {/* <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-6">
                    Contact with us
                  </h3>
                  <div className="flex flex-row gap-6 text-[20px]">
                    <FaFacebook className="text-[#E67825]" />
                    <FaInstagram className="text-[#E67825]" />
                    <FaXTwitter className="text-[#E67825]" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          {/* map */}
          <div className="h-[60vh] pt-8  ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.6682124569197!2d77.1394244!3d28.789154699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d014980a269cf%3A0x513027852733d2c6!2sRudra%20Enterprises%20-%20Camio%20Paint%20Protection%20Film%20%26%20Heat%20Transfer%20Vinyl%20Supplier!5e0!3m2!1sen!2sin!4v1730486554390!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
