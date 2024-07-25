import Image from "next/image";
import Hero from "./_components/Hero";
import FeaturedTemplates from "./_components/FearuredTemplates";
import Footer from "./_components/Footer";


export default function Home() {
  return (
    <>
    <Hero />
    <FeaturedTemplates />

    <Footer />
    </>
  );
}
