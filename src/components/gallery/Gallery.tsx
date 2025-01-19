"use client";
import React, { useState } from "react";
import {
  SimpleGrid,
  GridItem,
  Box,
  Heading,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons"; // Import CloseIcon from Chakra UI
import Image from "next/image";
import gallery10 from "@/assets/gallery10.webp";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";
import gallery7 from "@/assets/gallery7.jpg";
import gallery9 from "@/assets/gallery9.webp";
import gallery1 from "@/assets/gallery1.jpg";

const Gallery = () => {
  // List of images for easy maintenance
  const imagesLeftColumn = [gallery10, gallery5, gallery6, gallery7];
  const imagesRightColumn = [
    gallery4,
    gallery5,
    gallery1,
    gallery2,
    gallery3,
    gallery4,
  ];

  // State and hooks for modal functionality
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image click
  const handleImageClick = (src) => {
    setSelectedImage(src);
    onOpen();
  };

  return (
    <Box w="full" px={{ base: 4, md: 16 }} py={8} pb={{ lg: "100px" }}>
      {/* Heading */}
      <div
        className="text-center mb-16 animate__animated animate__fadeIn"
        id="el-d9xysvqk"
      >
        <h2 className="text-4xl font-bold text-Black mb-4" id="el-sfukqcej">
          Gallery
        </h2>
        <div
          className="w-24 h-1 bg-[#E67825] mx-auto mb-6"
          id="el-3zj1b12y"
        ></div>
        <p className="text-xl text-gray-500" id="el-bvy7ul6w">
          Transform your life with our comprehensive yoga courses
        </p>
      </div>

      {/* Image Grid */}
      <SimpleGrid columns={2} spacing={4}>
        {/* Left column */}
        <GridItem>
          {imagesLeftColumn.map((src, index) => (
            <Box
              key={index}
              overflow="hidden"
              boxShadow="md"
              borderRadius="2xl"
              mb={4}
              width="100%" // Ensure the Box takes up the full width
              height="auto"
              cursor="pointer"
              onClick={() => handleImageClick(src)}
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 5}`}
                objectFit="cover"
              />
            </Box>
          ))}
        </GridItem>

        {/* Right column */}
        <GridItem>
          {imagesRightColumn.map((src, index) => (
            <Box
              key={index}
              overflow="hidden"
              boxShadow="md"
              borderRadius="2xl"
              mb={4}
              width="100%" // Ensure the Box takes up the full width
              height="auto"
              cursor="pointer"
              onClick={() => handleImageClick(src)}
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 5}`}
                objectFit="cover"
              />
            </Box>
          ))}
        </GridItem>
      </SimpleGrid>

      {/* Modal for larger image view */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalBody p={0} position="relative">
            {/* Close button */}
            <IconButton
              icon={<CloseIcon />}
              position="absolute"
              top={2}
              right={2}
              colorScheme="whiteAlpha"
              onClick={onClose}
              zIndex={2}
              aria-label="Close image modal"
            />
            {/* Display selected image */}
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Selected Gallery Image"
                width={800} // Larger size for modal
                height={600}
                objectFit="cover"
                priority
                style={{ borderRadius: "1rem" }}
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Gallery;
