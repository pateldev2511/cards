import React from 'react'

const AboutUs = () => {
  return (
    <section id="about" className="py-16 px-6 bg-muted">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">About PetBuddy</h2>
              <p className="text-lg text-muted-foreground">
                PetBuddy is a non-profit organization dedicated to providing veterinary services and support to rescue
                groups and animal welfare organizations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  Our mission is to improve the lives of rescue animals by offering affordable veterinary care,
                  education, and resources to the organizations that support them.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Our History</h3>
                <p className="text-muted-foreground">
                  PetBuddy was founded in 2015 by a group of veterinarians and animal welfare advocates who saw the need
                  for more support and resources for rescue groups. Since then, we've grown to operate a network of
                  low-cost clinics and provide a wide range of services to the community.
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default AboutUs