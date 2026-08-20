import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/resume";
import Reveal from "./Reveal";

export const resumeUrl =
  "https://drive.google.com/file/d/10ooOttla1dVY1O-8db7hrhpOCOvko3za/view?usp=drive_open";

export default function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-4xl overflow-hidden px-6 pt-24 pb-16 sm:pt-32">
      <div aria-hidden className="hero-glow" />

      <div className="relative flex flex-col-reverse items-center gap-10 sm:flex-row sm:justify-between">
        <div className="w-full sm:w-auto">
          <Reveal duration={900}>
            <p className="mb-4 flex items-center gap-2 text-sm text-muted">
              {profile.availability}
            </p>
          </Reveal>

          <Reveal delay={100} duration={900}>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Hi, I&apos;m{" "}
              <span className="text-accent">{profile.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={200} duration={900}>
            <p className="mt-4 max-w-2xl text-lg font-medium text-foreground sm:text-xl">
              {profile.role}
            </p>
          </Reveal>

          <Reveal delay={300} duration={900}>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={400} duration={900}>
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
                  href={profile.emailHref}
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted transition-colors hover:text-foreground hover:bg-border/50"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {profile.avatar && (
          <Reveal delay={200} duration={1000} className="shrink-0">
            <div className="avatar-float">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-accent/40 shadow-xl sm:h-52 sm:w-52">
                <Image
                  src={profile.avatar}
                  alt={`${profile.name} avatar`}
                  fill
                  sizes="(max-width: 640px) 160px, 208px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}