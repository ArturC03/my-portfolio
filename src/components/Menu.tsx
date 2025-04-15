"use client";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Info,
  FolderKanban,
  FileText,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const NavItem = ({ href, icon: Icon, label, isActive }) => {
  return (
    <Button
      variant={isActive ? "secondary" : "link"}
      className={cn(
        "w-full justify-start gap-2",
        isActive ? "font-medium" : "font-normal"
      )}
      asChild
    >
      <a href={href}>
        <Icon className="h-4 w-4" />
        {label}
      </a>
    </Button>
  );
};

const NavigationItems = ({ currentPath, onItemClick }) => (
  <div className="space-y-1 py-2">
    {[
      { href: "/", label: "Home", icon: Home },
      { href: "/about", label: "About", icon: Info },
      { href: "/projects", label: "Projects", icon: FolderKanban },
      { href: "/contact", label: "Contact", icon: Mail },
    ].map((item) => (
      <NavItem
        key={item.href}
        href={item.href}
        icon={item.icon}
        label={item.label}
        isActive={currentPath === item.href}
        onClick={onItemClick}
      />
    ))}
  </div>
);

export default function SideNavigation() {
  const [open, setOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <>
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="fixed top-4 left-4 z-40"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0" title="Navigation">
            <ScrollArea className="h-full">
              <div className="px-4 py-6">
                <div className="mb-8 text-2xl font-bold">
                  <a href="/" onClick={() => setOpen(false)}>
                    Artur Cruz
                  </a>
                </div>
                <NavigationItems
                  currentPath={currentPath}
                  onItemClick={() => setOpen(false)}
                />
                <div className="mt-auto pt-6 text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Artur Cruz
                </div>
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="fixed top-0 left-0 h-full w-64 border-r bg-background p-6">
          <div className="flex flex-col h-full">
            <div className="mb-8 text-2xl justify-center text-center font-bold">
              <a href="/">Artur Cruz</a>
            </div>
            <ScrollArea className="flex-1 -mx-4 px-4">
              <NavigationItems currentPath={currentPath} />
            </ScrollArea>
            <div className="mt-auto pt-6 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Artur Cruz
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
