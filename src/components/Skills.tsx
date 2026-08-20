"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/resume";
import { SkillIcon } from "./SkillIcon";

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>();

  const allSkills = skills.flatMap((group) => group.items);

  const track = (key: string, ariaHidden = false) => (
    <div
      key={key}
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-3 pr-3"
    >
      {allSkills.map((item) => (
        <span
          key={key + item.name}
          className="group flex items-center gap-1.5 whitespace-nowrap rounded-md border border-border bg-card px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/60 hover:text-foreground hover:shadow-sm"
        >
          <span className="text-accent/70 [&>svg]:size-3.5 transition-transform duration-300 group-hover:scale-125">
            <SkillIcon name={item.icon} />
          </span>
          {item.name}
        </span>
      ))}
    </div>
  );

  const row = (key: string, reversed = false, ariaHidden = false) => (
    <div
      key={key}
      className={`marquee-inner flex w-max ${reversed ? "marquee-reverse" : ""}`}
    >
      {track(`${key}-a`, ariaHidden)}
      {track(`${key}-b`, true)}
    </div>
  );

  return (
    <section id="skills" className="mx-auto w-full max-w-4xl scroll-mt-20 px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Skills</h2>
      <p className="mt-2 text-muted">
        Technologies and tools I work with day to day.
      </p>

      <div
        ref={ref}
        className={`mt-8 transition-all duration-700 ease-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-xl border border-border bg-card/50 py-4">
          <div className="flex flex-col gap-3">
            {row("row-1")}
            {row("row-2", true, true)}
            {row("row-3")}
          </div>
        </div>
      </div>
    </section>
  );
}