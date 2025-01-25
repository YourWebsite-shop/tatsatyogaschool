import React from "react";
import Hero from "@/components/aboutUs/Hero";

import Instructors from "@/components/aboutUs/Instructors";
import WhoWeAre from "@/components/aboutUs/WhoWeAre";

const page = () => {
  return (
    <div>
      <Hero />

      <Instructors />
      <WhoWeAre />
    </div>
  );
};

export default page;
