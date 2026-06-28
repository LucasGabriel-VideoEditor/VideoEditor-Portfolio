import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="reveal relative overflow-hidden rounded-3xl border border-primary/30 bg-card/60 backdrop-blur p-12 sm:p-20 text-center glow-purple">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-70"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, oklch(0.55 0.24 295 / 0.35), transparent 60%)",
            }}
          />
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance text-gradient">
            Let&apos;s Build Your Next Great Video.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Looking for a reliable editor who understands YouTube?
            <br /> Let&apos;s work together.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-glow hover:-translate-y-0.5 hover:shadow-[0_0_50px_-6px_oklch(0.55_0.24_295/0.9)]"
            >
              Contact Me
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
