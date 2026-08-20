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

  return (
    <section id="skills" className="mx-auto w-full max-w-4xl scroll-mt-20 px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Skills</h2>
      <p className="mt-2 text-muted">
        Technologies and tools I work with day to day.
      </p>

      <div ref={ref} className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, gi) => (
          <div
            key={group.category}
            style={{ transitionDelay: `${gi * 90}ms` }}
            className={`rounded-xl border border-border bg-card p-5 transition-all duration-700 ease-out ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <h3 className="text-sm font-medium uppercase tracking-wider text-accent">
              {group.category}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item, ii) => (
                <li
                  key={item.name}
                  style={{
                    transitionDelay: `${gi * 90 + ii * 40}ms`,
                    animationDelay: `${(ii % 8) * 0.35}s`,
                  }}
                  className={`skill-pill group flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-sm text-muted transition-opacity duration-500 ease-out hover:border-accent/60 hover:text-foreground hover:shadow-sm ${
                    inView ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="text-accent/70 [&>svg]:size-3.5 transition-transform duration-300 group-hover:scale-125">
                    <SkillIcon name={item.icon} />
                  </span>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}