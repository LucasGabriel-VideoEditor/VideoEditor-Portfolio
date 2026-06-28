import { ArrowRight, Play } from "lucide-react";
import type { SVGProps } from "react";

function DiscordIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3.2a.075.075 0 0 0-.079.037c-.34.6-.717 1.382-.98 1.997a18.27 18.27 0 0 0-5.487 0 12.51 12.51 0 0 0-.995-1.997.078.078 0 0 0-.079-.037A19.736 19.736 0 0 0 5.18 4.369a.07.07 0 0 0-.032.027C2.533 8.31 1.81 12.144 2.165 15.93a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.105 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.128 12.3 12.3 0 0 1-1.873.891.077.077 0 0 0-.04.106c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.029 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-4.376-.838-8.18-3.549-11.535a.06.06 0 0 0-.031-.028ZM8.02 13.626c-1.183 0-2.157-1.085-2.157-2.418 0-1.334.956-2.42 2.157-2.42 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.974 0c-1.183 0-2.157-1.085-2.157-2.418 0-1.334.955-2.42 2.157-2.42 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" />
    </svg>
  );
}
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
              <img
                src={profileAsset.url}
                alt="Lucas Gabriel, freelance video editor"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-[50%_20%] animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.08_0_0/0.75),transparent_55%)] pointer-events-none" />

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
