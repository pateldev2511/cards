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
              The Liberty Veterans Foundation, a 501(c)(3) non-profit, was founded by veterans and their families with over a century of combined military experience, primarily in Special Operations. Our team includes physicians, licensed professionals, veteran families, and community leaders, all dedicated to addressing the unique challenges faced by veterans. We aim to create a comprehensive care clinic to provide holistic support for their health and recovery.
              </p>
            </section>

            {/* Approach Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-white">
                Introducing the Liberty Veterans Wellness Campus (LVWC)
              </h2>
              <p className="text-lg text-white">
              The Liberty Veterans Wellness Campus (LVWC) launched on September 1, 2024, offering a comprehensive approach to veteran and veteran family health. Located on a scenic 55-acre estate in Jackson, TN, the campus includes a medical and psychological clinic, a state-of-the-art gym with Life Fitness equipment, and spaces for mindfulness and artistic expression. LVWC fosters community engagement through fundraising events to support memberships and strengthen local connections. Our expert staff provides programming based on our Five Performance Pillars, while volunteers help bridge the gap between the community and veterans. We are dedicated to delivering exceptional care in a welcoming environment, honoring and celebrating all who have served our country.
              </p>
            </section>

            {/* Team Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-zinc-50">
                <img
                  src="/d5/c3.jpg"
                  alt="Team Member 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Elisia jones
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Founder & CEO 
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-zinc-50">
                <img
                  src="/d5/c1.jpg"
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
                  src="/d5/c2.jpg"
                  alt="Team Member 3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Robert Harish
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
