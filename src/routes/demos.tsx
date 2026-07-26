import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/demos")({
  head: () => ({
    meta: [
      { title: "Feature Demos — AE Optimizer" },
      {
        name: "description",
        content:
          "Watch a walkthrough for every AE Optimizer feature — profiles, FAQs, unanswered Q&As, help articles, keyword expansion, and AI-crawlable publishing.",
      },
      { property: "og:title", content: "Feature Demos — AE Optimizer" },
      {
        property: "og:description",
        content:
          "A short video for each AE Optimizer feature so you can see exactly how it works before you buy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DemosPage,
});

type Demo = {
  title: string;
  description: string;
  youtubeId?: string;
};

const DEMOS: Demo[] = [
  {
    title: "Create a Profile",
    description:
      "Walks you through how to create and edit a business profile.",
  },
  {
    title: "Generate FAQs",
    description:
      "Walks you through how to generate FAQs and add custom topics.",
  },
  {
    title: "Unanswered Q&As",
    description:
      "Walks you through how to generate unanswered Q&As that qualify for Google's AI Overviews & snippets.",
  },
  {
    title: "Help Articles",
    description:
      "Walks you through how to generate help articles based on services or custom services or topics.",
  },
  {
    title: "Keyword Expansion",
    description:
      "Walks you through how to generate additional keywords that have less than 10 competitors to generate content for that will rank.",
  },
  {
    title: "AI Crawlable Website",
    description:
      "Walks you through how to publish content on GitHub Pages to create an AI crawlable (yet human readable) website.",
  },
];

function DemosPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link to="/" className="font-display text-xl font-semibold text-foreground">
            AE Optimizer
          </Link>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-[color:var(--brand-blue)]">Home</Link>
            <Link to="/articles" className="hover:text-[color:var(--brand-blue)]">Blog</Link>
            <Link to="/agencies" className="hover:text-[color:var(--brand-blue)]">Agencies</Link>
          </nav>
        </div>
      </header>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-[color:var(--gold)]">
            Feature walkthroughs
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold text-foreground md:text-5xl">
            A demo walkthrough for each feature.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Short, focused walkthrough videos of each of the main features so you can see exactly how each part of AE Optimizer works and how simple it is before you sign up.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          {DEMOS.map((demo) => (
            <article
              key={demo.title}
              className="overflow-hidden rounded-2xl border border-border bg-[color:var(--surface)] shadow-elevated"
            >
              <div className="aspect-video bg-black/40">
                {demo.youtubeId ? (
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${demo.youtubeId}`}
                    title={demo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-center">
                    <span className="text-xs font-medium uppercase tracking-widest text-[color:var(--gold)]">
                      Video coming soon
                    </span>
                    <span className="font-display text-xl text-foreground/80">{demo.title}</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl font-semibold text-foreground">{demo.title}</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">{demo.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl px-6 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-blue)] px-6 py-3 text-sm font-medium text-white shadow-elevated transition hover:opacity-90"
          >
            Get AE Optimizer Now →
          </Link>
        </div>
      </section>
    </main>
  );
}
