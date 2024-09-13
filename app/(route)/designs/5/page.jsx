import React from "react";

import Design5ThreeBoxSection from "./components/Design5ThreeBoxSection";
import Design5SocialMediaIcons from "./components/Design5SocialMediaIcons";
import Design5JoinUs from "./components/Design5JoinUs";
import Design5Aboutus from "./components/Design5Aboutus";
import Design5WellnessProgram from "./components/Design5WellnessProgram";
import Design5UpcomingEvents from "./components/Design5UpcomingEvents";
import Design5Footer from "./components/Design5Footer";
import Design5LatestNews from "./components/Design5LatestNews";
import GoBackLink from "../components/GoBackLink";
import Design5HeroSection from "./components/Design5HeroSection";
import Design5Navbar from "./components/Design5Navbar";

const DesignFive = () => {
  return (
    <div>
      <GoBackLink />
      <Design5Navbar />
      <Design5HeroSection />
      <Design5ThreeBoxSection />
      <Design5SocialMediaIcons />
      <Design5UpcomingEvents />
      <Design5JoinUs />
      <Design5Aboutus />
      <Design5WellnessProgram />
      <Design5LatestNews />
      <Design5Footer />
    </div>
  );
};

export default DesignFive;
