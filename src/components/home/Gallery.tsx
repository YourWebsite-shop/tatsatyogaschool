import { Flex, Box } from "@chakra-ui/react";
import Image from "next/image";
import gallery10 from "@/assets/gallery10.webp";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery9 from "@/assets/gallery9.webp";

const Gallery = () => {
  return (
    <Flex
    maxWidth={"7xl"}
      width={"100%"}
      mx={"auto"}
      px={{ base:"4", sm:"6", lg:"8" }}
      flexDir={{ base: "column", lg: "row" }}
      className="mt-[80px] sm:mt-[100px] lg:mt-[120px]"
    >
      <Box width={{ base: "100%", lg: "66%" }}>
        <div
          className="text-center mb-16 animate__animated animate__fadeIn"
          id="el-d9xysvqk"
        >
          <div
            className="text-center mb-16 animate__animated animate__fadeIn"
            id="el-d9xysvqk"
          >
            <h2
              className="lg:text-[36px] sm:text-[28px] text-[24px] space-y-4 font-bold text-Black lg:mb-4 sm:mb-2 mb-1"
              id="el-sfukqcej"
            >
              Gallery
            </h2>
            <div
              className="lg:w-[96px] sm:w-[80px] w-[72px] h-1.5 bg-[#E67825] mx-auto lg:mb-6 sm:mb-5 mb-3"
              id="el-3zj1b12y"
            ></div>
            <p
              className="lg:text-[20px] sm:text-[16px] text-[16px] text-gray-500"
              id="el-bvy7ul6w"
            >
              Tatsat Yoga School Gallery
            </p>
          </div>
        </div>
        <Flex width={"100%"}>
          <Box width={"full"} p={2}>
            <Image
              src={gallery9}
              alt="camio"
              width={400}
              height={420}
              className="w-full rounded-2xl"
            />
          </Box>
          <Box width={"full"}>
            <Box width={"full"} p={2}>
              <Image
                src={gallery2}
                alt="carimage"
                width={400}
                height={300}
                className="w-full rounded-2xl"
              />
            </Box>
            <Box width={"full"} p={2}>
              <Image
                src={gallery3}
                alt="logo"
                className="w-full rounded-2xl"
                height={120}
                width={400}
              />
            </Box>
          </Box>
        </Flex>
        <Box width={"100%"} p={2} display={{ base: "none", lg: "block" }}>
          <Image
            src={gallery4}
            alt="camio"
            width={800}
            height={60}
            className="w-full rounded-2xl"
          />
        </Box>
      </Box>
      <Flex
        width={{ base: "100%", lg: "33%" }}
        flexDir={"column"}
        display={{ base: "none", lg: "block" }}
      >
        <Box p={2}>
          <Image
            src={gallery5}
            alt="logo"
            className="w-full rounded-2xl"
            height={60}
            width={400}
          />
        </Box>
        <Box p={2}>
          <Image
            src={gallery10}
            alt="camio"
            width={400}
            height={520}
            className="h-full w-full rounded-2xl object-fill "
          />
        </Box>
        {/* <Box><Image src={camio} alt='camio' width={400} height={300} className='w-full' /></Box> */}
      </Flex>
    </Flex>
  );
};

export default Gallery;
