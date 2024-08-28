import React from "react";
import ServiceCard from "./ServiceCard";
import { ClipboardIcon, ScissorsIcon, SyringeIcon } from "lucide-react";

const MainServices = () => {
  return (
    <section className="py-12 md:py-16 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6">
          {" "}
          {/* Reduced gap from 10 to 6 */}
          <div className="grid gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Veterinary Services
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer a range of affordable veterinary services to support
              rescue animals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {" "}
            {/* Reduced gap from 10 to 4 */}
            <ServiceCard
              icon={ScissorsIcon}
              title="Spay/Neuter"
              description="High-quality, low-cost spay and neuter services."
            />
            <ServiceCard
              icon={SyringeIcon}
              title="Vaccination Clinics"
              description="Regular vaccination clinics for rescue animals."
            />
            <ServiceCard
              icon={ClipboardIcon}
              title="Veterinary Advice"
              description="Expert advice from experienced veterinarians."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainServices;
