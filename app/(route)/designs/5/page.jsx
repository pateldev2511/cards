import React from "react";
import D5Navbar from "./components/D5Navbar";
import D5HeroSection from "./components/D5HERROS";
import D5ThreeBoxSection from "./components/D5ThreeBoxSection";
import D5SocialMediaIcons from "./components/D5SocialMediaIcons";
import D5UpcomingEvents from "./components/D5UpcomingEvents";
import D5Footer from "./components/D5footer";
import D5LatestNews from "./components/D5LatestNew";
import GoBackLink from "../components/GoBackLink";
import D5JoinUs from "./components/D5JoinUs";

const DesignFive = () => {
  return (
    <div>
      <GoBackLink />
      <D5Navbar />
      <D5HeroSection />
      <D5ThreeBoxSection />
      <D5SocialMediaIcons />
      <D5LatestNews />
      <D5JoinUs />
      <D5UpcomingEvents />
      <D5Footer />
    </div>
  );
};

export default DesignFive;
