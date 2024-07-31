import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const manrope = Manrope({ 
  subsets: ["latin"], 
  weight: ["200", "300", "400", "500", "600", "700", "800"] 
});

export const metadata = {
  title: "Cards",
  description: "Get best cards effected templates in for on React components and also plain HTML and CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} relative h-screen w-screen`}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}