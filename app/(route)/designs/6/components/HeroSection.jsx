// components/HeroSection.js

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Empowering the Homeless
            </h1>
            <p className="text-lg md:text-xl">
              The Homeless Outreach Project is committed to providing essential
              services and long-term solutions to address homelessness in our
              community.
            </p>
            <div className="flex gap-2">
              <Button>Get Involved</Button>
              <Button className="text-black" variant="outline">
                Donate Now
              </Button>
            </div>
          </div>
          <img
            src="/placeholder.svg"
            width="600"
            height="400"
            alt="Homeless Outreach Project"
            className="mx-auto rounded-lg"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
