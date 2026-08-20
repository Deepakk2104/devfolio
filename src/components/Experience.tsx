import { Briefcase } from "lucide-react";
import { experience } from "@/data/resume";
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

      <div className="mt-8 flex flex-col gap-6">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${job.role}`} delay={i * 150} duration={800}>
            <article className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg">
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
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}