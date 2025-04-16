"use client";
import { FaPhp, FaLaravel } from "react-icons/fa";
import { SiGo, SiNextdotjs } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Link from "next/link";

const technologies = [
  { icon: <FaPhp size={48} />, name: "PHP" },
  { icon: <FaLaravel size={48} />, name: "Laravel" },
  { icon: <SiGo size={48} />, name: "Go" },
  { icon: <SiNextdotjs size={48} />, name: "Next.js" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen font-[family-name:var(--font-geist-sans)] bg-gray-50 text-gray-900">
      <Menu />

      <div className="flex-1 ml-0 md:ml-64 flex flex-col">
        <main className="flex-1 flex flex-col items-center justify-center p-8">
          {/* Hero Section with Technologies */}
          <Card className="w-full max-w-2xl sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl sm:text-3xl font-bold">
                Hello, I&apos;m Artur
              </CardTitle>
              <p className="text-muted-foreground text-base sm:text-lg">
                A 17-year-old developer passionate about modern web and low-level development.
              </p>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              {/* Technologies Section */}
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-center">
                Technologies I Use
              </h2>
              <div className="flex justify-center gap-6 sm:gap-8 flex-wrap">
                {technologies.map(({ icon }, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-10 sm:w-12 md:w-14 lg:w-16 transition duration-300 ease-in-out hover:scale-110">
                      <div className="w-full h-auto">{icon}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <Link href="/projects">
                  <Button size="lg">View My Projects</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary" size="lg">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </main>

        <footer className="flex gap-4 flex-wrap items-center justify-center p-4">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
