import React from "react";
import yogaRetreat from "@/assets/home/yogaRetreat.png";
import Image from "next/image";
import {
  Box,
  Flex,
  FormControl,
  Stack,
  Input,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Menu } from "@chakra-ui/react";
import { GoTriangleDown } from "react-icons/go";

const Form = () => {
  return (
    <div className="bg-[#EAE6E1] min-h-[90vh] relative py-12 lg:py-16">
      <Image
        src={yogaRetreat}
        alt="yogaretreat"
        fill
        className="rounded-t-[64px] object-cover brightness-75"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="kaftan-text text-center text-2xl md:text-4xl lg:text-5xl font-medium text-white pb-6 md:pb-8 lg:pb-10 max-w-3xl"   data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          READY FOR A JOURNEY TO WELLNESS?
        </h1>

        <Box
          p={{ base: "6", md: "6", lg: "8" }}
          width={{ base: "90%", md: "70%", lg: "50%" }}
          maxW="500px"
          bg="rgba(255, 255, 255, 0.7)"
          backdropFilter="blur(8px)"
          borderRadius="xl"
          boxShadow="xl"
        >
          <p className="text-center text-gray-800 text-sm md:text-base font-medium mb-2">
            BOOK NOW AND GET{" "}
            <span className="text-[#F57D49] font-bold">FREE TRIAL CLASS</span>
          </p>
          <p className="text-center text-gray-700 text-xs md:text-sm mb-6">
            To book a class, fill out the form and our manager will contact you.
          </p>

          <Flex flexDirection="column" gap="3">
            <Stack spacing="3">
              <FormControl isRequired>
                <Input
                  size={{ base: "sm", md: "sm", lg: "md" }}
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  bg="white"
                  _placeholder={{ color: "gray.500" }}
                  borderRadius="md"
                  borderColor="gray.300"
                  _hover={{ borderColor: "#F57D49" }}
                  _focus={{ borderColor: "#F57D49", boxShadow: "none" }}
                />
              </FormControl>

              <FormControl isRequired>
                <Input
                  size={{ base: "sm", md: "sm", lg: "md" }}
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  bg="white"
                  _placeholder={{ color: "gray.500" }}
                  borderRadius="md"
                  borderColor="gray.300"
                  _hover={{ borderColor: "#F57D49" }}
                  _focus={{ borderColor: "#F57D49", boxShadow: "none" }}
                />
              </FormControl>

              <FormControl isRequired>
                <Input
                  size={{ base: "sm", md: "sm", lg: "md" }}
                  type="email"
                  name="email"
                  placeholder="Email"
                  bg="white"
                  _placeholder={{ color: "gray.500" }}
                  borderRadius="md"
                  borderColor="gray.300"
                  _hover={{ borderColor: "#F57D49" }}
                  _focus={{ borderColor: "#F57D49", boxShadow: "none" }}
                />
              </FormControl>

              <FormControl>
                <Menu>
                  <MenuButton
                    as={Button}
                    size={{ base: "sm", md: "sm", lg: "md" }}
                    w="full"
                    bg="white"
                    color="gray.500"
                    borderWidth="1px"
                    borderColor="gray.300"
                    rightIcon={<GoTriangleDown />}
                    _hover={{ borderColor: "#F57D49" }}
                    _active={{ bg: "white" }}
                    textAlign="left"
                  >
                    Choose a Practice
                  </MenuButton>
                  <MenuList>
                    <MenuItem>100 Hours Course</MenuItem>
                    <MenuItem>200 Hours Course</MenuItem>
                    <MenuItem>300 Hours Course</MenuItem>
                    <MenuItem>500 Hours Course</MenuItem>
                  </MenuList>
                </Menu>
              </FormControl>
            </Stack>

            <Checkbox
              colorScheme="orange"
              size={{ base: "sm", md: "sm", lg: "md" }}
              mt="2"
              sx={{
                ".chakra-checkbox__control": {
                  borderColor: "#F57D49",
                  _checked: {
                    bg: "#F57D49",
                    borderColor: "#F57D49",
                  }
                }
              }}
            >
              <span className="text-xs md:text-sm text-gray-700">
                I agree to the{" "}
                <span className="text-[#F57D49] cursor-pointer hover:underline">
                  Terms & Privacy
                </span>
              </span>
            </Checkbox>

            <Button
              size={{ base: "md", md: "md", lg: "lg" }}
              bg="#F57D49"
              color="white"
              fontWeight="500"
              rounded="full"
              _hover={{ bg: "#D56820" }}
              _active={{ bg: "#C05A1B" }}
              mt="3"
              py={{ base: "5", md: "6", lg: "7" }}
              fontSize={{ base: "sm", md: "sm", lg: "md" }}
              transition="all 0.2s"
            >
              Submit
            </Button>
          </Flex>
        </Box>
      </div>
    </div>
  );
};

export default Form;
