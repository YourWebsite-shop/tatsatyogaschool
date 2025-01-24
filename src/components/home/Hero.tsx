"use client"
import React from "react";
import yogaMob from "@/assets/home/yoga-mob.jpg"
import {
  Box,
  Text,
  Button,
} from "@chakra-ui/react";

import heroImg from "@/assets/home/yoga.jpg";
import logo from "@/assets/Logo.png";
import Image from "next/image";

const Hero: React.FC = () => {


  return (
    <Box bg="#F67D49" minH={'100vh'} px={{ base: '1px', lg: "2px" }} >

      {/* Hero Section */}
      <Box textAlign="center" color="white" py={12} px={4} position={'absolute'} className="left-1/2 -translate-x-1/2 w-full ">
        <Text
          fontSize={{ base: "3xl", sm: "5xl", lg: "7xl" }}
          fontWeight="bold"
          lineHeight="short"
          className="kaftan-text fade-animation"
        >
          Tatsat Yoga School
        </Text>
        <Image src={logo} alt="logo" width={1000} className="  mx-auto my-20 sm:w-44 max-w-[300px] lg:max-w-none fade-animation-hero-logo" />
        <Text maxW="2xl" mx="auto" fontSize={{ base: "sm", sm: "lg" }} className="fade-animation">
          Discover the profound connection between mind, body, and spirit at
          Tatsat Yoga School. Join us to deepen your practice and unlock a life
          of balance and tranquility.
        </Text>
        <Button
          bg="#F67D49"
          color="white"
          px={8}
          py={4}
          mt={8}
          rounded="full"
          fontWeight={{ base: 400 }}
          width={{ base: 'full', sm: 'fit-content' }}
          _hover={{ background: "white", textColor: "#F67D49" }}
        >
          Book Now
        </Button>
      </Box>

      {/* Hero Image */}
      <Image
        src={heroImg}
        alt="Hero"
        width={1000}
        className="rounded-t-[80px] w-full hidden sm:block h-[100vh]"
      />
      <Image
        src={yogaMob}
        alt="Hero"
        width={1000}
        className="rounded-t-[40px] min-h-screen sm:hidden block "
      />
    </Box>
  );
};

export default Hero;
