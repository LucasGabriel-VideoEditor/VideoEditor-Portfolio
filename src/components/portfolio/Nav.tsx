import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/lg-logo.jpg";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#workflow", label: "Workflow" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-3 group" aria-label="Lucas Gabriel home">
          {/* Logo placeholder */}
          <div className="relative h-10 w-10 rounded-xl overflow-hidden shadow-lg shadow-primary/30 transition-transform group-hover:scale-105">
            <img src={logoImg} alt="Lucas Gabriel logo" className="h-full w-full object-cover" />
            <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="text-sm font-semibold tracking-tight">Lucas Gabriel</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Video Editor
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-4 after:right-4 after:bottom-1 after:h-px after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-glow hover:shadow-[0_0_30px_-6px_oklch(0.55_0.24_295/0.8)]"
        >
          Hire Me
        </a>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/40 rounded-lg"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
