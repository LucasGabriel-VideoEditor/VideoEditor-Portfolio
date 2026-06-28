export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="reveal">
          <div className="text-xs uppercase tracking-[0.25em] text-primary-glow">
            About Me
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-balance text-gradient">
            Editing built around pacing, story and retention.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-10 text-lg leading-relaxed text-muted-foreground reveal">
          <p>
            I&apos;m <span className="text-foreground font-medium">Lucas Gabriel</span>, a
            freelance video editor focused on helping YouTube creators produce
            content that is clean, engaging and satisfying to watch.
          </p>
          <p>
            My editing style focuses on pacing, storytelling, visual clarity and
            viewer retention. Whether it&apos;s long-form YouTube videos or
            short-form content, my goal is always the same:{" "}
            <span className="text-foreground font-medium">
              make every second count.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
