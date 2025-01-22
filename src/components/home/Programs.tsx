import React from "react";
import { FaCheck } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";

interface Program {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  highlights: string[];
  link: string;
}

const programsData: Program[] = [
  {
    id: 1,
    icon: <AiFillThunderbolt className="text-3xl text-[#E67825]" />,
    title: "200 Hours Yoga Teacher Training Course",
    description:
      "Deepen your understanding of yoga philosophy, anatomy, and asana practice, empowering yourself to share the gift of yoga with others.",
    highlights: [
      "42 Days Advanced",
      "Advanced Certification",
      "Prior YTT Required",
    ],
    link: "#contact",
  },
  {
    id: 2,
    icon: <AiFillThunderbolt className="text-3xl text-[#E67825]" />,
    title: "100 Hours Beginner Yoga Course",
    description:
      "A perfect introduction to yoga for those looking to start their journey with a strong foundation.",
    highlights: [
      "14 Days Beginner",
      "Certification Included",
      "No Prerequisites",
    ],
    link: "#contact",
  },
  {
    id: 3,
    icon: <AiFillThunderbolt className="text-3xl text-[#E67825]" />,
    title: "50 Hours Yoga Workshop",
    description:
      "Enhance specific aspects of your yoga practice with focused workshops on advanced techniques.",
    highlights: [
      "7 Days Intensive",
      "Specialized Workshops",
      "Open to All Levels",
    ],
    link: "#contact",
  },
];

const Programs: React.FC = () => {
  return (
    <div>
      <section
        id="programs"
        className="mt-[80px] sm:mt-[100px] lg:mt-[120px] pt-[40px] pb-[32px] sm:py-[50px] lg:py-[60px] bg-neutral-100"
      >
        <div
          className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          id="el-4q87rm7l"
        >
          <div
            className="text-center mb-16 animate__animated animate__fadeIn"
            id="el-d9xysvqk"
          >
            <h2
              className="lg:text-[36px] sm:text-[28px] text-[24px] font-bold text-Black lg:mb-4 sm:mb-2 mb-1"
              id="el-sfukqcej"
            >
              Our Programs
            </h2>
            <div
              className="lg:w-[96px] sm:w-[80px] w-[72px] h-1 bg-[#E67825] mx-auto lg:mb-6 sm:mb-5 mb-3"
              id="el-3zj1b12y"
            ></div>
            <p
              className="lg:text-[20px] sm:text-[16px] text-[16px] text-gray-500"
              id="el-bvy7ul6w"
            >
              Transform your life with our comprehensive yoga courses
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            id="el-gk04fya8"
          >
            {programsData.map((program) => (
              <div
                key={program.id}
                className="bg-neutral-100 shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-1s"
                id="el-9r04fp2q"
              >
                <div
                  className="p-6 flex flex-col justify-between h-full"
                  id="el-5nnfop0j"
                >
                  <div>
                    <div
                      className="bg-[#E67825]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6"
                      id="el-o6es24b8"
                    >
                      {program.icon}
                    </div>
                    <h3
                      className="text-2xl font-bold text-black mb-4"
                      id="el-h2mxvd97"
                    >
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-6" id="el-uxqn9rwa">
                      {program.description}
                    </p>
                    <ul
                      className="text-gray-600 space-y-3 mb-8"
                      id="el-8asuvx9i"
                    >
                      {program.highlights.map((highlight, index) => (
                        <li className="flex items-center" key={index}>
                          <FaCheck className="text-[#E67825] mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={program.link}
                    className="block text-center py-3 bg-[#E67825] text-white rounded-full hover:bg-orange-600 transition-colors duration-300"
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
