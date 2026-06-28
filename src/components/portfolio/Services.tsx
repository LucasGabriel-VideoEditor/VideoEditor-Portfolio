import { Film, Zap, Sparkles, Music2, Palette } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Long-form Editing",
    desc: "High-retention edits for 10–30 minute YouTube videos that keep viewers engaged.",
  },
  {
    icon: Zap,
    title: "Shorts Editing",
    desc: "Snappy vertical edits optimized for hooks, pacing and replay value.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    desc: "Custom animations, transitions and on-screen graphics that elevate the story.",
  },
  {
    icon: Music2,
    title: "Sound Design",
    desc: "Crisp mixing, music selection and SFX layering for cinematic audio.",
  },
  {
    icon: Palette,
    title: "Color Grading",
    desc: "Consistent, premium-feeling color tailored to your channel's identity.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl reveal">
          <div className="text-xs uppercase tracking-[0.25em] text-primary-glow">
            Services
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-gradient">
            Everything your video needs to perform.
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group relative rounded-2xl border border-border bg-card/60 backdrop-blur p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_0_50px_-10px_oklch(0.55_0.24_295/0.6)] overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />

              <div className="relative">
                <div className="inline-grid place-items-center h-12 w-12 rounded-xl bg-secondary border border-border group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <s.icon className="size-5 text-foreground transition-colors" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
