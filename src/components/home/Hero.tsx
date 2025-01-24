"use client"
import React from "react";
import yogaMob from "@/assets/home/yoga-mob.jpg"
import {
  Box,
  Text,
  Button,
} from "@chakra-ui/react";

import heroImg from "@/assets/home/yoga.png";
import Circles from "@/assets/home/Circles.png";
import Image from "next/image";

const Hero: React.FC = () => {

  return (
    <Box bg="#F67D49" minH={'100vh'}  position="relative">

      {/* Hero Section */}
      <Box textAlign="center" color="white" py={12} px={4} position={'absolute'} className="left-1/2 -translate-x-1/2 w-full z-10 h-full flex flex-col justify-between">
        <div>
          <Text
            fontSize={{ base: "3xl", sm: "5xl", lg: "7xl" }}
            fontWeight="bold"
            lineHeight="short"
            className="kaftan-text fade-animation-1"

          >
            TATSAT YOGA SCHOOL
          </Text>
          <Box position="relative" width="100%" py={0}>
            <Image src={Circles} alt="circles" width={1000} className="mx-auto sm:w-44 max-w-[200px] lg:max-w-none fade-animation-hero-logo" />
          </Box>
        </div>

        <div className="mb-14">
          <Text maxW="2xl" mx="auto" fontSize={{ base: "sm", sm: "lg" }} className="fade-animation-2">
            Discover the profound connection between mind, body, and spirit at
            Tatsat Yoga School. Join us to deepen your practice and unlock a life
            of balance and tranquility.
          </Text>
          <Button
          className="fade-animation-3"
            bg="#F67D49"
            color="white"
            px={8}
            py={4}
            mt={8}
            rounded="full"
            fontWeight={{ base: 400 }}
            width={{ base: 'full', sm: 'fit-content' }}
            _hover={{ background: "#FF9B73", textColor: "white" }}
          >
            Book Now
          </Button>
        </div>
      </Box>

      {/* Hero Image */}
      <Image
        src={heroImg}
        alt="Hero"
        width={1000}
        className="rounded-t-[80px] w-full hidden sm:block h-[100vh]"
      />
      <Image
        src={heroImg}
        alt="Hero"
        width={1000}
        className="rounded-t-[40px] object-cover  min-h-screen sm:hidden block "
      />
    </Box>
  );
};

export default Hero;
