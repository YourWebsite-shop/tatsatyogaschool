"use client";
import React from "react";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const Hero: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg="white">
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        minHeight="100vh"
        textAlign="center"
      >
        <Text textAlign="center" color="#181818" fontSize={{ base: "12px", sm: "20px", md:"24px" }} pb="4" >
          WELCOME TO TATSAT YOGA SCHOOL
        </Text>
        <Text
          fontSize={{ base: "36px", sm: "52px", md: "82px" }}
          fontWeight="bold"
          color="#181818"
          mb="4"
          lineHeight={{ base: "1", sm: "1.1", md: "1.2" }}
        >
          Embrace Your Inner Peace, Transform Your Outer World
        </Text>

        <Text
          fontSize={{ base: "12px", sm: "20px", md:"24px" }}
          color="gray.500"
          
          mx="auto"
          mb="8"
        >
          Discover the profound connection between mind, body, and spirit at
          Tatsat Yoga School. Join us to deepen your practice and unlock a life
          of balance and tranquillity.
        </Text>

        <Box
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          gap="16px"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            px="8"
            py="6"
            bg="#E67825"
            color="#1A202C"
            borderRadius="full"
            fontWeight="semibold"
            _hover={{ bg: "#E6782590" }}
            onClick={onOpen}
          >
            Book Now
          </Button>

          <Button
            px="8"
            py="6"
            border="2px"
            bg="#181818"
            borderColor="white"
            color="white"
            borderRadius="full"
            onClick={onOpen}
            _hover={{
              bg: "white",
              color: "#1A202C",
              borderColor: "#E67825",
            }}
          >
            Know More
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
