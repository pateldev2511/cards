import React from 'react';
import D5Navbar from './compenets/D5Navbar';
import D5HeroSection from './compenets/D5HERROS';
import D5ThreeBoxSection from './compenets/D5ThreeBoxSection';
import D5SocialMediaIcons from './compenets/D5SocialMediaIcons';
import D5JoinUs from './compenets/D5JoinUs';
import D5UpcomingEvents from './compenets/D5UpcomingEvents';
import D5Footer from './compenets/D5footer';
import D5LatestNews from './compenets/D5LatestNew';
import GoBackLink from '../components/GoBackLink';

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
}

export default DesignFive;
