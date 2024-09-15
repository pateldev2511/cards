"use client";

export default function Design5WellnessProgram() {
  return (

    <div className="bg-stone-400">
      <div id="programs" className="pb-10 text-white pt-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Wellness Programs</h1>
          <p className="mt-4 text-lg">
            Empowering Veterans through Comprehensive Health and Performance
            Programs
          </p>

        </div>

        <main className="container mx-auto pb-10 pt-4 px-4 max-w-screen-xl ">
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800">
              Our Approach
            </h2>
            <p className="text-lg text-gray-700">
              At Liberty Veterans Foundation, we believe in a holistic approach
              to health and performance. Our programs are designed to address
              both physical and mental well-being to ensure that veterans
              receive the comprehensive care they deserve. Our team of experts
              works closely with each individual to develop personalized plans
              that enhance their overall quality of life.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ">
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-gray-100">
              <img
                src="/D5/16.jpg"
                alt="Health Program"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-700">
                  Physical Health Program
                </h3>
                <p className="text-gray-600 mt-2">
                  Our physical health program focuses on improving fitness
                  levels, providing nutritional guidance, and offering
                  therapeutic services to help veterans regain and maintain
                  their physical health.
                </p>
              </div>
            </div>

            <div className="border border-gray-20 rounded-lg overflow-hidden shadow-lg bg-gray-100">
              <img
                src="/D5/17.jpg"
                alt="Mental Health Support"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-700">
                  Mental Health Support
                </h3>
                <p className="text-gray-600 mt-2">
                  We provide mental health support through counseling, therapy,
                  and stress management techniques to ensure veterans have the
                  resources they need for mental well-being.
                </p>
              </div>
            </div>

            <div className="border border-gray-20 rounded-lg overflow-hidden shadow-lg bg-gray-100">
              <img
                src="/D5/15.jpg"
                alt="Community Engagement"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-700">
                  Community Engagement
                </h3>
                <p className="text-gray-600 mt-2">
                  Our community engagement initiatives are designed to build a
                  supportive network, foster camaraderie, and create
                  opportunities for veterans to connect and thrive.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <a
              href="#contact"
              className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-800 transition duration-300"
            >
              <span>Get In Touch</span>
            </a>
          </section>
        </main>
      </div>


      <main className="container mx-auto py-16 px-4">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-gray-100">
            Our Approach
          </h2>
          <p className="text-lg text-gray-200">
            At Liberty Veterans Foundation, we believe in a holistic approach to
            health and performance. Our programs are designed to address both
            physical and mental well-being to ensure that veterans receive the
            comprehensive care they deserve. Our team of experts works closely
            with each individual to develop personalized plans that enhance
            their overall quality of life.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ">
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-gray-100">
            <img
              src="/D5/16.jpg"
              alt="Health Program"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-700">
                Physical Health Program
              </h3>
              <p className="text-gray-500 mt-2">
                Our physical health program focuses on improving fitness levels,
                providing nutritional guidance, and offering therapeutic
                services to help veterans regain and maintain their physical
                health.
              </p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-gray-100">
            <img
              src="/D5/17.jpg"
              alt="Mental Health Support"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-700">
                Mental Health Support
              </h3>
              <p className="text-gray-500 mt-2">
                We provide mental health support through counseling, therapy,
                and stress management techniques to ensure veterans have the
                resources they need for mental well-being.
              </p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-gray-100">
            <img
              src="/D5/15.jpg"
              alt="Community Engagement"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-700">
                Community Engagement
              </h3>
              <p className="text-gray-500 mt-2">
                Our community engagement initiatives are designed to build a
                supportive network, foster camaraderie, and create opportunities
                for veterans to connect and thrive.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <a
            href="#contact"
            className="bg-gray-100 text-stone-500 py-3 px-6 rounded-lg hover:bg-stone-700 transition duration-300"
          >
            Get In Touch
          </a>
        </section>
      </main>

    </div>
  );
}
