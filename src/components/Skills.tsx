import { skills } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-4xl scroll-mt-20 px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Skills</h2>
      <p className="mt-2 text-muted">
        Technologies and tools I work with day to day.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-border bg-card p-5"
          >
            <h3 className="text-sm font-medium uppercase tracking-wider text-accent">
              {group.category}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-background px-2.5 py-1 text-sm text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}