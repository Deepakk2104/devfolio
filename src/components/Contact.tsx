import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/resume";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
    icon: Phone,
  },
  {
    label: "GitHub",
    value: "github.com/Deepakk2104",
    href: profile.github,
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/deepakk2104",
    href: profile.linkedin,
    icon: FaLinkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-4xl scroll-mt-20 px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Contact
      </h2>
      <p className="mt-2 max-w-2xl text-muted">
        Open to remote opportunities and interesting projects. Reach out
        anytime — I usually reply quickly.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noreferrer" : undefined}
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/60"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
              <c.icon size={18} />
            </span>
            <span>
              <span className="block text-sm font-medium">{c.label}</span>
              <span className="block text-sm text-muted">{c.value}</span>
            </span>
          </a>
        ))}
      </div>

      <p className="mt-8 flex items-center gap-2 text-sm text-muted">
        <MapPin size={14} />
        {profile.location}, India — {profile.availability}.
      </p>
    </section>
  );
}