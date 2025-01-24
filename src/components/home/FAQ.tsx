"use client"
import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Button
} from '@chakra-ui/react'


const FAQ: React.FC = () => {
  const [visibleFAQs, setVisibleFAQs] = useState(5);

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

  const loadMore = () => {
    setVisibleFAQs(prev => Math.min(prev + 5, FAQData.length));
  };

  return (
    <div className='bg-[#EAE6E1] pb-44'>
      <div className='max-w-[1280px] mx-auto'>
      <h3 className=' text-4xl py-20 leading-[45px] max-w-[260px] mx-auto lg:max-w-none lg:text-6xl text-center kaftan-text lg:py-32'  data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">FREQUENTLY ASKED QUESTIONS</h3>

      <Accordion allowMultiple={true} mx={4}>
        {FAQData.slice(0, visibleFAQs).map((faq, i) => (
          <AccordionItem key={i} borderColor={'orange'} py={2} >
          <h2>
          <AccordionButton>
            <Text as='span' flex='1' textAlign='left' fontWeight={500} fontSize={'lg'} >
              {faq.question}
            </Text>
            <AccordionIcon />
          </AccordionButton>
          </h2>

          <AccordionPanel pb={4} textColor={'#5C5956'} fontSize={'sm'} fontWeight={'semibold'}>
           {faq.answer}
          </AccordionPanel>
        </AccordionItem>
        ))}
      </Accordion>

      {visibleFAQs < FAQData.length && (
        <div className="flex justify-end mt-8 mr-4">
          <Button 
            onClick={loadMore}
            colorScheme="orange"
            variant="outline"
            size="sm"
          >
            Load More FAQs
          </Button>
        </div>
      )}
    </div>
    </div>
  )
}

export default FAQ
