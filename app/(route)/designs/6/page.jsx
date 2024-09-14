// pages/DesignSix.js

import Footer from "./components/Footer";
import GetInvolvedSection from "./components/GetInvolvedSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProgramsSection from "./components/ProgramsSection";

export default function DesignSix() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProgramsSection />
        <GetInvolvedSection />
      </main>
      <Footer />
    </div>
  );
}
