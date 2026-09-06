import { useState } from "react";
import { Play } from "lucide-react";

type Project = {
  title: string;
  category: string;
  /** YouTube video ID, or a PLACEHOLDER_* string until the real link is added */
  youtubeId: string;
};

const PLACEHOLDER_LONGFORM_5 = "PLACEHOLDER_LONGFORM_5";
const PLACEHOLDER_LONGFORM_6 = "PLACEHOLDER_LONGFORM_6";
const PLACEHOLDER_SHORT_5 = "PLACEHOLDER_SHORT_5";

const longFormProjects: Project[] = [
  {
    title: "Animal Kingdom Curiosities",
    category: "Long-Form",
    youtubeId: "eEXvcyshI4E",
  },
  { title: "Reaction Video", category: "Long-Form", youtubeId: "-c9M71Nj90U" },
  {
    title: "Long-Form Video 5",
    category: "Long-Form",
    youtubeId: PLACEHOLDER_LONGFORM_5,
  },
  {
    title: "Long-Form Video 6",
    category: "Long-Form",
    youtubeId: PLACEHOLDER_LONGFORM_6,
  },
];

const shortProjects: Project[] = [
  { title: "Best CoC Equipment", category: "Short", youtubeId: "jq_GoJOR92Q" },
  { title: "Anime Reaction", category: "Short", youtubeId: "xdXzohF0Fyc" },
  { title: '"See What?"', category: "Short", youtubeId: "sSZvyPjR26s" },
  { title: "Short 5", category: "Short", youtubeId: PLACEHOLDER_SHORT_5 },
];

const isPlaceholder = (id: string) => id.startsWith("PLACEHOLDER_");

function VideoCard({
  title,
  youtubeId,
  vertical,
}: {
  title: string;
  youtubeId: string;
  vertical?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const ratio = vertical ? "aspect-[9/16]" : "aspect-video";

  if (isPlaceholder(youtubeId)) {
    return (
      <div
        className={`reveal relative w-full overflow-hidden rounded-2xl border border-dashed border-border/60 bg-secondary/20 ${ratio}`}
      >
        <span className="absolute inset-0 grid place-items-center px-4 text-center text-xs sm:text-sm text-muted-foreground">
          {title} — coming soon
        </span>
      </div>
    );
  }

  if (playing) {
    return (
      <div
        className={`reveal relative w-full overflow-hidden rounded-2xl bg-secondary/30 ${ratio}`}
      >
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0&autoplay=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
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

export function Portfolio() {
  return (
    <section id="portfolio" className="relative px-6 scroll-mt-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        <div className="rounded-3xl border border-border/60 bg-card/40 p-6 sm:p-8">
          <h2 className="reveal text-xs sm:text-sm uppercase tracking-[0.35em] text-primary-glow">
            Long-Form
          </h2>
          <div className="mt-8 flex flex-col gap-8">
            {longFormProjects.map((v) => (
              <VideoCard key={v.title} title={v.title} youtubeId={v.youtubeId} />
            ))}
          </div>
        </div>

        <div className="relative rounded-3xl border border-border/60 bg-card/40 p-6 sm:p-8">
          <span
            aria-hidden
            className="pointer-events-none absolute -left-4 top-8 bottom-8 hidden w-px bg-border/60 lg:block"
          />
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
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
