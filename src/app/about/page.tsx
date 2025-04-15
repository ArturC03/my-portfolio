// /pages/about.js
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

// Custom ListItem component
function ListItem({ title, children }) {
  return (
    <div className="py-4">
      <dt className="text-sm font-medium text-gray-500">{title}</dt>
      <dd className="mt-1 text-base md:text-lg font-semibold text-gray-900">
        {children}
      </dd>
    </div>
  );
}

export default function About() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 font-[family-name:var(--font-geist-sans)]">
      <Menu />

      <div className="flex-1 ml-0 md:ml-64 flex flex-col">
        <main className="flex-1 flex items-center justify-center p-4 md:p-8">
          <Card className="w-full max-w-2xl shadow-lg rounded-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">About Me</CardTitle>
            </CardHeader>

            <CardContent className="space-y-2 px-4 pb-4">
              <dl>
                <ListItem title="Name">Artur</ListItem>
                <Separator />
                <ListItem title="Age">17 years old</ListItem>
                <Separator />
                <ListItem title="Location">Gaia, Porto, Portugal</ListItem>
                <Separator />
                <ListItem title="Education">
                  12th Grade, Colégio de Gaia (Informática e Tecnologia Multimédia)
                </ListItem>
                <Separator />
                <ListItem title="Passion">Programming and Technology</ListItem>
                <Separator />
                <ListItem title="Traits">
                  Highly motivated, determined, and eager to learn
                </ListItem>
              </dl>
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
