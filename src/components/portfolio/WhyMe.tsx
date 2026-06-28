import { Check, X } from "lucide-react";

const items = [
  "Better pacing",
  "Cleaner storytelling",
  "Higher retention",
  "Professional sound",
  "Color consistency",
  "Fast communication",
];

export function WhyMe() {
  return (
    <section id="why" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl reveal">
          <div className="text-xs uppercase tracking-[0.25em] text-primary-glow">
            Why Work With Me
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-gradient">
            The difference is in the details.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6 reveal">
          <div className="rounded-2xl border border-border bg-card/40 p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Typical Editing
            </div>
            <ul className="mt-6 space-y-4">
              {items.map((i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground line-through decoration-muted-foreground/40">
                  <span className="grid place-items-center h-7 w-7 rounded-full bg-secondary border border-border">
                    <X className="size-3.5" />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 via-card to-card p-8 glow-purple">
            <div className="text-xs uppercase tracking-[0.2em] text-primary-glow">
              My Editing
            </div>
            <ul className="mt-6 space-y-4">
              {items.map((i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <span className="grid place-items-center h-7 w-7 rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3.5" />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
