import React from "react";
import yogaRetreat from "@/assets/home/yogaRetreat.png";
import Image from "next/image";
import {
  Box,
  Flex,
  FormControl,
  Stack,
  HStack,
  Input,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Menu } from "@chakra-ui/react";
import { GoTriangleDown } from "react-icons/go";

const Form = () => {
  return (
    <div className="bg-[#EAE6E1] h-[100vh] relative py-16">
      <Image
        src={yogaRetreat}
        alt="yogaretreat"
        fill
        className="rounded-t-[64px] object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="kaftan-text text-center sm:text-[28px] text-[18px] lg:text-[48px] font-medium text-white pb-10">
          READY FOR A JOURNEY TO WELLNESS?
        </h1>

        <Box
        p={{base:"5", sm:"8", lg:"10"}}
          width="50%"
          maxW="400px"
          mt="8"
          bg="rgba(255, 255, 255, 0.5) "
        >
          <p className="text-center text-white lg:text-[16px] sm:text-[12px] text-[10px] pb-2">
            BOOK NOW AND GET{" "}
            <span className="text-[#F57D49]">FREE TRIAL CLASS</span>
          </p>
          <p className="text-center text-white lg:text-[10px] sm:text-[8px] text-[8px] pb-6">
            To book a class, fill out the form and our manager will <br />
            <strong className="text-white">contact you.</strong>
          </p>
          <Flex flexDirection="column" gap="30px">
            <Stack spacing={{ base: "4px", lg: "8px" }}>
              <FormControl
                isRequired
                backgroundColor=""
                pb={1}
                borderBottom="2px solid white"
              >
                <HStack>
                  <Input
                    fontSize={{base:"10px", sm:"12px", lg:"14px"}}
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    _placeholder={{ color: "#6C615D", fontsize: "8px" }}
                    border="none"
                    color="#6C615D"
                    focusBorderColor="transparent"
                    width="100%"
                    p={0}
                    mb={-3}
                    pb={{base:"0", lg:"2"}}
                  />
                </HStack>
              </FormControl>
              <FormControl
                isRequired
                backgroundColor=""
                pb={1}
                borderBottom="2px solid white"
              >
                <HStack>
                  <Input
                    fontSize={{base:"10px", sm:"12px", lg:"14px"}}
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    _placeholder={{ color: "#6C615D", fontsize: "8px" }}
                    border="none"
                    color="#6C615D"
                    focusBorderColor="transparent"
                    width="100%"
                    p={0}
                    mb={-3}
                    pb={{base:"0", lg:"2"}}
                  />
                </HStack>
              </FormControl>
              <FormControl
                isRequired
                backgroundColor=""
                pb={0}
                borderBottom="2px solid white"
              >
                <HStack>
                  <Input
                    fontSize={{base:"10px", sm:"12px", lg:"14px"}}
                    type="email"
                    name="email"
                    placeholder="Email"
                    _placeholder={{ color: "#6C615D", fontsize: "6px" }}
                    border="none"
                    color="#6C615D"
                    focusBorderColor="transparent"
                    width="100%"
                    p={0}
                    mb={-3}
                    pb={{base:"0", lg:"2"}}
                  />
                </HStack>
              </FormControl>

              <FormControl pb={1} width="100%" borderBottom="2px solid white">
                <HStack spacing={2} width="100%">
                  <Menu>
                    <MenuButton
                      fontSize={{base:"10px", sm:"12px", lg:"14px"}}
                      as={Button}
                      bg=""
                      w={"full"}
                      color="white"
                      textAlign={"left"}
                      rightIcon={<GoTriangleDown />}
                      _focus={{
                        boxShadow: "transparent",
                        bg: "none",
                      }}
                      _hover={{
                        bg: "none",
                        color: "white",
                      }}
                      _active={{
                        bg: "none",
                      }}
                      p={0}
                      mb={-3}
                      pb={{base:"0", lg:"2"}}
                    >
                      Choose a Practice
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Enquiry</MenuItem>
                      <MenuItem>Order Related</MenuItem>
                      <MenuItem>Complaint</MenuItem>
                    </MenuList>
                  </Menu>
                </HStack>
              </FormControl>
            </Stack>
            <Checkbox
              colorScheme="#F57D49"
              iconColor="white"
              fontSize="10px"
              color="white"
              pb={4}
              sx={{
                "& .chakra-checkbox__control": {
                  borderColor: "#F57D49",
                },
                "& .chakra-checkbox__control[data-checked]": {
                  bg: "#F57D49",
                },
              }}
            >
              <p className="lg:text-[10px] sm:text-[8px] text-[6px] lg:pl-2 sm:pl-1 pl-0  ">
              I agree to the{" "}
              <span className="text-[#F57D49]">Terms & Privacy</span>
              </p>
            </Checkbox>
            <Button
              width="full"
              fontSize={{base:"14px", sm:"16px", lg:"20px"}}
              bg="#F57D49"
              color="#FFFFFF"
              fontWeight={400}
              px="20px"
              py="10px"
              rounded="50px"
              _hover={{ bg: "#D56820" }}
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
