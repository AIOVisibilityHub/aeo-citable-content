import { createFileRoute, Link } from "@tanstack/react-router";
import aiDistribution from "@/assets/ai-distribution.png.asset.json";
import helpArticles from "@/assets/help-articles.png.asset.json";
import priceComparison from "@/assets/price-comparison.png.asset.json";
import entityRepos from "@/assets/entity-repos.png.asset.json";
import authoritySuite from "@/assets/authority-suite.png.asset.json";
import aeMark from "@/assets/ae-mark.png.asset.json";
import { ARTICLES } from "@/lib/articles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AE Optimizer — Answer Engine Optimization for Websites to Show Up in Google AI Overviews, ChatGPT, Perplexity & More" },
      {
        name: "description",
        content:
          "AE Optimizer builds the machine-readable layer your website needs to get picked up by Google AI Overviews, ChatGPT, Perplexity, Gemini, Grok, Claude and DeepSeek — plus organic search.",
      },
      { property: "og:title", content: "AE Optimizer — Answer Engine Optimization for Websites to Show Up in Google AI Overviews, ChatGPT, Perplexity & More" },
      {
        property: "og:description",
        content:
          "AE Optimizer builds the machine-readable layer your website needs for AI visibility to get picked up by Google AI Overviews and answer engines like ChatGPT, Perplexity, Gemini, Grok, Claude and DeepSeek — plus organic search.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const CONTENT_TYPES = [
  {
    tag: "01",
    title: "FAQs",
    body:
      "Commonly asked questions your prospects are searching for right now. Our research tool pulls additional and trending questions from People Also Ask, Quora, Reddit and more — then packages them as schema AI can actually parse.",
  },
  {
    tag: "02",
    title: "Competitive Question Gaps",
    body:
      "Powered by Perplexity Sonar Pro. We identify high-intent questions where competitors and industry sites are weak, generic, or silent — then fill the gap with concrete answers stored as TechArticle schema.",
  },
  {
    tag: "03",
    title: "Unanswered Q&As for AI Overviews",
    body:
      "Researched Q&A datasets targeting Google's Unanswered Questions. Uses Perplexity Sonar Reasoning Pro (multi-step) to surface specific gaps that qualify for Google AI Overviews and featured snippets.",
  },
  {
    tag: "04",
    title: "Help Articles",
    body:
      "Formatted to qualify for Google AI Overviews and to get cited across answer engines. Choose from Listicle, HowTo Process, Checklist, Comparison, Guide, Mistakes to Avoid, Timeline, Q&A, When to Call, Myths vs Facts — or add custom services and topics.",
    image: helpArticles.url,
    imageAlt: "AE Optimizer help article type selection interface",
  },
  {
    tag: "05",
    title: "Services + Cities Pages",
    body:
      "A dedicated page per service in each of your service-area cities. Focused main city, full service description, contact info and surrounding cities — so bots zoom in locally but understand your full footprint.",
  },
  {
    tag: "06",
    title: "Team Members Schema",
    body:
      "Builds out your organization for AI trust signals — each team member's expertise, contact and bio surfaced as structured data. Edit and save before publishing.",
  },
  {
    tag: "07",
    title: "Testimonials & Reviews",
    body:
      "Uses Perplexity to pull social proof from Google, Avvo, Yelp and beyond, then distributes it across your AI network so trust signals show up everywhere AI looks.",
  },
  {
    tag: "08",
    title: "Schema Webpages",
    body:
      "Full AI-optimized webpages built for distribution — service + city pages loaded with the depth AI systems consume when deciding who to recommend.",
  },
  {
    tag: "09",
    title: "HTML Accordion Pages",
    body:
      "Matches your brand colors and converts a zip of FAQ / Q&A / Help Article schemas into a ready-to-upload accordion page. Hundreds of schema files become a real page your human visitors can browse.",
  },
  {
    tag: "10",
    title: "Source-Backed Topic Research",
    body:
      "Perplexity Sonar Pro generates citation-backed research grounded in industry standards, regulations, studies and expert guidance — each stored as a TechArticle schema. Especially powerful for law firms and regulated industries.",
  },
  {
    tag: "11",
    title: "Keyword Recommendations",
    body:
      "High-intent keyword ideas for transactional or informational content — PPC, SEO, landing pages, campaigns. Click Generate repeatedly to grow the list; duplicates filter automatically.",
  },
  {
    tag: "12",
    title: "15-Tool Authority Suite",
    body:
      "AI Visibility Score, Entity Expertise Builder, Topic Expansion, Content Gap Map, Authority Signal Generator (E-E-A-T), Trust Signals Scorecard, Industry Knowledge Files, Topic Depth Checker and more. Run every 3 months to keep your authority current.",
    image: authoritySuite.url,
    imageAlt: "AE Optimizer 15-tool Authority Suite dashboard",
  },
  {
    tag: "13",
    title: "Perplexity API Manager",
    body:
      "Perplexity isn't just an answer engine — it's an AI search engine. Bring your own key (roughly $10 every 3–6 months) and choose between Sonar, Sonar Pro, Sonar Reasoning, Sonar Reasoning Pro, or Sonar Deep Research — each explained in plain language.",
  },
];

const ENGINES = ["Google AI Overviews", "ChatGPT", "Perplexity", "Google Gemini", "Grok", "Claude", "DeepSeek"];

const CORE_FEATURES = [
  "Single business profile",
  "Crawl unlimited pages on your site",
  "Website AI visibility files for root directory",
  "Per-page code with breadcrumbs & meta tags",
  "Instant HTML Accordion Web Pages (FAQs/Help Articles)",
  "Research Unanswered AI Overviews QAs + People Also Ask",
  "Source-backed research + high-intent keywords research",
  "Choose from Perplexity Sonar or Sonar Reasoning Pro API",
  "15-tool Authority Suite (trust, expertise, gap analysis)",
  "Missed opportunities + Visibility gap analysis",
  "Assistance uploading website AI visibility files, if needed",
  "Human support via email, video instructions & phone",
  "Option to generate add'l schema, as needed",
];

const TIERS = [
  {
    name: "DIY Foundation",
    price: "$247",
    strike: "$497",
    highlight: false,
    tagline: "Start building AI visibility on the highest-trust platform online.",
    link: "https://buy.stripe.com/aFa9AT7tj8Ud9Q77dVcs80f",
    counts: {
      faq: "75 FAQ schema files",
      help: "25 Help Article schema files",
      unanswered: "25 Unanswered AI Overviews Q&A files",
      paa: "25 People Also Ask research files",
    },
    network: "AI crawlable website on GitHub Pages",
    upgradeNote: "Upgrade any time to publish across 12 additional platforms.",
  },
  {
    name: "Authority Engine",
    price: "$497",
    strike: "$997",
    highlight: true,
    badge: "Most Popular",
    tagline: "The full authority network — mirrored across the platforms AI already trusts.",
    link: "https://buy.stripe.com/fZu6oH5lbgmF6DV8hZcs80g",
    counts: {
      faq: "150 FAQ schema files",
      help: "50 Help Article schema files",
      unanswered: "50 Unanswered AI Overviews Q&A files",
      paa: "50 People Also Ask research files",
    },
    network:
      "GitHub Pages + GitLab, Hugging Face, Kaggle, Codeberg, Sourcehut, Gitea, Zenodo, Internet Archive, Forgejo, OSF, Archive.org",
  },
  {
    name: "Visibility Network",
    price: "$997",
    strike: "$1,997",
    highlight: false,
    badge: "Scale",
    tagline: "Everything in Authority Engine, at network scale — choose your city coverage.",
    link: "https://buy.stripe.com/7sYbJ17tj0nH1jB41Jcs80h",
    counts: {
      faq: "300 FAQ schema files",
      help: "100 Help Article schema files",
      unanswered: "100 Unanswered AI Overviews Q&A files",
      paa: "100 People Also Ask research files",
    },
    network:
      "GitHub Pages + GitLab, Hugging Face, Kaggle, Codeberg, Sourcehut, Gitea, Zenodo, Internet Archive, Forgejo, OSF, Archive.org",
    variants: [
      { label: "Network 10", link: "https://buy.stripe.com/7sYbJ17tj0nH1jB41Jcs80h" },
      { label: "Network 25", link: "https://buy.stripe.com/8x2eVd00R7Q9bYf8hZcs80o" },
      { label: "Network 50", link: "https://buy.stripe.com/bJeeVdcNDgmF1jB55Ncs80m" },
      { label: "Network 100", link: "https://buy.stripe.com/7sY14n6pfdat5zR9m3cs80n" },
    ],
  },
];

function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <IntroStory />
      <ContentEngine />
      <DemoSection />
      <EntitySection />
      <PricingCompare />
      <Pricing />
      <ArticlesTeaser />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur-md bg-background/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={aeMark.url} alt="AE Optimizer" width={32} height={32} className="h-8 w-8 object-contain" />
          <span className="font-display text-lg font-semibold tracking-tight">AE Optimizer</span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#story" className="hover:text-foreground">Why AEO</a>
          <a href="#engine" className="hover:text-foreground">Content Engine</a>
          <a href="#network" className="hover:text-foreground">Authority Network</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
        </nav>
        <a
          href="#pricing"
          className="rounded-md bg-[color:var(--gold)] px-4 py-2 text-sm font-semibold text-primary-foreground shadow-gold transition hover:brightness-110"
        >
          Get AE Optimizer
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
      <div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--gold), transparent)" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--accent), transparent)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          {/* LEFT — headline column */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--gold)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
              Answer Engine Optimization Software
            </span>

            <h1 className="mt-6 font-display text-[2.75rem] font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem]">
              Get cited by{" "}
              <span className="gold-gradient">Google AI Overviews</span>
              <span className="block text-foreground/90">
                — then every answer engine after it.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              AE Optimizer builds the machine-readable layer your website is missing, so AI can
              discover, verify and recommend your business — on Google, ChatGPT, Perplexity,
              Gemini, Grok, Claude and DeepSeek.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#pricing"
                className="rounded-lg bg-[color:var(--gold)] px-6 py-3 text-base font-semibold text-primary-foreground shadow-gold transition hover:brightness-110"
              >
                Get AE Optimizer
              </a>
              <Link
                to="/articles/$slug"
                params={{ slug: "aeo-tools-guide" }}
                className="group inline-flex items-center gap-2 rounded-lg border border-border bg-[color:var(--surface-elevated)]/70 px-6 py-3 text-base font-semibold text-foreground transition hover:border-[color:var(--gold)]"
              >
                Read the AEO Tools for Websites Guide
                <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
              </Link>
            </div>

            <div className="mt-10 border-t border-border/60 pt-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Optimized for
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {ENGINES.map((e, i) => (
                  <span
                    key={e}
                    className={
                      "rounded-full border px-3 py-1 text-xs " +
                      (i === 0
                        ? "border-[color:var(--gold)]/60 bg-[color:var(--gold)]/10 text-[color:var(--gold)]"
                        : "border-border text-muted-foreground")
                    }
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — video card */}
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-3xl opacity-70 blur-2xl"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in oklab, var(--gold) 35%, transparent), color-mix(in oklab, var(--accent) 30%, transparent))",
              }}
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-[color:var(--surface)] shadow-elevated">
              <div className="flex items-center justify-between border-b border-border/70 bg-[color:var(--surface-elevated)]/60 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--gold)]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                </div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Intro · 2 min
                </span>
              </div>
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/7j0RyhGKwMg"
                  title="AE Optimizer intro"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {[
                { k: "13", v: "Content generators" },
                { k: "12", v: "Authority mirrors" },
                { k: "15", v: "Authority tools" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-xl border border-border bg-[color:var(--surface)]/70 px-3 py-3"
                >
                  <div className="font-display text-2xl font-semibold text-[color:var(--gold)]">
                    {s.k}
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroStory() {
  return (
    <section id="story" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* LEFT — headline block */}
          <div className="lg:sticky lg:top-32">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--gold)]">Why AEO now?</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-foreground md:text-6xl">
              Google has always been AI.
            </h2>
            <p className="mt-5 text-xl leading-relaxed text-muted-foreground">
              The only thing that changed is now you can <em className="text-foreground not-italic">see</em> it answer.
              Here's what that means for your website — and why the way you've been optimizing is no longer enough.
            </p>
          </div>

          {/* RIGHT — broken-up story */}
          <div className="space-y-8 text-base leading-relaxed text-muted-foreground lg:pt-2">
            <p>
              Everyone's talking about AI search like it's brand new. It isn't. What changed is that the
              results now show up as a single answer, not ten blue links. That's why Google rolled out AI
              Overviews — so your question gets answered first. And why ChatGPT, Perplexity, Gemini, Grok,
              Claude and DeepSeek are doing the same.
            </p>

            <div className="rounded-xl border border-border bg-[color:var(--surface)] p-5">
              <p className="font-display text-lg italic text-foreground">
                "You're not optimizing for Google anymore. You're optimizing for Google's AI — and every answer engine that follows it."
              </p>
            </div>

            <p>
              The shift matters because{

function ContentEngine() {
  return (
    <section id="engine" className="relative border-t border-border bg-[color:var(--surface)]/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-[color:var(--gold)]">
            The Content Engine
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Multiple ways AE Optimizer generates citable AI content.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            AEO software (also called GEO, LLMO, or AI search monitoring) helps brands measure how they
            appear in AI answers. Most miss the harder part: <em className="text-foreground">actually
            optimizing your website</em> and <em className="text-foreground">generating the content</em>{" "}
            LLMs will pick up for Google AI Overviews, snippets, and answer engines. AE Optimizer does both.
          </p>
          <div className="mt-6 grid gap-3 text-left sm:grid-cols-2">
            <FoundationCard
              step="Foundation"
              title="Website AI visibility files"
              body="The single biggest lever for AI visibility — the root-directory files that let bots crawl, consume, and understand the whole site."
            />
            <FoundationCard
              step="Per-page"
              title="On-page AI markup"
              body="Every page is optimized for AI crawlers so each one clearly signals what it's about."
            />
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CONTENT_TYPES.map((c) => (
            <FeatureCard key={c.tag} feature={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FoundationCard({ step, title, body }: { step: string; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-[color:var(--gold)]/30 bg-[color:var(--surface-elevated)] p-5">
      <div className="text-xs font-medium uppercase tracking-widest text-[color:var(--gold)]">{step}</div>
      <div className="mt-2 font-display text-lg font-semibold text-foreground">{title}</div>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

function FeatureCard({
  feature,
}: {
  feature: { tag: string; title: string; body: string; image?: string; imageAlt?: string };
}) {
  return (
    <article
      className={`group flex flex-col rounded-2xl border border-border bg-[color:var(--surface)] p-6 transition hover:border-[color:var(--gold)]/60 hover:shadow-gold ${
        feature.image ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="font-display text-sm text-[color:var(--gold)]">{feature.tag}</span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">{feature.title}</h3>
      <p className="mt-3 text-muted-foreground">{feature.body}</p>
      {feature.image && (
        <div className="mt-5 overflow-hidden rounded-lg border border-border">
          <img src={feature.image} alt={feature.imageAlt ?? feature.title} loading="lazy" className="w-full" />
        </div>
      )}
    </article>
  );
}

function DemoSection() {
  return (
    <section id="demo" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-[color:var(--gold)]">
            See it in action
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-foreground md:text-5xl">
            A walkthrough of AE Optimizer.
          </h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-[color:var(--surface)] shadow-elevated">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/21yuaC8N8K8"
              title="AE Optimizer demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function EntitySection() {
  return (
    <section id="network" className="border-t border-border bg-[color:var(--surface)]/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-[color:var(--gold)]">
            Authority Network
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-foreground md:text-5xl">
            Your website is the source of truth. We mirror it and distribute where AI crawls for discovery.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            AE Optimizer distributes your structured entity data across 12 trusted repositories so AI can
            discover, verify, and corroborate your business — no matter which engine your prospect chooses.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-border bg-[color:var(--surface)]">
            <img src={entityRepos.url} alt="Business entity distributed to 12 repositories" loading="lazy" className="w-full" />
            <figcaption className="border-t border-border p-4 text-center text-sm text-muted-foreground">
              Your website at the center — mirrored to a 12-node authority network.
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-border bg-[color:var(--surface)]">
            <img src={aiDistribution.url} alt="AI distribution across an authority network" loading="lazy" className="w-full" />
            <figcaption className="border-t border-border p-4 text-center text-sm text-muted-foreground">
              GitHub Pages leads, then GitLab, Hugging Face, Kaggle, Codeberg, Sourcehut, Gitea, Zenodo,
              Internet Archive, Forgejo, OSF, and Archive.org corroborate.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function PricingCompare() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-[color:var(--gold)]">
            The Category, Priced
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-foreground md:text-5xl">
            Most AEO tools <em>monitor</em> mentions. AE Optimizer <em>builds</em> the content that gets you mentioned.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Compare a one-time payment against subscriptions that keep the meter running month after month.
          </p>
        </div>
        <figure className="mt-10 overflow-hidden rounded-2xl border border-border bg-[color:var(--surface)] shadow-elevated">
          <img src={priceComparison.url} alt="AE Optimizer price comparison vs competitors" loading="lazy" className="w-full" />
        </figure>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="border-t border-border bg-[color:var(--surface)]/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-[color:var(--gold)]/50 bg-[color:var(--gold)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">
            Launch Special
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-foreground md:text-5xl">
            Own your AI visibility. One payment. Additional generated content when you need it.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Pick your foundation. Every tier includes the full content engine — differences are in schema
            volume and how many platforms mirror your entity.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TIERS.map((t) => (
            <PriceCard key={t.name} tier={t} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Launch pricing ends without notice. Questions? Email, video walkthroughs, and phone support included.
        </p>
      </div>
    </section>
  );
}

function PriceCard({ tier }: { tier: (typeof TIERS)[number] }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 transition ${
        tier.highlight
          ? "border-[color:var(--gold)] bg-[color:var(--surface-elevated)] shadow-gold"
          : "border-border bg-[color:var(--surface)]"
      }`}
    >
      {tier.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[color:var(--gold)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
          {tier.badge}
        </span>
      )}

      <h3 className="font-display text-2xl font-semibold text-foreground">{tier.name}</h3>
      <p className="mt-2 min-h-[3rem] text-sm text-muted-foreground">{tier.tagline}</p>

      <div className="mt-6 flex items-baseline gap-3">
        <span className="font-display text-5xl font-bold gold-gradient">{tier.price}</span>
        <span className="text-lg text-muted-foreground line-through">{tier.strike}</span>
      </div>
      <span className="text-xs uppercase tracking-widest text-muted-foreground">One-time</span>

      <a
        href={tier.link}
        target="_blank"
        rel="noreferrer"
        className={`mt-6 block rounded-lg px-4 py-3 text-center text-sm font-semibold transition ${
          tier.highlight
            ? "bg-[color:var(--gold)] text-primary-foreground hover:brightness-110"
            : "border border-[color:var(--gold)] text-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-primary-foreground"
        }`}
      >
        Get {tier.name}
      </a>

      {tier.variants && (
        <div className="mt-4 grid grid-cols-2 gap-2">
          {tier.variants.slice(1).map((v) => (
            <a
              key={v.label}
              href={v.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border bg-[color:var(--surface)] px-3 py-2 text-center text-xs font-semibold text-foreground transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
            >
              {v.label}
            </a>
          ))}
        </div>
      )}

      <ul className="mt-8 space-y-3 text-sm">
        <PriceFeature primary>{tier.counts.faq}</PriceFeature>
        <PriceFeature primary>{tier.counts.help}</PriceFeature>
        <PriceFeature primary>{tier.counts.unanswered}</PriceFeature>
        <PriceFeature primary>{tier.counts.paa}</PriceFeature>
        <li className="pt-2 text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">
          Authority Network
        </li>
        <PriceFeature>{tier.network}</PriceFeature>
        {tier.upgradeNote && (
          <li className="text-xs italic text-muted-foreground">{tier.upgradeNote}</li>
        )}
        <li className="pt-2 text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">
          Everything included
        </li>
        {CORE_FEATURES.map((f) => (
          <PriceFeature key={f}>{f}</PriceFeature>
        ))}
      </ul>
    </div>
  );
}

function PriceFeature({ children, primary }: { children: React.ReactNode; primary?: boolean }) {
  return (
    <li className="flex items-start gap-2">
      <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${primary ? "bg-[color:var(--gold)]" : "bg-muted-foreground"}`} />
      <span className={primary ? "text-foreground" : "text-muted-foreground"}>{children}</span>
    </li>
  );
}

function ArticlesTeaser() {
  const featured = ARTICLES.slice(0, 3);
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-[color:var(--gold)] font-semibold">
              The AEO Buyer's Guide
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
              How AE Optimizer compares in this category
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Plain-English breakdowns of every AEO and AI visibility tool on the market — pricing,
              what each one actually does, and what to buy first.
            </p>
          </div>
          <Link
            to="/articles"
            className="inline-flex items-center rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground hover:border-[color:var(--gold)]"
          >
            Browse all guides →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featured.map((a) => (
            <Link
              key={a.slug}
              to="/articles/$slug"
              params={{ slug: a.slug }}
              className="rounded-xl border border-border bg-card p-6 transition hover:border-[color:var(--gold)]/60"
            >
              <h3 className="text-base font-semibold text-foreground">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{a.description}</p>
              <span className="mt-3 inline-block text-sm font-medium text-[color:var(--gold)]">Read →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <img src={aeMark.url} alt="AE Optimizer" width={28} height={28} loading="lazy" className="h-7 w-7 object-contain" />
          <span className="font-display font-semibold">AE Optimizer</span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <Link to="/articles" className="text-muted-foreground hover:text-foreground">
            AEO Buyer's Guide
          </Link>
          <p className="text-muted-foreground hidden md:block">
            Get Cited on Google AI Overviews · ChatGPT · Perplexity · Gemini · Grok · Claude · DeepSeek
          </p>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} AE Optimizer.</p>
      </div>
    </footer>
  );
}
