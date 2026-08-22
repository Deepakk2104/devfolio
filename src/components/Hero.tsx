"use client";

import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/resume";
import { EASE } from "@/lib/motion";
import Reveal from "./Reveal";

export const resumeUrl =
  "https://drive.google.com/file/d/10ooOttla1dVY1O-8db7hrhpOCOvko3za/view?usp=drive_open";

const hoverTap = {
  whileHover: { y: -3 },
  whileTap: { scale: 0.96 },
};

export default function Hero() {
  const nameWords = profile.name.split(" ");

  return (
    <section className="relative mx-auto w-full max-w-4xl overflow-hidden px-6 pt-24 pb-16 sm:pt-32">
      <div aria-hidden className="hero-glow" />

      <div className="relative flex flex-col-reverse items-center gap-10 sm:flex-row sm:justify-between">
        <div className="w-full sm:w-auto">
          <Reveal duration={800} y={16}>
            <p className="mb-4 flex items-center gap-2 text-sm text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              {profile.availability}
            </p>
          </Reveal>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: {} }}
            className="text-4xl font-semibold tracking-tight sm:text-6xl"
          >
            <span className="inline-block overflow-hidden align-bottom pb-1">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              >
                Hi, I&apos;m{"\u00A0"}
              </motion.span>
            </span>
            {nameWords.map((word, i) => (
              <span key={word + i} className="inline-block overflow-hidden align-bottom pb-1">
                <motion.span
                  className="inline-block text-accent"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: EASE,
                    delay: 0.22 + i * 0.09,
                  }}
                >
                  {word}
                  {i < nameWords.length - 1 ? "\u00A0" : ""}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <Reveal delay={350} duration={800}>
            <p className="mt-4 max-w-2xl text-lg font-medium text-foreground sm:text-xl">
              {profile.role}
            </p>
          </Reveal>

          <Reveal delay={450} duration={800}>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={550} duration={800}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <motion.a
                href="#contact"
                {...hoverTap}
                className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                Get in touch
                <motion.span
                  animate={{ y: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                  className="inline-flex"
                >
                  <ArrowDown size={16} />
                </motion.span>
              </motion.a>
              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                {...hoverTap}
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-border/50"
              >
                Download resume
              </motion.a>
              <div className="flex items-center gap-2">
                {[
                  { href: profile.github, label: "GitHub", icon: <FaGithub size={18} /> },
                  { href: profile.linkedin, label: "LinkedIn", icon: <FaLinkedin size={18} /> },
                  { href: profile.emailHref, label: "Email", icon: <Mail size={18} /> },
                ].map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={s.label}
                    {...hoverTap}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.08, type: "spring", stiffness: 260, damping: 18 }}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted transition-colors hover:text-foreground hover:bg-border/50"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {profile.avatar && (
          <Reveal delay={200} duration={900} className="shrink-0">
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.35 }}
            >
              <div className="avatar-float">
                <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-accent/40 shadow-xl sm:h-52 sm:w-52">
                  <Image
                    src={profile.avatar}
                    alt={`${profile.name} avatar`}
                    fill
                    priority
                    sizes="(max-width: 640px) 160px, 208px"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
