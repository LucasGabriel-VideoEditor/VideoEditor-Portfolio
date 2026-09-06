import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";

type Project = {
  title: string;
  category: string;
  /** YouTube video ID, or a PLACEHOLDER_* string until the real link is added */
  youtubeId: string;
};

const longFormProjects: Project[] = [
  {
    title: "Animal Kingdom Curiosities",
    category: "Long-Form",
    youtubeId: "eEXvcyshI4E",
  },
  { title: "Reaction Video", category: "Long-Form", youtubeId: "-c9M71Nj90U" },
];

const shortProjects: Project[] = [
  { title: "Best CoC Equipment", category: "Short", youtubeId: "jq_GoJOR92Q" },
  { title: "Anime Reaction", category: "Short", youtubeId: "xdXzohF0Fyc" },
  { title: '"See What?"', category: "Short", youtubeId: "sSZvyPjR26s" },
  { title: "Minecraft Challenge", category: "Short", youtubeId: "9SO7dsPN1Kg" },
];

const isPlaceholder = (id: string) => id.startsWith("PLACEHOLDER_");

function VideoCard({
  title,
  youtubeId,
  vertical,
  onOpen,
}: {
  title: string;
  youtubeId: string;
  vertical?: boolean;
  onOpen: (p: { title: string; youtubeId: string }) => void;
}) {
  const ratio = vertical ? "aspect-[9/16]" : "aspect-video";

  if (isPlaceholder(youtubeId)) {
    return (
      <div
        className={`reveal relative w-full overflow-hidden rounded-2xl border border-dashed border-border bg-secondary/20 ${ratio}`}
      >
        <span className="absolute inset-0 grid place-items-center px-4 text-center text-xs sm:text-sm text-muted-foreground">
          {title} — coming soon
        </span>
      </div>
    );
  }

  return (
    <button
      onClick={() => onOpen({ title, youtubeId })}
      aria-label={`Play ${title}`}
      className={`reveal group relative block w-full overflow-hidden rounded-2xl bg-secondary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_60px_-14px_oklch(0.55_0.24_295/0.8)] ${ratio}`}
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

function VideoModal({
  project,
  onClose,
}: {
  project: { title: string; youtubeId: string };
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
      className="animate-fade-in fixed inset-0 z-50 grid place-items-center bg-background/85 px-4 py-10 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl"
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-12 right-0 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
        >
          <X className="size-4" />
          Close
        </button>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-secondary/30">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0&autoplay=1`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  const [active, setActive] = useState<{
    title: string;
    youtubeId: string;
  } | null>(null);

  return (
    <section id="portfolio" className="relative px-6 scroll-mt-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 sm:gap-8">
        <div className="rounded-3xl border border-border bg-card/40 p-6 sm:p-8">
          <h2 className="reveal text-xs sm:text-sm uppercase tracking-[0.35em] text-primary-glow">
            Long-Form
          </h2>
          <div className="mt-8 flex flex-col gap-8">
            {longFormProjects.map((v) => (
              <VideoCard
                key={v.title}
                title={v.title}
                youtubeId={v.youtubeId}
                onOpen={setActive}
              />
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card/40 p-6 sm:p-8">
          <h2 className="reveal text-xs sm:text-sm uppercase tracking-[0.35em] text-primary-glow">
            Shorts
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
            {shortProjects.map((v) => (
              <VideoCard
                key={v.title}
                title={v.title}
                youtubeId={v.youtubeId}
                vertical
                onOpen={setActive}
              />
            ))}
          </div>
        </div>
      </div>

      {active && (
        <VideoModal project={active} onClose={() => setActive(null)} />
      )}
    </section>
  );
}
