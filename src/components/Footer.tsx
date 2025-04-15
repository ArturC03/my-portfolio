import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TbBrandBluesky as BlueskyLogo } from "react-icons/tb";
import Link from "next/link";

export default function Footer() {
  const github = "https://github.com/ArturC03";
  const linkedin = "https://www.linkedin.com/in/artur-cruz-463623360/";
  const bluesky = "https://bsky.app/profile/artrito.bsky.social";

  return (
    <footer className="w-full border-t pt-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Artur Cruz. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Button variant="ghost" size="icon">
            <Link href={github} target="_blank">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Link href={linkedin} target="_blank">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Link href={bluesky} target="_blank">
              <BlueskyLogo className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
