import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function DesignSix() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HomeIcon className="h-6 w-6" />
          <span className="text-lg font-bold">Homeless Outreach Project</span>
        </div>
        <nav className="hidden md:flex gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Programs
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Get Involved
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Donate
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </header>
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Empowering the Homeless
                </h1>
                <p className="text-lg md:text-xl">
                  The Homeless Outreach Project is committed to providing
                  essential services and long-term solutions to address
                  homelessness in our community.
                </p>
                <div className="flex gap-2">
                  <Button>Get Involved</Button>
                  <Button className="text-black" variant="outline">
                    Donate Now
                  </Button>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="600"
                height="400"
                alt="Homeless Outreach Project"
                className="mx-auto rounded-lg"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Our Key Programs
                </h2>
                <p className="text-muted-foreground mt-2 max-w-3xl mx-auto text-lg md:text-xl">
                  The Homeless Outreach Project offers a range of programs and
                  initiatives to support individuals and families in need.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Emergency Shelters</CardTitle>
                    <CardDescription>
                      Providing safe and warm temporary housing for those in
                      immediate need.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our emergency shelters offer a safe haven for individuals
                      and families, providing meals, showers, and access to
                      essential resources.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Meals and Clothing</CardTitle>
                    <CardDescription>
                      Distributing nutritious meals and essential clothing items
                      to those in need.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We operate food pantries and clothing distribution centers
                      to ensure our community members have access to basic
                      necessities.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Job Training</CardTitle>
                    <CardDescription>
                      Empowering individuals with skills and resources to secure
                      employment.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our job training programs provide vocational education,
                      resume building, and career placement assistance to help
                      individuals achieve financial independence.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Mental Health Support</CardTitle>
                    <CardDescription>
                      Offering counseling and mental health services to those in
                      need.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We understand the importance of mental well-being and
                      provide access to licensed therapists and support groups
                      to help our community members heal and thrive.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Housing Assistance</CardTitle>
                    <CardDescription>
                      Connecting individuals and families with affordable
                      housing options.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our housing assistance program helps individuals and
                      families secure long-term, stable housing, providing
                      guidance and resources throughout the process.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Community Outreach</CardTitle>
                    <CardDescription>
                      Engaging with the community to raise awareness and provide
                      support.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We actively participate in community events, host
                      educational workshops, and collaborate with local
                      organizations to connect with those in need and strengthen
                      our support network.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Get Involved
                </h2>
                <p className="text-lg md:text-xl">
                  Join us in our mission to empower the homeless and create a
                  more compassionate community.
                </p>
                <div className="flex gap-2">
                  <Button className="text-black" variant="outline">
                    Volunteer
                  </Button>
                  <Button>Donate</Button>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="600"
                height="400"
                alt="Get Involved"
                className="mx-auto rounded-lg"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            &copy; 2024 Homeless Outreach Project. All rights reserved.
          </p>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
