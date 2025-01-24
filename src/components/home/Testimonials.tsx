"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import mark1 from "@/assets/marques/mark1.jpg"
import Image, {StaticImageData} from "next/image";

// TestimonialCard Component
const TestimonialCard = ({
  quote,
  author,
  img
}: {
  quote: string;
  author: string;
  img: StaticImageData
}) => {
  return (
    <div className="bg-transparent flex flex-col items-center">
      <Image src={img} alt="" width={1000} className="w-20 rounded-full" />
      <p className="font-[500]">{author}</p>
      <p className="text-xs max-w-[250px]">{quote}</p>
    </div>
  );
};

const Testimonials = () => {


  const testimonials = [
    {
      img: mark1,
      quote:
        "The experience at Tatsat Yoga School was truly life-changing. The teachers are incredibly knowledgeable and supportive. The peaceful environment of Rishikesh combined with the authentic teachings has deeply transformed my practice.",
      author: "Sarah Mitchell",

    },
    {
      img: mark1,
      quote:
        "The experience at Tatsat Yoga School was truly life-changing. The teachers are incredibly knowledgeable and supportive. The peaceful environment of Rishikesh combined with the authentic teachings has deeply transformed my practice.",
      author: "Sarah Mitchell",

    },
    {
      img: mark1,
      quote:
        "The experience at Tatsat Yoga School was truly life-changing. The teachers are incredibly knowledgeable and supportive. The peaceful environment of Rishikesh combined with the authentic teachings has deeply transformed my practice.",
      author: "Sarah Mitchell",

    },
    {
      img: mark1,
      quote:
        "The experience at Tatsat Yoga School was truly life-changing. The teachers are incredibly knowledgeable and supportive. The peaceful environment of Rishikesh combined with the authentic teachings has deeply transformed my practice.",
      author: "Sarah Mitchell",

    },
    {
      img: mark1,
      quote:
        "The experience at Tatsat Yoga School was truly life-changing. The teachers are incredibly knowledgeable and supportive. The peaceful environment of Rishikesh combined with the authentic teachings has deeply transformed my practice.",
      author: "Sarah Mitchell",

    },
    {
      img: mark1,
      quote:
        "The experience at Tatsat Yoga School was truly life-changing. The teachers are incredibly knowledgeable and supportive. The peaceful environment of Rishikesh combined with the authentic teachings has deeply transformed my practice.",
      author: "Sarah Mitchell",

    },
    {
      img: mark1,
      quote:
        "The experience at Tatsat Yoga School was truly life-changing. The teachers are incredibly knowledgeable and supportive. The peaceful environment of Rishikesh combined with the authentic teachings has deeply transformed my practice.",
      author: "Sarah Mitchell",

    },
    {
      img: mark1,
      quote:
        "The experience at Tatsat Yoga School was truly life-changing. The teachers are incredibly knowledgeable and supportive. The peaceful environment of Rishikesh combined with the authentic teachings has deeply transformed my practice.",
      author: "Sarah Mitchell",

    },
    {
      img: mark1,
      quote:
        "The experience at Tatsat Yoga School was truly life-changing. The teachers are incredibly knowledgeable and supportive. The peaceful environment of Rishikesh combined with the authentic teachings has deeply transformed my practice.",
      author: "Sarah Mitchell",

    },
    {
      img: mark1,
      quote:
        "The experience at Tatsat Yoga School was truly life-changing. The teachers are incredibly knowledgeable and supportive. The peaceful environment of Rishikesh combined with the authentic teachings has deeply transformed my practice.",
      author: "Sarah Mitchell",

    },
    {
      img: mark1,
      quote:
        "The experience at Tatsat Yoga School was truly life-changing. The teachers are incredibly knowledgeable and supportive. The peaceful environment of Rishikesh combined with the authentic teachings has deeply transformed my practice.",
      author: "Sarah Mitchell",

    },
   
  ];

  return (
    <section
      id="testimonials"
      className=" bg-[#EAE6E1] overflow-hidden mt-[80px] sm:mt-[100px] lg:mt-[120px] pb-[40px] sm:pb-[50px] lg:pb-[60px]"
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className="text-center mb-16 animate__animated animate__fadeIn"
          id="el-d9xysvqk"
        >
          <h2
            className="lg:text-[36px] sm:text-[28px] text-[24px]  text-Black lg:mb-4 sm:mb-2 mb-1 kaftan-text lg:text-5xl py-20 font-normal"
            id="el-sfukqcej"
          >
            WHAT OUR VISITORS ARE SAYING
          </h2>


        </div>

        {/* Swiper Section */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8  ">
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            onSlideChange={(swiper) => {
              const { slides, activeIndex } = swiper;
              slides.forEach((slide, index) => {
                slide.style.transform = ""; // Reset transforms
                if (index === (activeIndex + 3) % slides.length || index === (activeIndex-2 + slides.length) % slides.length) {
                  slide.style.transform = "translateY(-200px)";
                }
              });
            }}

            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              
            }}
            speed={800}
            autoplay={{
              delay: 3000,
             
            }}
            loop={true}
            modules={[Autoplay]}

            style={{padding:"0px 0px 200px 0px"}}
            
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
