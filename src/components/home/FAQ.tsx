"use client";
import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react"; // Import useState for state management
import { useDisclosure } from "@chakra-ui/react";

const FAQData = [
  {
    question: "What is Tatsat Yoga School?",
    answer:
      "Tatsat Yoga School is a premier yoga institution located in Rishikesh, the yoga capital of the world. It offers authentic yoga training programs rooted in traditional practices, taught by experienced teachers.",
  },
  {
    question: "What courses does Tatsat Yoga School offer?",
    answer:
      "We offer a variety of courses, including 200-hour, 300-hour, and 500-hour Yoga Teacher Training programs, as well as specialized retreats and workshops focusing on meditation, pranayama, and Ayurveda.",
  },
  {
    question: "Is Tatsat Yoga School accredited?",
    answer:
      "Yes, Tatsat Yoga School is a Yoga Alliance-certified institution, ensuring that our programs meet international standards for yoga teaching and practice.",
  },
  {
    question: "Who can enroll in the Yoga Teacher Training programs?",
    answer:
      "Our programs are open to everyone, from beginners to experienced practitioners, who are passionate about deepening their yoga practice and learning to teach yoga professionally.",
  },
  {
    question: "What is included in the Yoga Teacher Training program fee?",
    answer:
      "The fee includes tuition, accommodation, vegetarian meals, study materials, and certification upon successful completion of the program.",
  },
  {
    question: "What type of accommodation is provided?",
    answer:
      "We provide clean and comfortable accommodations with options for private or shared rooms. Our facilities are designed to create a serene and supportive environment for your yoga journey.",
  },
  {
    question: "Do you provide meals at Tatsat Yoga School?",
    answer:
      "Yes, we provide three wholesome vegetarian meals daily, prepared with fresh and organic ingredients, in line with a yogic diet.",
  },
  {
    question: "What is the daily schedule at Tatsat Yoga School?",
    answer:
      "Our daily schedule includes asana practice, pranayama, meditation, philosophy classes, and teaching methodology sessions, balanced with time for self-study and relaxation.",
  },
  {
    question: "What should I bring with me for the training?",
    answer:
      "We recommend bringing comfortable yoga clothing, a personal yoga mat (optional), notebooks, and any necessary toiletries. Detailed information will be provided upon enrollment.",
  },
  {
    question: "Is prior yoga experience required for enrollment?",
    answer:
      "No prior experience is required for our 200-hour program, as it is designed for beginners. However, some familiarity with yoga is beneficial. Advanced programs may have prerequisites.",
  },
  {
    question: "Are the courses taught in English?",
    answer:
      "Yes, all our courses are conducted in English to accommodate students from around the world.",
  },
  {
    question: "What certifications will I receive upon completion?",
    answer:
      "Upon successfully completing a Yoga Teacher Training program, you will receive a Yoga Alliance-certified certificate, enabling you to teach yoga internationally.",
  },
  {
    question: "Does Tatsat Yoga School offer short-term yoga retreats?",
    answer:
      "Yes, we offer short-term yoga retreats focusing on relaxation, rejuvenation, and spiritual growth. These retreats are ideal for anyone seeking a break from daily life.",
  },
  {
    question: "What is the best time to visit Tatsat Yoga School in Rishikesh?",
    answer:
      "Rishikesh is beautiful year-round, but the best time to visit is from September to April, when the weather is pleasant and suitable for outdoor activities.",
  },
  {
    question: "How do I enroll in a program at Tatsat Yoga School?",
    answer:
      "You can enroll by visiting our website and filling out the application form. For assistance, feel free to contact us directly via email or phone.",
  },
  {
    question: "What is Rishikesh known for?",
    answer:
      "Rishikesh is known as the yoga capital of the world. It is a spiritual hub offering a serene environment, surrounded by the Himalayan foothills and the sacred Ganges River.",
  },
  {
    question: "What makes Tatsat Yoga School unique?",
    answer:
      "Our school combines traditional yogic teachings with a modern approach, experienced teachers, and a nurturing environment, making it an ideal place for authentic yoga education.",
  },
  {
    question: "Can I explore Rishikesh during my stay?",
    answer:
      "Absolutely! Rishikesh offers opportunities for spiritual exploration, visits to temples, Ganga aarti, and adventure activities like rafting and trekking.",
  },
  {
    question: "Does Tatsat Yoga School provide post-training support?",
    answer:
      "Yes, we offer guidance and support to our graduates, helping them start their teaching careers and grow as yoga professionals.",
  },
  {
    question: "Are there any extracurricular activities available?",
    answer:
      "Yes, we organize extracurricular activities such as nature walks, excursions to nearby spiritual sites, and evening kirtan sessions to enhance your overall experience.",
  },
];

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <AccordionItem
      border="none"
      mb={4}
      borderRadius="md"
      maxW="100%"
      mr={8}
      background="linear-gradient(96.56deg, rgba(230, 120, 37, 0.3) 27.8%, rgba(240, 237, 226, 0.3) 53.91%)"
    >
      {({ isExpanded }: { isExpanded: boolean }) => (
        <>
          <AccordionButton
            p={4}
            borderRadius="md"
            _hover={{ bg: "transparent" }}
          >
            <Flex flex="1" justify="space-between" align="center">
              <Text
                align="left"
                fontSize={{ base: "15", lg: "22" }}
                fontWeight={500}
              >
                {question}
              </Text>

              <Text fontSize="2xl" ml={2}>
                {isExpanded ? "×" : "+"}
              </Text>
            </Flex>
          </AccordionButton>
          <AccordionPanel
            pb={4}
            px={4}
            transition="max-height 0.3s ease-in-out, opacity 0.3s ease-in-out"
            maxHeight={isExpanded ? "200px" : "0px"}
            overflow="hidden"
          >
            <Text
              color="#6C6C6C"
              fontSize={{ base: "14px", lg: "16px" }}
              fontWeight={400}
            >
              {answer}
            </Text>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

const Faq: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState<number>(4);

  const { onOpen } = useDisclosure();

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="top"
      justify="space-between"
      w="100%"
      maxW="1480px"
      mx={4}
      
      px={{ base: 6, lg: 12, "2xl": 20 }}
      className="pt-[60px] sm:pt-[80px]"
    >
      <Box textAlign="start" mb={8} w={{ base: "100%", md: "35%" }}>
        <Heading
          fontSize={{ base: "28px", lg: "45px" }}
          fontWeight={600}
          mb={6}
        >
          Frequently Asked Questions
        </Heading>
        <Button
          px={{ base: "6", sm: "8" }}
          py={{ base: "4", sm: "6" }}
          bg="#E67825"
          color="#1A202C"
          borderRadius="full"
          fontWeight="semibold"
          _hover={{ bg: "#E6782590" }}
          onClick={onOpen}
        >
          Contact us
        </Button>
      </Box>

      <Flex
        wrap="wrap"
        justify="flex-end"
        alignItems="flex-end"
        gap={4}
        w={{ base: "100%", md: "60%" }}
      >
        <Accordion allowToggle w="100%">
          {FAQData.slice(0, visibleCount).map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </Accordion>

        {visibleCount < FAQData.length && (
          <Button
            variant="link"
            colorScheme="black"
            alignSelf="flex-end"
            rightIcon={<FiChevronDown />}
            mt={4}
            mr={6}
            onClick={showMore}
            _hover={{ bg: "transparent", color: "inherit" }}
          >
            More Questions
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default Faq;
