import { Instagram, Mail, Briefcase } from "lucide-react";

const links = [
  {
    label: "YTJobs",
    href: "https://ytjobs.co/talent/profile/583654?r=77&t=tnp&utm_campaign=share-new-profile&utm_ref=talent",
    icon: Briefcase,
    handle: "ytjobs.co/talent",
  },
  {
    label: "Join My Discord Community",
    href: "https://discord.gg/gAW9VbPy93",
    icon: DiscordIcon,
    handle: "discord.gg/gAW9VbPy93",
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

function DiscordIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3.2a.075.075 0 0 0-.079.037c-.34.6-.717 1.382-.98 1.997a18.27 18.27 0 0 0-5.487 0 12.51 12.51 0 0 0-.995-1.997.078.078 0 0 0-.079-.037A19.736 19.736 0 0 0 5.18 4.369a.07.07 0 0 0-.032.027C2.533 8.31 1.81 12.144 2.165 15.93a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.105 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.128 12.3 12.3 0 0 1-1.873.891.077.077 0 0 0-.04.106c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.029 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-4.376-.838-8.18-3.549-11.535a.06.06 0 0 0-.031-.028ZM8.02 13.626c-1.183 0-2.157-1.085-2.157-2.418 0-1.334.956-2.42 2.157-2.42 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.974 0c-1.183 0-2.157-1.085-2.157-2.418 0-1.334.955-2.42 2.157-2.42 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" />
    </svg>
  );
}


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
