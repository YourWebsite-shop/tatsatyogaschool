"use client";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Link,
  Container,
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

  // type NavLinkProps = {
  //   children: React.ReactNode;
  //   path: string;
  // };

  const NavLink = ({ children, path }:{children:ReactNode, path:string}) => (
    <Link
      as={NextLink}
      px={4}
      py={2}
      rounded="md"
      href={path}
      fontSize="md"
      fontWeight="medium"
      transition="all 0.3s ease"
      position="relative"
      _hover={{
        textDecoration: "none",
        color: "#E67825",
        _after: {
          width: "100%"
        }
      }}
      _after={{
        content: '""',
        position: "absolute",
        width: "0%",
        height: "2px",
        bottom: "0",
        left: "0",
        backgroundColor: "#E67825",
        transition: "width 0.3s ease"
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
    <Box bg="white" position="sticky"  top="0" zIndex="1000" boxShadow="sm">
      <Container maxW="container.xl">
        <Flex  alignItems="center" justifyContent="space-between">
          {/* Logo or Branding */}
          <Box 
            fontWeight="bold" 
            fontSize="xl" 
            color="#E67825"
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.05)" }}
          >
            <Image src={logo} alt="Logo" width={1000} height={1000} className="w-32" />
          </Box>

          <IconButton
            size="lg"
            icon={isOpen ? <IoCloseSharp size={24} /> : <GiHamburgerMenu size={24} />}
            aria-label="Toggle Navigation"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            background="transparent"
            color="#E67825"
            _hover={{ 
              background: "rgba(230, 120, 37, 0.1)",
              transform: "scale(1.1)"
            }}
            _active={{ 
              background: "rgba(230, 120, 37, 0.2)" 
            }}
            transition="all 0.3s ease"
          />

          <HStack 
            as="nav" 
            spacing={6} 
            display={{ base: "none", md: "flex" }}
            alignItems="center"
          >
            {Links.map((link) => (
              <NavLink key={link.name} path={link.path}>
                {link.name}
              </NavLink>
            ))}
          </HStack>
        </Flex>

        {/* Dropdown Menu for Mobile */}
        {isOpen && (
          <Box 
            pb={4} 
            display={{ md: "none" }}
            animation="slideDown 0.3s ease-in-out"
            sx={{
              "@keyframes slideDown": {
                "0%": { opacity: 0, transform: "translateY(-10px)" },
                "100%": { opacity: 1, transform: "translateY(0)" }
              }
            }}
          >
            <Stack as="nav" spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} path={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;
