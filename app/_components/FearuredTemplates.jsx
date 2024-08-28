"use client";

import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import {
  GalleryHorizontalEnd,
  Dock,
  GalleryHorizontal,
  GalleryVertical,
  GalleryVerticalEnd,
  AppWindow,
} from "lucide-react";
import BlurShinyBackground from "./BlurShinyBackground";

const templates = [
  {
    id: 1,
    name: "Template 1",
    description:
      "A smooth and clean animation effects and unique scrolling animation.",
    path: "/designs/1",
    icon: <GalleryHorizontalEnd className="w-12 h-12 text-gray-50" />,
    colors: [
      [236, 72, 153],
      [232, 121, 249],
    ],
  },
  {
    id: 2,
    name: "Template 2",
    description:
      "A smooth and clean animation effects and unique scrolling animation.",
    path: "/designs/2",
    icon: <Dock className="w-12 h-12 text-gray-50" />,
    colors: [
      [59, 130, 246],
      [37, 99, 235],
    ],
  },
  {
    id: 3,
    name: "Template 3",
    description:
      "A smooth and clean animation effects and unique scrolling animation.",
    path: "/designs/3",
    icon: <GalleryHorizontal className="w-12 h-12 text-gray-50" />,
    colors: [
      [34, 197, 94],
      [22, 163, 74],
    ],
  },
  {
    id: 4,
    name: "Template 4",
    description:
      "A smooth and clean animation effects and unique scrolling animation.",
    path: "/designs/4",
    icon: <GalleryVertical className="w-12 h-12 text-gray-50" />,
    colors: [
      [234, 179, 8],
      [202, 138, 4],
    ],
  },
  {
    id: 5,
    name: "Template 5",
    description:
      "A smooth and clean animation effects and unique scrolling animation.",
    path: "/designs/5",
    icon: <GalleryVerticalEnd className="w-12 h-12 text-gray-50" />,
    colors: [
      [244, 114, 182],
      [219, 39, 119],
    ],
  },
  {
    id: 6,
    name: "Template 6",
    description:
      "A smooth and clean animation effects and unique scrolling animation.",
    path: "/designs/6",
    icon: <AppWindow className="w-12 h-12 text-gray-50" />,
    colors: [
      [139, 92, 246],
      [124, 58, 237],
    ],
  },
];

const FeaturedTemplates = () => {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-black relative">
      <BlurShinyBackground className="absolute inset-0 z-0" />
      <main className="flex-1 z-10">
        <h2 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          Featured Templates
        </h2>
        <section className="w-full py-4 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {templates.map((template) => (
                <Card
                  key={template.id}
                  title={template.name}
                  description={template.description}
                  icon={template.icon}
                  colors={template.colors}
                  path={template.path}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const Card = ({ title, description, icon, colors, path }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <Link href={path} passHref>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-black/[0.2] group/canvas-card bg-zinc-950 flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] overflow-hidden hover:cursor-pointer"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full w-full absolute inset-0"
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={colors}
                dotSize={2}
              />
              <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-20 text-center p-4">
          <div className="mx-auto flex items-center justify-center">{icon}</div>
          <h2 className="dark:text-black text-xl group-hover/canvas-card:opacity-100 relative z-10 text-white mt-4 font-bold transition duration-200">
            {title}
          </h2>
          <p className="dark:text-gray-800 text-sm group-hover/canvas-card:opacity-100 relative z-10 text-gray-200 mt-2 transition duration-200">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedTemplates;
