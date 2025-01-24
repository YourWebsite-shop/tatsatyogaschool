"use client"
import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import { FaCalendarAlt } from "react-icons/fa";
import Image from 'next/image';
import Arrow from '@/assets/arrow.png'
import Carousel1 from '@/assets/home/carousel1.jpg'
import Carousel2 from '@/assets/home/carousel2.jpg'
import Carousel3 from '@/assets/home/carousel3.jpg'
import Carousel4 from '@/assets/home/carousel4.jpg'

const OurClasses = () => {
  const [activeClass, setActiveClass] = useState("100 Hours");

  const classes = [
    {
      name: "100 Hours",
      description: "Perfect for beginners seeking to establish a strong foundation in yoga. This introductory course covers essential asanas, basic pranayama techniques, and fundamental yoga philosophy. Ideal for those starting their yoga journey or wanting to deepen their personal practice.",
      specifics: "Basic asanas, breathing techniques, meditation, anatomy basics, yoga philosophy",
      schedule: "Mon-Wed 8:30 - 9:30 am, 6:30-7:30 pm",
      bookingLink: "https://example.com/book/100-hours"
    },
    {
      name: "200 Hours", 
      description: "A comprehensive foundation course certified by Yoga Alliance. Dive deep into asana practice, teaching methodology, anatomy, philosophy, and practicum. Suitable for aspiring yoga teachers and dedicated practitioners looking to expand their knowledge.",
      specifics: "Teaching methodology, advanced asanas, anatomy, philosophy, pranayama, class planning",
      schedule: "Mon-Wed 8:30 - 9:30 am, 6:30-7:30 pm",
      bookingLink: "https://example.com/book/200-hours"
    },
    {
      name: "300 Hours",
      description: "Advanced training for certified 200-hour teachers. Explore complex asanas, advanced teaching skills, therapeutic applications, and specialized topics. Deepen your expertise with intensive study of yoga philosophy and advanced pranayama techniques.",
      specifics: "Therapeutic yoga, advanced teaching, energy work, specialized populations, business skills",
      schedule: "Mon-Wed 8:30 - 9:30 am, 6:30-7:30 pm",
      bookingLink: "https://example.com/book/300-hours"
    },
    {
      name: "500 Hours",
      description: "Our most comprehensive program combining 200 and 300-hour certifications. Master advanced teaching methodologies, therapeutic yoga, energy work, and specialized populations. Become a highly skilled and versatile yoga teacher with deep understanding of traditional practices.",
      specifics: "Complete mastery program, advanced therapy, specialized teaching, professional development",
      schedule: "Mon-Wed 8:30 - 9:30 am, 6:30-7:30 pm",
      bookingLink: "https://example.com/book/500-hours"
    }
  ]

  const changeClass = (className: string) => {
    setActiveClass(className);
  }

  const activeClassData = classes.find(yogaClass => yogaClass.name === activeClass);

  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className='pb-12'>
      <div className='bg-[#1A1A1A] pt-5 pb-96 rounded-t-[60px]'>
        <div className='kaftan-text my-8 text-white text-center text-5xl font-bold tracking-widest'>OUR CLASSES</div>
        <div className='flex flex-wrap justify-center gap-4 px-4'>
          {classes.map((yogaClass, index) => (
            <div key={index} className="relative">
              <div
                onClick={() => changeClass(yogaClass.name)}
                className={`px-8 py-3 rounded-full text-sm font-medium cursor-pointer transition-colors
                  ${yogaClass.name === activeClass ?
                    'text-[#F67D49]' :
                    'text-white'}`}
              >
                {yogaClass.name}
              </div>
              {yogaClass.name === activeClass && (
                <div className="absolute top-14 left-1/2 -translate-x-1/2 w-[300px] text-white text-center">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-2 h-2 bg-[#F67D49] rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='max-w-5xl mx-auto flex gap-8 px-10 mt-16 text-white'>
          <div className='w-[50%]'>
              <div className='text-lg font-semibold mb-4'>ABOUT</div>
              <div className='text-sm'>{activeClassData?.description}</div>
          </div>
          <div className='w-[25%]'>
            <div className='text-lg font-semibold mb-4'>SPECIFICS</div>
            <div className='text-sm'>{activeClassData?.specifics}</div>
          </div>
          <div className='w-[25%]'>
            <div className='text-lg font-semibold mb-4'>
              SCHEDULE
            </div>
            <div className='text-sm flex'><div className="inline-flex items-center justify-center bg-gray-700 rounded-full w-8 h-8 mr-2">
                <FaCalendarAlt />
              </div><div>{activeClassData?.schedule}</div></div>
          </div>
        </div>
      </div>
 
      <div className='relative -mt-80'>
        <div className="flex max-w-6xl mx-auto mt-8">
          <button ref={prevButtonRef}>
            <Image src={Arrow} alt="Previous" width={90} height={90} className="transform scale-x-[-1]" />
          </button>
        
          <div className="px-8 max-w-5xl">
            <Swiper
              className="mySwiper max-w-4xl rounded-b-[48px] overflow-hidden"
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
              onBeforeInit={(swiper) => {
                if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                  swiper.params.navigation.prevEl = prevButtonRef.current;
                  swiper.params.navigation.nextEl = nextButtonRef.current;
                }
              }}
            >
              <SwiperSlide><Image src={Carousel1} alt='' className="rounded-b-lg" /></SwiperSlide>
              <SwiperSlide><Image src={Carousel2} alt='' className="rounded-b-lg" /></SwiperSlide>
              <SwiperSlide><Image src={Carousel3} alt='' className="rounded-b-lg" /></SwiperSlide>
              <SwiperSlide><Image src={Carousel4} alt='' className="rounded-b-lg" /></SwiperSlide>
            </Swiper>
          </div>
          <button ref={nextButtonRef}>
            <Image src={Arrow} alt="Next" width={90} height={90} />
          </button>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
          <a href={activeClassData?.bookingLink} target="_blank" rel="noopener noreferrer">
            <button className='bg-[#F67D49] text-white rounded-full px-6 py-2 hover:bg-[#E67825] transition-colors'>Book a Class</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default OurClasses