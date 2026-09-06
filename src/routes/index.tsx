import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useReveal } from "@/hooks/use-reveal";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lucas Gabriel | Video Editor" },
      {
        name: "description",
        content:
          "Professional YouTube Video Editor specializing in engaging long-form and short-form content that keeps audiences watching.",
      },
      { property: "og:title", content: "Lucas Gabriel | Video Editor" },
      {
        property: "og:description",
        content:
          "Professional YouTube Video Editor specializing in engaging long-form and short-form content that keeps audiences watching.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Lucas Gabriel | Video Editor" },
      {
        name: "twitter:description",
        content:
          "Professional YouTube Video Editor specializing in engaging long-form and short-form content that keeps audiences watching.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Lucas Gabriel",
          jobTitle: "Freelance YouTube Video Editor",
          description:
            "Professional YouTube Video Editor specializing in engaging long-form and short-form content.",
          sameAs: [
            "https://instagram.com/lucasgabriel.txr",
            "https://x.com/lucasgabriel_ve",
            "https://ytjobs.co/talent/profile/583654",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <main className="flex flex-col gap-6 py-6 sm:gap-8 sm:py-8">
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
