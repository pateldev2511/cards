import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import MainServices from "./MainServices";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

const Main = () => {
  const products = [
    {
      id: 1,
      imageSrc: "/design-images/collar-1.webp",
      altText: "Keychain 1",
      title: "Product 1",
      price: 200,
    },
    {
      id: 2,
      imageSrc: "/design-images/collar-2.webp",
      altText: "Keychain 2",
      title: "Product 2",
      price: 250,
    },
    {
      id: 3,
      imageSrc: "/design-images/collar-1.webp",
      altText: "Keychain 3",
      title: "Product 3",
      price: 300,
    },
    // Add more products as needed
  ];

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ServiceSection />
        <MainServices />
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Handmade Accessories{" "}
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our collection of unique, semi-precious dog collar charms
            and keychains, each one crafted with care to support our mission.
          </p>

          <div className="p-4 flex justify-center my-12">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  imageSrc={product.imageSrc}
                  altText={product.altText}
                  title={product.title}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        </div>
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
