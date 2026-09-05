export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="reveal text-3xl sm:text-4xl font-semibold tracking-tight text-gradient">
          About Me
        </h2>
        <p className="reveal mt-6 text-lg leading-relaxed text-muted-foreground">
          I&apos;m 19 years old and I&apos;ve been working with video editing
          for 3 years. I specialize in creating engaging and satisfying videos
          for YouTube and social media.
        </p>

        {/* Reserved space for future YouTube channel artwork */}
        <div
          aria-hidden
          className="reveal mt-16 h-48 sm:h-64 rounded-3xl border border-dashed border-border/50"
        />
      </div>
    </section>
  );
}
