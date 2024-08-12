import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const manrope = Manrope({ 
  subsets: ["latin"], 
  weight: ["200", "300", "400", "500", "600", "700", "800"] 
});

export const metadata = {
  metadataBase: new URL('https://cards.devpatel.xyz'), // Set your base URL here
  title: 'Home | Cards',
  description: "Welcome to the &apos;Cards&apos;, your go-to resource for high-quality, customizable web templates and UI components. Explore our diverse collection of designs to enhance your web development projects with professional, responsive layouts.",
  keywords: 'Home, Web Templates, UI Components, Frontend Development, React Components, HTML/CSS, JavaScript, Customizable Templates, Cards Project, Web Design, User Interface, Web Development',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cards.devpatel.xyz/',
    title: 'Home | Cards',
    description: "Discover the &apos;Cards&apos;, where you'll find a variety of customizable web templates and UI components designed for developers and designers. Perfect for creating professional, responsive websites.",
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
    title: 'Home | Cards ',
    description: "Discover the &apos;Cards&apos;, where you&apos;ll find a variety of customizable web templates and UI components designed for developers and designers. Perfect for creating professional, responsive websites.",
    image: '/logo.jpeg',  // URL is resolved relative to metadataBase
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} relative h-screen w-screen bg-black`}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}