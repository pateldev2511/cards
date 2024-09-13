<<<<<<< HEAD
import React from 'react';
import D5Navbar from './compenets/D5Navbar';
import D5HeroSection from './compenets/D5HERROS';
import D5ThreeBoxSection from './compenets/D5ThreeBoxSection';
import D5SocialMediaIcons from './compenets/D5SocialMediaIcons';
import D5JoinUs from './compenets/D5JoinUs';
import D5WellnessProgram from './compenets/D5Wellnessprogram';
import D5UpcomingEvents from './compenets/D5UpcomingEvents';
import D5Footer from './compenets/D5footer';
import D5LatestNews from './compenets/D5LatestNew';
import GoBackLink from '../components/GoBackLink';
=======
import React from "react";
import D5Navbar from "./components/D5Navbar";
import D5HeroSection from "./components/D5HERROS";
import D5ThreeBoxSection from "./components/D5ThreeBoxSection";
import D5SocialMediaIcons from "./components/D5SocialMediaIcons";
import D5UpcomingEvents from "./components/D5UpcomingEvents";
import D5Footer from "./components/D5footer";
import D5LatestNews from "./components/D5LatestNew";
import GoBackLink from "../components/GoBackLink";
// import D5JoinUs from "./components/D5JoinUs";
>>>>>>> f24c0486f61a9cb0bcbbd483fa9bb7ac941a6ac3

const DesignFive = () => {
  return (
    <div>
      <GoBackLink />
      <D5Navbar />
      <D5HeroSection />
      <D5ThreeBoxSection />
      <D5SocialMediaIcons />
      <D5LatestNews />
<<<<<<< HEAD
      <D5JoinUs />
      <D5WellnessProgram />
=======
      {/* <D5JoinUs /> */}
>>>>>>> f24c0486f61a9cb0bcbbd483fa9bb7ac941a6ac3
      <D5UpcomingEvents />
      <D5Footer />
    </div>
  );
};

export default DesignFive;
