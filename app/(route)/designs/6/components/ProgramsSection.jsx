// components/ProgramsSection.js

import ProgramCard from "./ProgramCard";

export default function ProgramsSection() {
  const programsData = [
    {
      title: "Emergency Shelters",
      description:
        "Providing safe and warm temporary housing for those in immediate need.",
      content:
        "Our emergency shelters offer a safe haven for individuals and families, providing meals, showers, and access to essential resources.",
    },
    {
      title: "Meals and Clothing",
      description:
        "Distributing nutritious meals and essential clothing items to those in need.",
      content:
        "We operate food pantries and clothing distribution centers to ensure our community members have access to basic necessities.",
    },
    {
      title: "Job Training",
      description:
        "Empowering individuals with skills and resources to secure employment.",
      content:
        "Our job training programs provide vocational education, resume building, and career placement assistance to help individuals achieve financial independence.",
    },
    {
      title: "Mental Health Support",
      description:
        "Offering counseling and mental health services to those in need.",
      content:
        "We understand the importance of mental well-being and provide access to licensed therapists and support groups to help our community members heal and thrive.",
    },
    {
      title: "Housing Assistance",
      description:
        "Connecting individuals and families with affordable housing options.",
      content:
        "Our housing assistance program helps individuals and families secure long-term, stable housing, providing guidance and resources throughout the process.",
    },
    {
      title: "Community Outreach",
      description:
        "Engaging with the community to raise awareness and provide support.",
      content:
        "We actively participate in community events, host educational workshops, and collaborate with local organizations to connect with those in need and strengthen our support network.",
    },
  ];

  return (
    <section className="bg-muted py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Our Key Programs
            </h2>
            <p className="text-muted-foreground mt-2 max-w-3xl mx-auto text-lg md:text-xl">
              The Homeless Outreach Project offers a range of programs and
              initiatives to support individuals and families in need.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programsData.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
