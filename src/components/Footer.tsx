import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Designed & built by me.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-foreground"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-foreground"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Mail size={18} />
          </a>
          <a
            href={profile.phoneHref}
            aria-label="Phone"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Phone size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}