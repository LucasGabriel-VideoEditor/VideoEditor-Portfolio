import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { X } from "lucide-react";

const longForm = [
  { title: "Animal Kingdom Curiosities", youtubeId: "eEXvcyshI4E" },
  { title: "Reaction Video", youtubeId: "-c9M71Nj90U" },
];

const shorts = [
  { title: "Best CoC Equipment", youtubeId: "jq_GoJOR92Q" },
  { title: "Anime Reaction", youtubeId: "xdXzohF0Fyc" },
  { title: '"See What?"', youtubeId: "sSZvyPjR26s" },
];

function VideoCard({
  title,
  youtubeId,
  vertical,
  onOpen,
}: {
  title: string;
  youtubeId: string;
  vertical?: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      aria-label={`Play ${title}`}
      className={`reveal group relative block w-full overflow-hidden rounded-2xl bg-secondary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_60px_-14px_oklch(0.55_0.24_295/0.8)] ${
        vertical ? "aspect-[9/16]" : "aspect-video"
      }`}
    >
      <img
        src={`https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`}
        alt={`${title} thumbnail`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.08_0_0/0.8),transparent_55%)]" />
      <div className="absolute inset-0 grid place-items-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-primary/90 text-primary-foreground backdrop-blur transition-transform duration-500 group-hover:scale-110">
          <Play className="size-6 fill-current ml-0.5" />
        </span>
      </div>
      <span className="absolute bottom-4 left-5 right-5 truncate text-left text-sm sm:text-base font-medium">
        {title}
      </span>
    </button>
  );
}

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
    <section id="portfolio" className="relative py-20 sm:py-28 scroll-mt-8">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="reveal text-xs sm:text-sm uppercase tracking-[0.35em] text-primary-glow">
          Long-Form
        </h2>
        <div className="mt-8 flex flex-col gap-8 sm:gap-10">
          {longForm.map((v) => (
            <VideoCard
              key={v.youtubeId}
              {...v}
              onOpen={() => setActiveId(v.youtubeId)}
            />
          ))}
        </div>

        <div className="my-20 h-px bg-border/60" />

        <h2 className="reveal text-xs sm:text-sm uppercase tracking-[0.35em] text-primary-glow">
          Shorts
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
          {shorts.map((v) => (
            <VideoCard
              key={v.youtubeId}
              {...v}
              vertical
              onOpen={() => setActiveId(v.youtubeId)}
            />
          ))}
        </div>
      </div>

      {activeId && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-background/90 backdrop-blur-xl p-4 animate-fade-in"
          onClick={() => setActiveId(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl aspect-video overflow-hidden rounded-2xl border border-border bg-card animate-fade-up"
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
              src={`https://www.youtube.com/embed/${activeId}?rel=0`}
              title="Project video"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
