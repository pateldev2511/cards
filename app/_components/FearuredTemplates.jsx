import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const templates = [
  { id: 1, name: 'Template 1', description: 'A stunning hero section for your landing page.', path: '/designs/1', img: '/design-1-img.webp' },
  { id: 2, name: 'Template 2', description: 'A customizable button component for your app.', path: '/designs/2', img: '/design-2-img.webp' },
  { id: 3, name: 'Template 3', description: 'A clean and modern pricing section for your website.', path: '/designs/3', img: '/design-1-img.webp' },
  { id: 4, name: 'Template 4', description: 'A versatile card component for your content.', path: '/designs/4', img: '/design-1-img.webp' },
  { id: 5, name: 'Template 5', description: 'A clean and modern blog layout for your website.', path: '/designs/5', img: '/design-1-img.webp' },
  { id: 6, name: 'Template 6', description: 'A responsive and customizable navbar for your website.', path: '/designs/6', img: '/design-1-img.webp' },
];

const FeaturedTemplates = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
        
      <main className="flex-1">
        <h2
        className='w-full text-4xl text-center p-4 font-bold mt-8 text-blue-500'>
            Featured Templates
        </h2>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {templates.map(template => (
                <Link
                  key={template.id}
                  href={template.path}
                  className="group relative overflow-hidden rounded-lg bg-muted/20 transition-all hover:bg-muted/30 focus:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 bg-white shadow-md"
                  prefetch={false}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={template.img}
                      alt={template.name}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{template.name}</h3>
                    <p className="text-sm text-muted-foreground">{template.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default FeaturedTemplates;