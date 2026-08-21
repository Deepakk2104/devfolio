import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/resume";
import Reveal from "./Reveal";

type Project = (typeof projects)[number];

function ProjectLinks({ p }: { p: Project }) {
  return (
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
  );
}

function ProjectMeta({ p }: { p: Project }) {
  return (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
        <p className="text-sm text-muted">{p.tagline}</p>
      </div>

      <p className="mt-1 text-sm font-medium text-accent">{p.stack}</p>

      <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted">
        {p.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="mx-auto w-full max-w-4xl scroll-mt-20 px-6 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Projects
        </h2>
        <p className="mt-2 text-muted">
          Things I&apos;ve built and shipped.
        </p>
      </Reveal>

      <div className="mt-8 flex flex-col gap-6">
        <Reveal duration={900}>
          <article className="grid overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg md:grid-cols-2">
            <div className="relative aspect-[16/9] bg-background md:aspect-auto md:min-h-[24rem]">
              {featured.image ? (
                <Image
                  src={featured.image}
                  alt={`${featured.name} screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 448px"
                  className="object-contain p-3"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-muted">
                  Add screenshot
                </div>
              )}
            </div>

            <div className="flex min-w-0 flex-col justify-center p-6">
              <ProjectMeta p={featured} />
              <ProjectLinks p={featured} />
            </div>
          </article>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.name} delay={i * 120} duration={900}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg">
                {p.image ? (
                  <div className="relative -mx-6 -mt-6 aspect-[16/9] w-[calc(100%+3rem)] overflow-hidden rounded-t-xl border-b border-border bg-background">
                    <Image
                      src={p.image}
                      alt={`${p.name} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 448px"
                      className="object-contain p-2"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[16/9] w-full items-center justify-center rounded-lg border border-dashed border-border bg-background text-center text-sm text-muted">
                    Add screenshot
                  </div>
                )}

                <div className="mt-5 flex min-w-0 flex-1 flex-col">
                  <ProjectMeta p={p} />
                  <div className="mt-auto">
                    <ProjectLinks p={p} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
