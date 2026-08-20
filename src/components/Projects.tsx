import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-4xl scroll-mt-20 px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Projects
      </h2>
      <p className="mt-2 text-muted">
        Things I&apos;ve built and shipped.
      </p>

      <div className="mt-8 flex flex-col gap-6">
        {projects.map((p) => (
          <article
            key={p.name}
            className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/60"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold tracking-tight">
                {p.name}
              </h3>
              <p className="text-sm text-muted">{p.tagline}</p>
            </div>

            <p className="mt-1 text-sm font-medium text-accent">{p.stack}</p>

            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted">
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-3.5 py-2 text-sm font-medium transition-colors hover:bg-border/50"
              >
                <FaGithub size={15} />
                Code
              </a>
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3.5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                <ExternalLink size={15} />
                Live demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}