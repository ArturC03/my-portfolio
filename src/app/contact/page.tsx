"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = form;
    const mailto = `mailto:arturvicentecruz@proton.me?subject=Mensagem de ${encodeURIComponent(name)}&body=${encodeURIComponent(
      `Email: ${email}\n\n${message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <div className="flex min-h-screen font-[family-name:var(--font-geist-sans)] bg-gray-50 text-gray-900">
      <Menu />

      <div className="flex-1 ml-0 md:ml-64 flex flex-col">
        <main className="flex-1 flex items-center justify-center p-4 md:p-8">
          <Card className="w-full max-w-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">Contact Me</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
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
