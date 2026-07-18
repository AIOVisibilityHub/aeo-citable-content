import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ARTICLES, GUIDE_SLUG, type Article } from "@/lib/articles";
import { Markdown } from "@/components/Markdown";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found — AE Optimizer" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { article } = loaderData;
    const url = `https://aeoptimizer.com/articles/${article.slug}`;
    return {
      meta: [
        { title: `${article.title} — AE Optimizer` },
        { name: "description", content: article.description },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.description,
            mainEntityOfPage: url,
            url,
            author: { "@type": "Organization", name: "AE Optimizer" },
            publisher: {
              "@type": "Organization",
              name: "AE Optimizer",
              logo: {
                "@type": "ImageObject",
                url: "https://aeoptimizer.com/logo.png",
              },
            },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-3xl font-bold">Article not found</h1>
      <Link to="/articles" className="mt-6 inline-block text-primary">Browse all articles →</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground">{String(error)}</p>
      <Link to="/articles" className="mt-6 inline-block text-primary">Back to articles →</Link>
    </div>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const isGuide = article.slug === GUIDE_SLUG;
  const guide = ARTICLES.find((a) => a.slug === GUIDE_SLUG)!;

  const sameKind: Article[] = ARTICLES.filter(
    (a) => a.slug !== article.slug && a.kind === article.kind && a.slug !== GUIDE_SLUG,
  );
  const otherKind: Article[] = ARTICLES.filter(
    (a) => a.slug !== article.slug && a.kind !== article.kind && a.slug !== GUIDE_SLUG,
  );
  const related = [...sameKind, ...otherKind].slice(0, 6);

  const kindLabel =
    article.kind === "aeo-tools-guide"
      ? "AEO Tools for Websites Guide"
      : article.kind === "fundamentals"
        ? "AEO Fundamentals"
        : "AEO Buyer's Guide";

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="flex gap-4 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground">← AE Optimizer</Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/articles" className="text-muted-foreground hover:text-foreground">Library</Link>
        </div>

        <article className="mt-8">
          <p className="text-xs uppercase tracking-widest text-[color:var(--gold)] font-semibold">
            {kindLabel}
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{article.description}</p>

          <div className="mt-10">
            <Markdown source={article.body} />
          </div>

          <div className="mt-12 rounded-2xl border border-[color:var(--gold)]/40 bg-card p-8 text-center">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
              See how AE Optimizer sets this up for your site
            </h3>
            <p className="mt-2 text-muted-foreground">
              A one-time $247 implementation that builds your AI visibility files, structured data, and
              AI-ready content — no subscription.
            </p>
            <Link
              to="/"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Explore AE Optimizer →
            </Link>
          </div>
        </article>

        {!isGuide && (
          <section className="mt-16 rounded-xl border border-border bg-card p-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              AEO Tools for Websites Guide
            </p>
            <Link to="/articles/$slug" params={{ slug: guide.slug }} className="mt-2 block">
              <h3 className="text-lg font-semibold text-foreground hover:text-[color:var(--gold)]">
                {guide.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{guide.description}</p>
            </Link>
          </section>
        )}

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">Keep reading</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {related.map((a) => (
              <Link
                key={a.slug}
                to="/articles/$slug"
                params={{ slug: a.slug }}
                className="rounded-xl border border-border bg-card p-5 transition hover:border-[color:var(--gold)]/60"
              >
                <h3 className="text-base font-semibold text-foreground">{a.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.description}</p>
              </Link>
            ))}
          </div>
          <Link to="/articles" className="mt-6 inline-block text-sm text-[color:var(--gold)]">
            See all articles →
          </Link>
        </section>
      </div>
    </div>
  );
}
