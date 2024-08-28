import React from "react";
import D3Navbar from "./components/D3Navbar";
import D3HeroSection from "./components/D3HeroSection";
import D3ThreeBoxSection from "./components/D3ThreeBoxSection";
import D3SocialMediaIcons from "./components/D3SocialMediaIcons";
import D3LatestNews from "./components/D3LatestNews";
import D3JoinUs from "./components/D3JoinUs";
import D3UpcomingEvents from "./components/D3UpcomingEvents";
import D3Footer from "./components/D3Footer";
import GoBackLink from "../components/GoBackLink";

const DesignThree = () => {
  return (
    <div>
      <GoBackLink />
      <D3Navbar />
      <D3HeroSection />
      <D3ThreeBoxSection />
      <D3SocialMediaIcons />
      <D3LatestNews />
      <D3JoinUs />
      <D3UpcomingEvents />
      <D3Footer />
    </div>
  );
};

export default DesignThree;
