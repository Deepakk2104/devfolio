"use client";

import { skills } from "@/data/resume";
import { SkillIcon } from "./SkillIcon";
import Reveal from "./Reveal";

export default function Skills() {
  const chunks = [skills.slice(0, 2), skills.slice(2, 4), skills.slice(4)];

  const track = (chunk: typeof skills, key: string, ariaHidden = false) => {
    const items = chunk.flatMap((group) => group.items);
    return (
      <div
        key={key}
        aria-hidden={ariaHidden}
        className="flex shrink-0 items-center gap-3 pr-3"
      >
        {items.map((item) => (
          <span
            key={key + item.name}
            className="group flex items-center gap-1.5 whitespace-nowrap rounded-md border border-border bg-card px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/60 hover:text-foreground hover:shadow-sm"
          >
            <span
              className="[&>svg]:size-4 transition-transform duration-300 group-hover:scale-125"
              style={item.color ? { color: item.color } : undefined}
            >
              <SkillIcon name={item.icon} />
            </span>
            {item.name}
          </span>
        ))}
      </div>
    );
  };

  const row = (index: number, reversed = false, ariaHidden = false) => {
    const key = `row-${index}`;
    return (
      <div
        key={key}
        className={`marquee-inner flex w-max ${reversed ? "marquee-reverse" : ""}`}
      >
        {track(chunks[index], `${key}-a`, ariaHidden)}
        {track(chunks[index], `${key}-b`, true)}
      </div>
    );
  };

  return (
    <section id="skills" className="mx-auto w-full max-w-4xl scroll-mt-20 px-6 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Skills</h2>
        <p className="mt-2 text-muted">
          Technologies and tools I work with day to day.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card/50 py-4">
          <div className="flex flex-col gap-3">
            {row(0)}
            {row(1, true, true)}
            {row(2)}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
