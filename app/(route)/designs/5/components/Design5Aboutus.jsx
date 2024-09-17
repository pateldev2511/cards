"use client";

export default function Design5Aboutus() {
  return (
    <div className="bg-blue-700">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col  items-center justify-center">
          {/* Header Section */}
          <div id="about-us" className="pb-10 bg-blue-700 pt-10">
            <div className="container mx-auto text-center">
              <h1 className="text-5xl font-bold text-center mb-8 text-white">
                About Us
              </h1>
              <p className="mt-4 text-lg text-white">
                Dedicated to Supporting and Honoring Our Veterans and Their
                Families
              </p>
            </div>
          </div>

          <main className="container mx-auto py-16 px-4">
            {/* Mission Statement Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-white">
                Restoring the Warrior Spirit
              </h2>
              <p className="text-lg text-white">
              The Liberty Veterans Foundation, a 501(c)(3) non-profit, was established by veterans with extensive Special Operations experience. Our team of physicians, licensed professionals, veteran families, and community leaders is committed to offering holistic care for veterans’ health and recovery.
              </p>
            </section>

            {/* Approach Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-white">
                Introducing the Liberty Veterans Wellness Campus (LVWC)
              </h2>
              <p className="text-lg text-white">
              The Liberty Veterans Wellness Campus (LVWC), opened on September 1, 2024, provides a holistic health approach for veterans and families on a 55-acre estate in Jackson, TN, featuring medical clinics, a gym, and spaces for mindfulness and art.
              </p>
            </section>

            {/* Team Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-zinc-50">
                <img
                  src="/d5/a1.jpg"

                  alt="Team Member 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                     Justin Jonsen
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Founder & CEO 
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-zinc-50">
                <img

                  src="/d5/a2.jpg"
                  alt="Team Member 2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Elis Smith
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Program Director 
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-zinc-50">
                <img
                  src="/d5/a3.jpg"
                  alt="Team Member 3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                  Roberta Harish
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Community Outreach Coordinator 
                  </p>
                </div>
              </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="text-center">
              <a
                href="#contact"
                className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Get In Touch
              </a>
            </section>
          </main>
        </div>
      </div>
      </div>
  )
}
