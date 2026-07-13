import { createFileRoute, Link } from "@tanstack/react-router";
import { ARTICLES, GUIDE_SLUG } from "@/lib/articles";

export const Route = createFileRoute("/articles/")({
  head: () => ({
    meta: [
      { title: "AEO Guides — Answer Engine Optimization Library" },
      {
        name: "description",
        content:
          "The complete AEO library: the AEO Tools for Websites Guide, fundamentals explainers (llms.txt, JSON-LD, schema, topical authority), and the 2026 AEO tool buyer's guide.",
      },
      { property: "og:title", content: "AEO Guides — Answer Engine Optimization Library" },
      {
        property: "og:description",
        content:
          "AEO Tools for Websites Guide, fundamentals explainers, and the 2026 AEO tool buyer's guide — all in plain English.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArticlesIndex,
});

function Card({ slug, title, description }: { slug: string; title: string; description: string }) {
  return (
    <Link
      to="/articles/$slug"
      params={{ slug }}
      className="rounded-xl border border-border bg-card p-6 transition hover:border-[color:var(--gold)]/60"
    >
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <span className="mt-3 inline-block text-sm font-medium text-[color:var(--gold)]">Read →</span>
    </Link>
  );
}

function ArticlesIndex() {
  const guide = ARTICLES.find((a) => a.slug === GUIDE_SLUG)!;
  const fundamentals = ARTICLES.filter((a) => a.kind === "fundamentals");
  const listicles = ARTICLES.filter((a) => a.kind === "listicle");

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to AE Optimizer
        </Link>
        <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">The AEO Library</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Plain-English guides to answer engine optimization: the AEO Tools for Websites Guide, fundamentals
          explainers, and a full 2026 buyer's guide to AEO and AI visibility tools.
        </p>

        <section className="mt-14">
          <p className="text-xs uppercase tracking-widest text-[color:var(--gold)] font-semibold">
            Start Here — AEO Tools for Websites Guide
          </p>
          <Link
            to="/articles/$slug"
            params={{ slug: guide.slug }}
            className="mt-3 block rounded-2xl border border-[color:var(--gold)]/40 bg-card p-8 transition hover:border-[color:var(--gold)]"
          >
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{guide.title}</h2>
            <p className="mt-3 text-muted-foreground">{guide.description}</p>
            <span className="mt-4 inline-block text-sm font-medium text-[color:var(--gold)]">
              Read the AEO Tools for Websites Guide →
            </span>
          </Link>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            AEO Fundamentals — Explainers
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            What llms.txt, JSON-LD, structured data, FAQ schema, topical authority, and GitHub Pages
            mirroring actually are — one concept per article.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {fundamentals.map((a) => (
              <Card key={a.slug} {...a} />
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            The AEO Buyer's Guide — 2026 Tool Comparisons
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Every AEO and AI visibility tool on the market, compared eight ways.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {listicles.map((a) => (
              <Card key={a.slug} {...a} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
