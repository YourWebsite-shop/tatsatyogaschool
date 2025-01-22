"use client";
import React, { ReactElement } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Stack,
  Grid,
  FormControl,
  HStack,
  Icon,
  Input,
  Textarea,
  Checkbox,
} from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import { color } from "framer-motion";

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
      <section
        id="contact"
        className="mt-[80px] sm:mt-[100px] lg:mt-[120px] bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div
            className="text-center mb-16 animate__animated animate__fadeIn"
            id="el-d9xysvqk"
          >
            <h2
              className="lg:text-[36px] sm:text-[28px] text-[24px] font-bold text-Black lg:mb-4 sm:mb-2 mb-1"
              id="el-sfukqcej"
            >
              Begin Your Journey
            </h2>
            <div
              className="lg:w-[96px] sm:w-[80px] w-[72px] h-1 bg-[#E67825] mx-auto lg:mb-6 sm:mb-5 mb-3"
              id="el-3zj1b12y"
            ></div>
            <p
              className="lg:text-[20px] sm:text-[16px] text-[16px] text-gray-500"
              id="el-bvy7ul6w"
            >
              Take the first step towards transformation. Contact us for more
              information about our programs.
            </p>
          </div>

          <Flex
            flexDirection={{ base: "column-reverse", lg: "row" }}
            justifyContent="space-between"
          >
            {/* Left Box */}

            <Box w={"120%"}>
              <Heading
                fontSize={"24px"}
                fontWeight={500}
                mb={"10px"}
                color={"#222222"}
              >
                We would love to hear from you.
              </Heading>
              <Text fontSize={"16px"} mb={"40px"} color={"#666666"}>
                If you’ve got great products your making or looking to work with
                us then drop us a line.
              </Text>
              <Box>
                <Flex>
                  <Stack spacing={{ base: "16px", lg: "30px" }}>
                    <Grid
                      templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                      }}
                      gap={{ base: "16px", lg: "30px" }}
                    >
                      <FormControl
                        isRequired
                        backgroundColor={"#f2f2f2"}
                        pb={1}
                        width="100%"
                        rounded={"md"}
                      >
                        <HStack>
                          <Input
                            type="text"
                            name="name"
                            placeholder="Name"
                            _placeholder={{ color: "#000000" }}
                            border="none"
                            color={"black"}
                            width="100%"
                            focusBorderColor="black"
                          ></Input>
                        </HStack>
                      </FormControl>
                      <FormControl
                        isRequired
                        backgroundColor={"#f2f2f2"}
                        pb={1}
                        width="100%"
                        rounded={"md"}
                      >
                        <HStack>
                          <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            _placeholder={{ color: "#000000" }}
                            border="none"
                            color={"black"}
                            width="100%"
                            focusBorderColor="black"
                          ></Input>
                        </HStack>
                      </FormControl>
                    </Grid>
                    <FormControl
                      isRequired
                      backgroundColor={"#f2f2f2"}
                      pb={1}
                      width="100%"
                      rounded={"md"}
                    >
                      <HStack>
                        <Textarea
                          name="message"
                          placeholder="Message"
                          _placeholder={{ color: "#000000" }}
                          border="none"
                          color={"black"}
                          width="100%"
                          focusBorderColor="black"
                          rows={6}
                        ></Textarea>
                      </HStack>
                    </FormControl>
                    <Checkbox mt={"-10px"}>
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </Checkbox>
                    <Button
                      width={"fit-content"}
                      color={"#FFFFFF"}
                      bg={"#E67825"}
                      fontWeight={400}
                      px={"20px"}
                      py={"10px"}
                      rounded={"50px"}
                      _hover={{
                        bg: "#D56820",
                      }}
                      mb={"60px"}
                    >
                      Submit Now
                    </Button>
                  </Stack>
                </Flex>
              </Box>
            </Box>
            {/* Right Box */}
            <Box>
              <Text
                fontSize={"18px"}
                fontWeight={500}
                mb={"24px"}
                color={"#222222"}
              >
                Address
              </Text>
              <Text
                fontSize={"18px"}
                fontWeight={400}
                color={"#666666"}
                mb={"28px"}
              >
                <span className="font-semibold  mb-[15px] ">
                  Tatsat Yoga School
                </span>{" "}
                <br />
                Bairaj Neelkanth Road, Laxman Jhula, Rishikesh, Uttarakhand
                249302
              </Text>

              <Text
                fontSize={"18px"}
                fontWeight={500}
                mb={"24px"}
                color={"#222222"}
              >
                Information
              </Text>
              <Text
                fontSize={"18px"}
                fontWeight={400}
                mb={"28px"}
                color={"#666666"}
              >
                <span className="mb-[14px]">+(91) 70888 55572</span> <br />
                tatsatyogaschool.com
              </Text>

              <Text
                fontSize={"18px"}
                fontWeight={500}
                mb={"24px"}
                color={"#222222"}
              >
                Social Media
              </Text>
              <Flex
                flex={"row"}
                fontSize={"18px"}
                fontWeight={400}
                mb={"60px"}
                gap={"30px"}
                color={"#666666"}
              >
                <FaInstagram size={"24px"} />
                <FaFacebook size={"24px"} />
                <FaXTwitter size={"24px"} />
              </Flex>
            </Box>
          </Flex>

          {/* map */}
          <div className="h-[60vh] pt-8  ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d55216.37064597483!2d78.28831574497643!3d30.122150611745102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39091763c6b0b1a7%3A0xcb200ab9e90e84f!2sTrinetra%20Rd%2C%20near%20Laxman%20Jhula%2C%20Laxman%20Jhula%2C%20Rishikesh%2C%20Uttarakhand%20249302!3m2!1d30.122082799999998!2d78.32951539999999!5e0!3m2!1sen!2sin!4v1737552292055!5m2!1sen!2sin"
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
