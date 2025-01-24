"use client"
import React from 'react'
import {
  
  Flex,
  Text,
    Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  IconButton,
  DrawerFooter,
} from "@chakra-ui/react";
import logo from "@/assets/Logo-transparent.png";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import Image from 'next/image';

const Navbar = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
          {/* Navbar */}
          <Flex
        as="nav"
        align="center"
        justify="space-between"
        px={6}
        py={{ base: 0, lg: 4 }}
        bg="#F67D49"
        color="white"
        position="relative"
        flexDir="row-reverse"
      // Add animation class
      >
        {/* Hamburger for Mobile */}
        <IconButton
          display={{ base: "block", lg: "none" }}
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="unstyled"
        />

        {/* Logo */}
        <Image src={logo} alt="logo" width={1000} className="   w-10  lg:max-w-none fade-animation-hero-logo sm:hidden" />

        {/* Links for Desktop */}
        <Flex
          display={{ base: "none", lg: "flex" }}
          align="center"
          gap={8}
          fontSize="lg"
          w={'full'}
          justifyContent={'space-around'}

        >
          <Text cursor="pointer" className="fade-animation">Home</Text>
          <Text cursor="pointer" className="fade-animation">About</Text>
          <Text cursor="pointer" className="fade-animation">Some2</Text>
          <Image src={logo} alt="logo" width={1000} className="w-8 lg:w-20  fade-animation" />
          <Text cursor="pointer" className="fade-animation">Some3</Text>
          <Text cursor="pointer" className="fade-animation">Some3</Text>
          <Text cursor="pointer" className="fade-animation">Some3</Text>
        </Flex>
      </Flex>

      {/* Drawer for Mobile Navbar */}
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="#F67D49" color="white" className="rounded-tr-[50px] rounded-tl-[50px]" >
          <DrawerBody py={10} >
            <Flex direction="column" align="center" gap={6} fontSize="lg">
              <Text cursor="pointer" onClick={onClose}>
                Home
              </Text>
              <Text cursor="pointer" onClick={onClose}>
                About
              </Text>
              <Text cursor="pointer" onClick={onClose}>
                Some2
              </Text>
              <Text cursor="pointer" onClick={onClose}>
                Some3
              </Text>
              <Text cursor="pointer" onClick={onClose}>
                Some4
              </Text>
              <Text cursor="pointer" onClick={onClose}>
                Some5
              </Text>
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Flex alignItems={'self-start'} flexDir={'column'} justifyContent={'start'} className="w-full block" gap={2} >
              <Flex alignItems={'center'} gap={4} fontSize={'sm'}><FaLocationDot />
                <Text>Rishikesh, India</Text>
              </Flex>
              <Flex alignItems={'center'} gap={4} fontSize={'sm'}><IoMdCall />
                <Text>Rishikesh, India</Text>
              </Flex>
              <Flex alignItems={'center'} gap={4} fontSize={'sm'}><IoMail />
                <Text>Rishikesh, India</Text>
              </Flex>
            </Flex>

          </DrawerFooter>
          <Flex className="bloxk w-full flex justify-center gap-4 py-4">
            <FaInstagram className="text-4xl  rounded-full p-1" />
            <FaInstagram className="text-4xl  rounded-full p-1" />
            <FaInstagram className="text-4xl  rounded-full p-1" />
          </Flex>
        </DrawerContent>
      </Drawer>

    </>
  )
}

export default Navbar
