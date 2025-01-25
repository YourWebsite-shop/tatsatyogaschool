import React from "react";
import Hero from "@/components/aboutUs/Hero";

import Instructors from "@/components/aboutUs/Instructors";
import WhoWeAre from "@/components/aboutUs/WhoWeAre";
import WhyUs from "@/components/aboutUs/WhyUs";
import Testimonials from "@/components/home/Testimonials";

const page = () => {
  return (
    <div>
      <Hero />

      <Instructors />
      <WhoWeAre />
      <WhyUs />
      <Testimonials />
    </div>
  );
};

export default page;
