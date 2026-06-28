import { useEffect, useState } from "react";
import { Play, X, Clock, Tag } from "lucide-react";

// PLACEHOLDER YouTube IDs — replace with real ones.
const projects = [
  {
    title: "Building My Dream Setup",
    category: "Long-form",
    duration: "14:22",
    youtubeId: "dQw4w9WgXcQ",
    hue: 280,
  },
  {
    title: "Ranked Gameplay Highlights",
    category: "Gaming",
    duration: "10:48",
    youtubeId: "dQw4w9WgXcQ",
    hue: 300,
  },
  {
    title: "Inside a Hidden Subculture",
    category: "Documentary",
    duration: "22:05",
    youtubeId: "dQw4w9WgXcQ",
    hue: 260,
  },
  {
    title: "Founder Conversations Ep. 04",
    category: "Podcast",
    duration: "38:11",
    youtubeId: "dQw4w9WgXcQ",
    hue: 290,
  },
  {
    title: "60-Second Story Hook",
    category: "Short-form",
    duration: "0:58",
    youtubeId: "dQw4w9WgXcQ",
    hue: 310,
  },
];

export function Portfolio() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeId ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeId]);

  return (
    <section id="portfolio" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl reveal">
          <div className="text-xs uppercase tracking-[0.25em] text-primary-glow">
            Portfolio
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-gradient">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A selection of videos I&apos;ve edited.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <button
              key={i}
              onClick={() => setActiveId(p.youtubeId)}
              className={`reveal group relative text-left rounded-2xl overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_0_60px_-10px_oklch(0.55_0.24_295/0.7)] ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {/* Thumbnail placeholder */}
              <div className="relative aspect-video w-full overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, oklch(0.55 0.24 ${p.hue} / 0.55), transparent 60%), radial-gradient(circle at 75% 70%, oklch(0.35 0.18 ${p.hue + 20} / 0.5), transparent 65%), oklch(0.1 0.02 280)`,
                  }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.08_0_0/0.85),transparent_55%)]" />

                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid place-items-center h-16 w-16 rounded-full bg-primary/90 text-primary-foreground backdrop-blur transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-[0_0_40px_-4px_oklch(0.55_0.24_295/0.9)]">
                    <Play className="size-6 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-background/70 backdrop-blur px-3 py-1 text-[11px] uppercase tracking-wider">
                  <Tag className="size-3" /> {p.category}
                </div>
                <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-background/70 backdrop-blur px-3 py-1 text-[11px]">
                  <Clock className="size-3" /> {p.duration}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold leading-snug group-hover:text-primary-glow transition-colors">
                  {p.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeId && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-background/85 backdrop-blur-xl p-4 animate-fade-in"
          onClick={() => setActiveId(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-border bg-card glow-purple-strong animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveId(null)}
              className="absolute -top-12 right-0 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close video"
            >
              Close <X className="size-4" />
            </button>
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${activeId}?autoplay=1&rel=0`}
              title="Project video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
