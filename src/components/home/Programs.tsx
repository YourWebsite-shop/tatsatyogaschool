
import React from "react";

const Programs: React.FC = () => {
  const arr = Array.from({ length: 3 })
  return (
    <div>
      <section id="programs" className="mt-[80px] sm:mt-[100px] lg:mt-[120px] py-[40px] sm:py-[50px] lg:py-[60px] bg-neutral-100">
        <div className="container mx-auto px-4" id="el-4q87rm7l">
          <div
            className="text-center mb-16 animate__animated animate__fadeIn"
            id="el-d9xysvqk"
          >
            <h2 className="lg:text-[36px] sm:text-[28px] text-[24px] font-bold text-Black lg:mb-4 sm:mb-2 mb-1" id="el-sfukqcej">
              Our Programs
            </h2>
            <div
              className="lg:w-[96px] sm:w-[80px] w-[72px] h-1 bg-[#E67825] mx-auto lg:mb-6 sm:mb-5 mb-3"
              id="el-3zj1b12y"
            ></div>
            <p className="lg:text-[20px] sm:text-[16px] text-[16px] text-gray-500" id="el-bvy7ul6w">
              Transform your life with our comprehensive yoga courses
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-20"
            id="el-gk04fya8"
          >

            {/* <!-- Program Card 2 --> */}

            {arr.map((_, i) => (
              <div key={i}
                className="bg-neutral-100 shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-1s"
                id="el-9r04fp2q"
              >
                <div className="p-6" id="el-5nnfop0j">
                  <div
                    className="bg-[#E67825]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    id="el-o6es24b8"
                  >
                    <svg
                      className="w-8 h-8 text-[#E67825]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      id="el-j1dimwwh"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                        id="el-t6czx56n"
                      ></path>
                    </svg>
                  </div>
                  <h3
                    className="text-2xl font-bold text-black mb-4"
                    id="el-h2mxvd97"
                  >
                    200 Hours Yoga Teacher Training Course
                  </h3>
                  <p className="text-gray-600 mb-6" id="el-uxqn9rwa">
                    Deepen your understanding of yoga philosophy, anatomy, and asana practice, empowering yourself to share the gift of yoga with others.
                  </p>
                  <ul className="text-gray-600 space-y-3 mb-8" id="el-8asuvx9i">
                    <li className="flex items-center" id="el-c11scc5p">
                      <svg
                        className="w-5 h-5 text-[#E67825] mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        id="el-2qs5w28t"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                          id="el-yhtxk67p"
                        ></path>
                      </svg>
                      42 Days Advanced
                    </li>
                    <li className="flex items-center" id="el-oto9z5of">
                      <svg
                        className="w-5 h-5 text-[#E67825] mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        id="el-qa1kuwkw"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                          id="el-bpiwmhwt"
                        ></path>
                      </svg>
                      Advanced Certification
                    </li>
                    <li className="flex items-center" id="el-pl5nychk">
                      <svg
                        className="w-5 h-5 text-[#E67825] mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        id="el-tx7t8kmg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                          id="el-06mmyqih"
                        ></path>
                      </svg>
                      Prior YTT Required
                    </li>
                  </ul>
                  <a
                    href="#contact"
                    className="block text-center py-3 bg-[#E67825] text-black rounded-full hover:bg-orange-600 transition-colors duration-300"
                    id="el-j8fltm1v"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}


          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
