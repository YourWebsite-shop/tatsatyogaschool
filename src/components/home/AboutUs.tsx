import Image from "next/image";
import React from "react";
import AboutUs1 from "@/assets/aboutsUs/aboutus1.jpg";
import AboutUs2 from "@/assets/aboutsUs/aboutus2.jpg";
import RightTop from "@/assets/aboutsUs/right-top.png";
import LeftBottom from "@/assets/aboutsUs/left-bottom.png";

const AboutUs: React.FC = () => {
  return (
    <>
      {/* Desktop/Large Screen View */}
      <div className="bg-[#EAE6E2] xl:flex justify-around py-16 md:py-24 xl:py-32 hidden relative">
        <Image
          src={RightTop}
          alt="Decorative background"
          className="absolute top-0 right-0 opacity-30 w-52 lg:w-96"
        />
        <Image
          src={LeftBottom}
          alt="Decorative background"
          className="absolute bottom-0 left-0 opacity-30 lg:w-80 w-44"
        />
        <div className="w-full xl:w-[25vw] px-4 md:px-8 xl:px-10 flex items-end">
          <Image
            src={AboutUs1}
            alt="Yoga practice at Tatsat"
            className="rounded-tr-[50px] w-full rounded-bl-[50px]"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
          />
        </div>
        <div className="flex flex-col">
          <div>
            <div className="flex flex-col xl:flex-row justify-around">
              <div className="w-full xl:w-[50vw] p-4 md:p-8 xl:p-10">
                <h2 className="samarkan-text text-lg font-bold text-center">
                  sattvam yogam
                </h2>
                <h2
                  className="kaftan-text text-4xl md:text-5xl lg:text-6xl text-center"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  ABOUT US
                </h2>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  <h5 className="font-semibold text-base md:text-lg mt-6 md:mt-10">
                    OUR SPACE
                  </h5>
                  <p className="text-sm md:text-base">
                    Welcome to Tatsat Yoga School, a serene sanctuary in the
                    heart of Rishikesh. Our thoughtfully designed studio creates
                    a peaceful environment with natural lighting, modern
                    amenities, spacious practice rooms, comfortable changing
                    areas, and a welcoming community space where students can
                    connect before and after classes, all maintained to the
                    highest standards of cleanliness with all necessary props
                    provided to support your practice.
                  </p>

                  <h5 className="font-semibold text-base md:text-lg mt-6 md:mt-10">
                    OUR VALUES
                  </h5>
                  <p className="text-sm md:text-base">
                    At Tatsat Yoga School, we believe in the transformative
                    power of yoga to nurture both body and soul. Our core values
                    center around authenticity, inclusivity, and personal
                    growth. We are committed to preserving and sharing the
                    traditional wisdom of yoga while making it accessible to
                    modern practitioners. Our experienced teachers are dedicated
                    to providing personalized attention and creating a
                    supportive environment where every student can thrive,
                    regardless of their experience level.
                  </p>
                </div>
              </div>

              <div className="w-full xl:w-[25vw] p-4 md:p-8 xl:p-10">
                <Image
                  src={AboutUs2}
                  alt="Yoga meditation session"
                  className="w-full rounded-br-[50px] rounded-tl-[50px]"
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                />
              </div>
            </div>

            <div
              className="px-4 md:px-8 xl:pl-10 flex flex-wrap justify-between xl:pr-24 gap-4"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div className="text-sm md:text-base">
                <span className="block text-2xl md:text-3xl text-orange-400 font-bold">
                  8
                </span>
                Years Of Excellence
              </div>
              <div className="text-sm md:text-base">
                <span className="block text-2xl md:text-3xl text-orange-400 font-bold">
                  6
                </span>
                Specialized Programs
              </div>
              <div className="text-sm md:text-base">
                <span className="block text-2xl md:text-3xl text-orange-400 font-bold">
                  1000+
                </span>
                Transformed Lives
              </div>
              <div className="text-sm md:text-base">
                <span className="block text-2xl md:text-3xl text-orange-400 font-bold">
                  95%
                </span>
                Student Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet View */}
      <div className="bg-[#EAE6E2] px-4 sm:px-8 md:px-[100px] xl:hidden pb-12 md:pb-20 relative">
        <Image
          src={RightTop}
          alt="Decorative background"
          className="absolute top-0 right-0 opacity-50 w-24 sm:w-32 md:w-44"
        />
        <Image
          src={LeftBottom}
          alt="Decorative background"
          className="absolute bottom-0 left-0 opacity-50 w-24 sm:w-32 md:w-44"
        />
        <h4
          className="kaftan-text text-center text-2xl sm:text-3xl py-12 md:py-20"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          ABOUT US
        </h4>

        <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          <h5 className="text-base md:text-lg font-semibold py-1">OUR SPACE</h5>
          <p className="font-[600] text-xs sm:text-sm text-gray-600">
            Welcome to Tatsat Yoga School, a serene sanctuary nestled in the
            heart of the city. Our studio is thoughtfully designed to create a
            peaceful environment where students can disconnect from the outside
            world and focus on their practice. With natural lighting, calming
            aesthetics, and state-of-the-art amenities, we provide the perfect
            space for your yoga journey.
          </p>

          <p className="font-[600] text-xs sm:text-sm text-gray-600 py-4">
            Our facility features spacious practice rooms, comfortable changing
            areas, and a welcoming community space where students can connect
            before and after classes. We maintain the highest standards of
            cleanliness and provide all necessary props to support your
            practice.
          </p>
        </div>

        <div className="flex w-full gap-4">
          <Image
            src={AboutUs1}
            alt="Yoga practice at Tatsat"
            className="rounded-tr-[30px] sm:rounded-tr-[50px] w-1/2 rounded-bl-[30px] sm:rounded-bl-[50px]"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
          />
          <Image
            src={AboutUs2}
            alt="Yoga meditation session"
            className="rounded-br-[30px] sm:rounded-br-[50px] w-1/2 rounded-tl-[30px] sm:rounded-tl-[50px]"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1000"
          />
        </div>

        <div
          className="py-4 md:py-6"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <h5 className="text-base md:text-lg font-semibold py-1">
            OUR VALUES
          </h5>
          <p className="font-[600] text-xs sm:text-sm text-gray-600">
            At Tatsat Yoga School, we believe in the transformative power of
            yoga to nurture both body and soul. Our core values center around
            authenticity, inclusivity, and personal growth. We are committed to
            preserving and sharing the traditional wisdom of yoga while making
            it accessible to modern practitioners.
          </p>
        </div>

        <div className="flex flex-wrap justify-start gap-x-6 sm:gap-x-10 gap-y-4 sm:gap-y-6 text-xs sm:text-sm">
          <div>
            <span className="block text-2xl sm:text-3xl text-orange-400">
              8
            </span>
            Years Of Excellence
          </div>
          <div>
            <span className="block text-2xl sm:text-3xl text-orange-400">
              6
            </span>
            Specialized Programs
          </div>
          <div>
            <span className="block text-2xl sm:text-3xl text-orange-400">
              1000+
            </span>
            Transformed Lives
          </div>
          <div>
            <span className="block text-2xl sm:text-3xl text-orange-400">
              95%
            </span>
            Student Satisfaction
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
