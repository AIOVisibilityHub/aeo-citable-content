import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import aeLogo from "@/assets/ae-logo-blue.png.asset.json";

const ASSET_HOST = "https://project--513f83bc-18cb-41a3-9de7-a0f1ae74bd9c.lovable.app";
const aeLogoUrl = aeLogo.url.startsWith("/__l5e/") ? `${ASSET_HOST}${aeLogo.url}` : aeLogo.url;

export const Route = createFileRoute("/agencies")({
  head: () => ({
    meta: [
      { title: "AE Optimizer for Agencies — Wholesale AEO Pricing & White-Label AI Visibility" },
      {
        name: "description",
        content:
          "Turn AI visibility into a new agency revenue stream. Wholesale AEO pricing, white-label Data Citadels, and production-scale generation for 10–250 clients.",
      },
      { property: "og:title", content: "AE Optimizer for Agencies — Wholesale AEO Pricing" },
      {
        property: "og:description",
        content:
          "Help your clients show up in Google AI Overviews, ChatGPT, and Perplexity. Agency seats with maximum generation capacity, 12-node Authority Network, and 90% margins.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://aeoptimizer.com/agencies" }],
  }),
  component: AgenciesPage,
});

type Tier = {
  name: string;
  price: string;
  capacity: string;
  perClient?: string;
  url: string;
  featured?: boolean;
};

const MOMENTUM_TIERS: Tier[] = [
  { name: "Network 10", price: "$497", capacity: "Up to 10 Clients", perClient: "$49.70 / client", url: "https://buy.stripe.com/5kQaEX7tjdatgevaq7cs80E" },
  { name: "Network 25", price: "$997", capacity: "Up to 25 Clients", perClient: "$39.88 / client", url: "https://buy.stripe.com/8x2dR93d31rLd2j69Rcs80F" },
  { name: "Network 50", price: "$1,747", capacity: "Up to 50 Clients", perClient: "$34.94 / client", url: "https://buy.stripe.com/5kQ3cv00Rb2l6DV2XFcs80G", featured: true },
  { name: "Network 100", price: "$2,997", capacity: "Up to 100 Clients", perClient: "$29.97 / client", url: "https://buy.stripe.com/cNiaEX4h7eex5zRcyfcs80H" },
  { name: "Network 250", price: "$5,997", capacity: "Up to 250 Clients", perClient: "$23.98 / client", url: "https://buy.stripe.com/eVqaEXeVL1rL8M3gOvcs80I" },
];

const OWNERSHIP_TIERS: Tier[] = [
  { name: "Network 10", price: "$997", capacity: "Up to 10 Clients", url: "https://buy.stripe.com/7sYbJ17tj0nH1jB41Jcs80h" },
  { name: "Network 25", price: "$2,497", capacity: "Up to 25 Clients", url: "https://buy.stripe.com/8x2eVd00R7Q9bYf8hZcs80o" },
  { name: "Network 50", price: "$4,997", capacity: "Up to 50 Clients", url: "https://buy.stripe.com/bJeeVdcNDgmF1jB55Ncs80m", featured: true },
  { name: "Network 100", price: "$9,997", capacity: "Up to 100 Clients", url: "https://buy.stripe.com/7sY14n6pfdat5zR9m3cs80n" },
  { name: "Network 250", price: "$24,997", capacity: "Up to 250 Clients", url: "https://buy.stripe.com/4gM4gzaFv3zT8M3cyfcs80D" },
];

const PILLARS = [
  {
    n: "01",
    title: "We Build Trust Infrastructure, Not Just Rankings",
    body: "Most AEO agencies still chase keywords and backlinks. AE Optimizer builds Data Citadels — a network of high-trust AI citations that positions your business as the canonical authority in your market. You aren’t renting visibility; you’re building infrastructure that makes AI engines trust your business first.",
    aside:
      "A Data Citadel is your business’s AI trust stack — a tightly organized network of pages, files, and signals that makes your agency look like the clearest, most reliable source in the market.",
  },
  {
    n: "02",
    title: "We Generate Assets, Not Just Reports",
    body: "Traditional AEO tools observe and report. They tell you what happened, but they don’t produce the files that influence what happens next. AE Optimizer generates the actual structured data, FAQ content, knowledge pages, and AI-friendly site files that make your business easier to interpret, cite, and recommend.",
    aside:
      "Instead of handing you a dashboard full of charts, we give you a system that produces the actual content and signals AI engines can use. You’re not just watching the market change — you’re helping shape the data AI sees.",
  },
  {
    n: "03",
    title: "We Build Recurring Revenue, Not One-Time Audits",
    body: "Most AEO agencies sell audits that end at delivery. AE Optimizer is a monthly production engine — 300 FAQ schemas, 100 Help Articles, and ongoing AI Overview research every single month. That means your business gets predictable, repeatable deliverables that turn AI visibility into a true revenue stream.",
    aside:
      "That’s what lets your business package AI visibility as a premium monthly offer, deliver measurable output, and grow on recurring revenue instead of one-off projects.",
  },
  {
    n: "04",
    title: "We Give You Margins, Not Just Tool Access",
    body: "Most AEO agencies charge $3,000–$5,000/month retainers and still outsource the work. AE Optimizer gives you wholesale production capacity at a fraction of the cost — so your business keeps the margin, owns the deliverables, and controls the customer relationship.",
    aside:
      "That’s the difference between selling someone else’s labor and owning a profit-generating system inside your own agency.",
  },
];

const AGENCY_FAQS = [
  {
    q: "Is this White-Label?",
    a: "Yes. You manage the software and provide the reports to your customers. The data mirror on GitHub and other repos refers to your business as the Source of Truth, not us. You own the relationship and the monthly revenue.",
  },
  {
    q: "Do you manage the software for us?",
    a: "No. This is a DIY technical engine. Your team enters the customer’s URL, chooses the topics, and clicks Generate. We handle the complex schema coding, GitHub mirroring, and AI research — you handle the customer relationship.",
  },
  {
    q: "Why GitHub?",
    a: "GitHub is a Data Citadel — one of the most trusted datasets in the world for AI training. By mirroring your business’s data and publishing an AI-crawlable website on GitHub Pages, with schema files stored in a crawlable GitHub repository, you place your business in the VIP lane for AI discovery.",
  },
  {
    q: "What happens if a customer cancels?",
    a: "You can swap that seat to a new customer immediately. The Data Citadel we built for the previous customer remains theirs as a gesture of high-trust, but new content generation stops. We recommend not deleting a profile until you are sure the customer isn’t coming back — or until you’re ready to replace them with another business.",
  },
];

function AgenciesPage() {
  const [plan, setPlan] = useState<"momentum" | "ownership">("momentum");
  const tiers = plan === "momentum" ? MOMENTUM_TIERS : OWNERSHIP_TIERS;

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={aeLogoUrl} alt="AE Optimizer" width={32} height={32} className="h-8 w-8 object-contain" />
            <span className="font-display text-lg font-semibold tracking-tight text-[color:var(--ink)]">AE Optimizer</span>
          </Link>
          <nav className="hidden gap-8 text-sm font-medium text-[color:var(--ink)]/70 md:flex">
            <Link to="/" className="hover:text-[color:var(--brand-blue)]">Home</Link>
            <Link to="/articles" className="hover:text-[color:var(--brand-blue)]">Blog</Link>
            <Link to="/agencies" className="hover:text-[color:var(--brand-blue)]">Agencies</Link>
            <a href="#agency-pricing" className="hover:text-[color:var(--brand-blue)]">Pricing</a>
          </nav>
          <a
            href="#agency-pricing"
            className="inline-flex items-center gap-2 rounded-md bg-[color:var(--brand-blue)] px-4 py-2 text-sm font-semibold text-[color:var(--cream)] transition hover:bg-[color:var(--brand-blue-light)]"
          >
            See tiers <span aria-hidden>→</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-14 md:pb-24 md:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full border border-[color:var(--brand-blue)]/30 bg-[color:var(--brand-blue)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-blue)]">
              For Agencies
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-[color:var(--ink)] md:text-6xl">
              Turn AI Visibility Into a New Agency Revenue Stream
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--ink)]/75 md:text-xl">
              Help your business show up in Google AI Overviews, ChatGPT, and Perplexity with a system built to improve
              citations, authority signals, and AI-ready content structure.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--ink)]/70 md:text-lg">
              AE Optimizer helps your agency build the technical infrastructure your business needs — with machine-readable
              content, structured citations, and repeatable monthly output.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#agency-pricing"
                className="inline-flex items-center gap-2 rounded-md bg-[color:var(--brand-blue)] px-6 py-3 text-base font-semibold text-[color:var(--cream)] shadow-lg transition hover:bg-[color:var(--brand-blue-light)]"
              >
                See wholesale tiers <span aria-hidden>→</span>
              </a>
              <a
                href="#pillars"
                className="inline-flex items-center gap-2 rounded-md border border-[color:var(--ink)]/20 bg-[color:var(--cream)]/60 px-6 py-3 text-base font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--brand-blue)]"
              >
                How it works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="border-y border-border/50 bg-[color:var(--ink-soft)]/40 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[color:var(--ink)] md:text-3xl">The Problem</h2>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--ink)]/75">
              Traditional SEO is losing visible territory to AI answers. If your business still relies only on keywords
              and backlinks, you’re solving yesterday’s problem. When Google AI Overviews take up the entire “above the
              fold,” your business’s organic clicks disappear. Meanwhile, your prospects are already asking:{" "}
              <em className="text-[color:var(--ink)]">“How do we show up in ChatGPT?”</em>
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-[color:var(--ink)] md:text-3xl">
              The Solution: Active AEO Infrastructure
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--ink)]/75">
              AE Optimizer gives your business an active AI visibility system, not a passive dashboard. Instead of just
              monitoring mentions, you generate the files, citations, and content structures AI engines can actually
              read. Every agency seat includes super-powered generation capacity for your fulfillment — a premium
              service with low overhead and strong margins.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section id="pillars" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold text-[color:var(--ink)] md:text-4xl">
              How AE Optimizer is different from other AEO agencies
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {PILLARS.map((p) => (
              <article
                key={p.n}
                className="rounded-2xl border border-border/60 bg-[color:var(--surface-elevated)]/60 p-8"
              >
                <div className="text-xs font-semibold tracking-widest text-[color:var(--brand-blue)]">{p.n}</div>
                <h3 className="mt-3 font-display text-xl font-semibold text-[color:var(--ink)] md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-4 text-[color:var(--ink)]/75 leading-relaxed">{p.body}</p>
                <p className="mt-4 border-l-2 border-[color:var(--brand-blue)]/40 pl-4 text-sm italic text-[color:var(--ink)]/70">
                  {p.aside}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Arbitrage */}
      <section className="border-y border-border/50 bg-[color:var(--ink-soft)]/40 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-3xl font-semibold text-[color:var(--ink)] md:text-4xl">
            The Arbitrage: High Margin, Zero Overhead
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[color:var(--ink)]/75 leading-relaxed">
            AE Optimizer was built to be a profit multiplier for your agency. By automating the technical grunt work of
            AEO, you can charge high-ticket retainers with nearly 90% margins (depending on your pricing).
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { label: "Your Monthly Cost", value: "~$50", sub: "per client or less" },
              { label: "Your MSRP", value: "$299 – $500", sub: "per client / month" },
              { label: "Your Profit", value: "$250 – $450", sub: "per client / month" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-border/60 bg-[color:var(--surface-elevated)]/60 p-6">
                <div className="text-xs uppercase tracking-widest text-[color:var(--ink)]/60">{s.label}</div>
                <div className="mt-2 font-display text-3xl font-semibold text-[color:var(--brand-blue)]">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-[color:var(--ink)]/70">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="agency-pricing" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold text-[color:var(--ink)] md:text-4xl">
              Choose Your Path: Ownership vs. Momentum
            </h2>
            <p className="mt-4 text-[color:var(--ink)]/75">
              Scale your agency’s AI department on your own terms. Pick the Ownership Plan to pay once and own the
              infrastructure, or the Momentum Plan for monthly credit refreshes and ongoing growth. All tiers include
              300 FAQs / 100 Help Articles per client per month and the full 12-Node Authority Network.
            </p>
          </div>

          {/* Tabs */}
          <div className="mx-auto mt-10 flex w-full max-w-md items-center rounded-full border border-border/60 bg-[color:var(--surface-elevated)]/60 p-1">
            {(["momentum", "ownership"] as const).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setPlan(k)}
                className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  plan === k
                    ? "bg-[color:var(--brand-blue)] text-[color:var(--cream)]"
                    : "text-[color:var(--ink)]/70 hover:text-[color:var(--ink)]"
                }`}
              >
                {k === "momentum" ? "Momentum (Monthly)" : "Ownership (One-Time)"}
              </button>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-[color:var(--ink)]/70">
            {plan === "momentum"
              ? "Best for agencies scaling fast who want a fresh batch of 300 FAQs / 100 Articles per client every single month."
              : "Best for established agencies who want to buy the asset outright and pay only for occasional top-ups as needed."}
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`flex flex-col rounded-2xl border p-6 ${
                  t.featured
                    ? "border-transparent bg-[color:var(--brand-blue)] text-[color:var(--cream)] shadow-xl"
                    : "border-border/60 bg-[color:var(--surface-elevated)]/60 text-[color:var(--ink)]"
                }`}
              >
                <div
                  className={`text-xs uppercase tracking-widest ${
                    t.featured ? "text-[color:var(--cream)]/80" : "text-[color:var(--ink)]/60"
                  }`}
                >
                  {t.name}
                </div>
                <div className="mt-3 font-display text-3xl font-semibold">{t.price}</div>
                <div
                  className={`mt-1 text-sm ${
                    t.featured ? "text-[color:var(--cream)]/80" : "text-[color:var(--ink)]/70"
                  }`}
                >
                  {plan === "momentum" ? "per month" : "one-time"}
                </div>
                <div
                  className={`mt-4 text-sm ${
                    t.featured ? "text-[color:var(--cream)]/90" : "text-[color:var(--ink)]/75"
                  }`}
                >
                  {t.capacity}
                </div>
                {t.perClient && (
                  <div
                    className={`mt-1 text-xs ${
                      t.featured ? "text-[color:var(--cream)]/70" : "text-[color:var(--ink)]/60"
                    }`}
                  >
                    {t.perClient}
                  </div>
                )}
                <a
                  href={t.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-auto inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition ${
                    t.featured
                      ? "bg-[color:var(--cream)] text-[color:var(--brand-blue)] hover:brightness-95"
                      : "bg-[color:var(--brand-blue)] text-[color:var(--cream)] hover:bg-[color:var(--brand-blue-light)]"
                  }`}
                >
                  <span className="mt-6 block w-full text-center">
                    {plan === "momentum" ? "Start" : "Buy"} {t.name} <span aria-hidden>→</span>
                  </span>
                </a>
              </div>
            ))}
          </div>

          {/* Every tier includes */}
          <div className="mx-auto mt-14 max-w-6xl rounded-3xl border border-border/60 bg-[color:var(--surface-elevated)]/70 p-8 md:p-10">
            <div className="text-center">
              <span className="inline-flex items-center rounded-full border border-[color:var(--brand-blue)]/30 bg-[color:var(--brand-blue)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-blue)]">
                Every Tier Includes
              </span>
              <h3 className="mt-4 font-display text-2xl md:text-3xl font-semibold text-[color:var(--ink)]">
                One toolkit. Every client. No feature gating.
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-[color:var(--ink)]/70">
                Whether you run 10 clients or 250, every seat in every tier gets the full production engine and the
                full Authority Network. You scale capacity, not capability.
              </p>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {/* Per-client monthly capacity */}
              <div className="rounded-2xl border border-border/60 bg-background/60 p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-blue)]">
                  Per-Client Monthly Capacity
                </div>
                <ul className="mt-4 space-y-2 text-sm text-[color:var(--ink)]/85">
                  <li>• 300 FAQ schema files / month</li>
                  <li>• 100 Help Article schema files / month</li>
                  <li>• 100 Unanswered AI Overviews Q&A files / month</li>
                  <li>• 100 People Also Ask research files / month</li>
                  <li>• Crawl unlimited pages on your client’s site</li>
                </ul>
              </div>

              {/* Authority network */}
              <div className="rounded-2xl border border-border/60 bg-background/60 p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-blue)]">
                  Full AI Authority Network
                </div>
                <p className="mt-4 text-sm text-[color:var(--ink)]/85">
                  Automated mirroring across every node — no add-ons, no upsells:
                </p>
                <p className="mt-3 text-sm text-[color:var(--ink)]/75">
                  GitHub (code) · GitHub Pages (AI-crawlable website) · Google-owned Kaggle · GitLab · Hugging Face ·
                  Codeberg · Sourcehut · Gitea · Zenodo · Internet Archive · Forgejo · OSF · Archive.org
                </p>
              </div>

              {/* Generation & schema */}
              <div className="rounded-2xl border border-border/60 bg-background/60 p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-blue)]">
                  Generation & Schema
                </div>
                <ul className="mt-4 space-y-2 text-sm text-[color:var(--ink)]/85">
                  <li>• Website AI visibility files for the root directory</li>
                  <li>• Per-page code with breadcrumbs & Speakable schema (for Voice Search)</li>
                  <li>• Instant HTML Accordion web pages (FAQs / Help Articles)</li>
                  <li>• Research Unanswered AI Overviews Q&As + People Also Ask</li>
                  <li>• Source-backed research + stat-based content</li>
                  <li>• High-intent transactional keyword research</li>
                </ul>
              </div>

              {/* Intelligence & support */}
              <div className="rounded-2xl border border-border/60 bg-background/60 p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-blue)]">
                  Intelligence & Support
                </div>
                <ul className="mt-4 space-y-2 text-sm text-[color:var(--ink)]/85">
                  <li>• Choose from Perplexity Sonar or Sonar Reasoning Pro API</li>
                  <li>• 15-tool Authority Suite (trust, expertise, competitor gap analysis)</li>
                  <li>• Missed opportunities + visibility gap analysis</li>
                  <li>• Assistance uploading website AI visibility files, if needed</li>
                  <li>• Human support via email, video instructions & phone when you need it</li>
                </ul>
              </div>
            </div>

            <ul className="mx-auto mt-8 max-w-3xl space-y-2 text-center text-sm text-[color:var(--ink)]/70">
              <li>Top-up credits and monthly refresh options available.</li>
              <li>See upgrade options inside the app.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Authority Network */}
      <section className="border-y border-border/50 bg-[color:var(--ink-soft)]/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-[color:var(--brand-blue)]/30 bg-[color:var(--brand-blue)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-blue)]">
              The core of the offer
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[color:var(--ink)] md:text-5xl">
              The AI Authority Network: 12 Nodes of Global Trust
            </h2>
            <p className="mt-5 text-lg text-[color:var(--ink)]/80 leading-relaxed">
              We don’t just hope AI finds your business. We put your data where AI already lives — mirroring your
              business entity across the exact platforms ChatGPT, Gemini, Claude, Perplexity, and Grok were trained on
              and continue to crawl for “the truth.”
            </p>
          </div>

          {/* The Why */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                h: "AI models were trained on GitHub",
                b: "ChatGPT, Gemini, and Claude were built on top of GitHub. It’s one of the cleanest, most trusted, most heavily crawled datasets in the world. Publishing your business’s facts there puts you inside the training-grade data layer — not outside it hoping to be noticed.",
              },
              {
                h: "Canonical authority transfer",
                b: "A local business website usually has low domain authority. We mirror your business data across high-trust Data Citadels and canonical-tag every mirror back to your real website. AI systems treat the mirror as validation and credit your business’s site as the Source of Truth.",
              },
              {
                h: "Bypassing technical blockers",
                b: "Many businesses live on Squarespace, Wix, GoDaddy, or locked CMSs that won’t let you upload AI root files or custom schema. GitHub Pages becomes an AI-crawlable satellite site for your business — the bots find the structured data on a high-trust server, then follow the canonical link straight back to you.",
              },
            ].map((c) => (
              <div key={c.h} className="rounded-2xl border border-border/60 bg-[color:var(--surface-elevated)]/70 p-6">
                <h3 className="font-display text-lg font-semibold text-[color:var(--ink)] md:text-xl">{c.h}</h3>
                <p className="mt-3 text-[color:var(--ink)]/75 leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>

          {/* Instant Trust Transfer */}
          <div className="mt-14 rounded-2xl border border-[color:var(--brand-blue)]/25 bg-[color:var(--brand-blue)]/[0.06] p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.1fr_1fr]">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-blue)]">
                  Instant Trust Transfer
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold text-[color:var(--ink)] md:text-3xl">
                  Why we mirror your business on high-trust Data Citadels
                </h3>
                <p className="mt-4 text-[color:var(--ink)]/80 leading-relaxed">
                  AI systems trust developer and research platforms — GitHub, Kaggle, Hugging Face, the Internet Archive
                  — far more than they trust a 5-page WordPress site with a stock theme. We mirror your business’s data
                  there to force AI systems to validate and cite you as the local authority.
                </p>
                <p className="mt-4 text-[color:var(--ink)]/80 leading-relaxed">
                  Because every mirror uses <strong>Canonical Tags</strong> pointing back to your business’s website, the
                  AI sees the GitHub / Kaggle / Archive data, trusts it immediately, and gives all the credit and
                  citations to your main site. It’s a VIP pass to the front of the AI crawling line.
                </p>
              </div>
              <div className="rounded-xl border border-[color:var(--brand-blue)]/25 bg-[color:var(--cream)]/60 p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-blue)]">
                  How to phrase it to the agency owner
                </div>
                <blockquote className="mt-3 border-l-2 border-[color:var(--brand-blue)]/60 pl-4 text-[color:var(--ink)]/85 italic leading-relaxed">
                  “Most small business websites are invisible to AI because they’re buried behind bad code or slow
                  servers. AI doesn’t want to dig. We take your business facts and mirror them onto GitHub — a platform
                  ChatGPT and Gemini treat as a Data Citadel — and canonical-tag everything back to your site. The AI
                  sees the GitHub data, trusts it immediately, and gives all the citation credit to your business. It’s
                  a VIP pass to the front of the AI crawling line.”
                </blockquote>
              </div>
            </div>
          </div>

          {/* 12 Nodes */}
          <div className="mt-14">
            <h3 className="font-display text-2xl font-semibold text-[color:var(--ink)] md:text-3xl">
              The 12 nodes, and what each one does for your business
            </h3>
            <p className="mt-3 max-w-3xl text-[color:var(--ink)]/75 leading-relaxed">
              Every agency tier includes automated mirroring across the full network. Each node plays a specific role in
              the Citation Loop — and every node canonical-tags back to your business’s website as the Source of Truth.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { h: "GitHub", b: "The primary AI training ground. The core Data Citadel for LLM trust." },
                { h: "GitHub Pages", b: "AI-crawlable satellite site — bypasses Wix/Squarespace/GoDaddy limitations." },
                { h: "Kaggle", b: "Google-owned data platform. Signals structured, dataset-grade authority." },
                { h: "Hugging Face", b: "The dataset hub of the modern AI ecosystem. Deep LLM crawl footprint." },
                { h: "GitLab", b: "Second-largest developer platform. Broadens the trust surface beyond GitHub." },
                { h: "Codeberg", b: "European open-source repo. Adds regional and Fediverse trust signals." },
                { h: "Sourcehut", b: "Minimalist, heavily indexed developer repo trusted by AI crawlers." },
                { h: "Gitea", b: "Federated Git host — extends your business’s footprint across the open web." },
                { h: "Internet Archive", b: "Permanent, timestamped snapshots. Anchors your business’s facts in history." },
                { h: "Archive.org data", b: "Structured data endpoints AI models pull from for grounded answers." },
                { h: "Zenodo (CERN)", b: "Research-grade DOI publishing. Academic-tier trust for your business’s data." },
                { h: "OSF + Forgejo", b: "Open Science Framework + Forgejo — research and federated Git citadels." },
              ].map((n) => (
                <div key={n.h} className="rounded-xl border border-border/60 bg-[color:var(--surface-elevated)]/70 p-5">
                  <div className="font-display text-lg font-semibold text-[color:var(--ink)]">{n.h}</div>
                  <p className="mt-2 text-sm text-[color:var(--ink)]/75 leading-relaxed">{n.b}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Citation Loop */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "1",
                h: "Mirror",
                b: "Your business facts, services, locations, FAQs, and structured data get published across all 12 nodes.",
              },
              {
                n: "2",
                h: "Canonical",
                b: "Every node points back to your real website with canonical tags — the mirror is validation, the site is the source.",
              },
              {
                n: "3",
                h: "Cite",
                b: "AI systems crawl the citadels, confirm the facts match, and start recommending and citing your business’s website as the authority.",
              },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-border/60 bg-[color:var(--surface-elevated)]/70 p-6">
                <div className="font-display text-4xl font-semibold text-[color:var(--brand-blue)]">{s.n}</div>
                <div className="mt-2 font-display text-xl font-semibold text-[color:var(--ink)]">{s.h}</div>
                <p className="mt-2 text-[color:var(--ink)]/75 leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-[color:var(--ink)]/75 leading-relaxed">
            That’s the Citation Loop: 12 high-trust nodes, one Source of Truth, and an AI ecosystem that finds it
            impossible to ignore your business.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center font-display text-3xl font-semibold text-[color:var(--ink)] md:text-4xl">
            Agency FAQs
          </h2>
          <div className="mt-10 space-y-4">
            {AGENCY_FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-border/60 bg-[color:var(--surface-elevated)]/60 p-5"
              >
                <summary className="cursor-pointer list-none font-display text-lg font-semibold text-[color:var(--ink)]">
                  {f.q}
                </summary>
                <p className="mt-3 text-[color:var(--ink)]/75 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl font-semibold text-[color:var(--ink)] md:text-4xl">
            Ready to dominate the AI search landscape for your clients?
          </h2>
          <p className="mt-4 text-[color:var(--ink)]/75">
            Join the agencies using AE Optimizer to turn AI disruption into their most profitable service line.
          </p>
          <a
            href="#agency-pricing"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[color:var(--brand-blue)] px-6 py-3 text-base font-semibold text-[color:var(--cream)] transition hover:bg-[color:var(--brand-blue-light)]"
          >
            Choose your tier <span aria-hidden>→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
