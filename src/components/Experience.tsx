"use client";

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { experience } from "@/data/resume";
import { EASE } from "@/lib/motion";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-4xl scroll-mt-20 px-6 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Experience
        </h2>
        <p className="mt-2 text-muted">Where I&apos;ve worked.</p>
      </Reveal>

      <div className="relative mt-8 flex flex-col gap-6 pl-8">
        <motion.span
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, ease: EASE }}
          className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-border"
        />

        {experience.map((job, i) => (
          <div key={`${job.company}-${job.role}`} className="relative">
            <span className="absolute top-7 -left-8 flex h-4 w-4 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>

            <Reveal delay={i * 150} duration={800}>
              <motion.article
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/60 hover:shadow-lg"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
                    <Briefcase size={18} className="text-accent" />
                    {job.role}
                  </h3>
                  <p className="text-sm text-muted">{job.period}</p>
                </div>

                <p className="mt-1 text-base font-medium text-foreground">
                  {job.company} · {job.location}
                </p>
                <p className="mt-1 text-sm font-medium text-accent">{job.stack}</p>

                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
