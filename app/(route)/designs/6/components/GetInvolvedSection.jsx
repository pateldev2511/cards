// components/GetInvolvedSection.js

import { Button } from "@/components/ui/button";

export default function GetInvolvedSection() {
  return (
    <section className="bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Get Involved
            </h2>
            <p className="text-lg md:text-xl">
              Join us in our mission to empower the homeless and create a more
              compassionate community.
            </p>
            <div className="flex gap-2">
              <Button className="text-black" variant="outline">
                Volunteer
              </Button>
              <Button>Donate</Button>
            </div>
          </div>
          <img
            src="/placeholder.svg"
            width="600"
            height="400"
            alt="Get Involved"
            className="mx-auto rounded-lg"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
