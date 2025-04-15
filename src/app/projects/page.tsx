"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Link from "next/link";

import { FaPhp, FaLaravel } from "react-icons/fa";
import { SiGo, SiNextdotjs } from "react-icons/si";

const ICONS: Record<string, React.ReactNode> = {
  php: <FaPhp size={20} />,
  laravel: <FaLaravel size={20} />,
  go: <SiGo size={20} />,
  next: <SiNextdotjs size={20} />,
};

const projects = [
  {
    name: "GumBay",
    description: "Music player in Next.js",
    link: "https://github.com/ArturC03/gumbay",
    technologies: ["next"],
  },
  {
    name: "RS232 Sensor Monitorization",
    description: "Sensor reading app for RS232",
    link: "https://github.com/ArturC03/RS232Monitorization",
    technologies: ["go"],
  },
  {
    name: "R2D2",
    description: "My own programming language",
    link: "https://github.com/ArturC03/r2d2",
    technologies: ["go"],
  },
  {
    name: "R2D2 - CLI",
    description: "My take on how a programming language cli should be.",
    link: "https://github.com/ArturC03/r2d2-cli",
    technologies: ["go"],
  },
  {
    name: "Alumni",
    description: "A social media platform for the Alumni",
    link: "aaa.ispgaya.pt",
    technologies: ["laravel"],
  },
];

const ITEMS_PER_PAGE = 6;

export default function Projects() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const visibleProjects = projects.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE
  );

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 font-[family-name:var(--font-geist-sans)]">
      <Menu />

      <div className="flex-1 ml-0 md:ml-64 flex flex-col">
        <main className="flex-1 flex items-center justify-center p-4 md:p-8">
          <Card className="w-full max-w-5xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">My Projects</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {visibleProjects.map((project, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground flex flex-col gap-3">
                      <p>{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="flex items-center gap-1 text-xs"
                          >
                            {ICONS[tech]} {tech.charAt(0).toUpperCase() + tech.slice(1)}
                          </span>
                        ))}
                      </div>

                      <Separator />
                      <Link href={project.link}>
                        <Button variant="link" className="px-0 text-sm">
                          View project
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center gap-4 pt-4">
                <Button
                  variant="outline"
                  disabled={page === 0}
                  onClick={() => setPage((p) => p - 1)}
                >
                  Back
                </Button>
                <Button
                  variant="outline"
                  disabled={page >= totalPages - 1}
                  onClick={() => setPage((p) => p + 1)}
                >
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>

        <footer className="p-4 flex items-center justify-center">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
