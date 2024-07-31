"use client";
import React from "react";
import { TracingBeam } from "./_components/TracingBeam";

const About = () => {
  return (
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
              Nonprofits often face challenges in creating consistent and engaging digital content due to limited resources and technical expertise. This issue is critical as digital presence is vital for fundraising, volunteer engagement, and awareness. Our system, "Cards," aims to provide a cohesive visual identity across various platforms, enhancing the impact of their mission.
            </p>
            <div className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent p-2">
              Desired Outcomes
            </div>
            <ul className="list-disc ml-5 text-lg md:text-xl leading-relaxed font-extralight">
              <li>Increase engagement rates for nonprofits using the "Cards" system by 30%.</li>
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
              "Cards" empowers nonprofits with an easy-to-use, professional digital design system that enhances storytelling and outreach efforts. By using "Cards," nonprofits can streamline their content creation process, maintain a consistent visual identity, and amplify their mission's impact.
            </p>
            <div className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent p-2">
              Why Should They Believe It?
            </div>
            <ul className="list-disc ml-5 text-lg md:text-xl leading-relaxed font-extralight">
              <li>
                <strong>Unique Proposition:</strong> "Cards" offers a user-friendly interface with customizable templates specifically tailored for the nonprofit sector.
              </li>
              <li>
                <strong>Special Attributes:</strong> The system integrates with popular social media platforms, provides analytics tools for engagement tracking, and supports various digital formats.
              </li>
              <li>
                <strong>Evidence:</strong> Our case studies and testimonials highlight significant improvements in digital engagement and brand consistency for nonprofits using our system.
              </li>
              <li>
                <strong>Competitive Edge:</strong> Unlike competitors, "Cards" is designed for non-designers, making professional-quality content accessible to all team members.
              </li>
            </ul>
            <div className="text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent p-2">
              What Do We Want the Audience to Do?
            </div>
            <p className="text-lg md:text-xl leading-relaxed font-extralight">
              <strong>Call to Action:</strong> Sign up for a free trial of "Cards" to experience its capabilities. Nonprofits can start using the templates and tools immediately to create engaging content. The trial offers a risk-free way to enhance digital presence and improve outreach efforts, potentially leading to increased donations and volunteer support.
            </p>
            
          </div>
        </TracingBeam>
      </section>
    </div>
  );
};

export default About;