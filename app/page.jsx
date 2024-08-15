import Hero from "./_components/Hero";
import FeaturedTemplates from "./_components/FearuredTemplates";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";



export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <div className="gradient-overlay"></div>
    
    <FeaturedTemplates />
    
    <Footer />
    </>
  );
}
