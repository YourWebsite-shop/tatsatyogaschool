import Image from "next/image";
import React from "react";
import yogaWomen from "@/assets/home/yoga-women.png"

const AboutUs: React.FC = () => {
  return (
    <div>
      <section
        id="about"
        className="relative mt-[80px] sm:mt-[100px] lg:mt-[120px] pt-[40px] sm:pt-[50px] lg:pt-[60px]  bg-gradient-to-b from-neutral-50 to-white overflow-hidden"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          id="el-9ypi07wy"
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            id="el-ofk73a16"
          >
            <div
              className="animate__animated animate__fadeInLeft space-y-8"
              id="el-0o998szd"
            >
              <div className="" id="el-bejuwq57">
                <h2
                  className="lg:text-[36px] sm:text-[28px] text-[24px] font-bold text-Black leading-tight lg:mb-4 sm:mb-2 mb-1"
                  id="el-xf6qvkzw"
                >
                  Discover Your True Self
                </h2>
                <div
                  className="lg:w-[96px] sm:w-[80px] w-[72px] h-1.5 bg-[#E67825] rounded-full lg:mb-6 sm:mb-5 mb-3"
                  id="el-ibwdfxo2"
                ></div>
              </div>

              <div className="" id="el-lg8mliz8">
                <p
                  className="text-lg text-neutral-600 leading-relaxed lg:mb-6 sm:mb-5 mb-3"
                  id="el-o5r8aana"
                >
                  At Tatsat Yoga School, we believe yoga is not about self-improvement, but about self-acceptance. Join us to cultivate a practice that honours your true self and fosters inner harmony. Let go of striving and embrace the beauty of simply being.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-8" id="el-c6zq7y3q">
                <div
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  id="el-fidbo7wr"
                >
                  <span
                    className="block text-4xl font-bold text-[#E67825] mb-2"
                    id="el-5irtkrdi"
                  >
                    20+
                  </span>
                  <span
                    className="text-neutral-600 font-medium"
                    id="el-ltcx58pg"
                  >
                    Years Experience
                  </span>
                </div>
                <div
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  id="el-tk94jad6"
                >
                  <span
                    className="block text-4xl font-bold text-[#E67825] mb-2"
                    id="el-wt4y86v6"
                  >
                    5000+
                  </span>
                  <span
                    className="text-neutral-600 font-medium"
                    id="el-5yp2uan3"
                  >
                    Students Trained
                  </span>
                </div>
              </div>

              <a
                href="#contact"
                className="group inline-flex items-center px-6 py-3 text-lg font-medium text-yellow-600 hover:text-yellow-700 transition-colors"
                id="el-p36twmz4"
              >
                Learn More About Us
                <svg
                  className="w-6 h-6 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="el-z824fnfw"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                    id="el-8wr5y69r"
                  ></path>
                </svg>
              </a>
            </div>

            <div
              className="relative animate__animated animate__fadeInRight"
              id="el-ebawyix7"
            >
              <div
                className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden  p-8 "
                id="el-ko65bygj"
              >
               

                {/* <!-- Enhanced mandala design --> */}
                <div className="relative">
                  <Image
                    src={yogaWomen}
                    alt=""
                    className="relative z-10 lg:translate-x-20"
                  />
                </div>

              </div>

              {/* <!-- Enhanced decorative elements with subtle animation --> */}
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
