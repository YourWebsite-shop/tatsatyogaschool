"use client";
import React from "react";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import Arrow from "@/assets/home/arrow.png";
import Image from "next/image";

const Hero: React.FC = () => {
  const { onOpen } = useDisclosure();
  return (
    <Box bg="white" className="relative">
      <Box className="absolute w-[180px] rotate left-24 bottom-20 "><Image src={Arrow} alt="" className="scale-x-[-1]" /></Box>
      <Flex
        maxW={"1480px"}
        mx={"auto"}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        minHeight="80vh"
        textAlign="center"
      >
        <Text
          textAlign="center"
          color="#181818"
          fontSize={{ base: "14px", sm: "16px", md: "18px" }}
          pb="4"
          letterSpacing="2px"
        >
          WELCOME TO TATSAT YOGA SCHOOL
        </Text>
        <Text
          fontSize={{ base: "32px", sm: "40px", md: "48px", lg: "56px" }}
          fontWeight="bold"
          color="#181818"
          mb="4"
          px={{ base: 2, lg: 20 }}
          lineHeight={{ base: "1.2", sm: "1.2", md: "1.2" }}
        >
          Embrace Your Inner Peace,<br /> Transform Your Outer World
        </Text>

        <Text
          fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "22px" }}
          color="gray.600"
          px={{ base: 4, md: "80px", lg: 44 }}
          mx="auto"
          mb="8"
          lineHeight="1.6"
          maxW={{lg:"1300px"}}
        >
          Discover the profound connection between mind, body, and spirit at
          Tatsat Yoga School. Join us to deepen your practice and unlock a life
          of balance and tranquillity.
        </Text>

        <Box
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          gap={{ base: "12px", sm: "16px" }}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            px={{ base: "8", sm: "10" }}
            py={{ base: "6", sm: "7" }}
            bg="#E67825"
            color="white"
            borderRadius="full"
            fontWeight="bold"
            fontSize={{ base: "16px", sm: "18px" }}
            _hover={{ 
              bg: "#d16616",
              transform: "translateY(-2px)",
              boxShadow: "lg"
            }}
            _active={{
              bg: "#b85914",
              transform: "translateY(0)"
            }}
            transition="all 0.2s ease-in-out"
            onClick={onOpen}
          >
            Book Now
          </Button>

          <Button
            px={{ base: "8", sm: "10" }}
            py={{ base: "6", sm: "7" }}
            bg="transparent"
            color="#E67825"
            border="2px"
            borderColor="#E67825"
            borderRadius="full"
            fontWeight="bold"
            fontSize={{ base: "16px", sm: "18px" }}
            _hover={{ 
              bg: "#E67825",
              color: "white",
              transform: "translateY(-2px)",
              boxShadow: "lg"
            }}
            _active={{
              bg: "#d16616",
              transform: "translateY(0)"
            }}
            transition="all 0.2s ease-in-out"
            onClick={onOpen}
          >
            Know More
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
