import profileImg from "@/assets/lucas-profile.png";

export function Hero() {
  const scrollToPortfolio = () => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="top" className="relative px-6">
      <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-center overflow-hidden rounded-3xl border border-border bg-card/40 px-6 py-20 text-center sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, oklch(0.55 0.24 295 / 0.22), transparent 62%)",
          }}
        />

        <div className="animate-fade-up relative">
          <div className="relative mx-auto h-32 w-32 sm:h-40 sm:w-40">
            <img
              src={profileImg}
              alt="Lucas, video editor"
              width={800}
              height={800}
              decoding="async"
              className="h-full w-full rounded-full object-cover object-[50%_25%] ring-1 ring-border"
            />
            <span
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-full bg-primary/25 blur-2xl"
            />
          </div>

          <h1 className="mt-8 text-5xl sm:text-6xl font-semibold tracking-tight text-gradient">
            Lucas
          </h1>
          <p className="mt-3 text-sm sm:text-base uppercase tracking-[0.35em] text-muted-foreground">
            Video Editor
          </p>

          <button
            onClick={scrollToPortfolio}
            className="mt-10 inline-flex items-center rounded-full bg-primary px-9 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-glow hover:-translate-y-0.5 hover:shadow-[0_0_45px_-8px_oklch(0.55_0.24_295/0.9)]"
          >
            Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
