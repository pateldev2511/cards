import React from "react";
import { TracingBeam } from "./_components/TracingBeam";
import Navbar from "@/app/_components/Navbar";

export const metadata = {
  metadataBase: new URL('https://cards.devpatel.xyz'), // Set your base URL here
  title: 'About Us | Cards',
  description: "Explore &apos;Cards&apos;, where we provide high-quality, customizable web templates for your development needs. Our collection includes a variety of designs ranging from landing pages to detailed UI components, all optimized for performance and aesthetic appeal.",
  keywords: 'About, Web Templates, UI Components, Frontend Development, React Components, HTML/CSS, JavaScript, Customizable Templates, Cards, Web Design, User Interface, Web Development',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cards.devpatel.xyz/about',
    title: 'About Us | Cards',
    description: "Discover &apos;Cards&apos;, featuring a collection of high-quality web templates and UI components designed for developers and designers. Perfect for enhancing your web projects with professional, customizable designs.",
    images: [
      {
        url: '/logo.jpeg', // URL is resolved relative to metadataBase
        width: 800,
        height: 600,
        alt: 'Cards Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Cards',
    description: "Discover &apos;Cards&apos;, featuring a collection of high-quality web templates and UI components designed for developers and designers. Perfect for enhancing your web projects with professional, customizable designs.",
    image: '/logo.jpeg',  // URL is resolved relative to metadataBase
  },
};

const About = () => {
  return (
    <>
    <Navbar/>
   
    <div className="bg-black text-white min-h-screen py-8 px-2">
      <section className="container mx-auto">
        <TracingBeam>
          <div className="space-y-16">
            <div className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent p-2">
              About the Project
            </div>
            <p className="text-lg md:text-xl leading-relaxed font-extralight">
              We are building a platform that provides web templates for both traditional HTML/CSS/JavaScript and React components. Our goal is to offer a resource where users can easily browse, copy, and integrate these templates into their projects. Each template includes a documentation page featuring a live demo and code snippets to facilitate seamless integration. This website will be free to use for everyone.
            </p>
            <div className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent p-2">
              What Problem Are We Solving?
            </div>
            <p className="text-lg md:text-xl leading-relaxed font-extralight">
              Nonprofits often face challenges in creating consistent and engaging digital content due to limited resources and technical expertise. This issue is critical as digital presence is vital for fundraising, volunteer engagement, and awareness. Our system, &quot;Cards,&quot; aims to provide a cohesive visual identity across various platforms, enhancing the impact of their mission.
            </p>
            <div className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent p-2">
              Desired Outcomes
            </div>
            <ul className="list-disc ml-5 text-lg md:text-xl leading-relaxed font-extralight">
              <li>Increase engagement rates for nonprofits using the &quot;Cards&quot; system by 30%.</li>
              <li>Reduce the time spent by nonprofit teams on creating digital content by 50%.</li>
              <li>Enhance brand consistency across all digital channels for at least 90% of users.</li>
            </ul>
            <div className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent p-2">
              Target Audience
            </div>
            <p className="text-lg md:text-xl leading-relaxed font-extralight">
              Our audience includes small and large nonprofits, charitable organizations, and social service sectors. Key roles benefiting from our solution are Marketing and Communications Managers, Social Media Coordinators, Graphic Designers, Content Creators, and Executive Directors.
            </p>
            <div className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent p-2">
              What Do We Want the Audience to Believe?
            </div>
            <p className="text-lg md:text-xl leading-relaxed font-extralight">
            &quot;Cards&quot; empowers nonprofits with an easy-to-use, professional digital design system that enhances storytelling and outreach efforts. By using &quot;Cards,&quot; nonprofits can streamline their content creation process, maintain a consistent visual identity, and amplify their mission&apos;s impact.
            </p>
            <div className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent p-2">
              Why Should They Believe It?
            </div>
            <ul className="list-disc ml-5 text-lg md:text-xl leading-relaxed font-extralight">
              <li>
                <strong>Unique Proposition:</strong> &quot;Cards&quot; offers a user-friendly interface with customizable templates specifically tailored for the nonprofit sector.
              </li>
              <li>
                <strong>Special Attributes:</strong> The system integrates with popular social media platforms, provides analytics tools for engagement tracking, and supports various digital formats.
              </li>
              <li>
                <strong>Evidence:</strong> Our case studies and testimonials highlight significant improvements in digital engagement and brand consistency for nonprofits using our system.
              </li>
              <li>
                <strong>Competitive Edge:</strong> Unlike competitors, &quot;Cards&quot; is designed for non-designers, making professional-quality content accessible to all team members.
              </li>
            </ul>
            <div className="text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent p-2">
              What Do We Want the Audience to Do?
            </div>
            <p className="text-lg md:text-xl leading-relaxed font-extralight">
              <strong>Call to Action:</strong> Sign up for a free trial of &quot;Cards&quot; to experience its capabilities. Nonprofits can start using the templates and tools immediately to create engaging content. The trial offers a risk-free way to enhance digital presence and improve outreach efforts, potentially leading to increased donations and volunteer support.
            </p>
            
          </div>
        </TracingBeam>
      </section>
    </div>
    </>
  );
};

export default About;