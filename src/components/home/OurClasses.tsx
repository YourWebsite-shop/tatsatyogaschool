"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { FaCalendarAlt } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import Image from "next/image";
import Carousel1 from "@/assets/home/carousel1.jpg";
import Carousel2 from "@/assets/home/carousel2.jpg";
import Carousel3 from "@/assets/home/carousel3.jpg";
import Carousel4 from "@/assets/home/carousel4.jpg";
import Top from "@/assets/Top.png";
import bottomBoder from "@/assets/home/ourClassesBorder.webp";
import divorna from "@/assets/home/divider-ornament.png"

const OurClasses = () => {
  const [activeClass, setActiveClass] = useState("100 Hours");
  const swiperRef = useRef<SwiperType>();

  const classes = [
    {
      name: "100 Hours",
      description:
        "Our foundational yoga teacher training program designed for aspiring instructors and dedicated practitioners. This comprehensive course covers essential asanas, pranayama techniques, teaching methodology, anatomy basics, and yoga philosophy. Perfect for those beginning their teaching journey or deepening their practice.",
      specifics:
        "Basic asanas, breathing techniques, meditation, anatomy basics, yoga philosophy",
      schedule: "Mon-Wed 8:30 - 9:30 am, Friday 6:30-7:30 pm",
      bookingLink: "https://example.com/book/100-hours",
      image: Carousel1,
      teacher: "Sarah Anderson",
    },
    {
      name: "200 Hours",
      description:
        "An immersive yoga teacher training program certified by Yoga Alliance. This transformative course provides in-depth study of asana practice, teaching methodology, anatomy, philosophy and practicum. Students will develop strong teaching skills while deepening their understanding of yoga's traditional roots.",
      specifics:
        "Teaching methodology, advanced asanas, anatomy, philosophy, pranayama, class planning",
      schedule: "Mon-Wed 8:30 - 9:30 am, Friday 6:30-7:30 pm",
      bookingLink: "https://example.com/book/200-hours",
      image: Carousel2,
      teacher: "Michael Chen",
    },
    {
      name: "300 Hours",
      description:
        "An advanced training program designed for certified 200-hour teachers looking to expand their expertise. This intensive course covers complex asanas, therapeutic applications, energy work and specialized teaching skills. Students will refine their teaching while exploring advanced philosophy and pranayama.",
      specifics:
        "Therapeutic yoga, advanced teaching, energy work, specialized populations, business skills",
      schedule: "Mon-Wed 8:30 - 9:30 am, Friday 6:30-7:30 pm",
      bookingLink: "https://example.com/book/300-hours",
      image: Carousel3,
      teacher: "Emma Patel",
    },
    {
      name: "500 Hours",
      description:
        "Our most comprehensive teacher training program combining foundational and advanced studies. This transformative journey covers advanced teaching methodologies, therapeutic applications, energy work and specialized populations. Perfect for those seeking complete mastery of yoga instruction.",
      specifics:
        "Complete mastery program, advanced therapy, specialized teaching, professional development",
      schedule: "Mon-Wed 8:30 - 9:30 am, Friday 6:30-7:30 pm",
      bookingLink: "https://example.com/book/500-hours",
      image: Carousel4,
      teacher: "David Rodriguez",
    },
  ] as const;

  const changeClass = (className: string) => {
    setActiveClass(className);
    const newIndex = classes.findIndex((c) => c.name === className);
    if (swiperRef.current) {
      swiperRef.current.slideTo(newIndex);
    }
  };

  const activeClassData = classes.find(
    (yogaClass) => yogaClass.name === activeClass
  );

  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    const activeIndex = swiper.realIndex;
    setActiveClass(classes[activeIndex].name);
  };

  return (
    <div className="pb-12">
      <div className="bg-[#1A1A1A] relative pt-5 pb-96 rounded-t-[60px]">
      <Image
          src={bottomBoder}
          alt="Decorative background"
          className="absolute   bottom-0 opacity-50 "
        />
        <div
          className="kaftan-text my-8 text-white text-center lg:text-5xl md:text-4xl text-3xl font-bold tracking-widest"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          OUR CLASSES
        </div>

        <div className="flex md:flex-wrap md:justify-center gap-4 px-4 overflow-x-auto md:overflow-visible whitespace-nowrap scrollbar-hide">
          {classes.map((yogaClass, index) => (
            <div key={index} className="relative inline-block md:block">
              <div
                onClick={() => changeClass(yogaClass.name)}
                className={`lg:px-8 md:px-6 px-4 py-3 rounded-full lg:text-sm text-xs font-medium cursor-pointer transition-colors
                  ${
                    yogaClass.name === activeClass
                      ? "text-[#F67D49]"
                      : "text-white"
                  }`}
                data-aos="fade-up"
                data-aos-delay={`${index}00`}
                data-aos-duration="1000"
              >
                {yogaClass.name}
              </div>
              {yogaClass.name === activeClass && (
                <div className="absolute top-14 left-1/2 -translate-x-1/2 w-full md:w-[300px] text-white text-center">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-2 h-2 bg-[#F67D49] rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 px-4 lg:px-10 mt-16 text-white">
          <div className="lg:w-[50%] w-full">
            <div
              className="text-lg font-semibold mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              ABOUT
            </div>
            <div
              className="text-sm"
              data-aos="fade-up"
              data-aos-delay="350"
              data-aos-duration="1000"
            >
              {activeClassData?.description}
            </div>
          </div>
          <div className="lg:w-[25%] md:w-[50%] w-full">
            <div
              className="text-lg font-semibold mb-4"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              SPECIFICS
            </div>
            <div
              className="text-sm"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="1000"
            >
              {activeClassData?.specifics}
            </div>
          </div>
          <div className="lg:w-[25%] md:w-[50%] w-full">
            <div
              className="text-lg font-semibold mb-4"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              SCHEDULE
            </div>
            <div
              className="text-sm flex mb-2"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div className="inline-flex items-center justify-center bg-gray-700 rounded-full h-8 mr-2">
                <FaCalendarAlt className="mx-[9px]" />
              </div>
              <div className="flex-1">{activeClassData?.schedule}</div>
            </div>
            <div
              className="text-sm flex"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div className="inline-flex items-center justify-center bg-gray-700 rounded-full h-8 mr-2">
                <GiMeditation className="mx-[9px]" />
              </div>
              <div className="flex-1">
                <span className="font-semibold text-xs">INSTRUCTOR</span> <br />
                {activeClassData?.teacher}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-80">
        <div className="flex max-w-6xl mx-auto mt-8">
          {/* <button ref={prevButtonRef} className="hidden md:block">
            <Image
              src={Arrow}
              alt="Previous"
              width={90}
              height={90}
              className="transform scale-x-[-1]"
            />
          </button> */}

          <div className="px-2 md:px-8 w-full max-w-5xl relative ">
            <Image
              src={Top}
              alt=""
              className="absolute z-10 w-28 left-1/2 -translate-x-1/2 lg:-translate-x-0"
            />
            <Image
              src={divorna}
              alt=""
              className="absolute hidden lg:block max-w-5xl rotate-180 top-full w-[98%] lg:w-[900px] ml-10 z-10 left-1/2 -translate-x-1/2 lg:-translate-x-1/2"
            />
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="mySwiper max-w-4xl rounded-b-[48px] overflow-hidden lg:translate-x-10 relative"
              modules={[Navigation]}
              navigation={{
                prevEl: prevButtonRef.current,
                nextEl: nextButtonRef.current,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop
              onSlideChange={handleSlideChange}
              initialSlide={classes.findIndex((c) => c.name === activeClass)}
              onBeforeInit={(swiper) => {
                if (
                  swiper.params.navigation &&
                  typeof swiper.params.navigation !== "boolean"
                ) {
                  swiper.params.navigation.prevEl = prevButtonRef.current;
                  swiper.params.navigation.nextEl = nextButtonRef.current;
                }
              }}
            >
              {classes.map((yogaClass, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={yogaClass.image}
                    alt={yogaClass.name}
                    className="rounded-b-lg w-full h-auto"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button ref={nextButtonRef} className="hidden md:block">
            {/* <Image src={Arrow} alt="Next" width={90} height={90} /> */}
          </button>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
          <a
            href={activeClassData?.bookingLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#F67D49] text-white rounded-full px-6 py-2 hover:bg-[#E67825] transition-colors">
              Book a Class
            </button>
          </a>
        </div>
    
      </div>
    </div>
  );
};

export default OurClasses;
