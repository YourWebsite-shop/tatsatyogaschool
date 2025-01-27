"use client";
import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

import heroImg from "@/assets/home/yoga.png";
import Circles from "@/assets/home/Circles.png";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <Box bg="#F67D49" minH={"100vh"} position="relative">
      {/* Hero Section */}
      <Box
        textAlign="center"
        color="white"
        py={{ base: 8, md: 12 }}
        px={{ base: 4, md: 6 }}
        position={"absolute"}
        className="left-1/2 -translate-x-1/2 w-full z-10 h-full flex flex-col justify-between"
      >
        <div>
          <Text
            fontSize={{ base: "3xl", md: "5xl", lg: "7xl" }}
            fontWeight="bold"
            lineHeight="short"
            className="kaftan-text fade-animation-1"
            px={{ base: 2, sm: 4 }}
          >
            TATSAT YOGA SCHOOL
          </Text>
          <Box position="relative" width="100%" py={{ base: 2, md: 0 }}>
            <Image
              src={Circles}
              alt="circles"
              width={1000}
              className="mx-auto w-32 sm:w-44 max-w-[200px] lg:max-w-none fade-animation-hero-logo"
            />
          </Box>
        </div>

        <div className="mb-16 sm:mb-28 md:mb-20">
          <Text
            maxW="2xl"
            mx="auto"
            fontSize={{ base: "xs", sm: "sm", md: "lg" }}
            px={{ base: 4, sm: 6 }}
            className="fade-animation-2"
          >
            Discover the profound connection between mind, body, and spirit at
            Tatsat Yoga School. Join us to deepen your practice and unlock a
            life of balance and tranquility.
          </Text>
          <Button
            className="fade-animation-3"
            bg="#F67D49"
            color="white"
            px={{ base: 6, md: 8 }}
            py={{ base: 3, md: 4 }}
            mt={{ base: 6, md: 8 }}
            rounded="full"
            fontWeight={{ base: 400 }}
            fontSize={{ base: "sm", md: "md" }}
            width={{ base: "80%", sm: "fit-content" }}
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
        className="rounded-t-[80px] w-full hidden sm:block h-screen object-cover"
      />
      <Image
        src={heroImg}
        alt="Hero"
        width={1000}
        className="rounded-t-[40px] w-full h-screen object-cover sm:hidden"
      />
    </Box>
  );
};

export default Hero;
