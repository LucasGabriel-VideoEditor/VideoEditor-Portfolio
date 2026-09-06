const navItems = [
  { label: "Back to Top", id: "top" },
  { label: "Portfolio", id: "portfolio" },
  { label: "About Me", id: "about" },
  { label: "Socials", id: "contact" },
];

export function Footer() {
  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="px-6 pb-10 pt-6">
      <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card/40 px-6 py-8">
        <nav className="flex flex-wrap items-center justify-center gap-3">
          {navItems.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground transition-all hover:border-primary/60 hover:text-foreground hover:-translate-y-0.5"
            >
              {n.label}
            </button>
          ))}
        </nav>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          © 2026 Lucas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
