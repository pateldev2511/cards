// components/Footer.js

import Link from "next/link";

export default function Footer() {
  const footerNavItems = ["Privacy Policy", "Terms of Service", "Contact Us"];

  return (
    <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; 2024 Homeless Outreach Project. All rights reserved.
        </p>
        <nav className="flex gap-4 mt-4 md:mt-0">
          {footerNavItems.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="hover:underline"
              prefetch={false}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
