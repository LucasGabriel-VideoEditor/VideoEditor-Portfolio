import { ArrowRight, Play } from "lucide-react";
import { CinematicBackground } from "./CinematicBackground";
import profileAsset from "@/assets/lucas-profile.png.asset.json";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40"
    >
      <CinematicBackground />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/50 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Available for new projects
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-balance">
              <span className="text-gradient">YouTube Videos That</span>
              <br />
              <span className="text-gradient-purple">People Actually</span>{" "}
              <span className="text-gradient">Finish Watching.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              I help creators transform raw footage into engaging, high-retention
              content that keeps viewers watching until the very end.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-glow hover:shadow-[0_0_40px_-6px_oklch(0.55_0.24_295/0.9)] hover:-translate-y-0.5"
              >
                View Portfolio
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:border-primary/60 hover:bg-card/80"
              >
                Hire Me
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "120+", l: "Videos Edited" },
                { v: "40M+", l: "Views Driven" },
                { v: "98%", l: "Retention Lift" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl sm:text-3xl font-semibold text-gradient-purple">
                    {s.v}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile picture placeholder */}
          <div className="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:200ms]">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border/80 bg-card group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-transparent" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 rounded-full gradient-purple grid place-items-center shadow-xl shadow-primary/40 animate-float">
                    <User className="size-10 text-white" />
                  </div>
                  <div className="mt-5 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Profile Picture
                  </div>
                </div>
              </div>

              {/* Play badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-border/70 bg-background/70 backdrop-blur-xl p-4">
                <div>
                  <div className="text-sm font-medium">Lucas Gabriel</div>
                  <div className="text-xs text-muted-foreground">
                    Freelance Video Editor
                  </div>
                </div>
                <div className="grid place-items-center h-10 w-10 rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                  <Play className="size-4 fill-current" />
                </div>
              </div>
            </div>

            <div
              aria-hidden
              className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-primary/20 blur-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
