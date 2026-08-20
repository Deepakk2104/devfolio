import { ArrowDown, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/resume";

export const resumeUrl =
  "https://drive.google.com/drive/quota";

export default function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col px-6 pt-24 pb-16 sm:pt-32">
      <p className="mb-4 flex items-center gap-2 text-sm text-muted">
        <MapPin size={14} />
        {profile.location} · {profile.availability}
      </p>

      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
        Hi, I&apos;m{" "}
        <span className="text-accent">{profile.name}</span>
      </h1>

      <p className="mt-4 max-w-2xl text-lg font-medium text-foreground sm:text-xl">
        {profile.role}
      </p>

      <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
        {profile.summary}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          Get in touch
          <ArrowDown size={16} />
        </a>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-border/50"
        >
          Download resume
        </a>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted transition-colors hover:text-foreground hover:bg-border/50"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted transition-colors hover:text-foreground hover:bg-border/50"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted transition-colors hover:text-foreground hover:bg-border/50"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}