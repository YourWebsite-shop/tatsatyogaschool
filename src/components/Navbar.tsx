"use client";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Link,
} from "@chakra-ui/react";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import NextLink from "next/link";
import logo from "@/assets/Logo.png";
import Image from "next/image";
import { ReactNode } from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Yoga Retreat", path: "" },
    { name: "Yoga TTC Course", path: "" },
    { name: "Contact", path: "/contactus" },
  ];

  type NavLinkProps = {
    children: React.ReactNode; // Accepts any valid React child
    path: string; // Expects a string for the path
  };

  const NavLink = ({ children, path }:{children:ReactNode, path:string}) => (
    <Link
      as={NextLink}
      px={3}
      py={2}
      rounded="md"
      href={path}
      _hover={{
        textDecoration: "none",
        color: "#E67825",
      }}
      _activeLink={{
        fontWeight: "bold",
        color: "#E67825",
      }}
    >
      {children}
    </Link>
  );

  return (
    <Box bg="white" px={4} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo or Branding */}
        <Box fontWeight="bold" fontSize="xl" color="#E67825">
          <Image src={logo} alt="Logo" width={70} height={70} />
        </Box>

        
        <IconButton
          size="md"
          icon={isOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
          aria-label="Toggle Navigation"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          background={"transparent"}
          _hover={{ background: "transparent" }} 
          _active={{ background: "transparent" }}
        />

        
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <NavLink key={link.name} path={link.path}>
              {link.name}
            </NavLink>
          ))}
        </HStack>
      </Flex>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.name} path={link.path}>
                {link.name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
