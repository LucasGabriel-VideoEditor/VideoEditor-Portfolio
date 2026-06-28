import { Upload, Scissors, MessageSquare, Send, ArrowDown } from "lucide-react";

const steps = [
  { n: "01", title: "Receive footage", icon: Upload, desc: "You send your raw clips, brief and references." },
  { n: "02", title: "Editing & Motion", icon: Scissors, desc: "Cut, pace, sound design and motion graphics." },
  { n: "03", title: "Review & Revisions", icon: MessageSquare, desc: "Frame-by-frame feedback and refinements." },
  { n: "04", title: "Final Delivery", icon: Send, desc: "Export-ready masters in your preferred specs." },
];

export function Workflow() {
  return (
    <section id="workflow" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl reveal">
          <div className="text-xs uppercase tracking-[0.25em] text-primary-glow">
            Process
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-gradient">
            How I Work
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={s.n} className="reveal relative" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur p-7 h-full transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_0_50px_-12px_oklch(0.55_0.24_295/0.6)]">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-semibold text-gradient-purple">{s.n}</span>
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-secondary border border-border group-hover:bg-primary group-hover:border-primary transition-colors">
                    <s.icon className="size-5" />
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden lg:grid absolute top-1/2 -right-3 -translate-y-1/2 place-items-center h-6 w-6 rounded-full bg-background border border-border text-primary">
                  <ArrowDown className="size-3 -rotate-90" />
                </div>
              )}
              {i < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-2 text-primary">
                  <ArrowDown className="size-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
