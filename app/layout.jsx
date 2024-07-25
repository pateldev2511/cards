import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { Toaster } from "@/components/ui/toaster"

const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Cards",
  description: "Get best cards effected templates in for on React components and also plain HTML and CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={instrumentSans.className}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}