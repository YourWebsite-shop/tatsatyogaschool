import React from 'react';
import { Box, Grid, Heading, Text, Flex } from '@chakra-ui/react';
import mark1 from '@/assets/marques/mark1.jpg';
import Image from 'next/image';

const instructors = [
  {
    name: 'Kunal Khandelwal',
    title: 'Hatha Yoga Instructor',
    experience: '6 years of experience',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente exercitationem ullam pariatur minima ea asperiores.',
    image: mark1,
  },
  {
    name: 'Aarav Sharma',
    title: 'Vinyasa Yoga Instructor',
    experience: '4 years of experience',
    description: 'Praesentium maiores labore aliquam, animi minima nulla eveniet dignissimos.',
    image: mark1,
  },
  {
    name: 'Ishita Verma',
    title: 'Ashtanga Yoga Instructor',
    experience: '5 years of experience',
    description: 'Exercitationem quo veritatis doloremque perferendis iste eaque quae.',
    image: mark1,
  },
  // {
  //   name: 'Arjun Patel',
  //   title: 'Power Yoga Instructor',
  //   experience: '7 years of experience',
  //   description: 'Optio deleniti ratione quia error voluptas velit aspernatur.',
  //   image: mark1,
  // },
  // {
  //   name: 'Naina Kapoor',
  //   title: 'Restorative Yoga Instructor',
  //   experience: '3 years of experience',
  //   description: 'Tempore fugit ipsa repellendus quos reiciendis officia, assumenda.',
  //   image: mark1,
  // },
  // {
  //   name: 'Rohan Gupta',
  //   title: 'Prenatal Yoga Instructor',
  //   experience: '8 years of experience',
  //   description: 'Voluptatibus quibusdam pariatur deserunt fugiat cupiditate aspernatur.',
  //   image: mark1,
  // },
];

const Instructors: React.FC = () => {
  return (
    <Box pb={20} px={4}>
      <Heading textAlign="center" fontSize="4xl" mb={12} data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
        <p className='kaftan-text font-semibold' >
        MEET OUR INSTRUCTORS
        </p>
      </Heading>

      <Grid
        templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={8}
        justifyContent="center"
        maxW={'1280px'}
        mx={'auto'}
      >
        {instructors.map((instructor, index) => (
          <Box key={index} textAlign="center" position="relative" data-aos="fade-up" data-aos-delay={`${index}00`} data-aos-duration="1000">
            <Box position="relative" display="inline-block">
              <Image
                src={instructor.image}
                alt={instructor.name}
                className="w-[200px] rounded-full object-cover"
              />
              <Box
                position="absolute"
                top="0"
                left="0"
                w="200px"
                h="200px"
                border="2px solid white"
                borderRadius="full"
                transform="translateX(20px)"
                zIndex="10"
              />
            </Box>

            <Box mt={4}>
              <Text fontWeight="500" fontSize="xl">
                {instructor.name}
              </Text>
              <Flex alignItems="center" justifyContent="center" gap={2} mt={2}>
                <Text>{instructor.title}</Text>
                <Box w={2} h={2} bg="orange.500" borderRadius="full"></Box>
                <Text >{instructor.experience}</Text>
              </Flex>
              <Text textAlign={'start'}  mt={4} fontSize="sm" color="gray.600">
                {instructor.description}
              </Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Instructors;
