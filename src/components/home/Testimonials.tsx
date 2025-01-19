"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


// TestimonialCard Component
const TestimonialCard = ({ quote, author, role, rating }: { quote: string, author: string, role: string, rating: number }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg relative animate__animated animate__fadeIn">
      <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/10 rounded-bl-full"></div>
      <svg className="w-12 h-12 text-yellow-500/20 mb-6" fill="currentColor" viewBox="0 0 32 32">
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
      </svg>
      <p className="text-neutral-600 mb-6 relative z-10">{quote}</p>
      <div className="flex items-center">
        <div className="ml-4">
          <p className="font-semibold text-neutral-800">{author}</p>
          <p className="text-sm text-neutral-600">{role}</p>
          <div className="flex items-center mt-2">
            {[...Array(rating)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "The experience at Tatsat Yoga School was truly life-changing. The teachers are incredibly knowledgeable and supportive. The peaceful environment of Rishikesh combined with the authentic teachings has deeply transformed my practice.",
      author: "Sarah Mitchell",
      role: "200 Hour YTT Graduate",
      rating: 5,
    },
    {
      quote:
        "The experience at Tatsat Yoga School was truly life-changing. The teachers are incredibly knowledgeable and supportive. The peaceful environment of Rishikesh combined with the authentic teachings has deeply transformed my practice.",
      author: "Sarah Mitchell",
      role: "200 Hour YTT Graduate",
      rating: 5,
    },
    {
      quote:
        "The experience at Tatsat Yoga School was truly life-changing. The teachers are incredibly knowledgeable and supportive. The peaceful environment of Rishikesh combined with the authentic teachings has deeply transformed my practice.",
      author: "Sarah Mitchell",
      role: "200 Hour YTT Graduate",
      rating: 5,
    },
    {
      quote:
        "The experience at Tatsat Yoga School was truly life-changing. The teachers are incredibly knowledgeable and supportive. The peaceful environment of Rishikesh combined with the authentic teachings has deeply transformed my practice.",
      author: "Sarah Mitchell",
      role: "200 Hour YTT Graduate",
      rating: 5,
    },
    {
      quote:
        "The experience at Tatsat Yoga School was truly life-changing. The teachers are incredibly knowledgeable and supportive. The peaceful environment of Rishikesh combined with the authentic teachings has deeply transformed my practice.",
      author: "Sarah Mitchell",
      role: "200 Hour YTT Graduate",
      rating: 5,
    },
    {
      quote:
        "The experience at Tatsat Yoga School was truly life-changing. The teachers are incredibly knowledgeable and supportive. The peaceful environment of Rishikesh combined with the authentic teachings has deeply transformed my practice.",
      author: "Sarah Mitchell",
      role: "200 Hour YTT Graduate",
      rating: 5,
    },
    {
      quote:
        "The experience at Tatsat Yoga School was truly life-changing. The teachers are incredibly knowledgeable and supportive. The peaceful environment of Rishikesh combined with the authentic teachings has deeply transformed my practice.",
      author: "Sarah Mitchell",
      role: "200 Hour YTT Graduate",
      rating: 5,
    },

  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-white to-neutral-100 overflow-hidden"
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl font-sanskrit text-neutral-800 mb-6">
            Student Experiences
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Hear what our students have to say about their transformative journey with us
          </p>
        </div>

        {/* Swiper Section */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 ">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            autoplay={{
              delay:2000,
              disableOnInteraction:false

            }}
            loop="true"
            modules={[Autoplay]}

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
