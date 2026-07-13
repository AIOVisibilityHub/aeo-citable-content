import { createFileRoute, Link } from "@tanstack/react-router";
import { ARTICLES, PILLAR_SLUG } from "@/lib/articles";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "AEO & AI Visibility Tool Guides — AE Optimizer" },
      {
        name: "description",
        content:
          "Plain-English guides to answer engine optimization tools, pricing, and how to decide what to buy first for AI visibility.",
      },
      { property: "og:title", content: "AEO & AI Visibility Tool Guides — AE Optimizer" },
      {
        property: "og:description",
        content:
          "Plain-English guides to answer engine optimization tools, pricing, and how to decide what to buy first for AI visibility.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArticlesIndex,
});

function ArticlesIndex() {
  const pillar = ARTICLES.find((a) => a.slug === PILLAR_SLUG)!;
  const rest = ARTICLES.filter((a) => a.slug !== PILLAR_SLUG);
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← Back to AE Optimizer</Link>
        <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">The AEO Buyer's Guide</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          A plain-English series on answer engine optimization tools, 2026 pricing, and what to actually
          buy first if you want to show up in Google AI Overviews, ChatGPT, Perplexity, and the rest.
        </p>

        <section className="mt-14">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold">Start Here — Pillar Guide</p>
          <Link
            to="/articles/$slug"
            params={{ slug: pillar.slug }}
            className="mt-3 block rounded-2xl border border-border bg-card p-8 transition hover:border-primary/50"
          >
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{pillar.title}</h2>
            <p className="mt-3 text-muted-foreground">{pillar.description}</p>
            <span className="mt-4 inline-block text-sm font-medium text-primary">Read the pillar guide →</span>
          </Link>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Companion Articles</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {rest.map((a) => (
              <Link
                key={a.slug}
                to="/articles/$slug"
                params={{ slug: a.slug }}
                className="rounded-xl border border-border bg-card p-6 transition hover:border-primary/50"
              >
                <h3 className="text-lg font-semibold text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
                <span className="mt-3 inline-block text-sm font-medium text-primary">Read →</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
