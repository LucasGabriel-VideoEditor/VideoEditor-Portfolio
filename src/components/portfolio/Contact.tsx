import { Instagram, Mail, Briefcase } from "lucide-react";

const links = [
  {
    label: "YTJobs",
    href: "https://ytjobs.co/talent/profile/583654?r=77&t=tnp&utm_campaign=share-new-profile&utm_ref=talent",
    icon: Briefcase,
    handle: "ytjobs.co/talent",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/lucasgabriel.txr",
    icon: Instagram,
    handle: "@lucasgabriel.txr",
  },
  {
    label: "X",
    href: "https://x.com/lucasgabriel_ve",
    icon: XIcon,
    handle: "@lucasgabriel_ve",
  },
  {
    label: "Email",
    href: "mailto:lucasgabrieltxr80@gmail.com",
    icon: Mail,
    handle: "lucasgabrieltxr80@gmail.com",
  },
];

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2H21l-6.52 7.45L22 22h-6.84l-4.78-6.26L4.8 22H2l7.02-8.02L2 2h6.91l4.32 5.74L18.244 2Zm-2.4 18h1.9L8.27 4H6.25l9.594 16Z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-2xl reveal">
          <div className="text-xs uppercase tracking-[0.25em] text-primary-glow">
            Contact
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-gradient">
            Let&apos;s get in touch.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            The fastest way to reach me — pick your favorite channel.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group relative flex items-center gap-4 rounded-2xl border border-border bg-card/60 backdrop-blur p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-[0_0_45px_-10px_oklch(0.55_0.24_295/0.8)]"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-secondary border border-border group-hover:bg-primary group-hover:border-primary transition-colors">
                <l.icon className="size-5" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold">{l.label}</div>
                <div className="text-xs text-muted-foreground truncate">
                  {l.handle}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
