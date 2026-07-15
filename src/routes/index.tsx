import { createFileRoute, Link } from "@tanstack/react-router";
import speakableSchema from "@/assets/speakable_schema.png.asset.json";
import aiDistribution from "@/assets/ai-distribution.png.asset.json";
import helpArticles from "@/assets/help_articles_speakable.png.asset.json";
import priceComparison from "@/assets/price-comparison.png.asset.json";
import entityRepos from "@/assets/entity-repos.png.asset.json";
import authoritySuite from "@/assets/authority-suite.png.asset.json";
import perplexitySonar from "@/assets/perplexity-sonar-models.png.asset.json";
import sourceBackedStats from "@/assets/source-backed-stats.png.asset.json";
import keywordRecommendations from "@/assets/keyword-recommendations.png.asset.json";
import faqsImg from "@/assets/faqs_speakable.png.asset.json";
import competitiveGapsImg from "@/assets/competitive_question_gaps.png.asset.json";
import unansweredImg from "@/assets/google_unanswered_questions.png.asset.json";
import servicesImg from "@/assets/services_speakable.png.asset.json";
import teamImg from "@/assets/team_members_schema.png.asset.json";
import testimonialsImg from "@/assets/testimonials_and_reviews.png.asset.json";
import schemaPagesImg from "@/assets/schema_ai_webpages.png.asset.json";
import htmlAccordionImg from "@/assets/html_accordion_site_pages.png.asset.json";

import perPageCode from "@/assets/per_page_code.png.asset.json";
import siteFilesRoot from "@/assets/site_files_root.png.asset.json";
import statBasedContent from "@/assets/stat_based_content.png.asset.json";
import aeLogo from "@/assets/ae-logo-blue.png.asset.json";
import { ARTICLES } from "@/lib/articles";

const imageAsset = (asset: { url: string }, width: number, height: number) => ({
  image: asset.url,
  imageWidth: width,
  imageHeight: height,
});

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

const CONTENT_ENGINE = [
  {
    tag: "01",
    title: "Foundation Site Files (Root Directory)",
    ...imageAsset(siteFilesRoot, 1246, 537),
    imageAlt: "AE Optimizer AEO Site Files — root directory downloads including ai-data, ai-sitemap, robots, humans, security, publishing-manifest, source-provenance, knowledge graph, FAQs, AI Overview Q&A, long-form LLM context, entity, organization, locations, services, team, and more",
    headline: "Lay the AI-readable foundation before you optimize a single page.",
    description: [
      "Before Google AI Overviews, ChatGPT, Perplexity, Gemini, Grok, Claude or DeepSeek can cite you, they need permission and a map. AE Optimizer generates the full root-directory package every AI-ready website needs: sitemap.xml, robots.txt, ai-sitemap.xml, llms.txt, ai-plugin.json, LLM context files, a cross-linked knowledge graph, AI Overview FAQPage markup, Markdown + YAML entity pages and a long-form LLM context narrative.",
      "These aren't nice-to-haves — they're the machine-readable instructions AI crawlers look for first. Miss them and you're asking bots to guess. Ship them and every downstream schema, page and article you publish has a foundation that reinforces it.",
      "One click generates the entire root package, ready to upload to the root of your site. This is the layer that turns 'a website' into 'a source AI systems trust to answer questions.'",
    ],
  },
  {
    tag: "02",
    title: "Per-Page Schema Code",
    ...imageAsset(perPageCode, 1240, 350),
    imageAlt: "AE Optimizer Per Page Code — crawl any page or entire site to generate JSON-LD, AI citations, breadcrumbs, meta tags and Speakable schema",
    headline: "Give every page the structured data AI systems need to cite it in AI search and voice search.",
    description: [
      "A homepage that's AI-ready isn't enough. Every service page, blog post, help article and landing page needs its own layer of JSON-LD, breadcrumbs, meta tags and AI citations so it can stand on its own in an AI answer. AE Optimizer's Per Page Code crawls your entire site (or any single URL) and generates that layer page by page.",
      "Results are saved to your profile — you can regenerate any page any time, download the schema, edit it, and toggle Speakable schema on for the specific CSS selectors voice assistants should read aloud. Every crawled page becomes a self-contained AI citation candidate.",
      "This is how you convert an ordinary site into one where every URL is individually retrievable by Google AI Overviews and answer engines — not just the homepage.",
    ],
  },
  {
    tag: "03",
    title: "Speakable Schema for Voice Search",
    ...imageAsset(speakableSchema, 1344, 768),
    imageAlt: "Speakable Schema — voice search ready markup that tells Siri, Alexa, Google Assistant and Gemini which parts of your page to read aloud",
    headline: "Get read aloud by Siri, Alexa, Google Assistant and Google Gemini.",
    description: [
      "Voice search is where AI answers stop being read and start being spoken. Speakable schema tells voice assistants — Siri, Alexa, Google Assistant, Google Gemini, Bixby and Cortana — exactly which parts of your page they should read aloud when a user asks a question hands-free. Without it, voice engines guess (badly). With it, they quote you word-for-word.",
      "AE Optimizer automatically embeds Speakable schema across every layer it generates: Per-Page Code (toggle it on for any crawled page), Services × City pages, FAQ pages (so Alexa and Google Assistant know which Q&A to speak), and Help Articles, HowTo and Q&A formats. If a voice assistant can hear a question about your business, it now has a script to read.",
      "This matters more every quarter. Cars, smart speakers, phones, watches and glasses all lean on voice-first answers, and the sites tagged for Speakable are the ones getting spoken — while the rest stay silent.",
    ],
  },
  {
    tag: "04",
    title: "FAQs",
    ...imageAsset(faqsImg, 1225, 221),
    imageAlt: "AE Optimizer Research & Add FAQs interface with Speakable schema automatically included for voice assistants",
    headline: "Answer the questions your prospects are already typing — and asking out loud.",
    description: [
      "Google AI Overviews don't appear out of thin air — they pull from the clearest, most direct answer on the web. Frequently asked questions, formatted as FAQ schema, are one of the fastest paths into those overviews because they're already in the exact shape AI is looking for: question, then answer.",
      "AE Optimizer researches real questions from People Also Ask, Quora, Reddit and search autocomplete — the places your prospects actually type — then packages each one as structured FAQ data a machine can parse. Every FAQPage also ships with Speakable schema baked in, so Alexa, Google Assistant and Siri know exactly which Q&A to read aloud.",
      "This same FAQ layer feeds ChatGPT, Perplexity, Gemini and Claude when they synthesize recommendations. One well-structured answer can show up in organic search, AI Overviews, answer engines and voice results at the same time.",
    ],
  },
  {
    tag: "05",
    title: "Competitive Question Gaps",
    ...imageAsset(competitiveGapsImg, 1237, 170),
    imageAlt: "AE Optimizer Competitive Question Gaps tool powered by Perplexity Sonar Pro",
    headline: "Find the questions competitors are too lazy to answer.",
    description: [
      "Most businesses optimize for the same crowded keywords and ignore the long-tail questions where real buying intent lives. Powered by Perplexity Sonar Pro, AE Optimizer finds those gaps — high-intent questions where competitors, directories and industry sites are weak, generic or silent.",
      "Each gap becomes a concrete, source-backed answer stored as TechArticle schema. That matters because AI systems don't just want content; they want confidence. A direct answer with clear structure beats a vague page every time.",
      "This is how you move from competing on backlinks to earning mentions: by being the only clear answer in a space everyone else overlooked.",
    ],
  },
  {
    tag: "06",
    title: "Unanswered Q&As for AI Overviews",
    ...imageAsset(unansweredImg, 1225, 162),
    imageAlt: "AE Optimizer Google Unanswered Questions finder for AI Overviews and featured snippets",
    headline: "Target Google's unanswered questions before your competitors do.",
    description: [
      "Google explicitly surfaces unanswered questions — queries where no single source has provided a complete, trusted answer yet. That's an open invitation to become the source. AE Optimizer uses Perplexity Sonar Reasoning Pro (multi-step) to identify these specific gaps before they become crowded.",
      "The tool then produces structured Q&A content in the format AI Overviews consume best: clear question, direct answer, supporting context. It's the difference between hoping Google notices you and feeding it exactly what it's asking for.",
      "Win enough of these unanswered Q&A spots and your site becomes a citation pattern — referenced again and again as AI systems train on the open web.",
    ],
  },
  {
    tag: "07",
    title: "Help Articles",
    headline: "Publish help content AI wants to recommend — and voice assistants want to read.",
    ...imageAsset(helpArticles, 1225, 402),
    imageAlt: "AE Optimizer Help Articles with Speakable schema automatically included in every Article, HowTo and Q&A",
    description: [
      "Help articles are some of the most citable content formats on the internet because they're already built to answer. How-to, listicle, checklist, comparison, guide, mistakes to avoid, timeline, myth vs. fact — these are the shapes ChatGPT, Perplexity and Gemini lift answers from every day.",
      "AE Optimizer lets you choose the article type, then generates schema-ready output formatted for Google AI Overviews and answer engines. Speakable schema is automatically included in every Article, HowTo and Q&A so voice assistants can read the summary and steps aloud when someone asks hands-free.",
      "When AI systems need a trustworthy explanation, they prefer a dedicated help article over a generic service page. This is how you become that preferred source across text, voice and answer engines.",
    ],
  },
  {
    tag: "08",
    title: "Services + Cities Pages",
    ...imageAsset(servicesImg, 1222, 196),
    imageAlt: "AE Optimizer Services schema generator — one schema per service × city with Speakable schema for voice queries like '24-hour plumber near me'",
    headline: "Own local service intent across every city you serve — including voice.",
    description: [
      "Answer engines are local now. People ask 'who offers X near me' and get a direct recommendation — no scroll, no click. If your service-area coverage isn't machine-readable, you're invisible in that answer.",
      "AE Optimizer builds a dedicated, schema-rich page for each service in each city you serve: focused main city, full service description, contact information and surrounding areas. Speakable schema is automatically included so voice queries like '24-hour plumber near me' can pull your service name, area served and hours.",
      "This bridges classic SEO, generative AI and voice: it protects your organic local rankings while also feeding the structured facts AI Overviews, answer engines and voice assistants use when recommending a provider.",
    ],
  },
  {
    tag: "09",
    title: "Team Members Schema",
    ...imageAsset(teamImg, 1250, 205),
    imageAlt: "AE Optimizer Team Members Person schema generator",
    headline: "Turn your people into trust signals.",
    description: [
      "AI systems trust organizations they can verify. Team member schema exposes each person's expertise, credentials, role and contact information as structured data — not buried on an about page, but explicitly labeled for machines.",
      "This builds E-E-A-T signals (experience, expertise, authoritativeness, trust) that make your company more retrievable by both SERPs and LLMs. When an answer engine needs to decide who is credible enough to cite, clear entity data tips the scale.",
      "You review and edit every profile before publishing, so the layer AI reads matches the real people behind your business.",
    ],
  },
  {
    tag: "10",
    title: "Testimonials & Reviews",
    ...imageAsset(testimonialsImg, 1222, 482),
    imageAlt: "AE Optimizer Testimonials & Reviews aggregated from Google, Avvo, Yelp and more",
    headline: "Let third-party proof follow you into AI answers.",
    description: [
      "LLMs are memory machines. They train on the internet — including reviews, mentions and sentiment — and they use what they find to judge credibility. Consistent, positive proof across trusted sources tells an AI system you're worth mentioning.",
      "AE Optimizer uses Perplexity to gather social proof from Google, Avvo, Yelp and other review platforms, then distributes those trust signals across your AI authority network. The result isn't just a testimonial page; it's a reputation layer AI can corroborate.",
      "As AI search shifts focus from backlinks to mentions and sentiment, this becomes one of the most defensible advantages you can build.",
    ],
  },
  {
    tag: "11",
    title: "Schema Webpages",
    ...imageAsset(schemaPagesImg, 1225, 162),
    imageAlt: "AE Optimizer Schema Web Pages generator — one AI-ready page per service × city",
    headline: "Ship full AI-optimized pages, not just fragments.",
    description: [
      "A schema file is useful; a full webpage built around that schema is powerful. AE Optimizer generates complete AI-optimized webpages — service + city pages loaded with the depth AI systems consume when deciding who to recommend.",
      "Each page includes the structured data, headers, context and internal references answer engines need. It's not a trick or a hack; it's a page designed from the ground up to be understood.",
      "This gives you both distribution and destination: the content can be cited by AI, and the page can still rank and convert in traditional organic search.",
    ],
  },
  {
    tag: "12",
    title: "HTML Accordion Pages",
    ...imageAsset(htmlAccordionImg, 1241, 676),
    imageAlt: "AE Optimizer HTML Site Pages — ZIP-to-accordion converter with brand color matching",
    headline: "Turn hundreds of schema files into one human-readable page.",
    description: [
      "AI crawlers love structured data; human visitors love browsable pages. AE Optimizer's HTML Accordion Pages bridge both: upload a zip of FAQ, Q&A or Help Article schemas and convert them into a brand-styled accordion page your visitors can actually read.",
      "The colors match your brand, the structure is clean, and the content is the exact same schema AI already consumes. No duplicated work, no conflicting versions.",
      "This is how you serve two audiences from one source of truth — humans and machines — without building everything twice.",
    ],
  },
  {
    tag: "13",
    title: "Source-Backed Topic Research",
    headline: "Ground your content in sources AI already trusts.",
    ...imageAsset(sourceBackedStats, 1246, 275),
    imageAlt: "Source-Backed Topic Research with citation-backed answers from reputable sources",
    description: [
      "Answer engines don't just want opinions; they want answers supported by recognized sources. AE Optimizer's source-backed research uses Perplexity Sonar Pro to generate citation-backed topic research grounded in industry standards, regulations, studies and expert guidance.",
      "Each output is stored as TechArticle schema — the format AI systems prefer for technical, authoritative content. Every claim points back to a reputable source, so when AI systems evaluate whether to cite you, the trail already checks out.",
      "For regulated industries like law, finance and healthcare, this is especially powerful. Credibility isn't optional; it's the price of admission — and this is how you meet it at scale.",
    ],
  },
  {
    tag: "14",
    title: "Stat-Based Content Mode",
    headline: "Anchor every article to a number AI Overviews want to quote.",
    ...imageAsset(statBasedContent, 1252, 367),
    imageAlt: "Source-Backed Topic Research with Prioritize statistics & data points enabled",
    description: [
      "Toggle on 'Prioritize statistics & data points' and the Perplexity prompt shifts into stat-based content mode — demanding concrete stats, benchmarks, percentages and cited figures from reputable sources like BLS, CDC, industry reports and peer-reviewed studies.",
      "At least 60% of items will center on a specific statistic, which is exactly the kind of anchor AI Overviews, ChatGPT and Perplexity love to quote. A page that says '43% of…' with a real citation gets pulled into an AI answer far more often than a page that says 'many.'",
      "This is how you build content that punches above its domain authority: give AI systems the numeric hooks they're already searching for, and they'll return the favor with citations.",
    ],
  },
  {
    tag: "15",
    title: "Keyword Recommendations",
    headline: "Move from keyword guessing to intent targeting.",
    ...imageAsset(keywordRecommendations, 1247, 432),
    imageAlt: "AE Optimizer Keyword Recommendations tool with intent and campaign type options",
    description: [
      "Keywords still matter — but the game has shifted from volume to intent. AE Optimizer generates high-intent keyword ideas tuned to the campaign you're actually running: PPC (Google Ads / Bing Ads), SEO content and blog posts, local SEO, landing page copy, social media ads, YouTube targeting, long-tail featured snippets, or a general mix.",
      "Pick your intent — transactional, informational or mixed — and the list size, and the tool grows the pool on demand. Duplicates filter automatically so every generation adds fresh ideas, and stat-based angles surface the phrases people use when they want a number, benchmark or comparison, not just a definition.",
      "Instead of chasing a single head term, you build topical authority: clusters of related questions, services and contexts that signal to both search engines and answer engines that you genuinely cover the subject.",
    ],
  },
  {
    tag: "16",
    title: "15-Tool Authority Suite",
    headline: "Run a quarterly authority audit that keeps you current.",
    ...imageAsset(authoritySuite, 1247, 746),
    imageAlt: "AE Optimizer 15-tool Authority Suite dashboard",
    description: [
      "Authority isn't a one-time event; it's a signal you maintain. The 15-Tool Authority Suite measures your AI visibility score, entity expertise, topic expansion opportunities, content gaps, E-E-A-T signals, trust signals, industry knowledge coverage and more.",
      "Run it every three months and you'll know exactly where your authority is strengthening and where it's slipping. This shifts your KPIs from clicks alone to awareness and sentiment — the signals AI engines actually train on.",
      "Combine this with traditional SEO and you have a complete picture: how humans find you, and how machines talk about you.",
    ],
  },
  {
    tag: "17",
    title: "Perplexity API Manager",
    headline: "Use the AI search engine that other answer engines also respect.",
    ...imageAsset(perplexitySonar, 1344, 768),
    imageAlt: "The Perplexity Sonar model family — Sonar, Sonar Pro, Sonar Reasoning, Sonar Reasoning Pro and Sonar Deep Research",
    description: [
      "Perplexity isn't just another answer engine — it's an AI search engine built on real-time web sources. That makes it both a destination and a research layer. AE Optimizer lets you bring your own Perplexity API key (roughly $10 every 3–6 months) and choose the exact model strength you need.",
      "Pick from Sonar, Sonar Pro, Sonar Reasoning, Sonar Reasoning Pro or Sonar Deep Research — each explained in plain language so you're not buried in API jargon. Use lighter models for fast answers and deeper models for complex research.",
      "This keeps you in control of cost and quality, with no ongoing SaaS markup just to access the engine doing the work.",
    ],
  },
  {
    tag: "18",
    title: "Publishing to the AI Authority Network",
    headline: "Build authority by publishing where AI bots already crawl.",
    ...imageAsset(entityRepos, 1536, 1536),
    imageAlt: "AE Optimizer distributing a business entity to 12 authority repositories",
    description: [
      "Great content that only lives on your website is a single point of failure. To build real authority in the age of AI, your business entity and structured data have to exist in the same places AI systems already trust and crawl — repeatedly, consistently, and in the exact machine-readable shape they prefer.",
      "AE Optimizer publishes your entity to a 12-node authority network: GitHub Pages, GitLab, Hugging Face, Kaggle, Codeberg, Sourcehut, Gitea, Zenodo, Internet Archive, Forgejo, OSF and Archive.org. Each mirror corroborates the last, so when Google AI Overviews, ChatGPT, Perplexity, Gemini, Grok, Claude or DeepSeek encounter your name, they find the same facts everywhere they look.",
      "This is the difference between hoping to be discovered and engineering discovery. Your website stays the canonical source of truth — and every other node reinforces it, quietly, on the platforms AI already reads.",
    ],
  },
];

const ENGINES = ["Google AI Overviews", "ChatGPT", "Perplexity", "Google Gemini", "Grok", "Claude"];

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
      <ProblemBand />
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
    <header className="sticky top-0 z-40 backdrop-blur-md bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={aeLogo.url} alt="AE Optimizer" width={32} height={32} loading="eager" decoding="async" fetchPriority="high" className="h-8 w-8 object-contain" />
          <span className="font-display text-lg font-semibold tracking-tight text-[color:var(--ink)]">AE Optimizer</span>
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-[color:var(--ink)]/70 md:flex">
          <a href="#story" className="hover:text-[color:var(--brand-blue)]">Why AEO</a>
          <a href="#engine" className="hover:text-[color:var(--brand-blue)]">Content Engine</a>
          <a href="#network" className="hover:text-[color:var(--brand-blue)]">Authority Network</a>
          <a href="#pricing" className="hover:text-[color:var(--brand-blue)]">Pricing</a>
        </nav>
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 rounded-md bg-[color:var(--brand-blue)] px-4 py-2 text-sm font-semibold text-[color:var(--cream)] transition hover:bg-[color:var(--brand-blue-light)]"
        >
          Get started <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden -mt-[68px] pt-[68px]"
      style={{
        background:
          "radial-gradient(1100px 620px at 18% 30%, #D9C29A 0%, #C2A97C 42%, #A88D5E 78%, #8C7448 100%)",
      }}
    >
      {/* Dual ambient glows — taupe warmth + deep-blue accent */}
      <div
        className="pointer-events-none absolute -top-56 -left-40 h-[620px] w-[620px] rounded-full opacity-80 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #E6D2A6, transparent)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-64 -right-40 h-[720px] w-[720px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #1A3A57, transparent 70%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #2A5178, transparent)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-10 pb-24 md:pt-16 md:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          {/* LEFT — headline column */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-blue)]/40 bg-[color:var(--cream)]/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-blue)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-blue)]" />
              Answer Engine Optimization Software
            </span>

            <h1 className="mt-6 font-display text-[2.75rem] font-semibold leading-[1.02] tracking-tight text-[color:var(--ink)] sm:text-6xl lg:text-[4.25rem]">
              Get cited by{" "}
              <span style={{ color: "#8A6A2A" }}>Google AI Overviews</span>
              <span className="block text-[color:var(--ink)]/90">
                — then every answer engine after it.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--ink)]/75">
              AE Optimizer builds the machine-readable layer your website is missing, so AI can discover, verify and recommend your business — on Google AI Overviews, ChatGPT, Perplexity, Gemini, Grok, Claude and DeepSeek.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 rounded-lg bg-[color:var(--brand-blue)] px-6 py-3 text-base font-semibold text-[color:var(--cream)] shadow-[0_10px_30px_-10px_rgba(26,58,87,0.55)] transition hover:bg-[color:var(--brand-blue-light)]"
              >
                Get AE Optimizer
                <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
              </a>
              <Link
                to="/articles/$slug"
                params={{ slug: "aeo-tools-guide" }}
                className="group inline-flex items-center gap-2 rounded-lg border border-[color:var(--brand-blue)]/60 bg-[color:var(--cream)]/30 px-6 py-3 text-base font-semibold text-[color:var(--brand-blue)] transition hover:bg-[color:var(--cream)]/60"
              >
                Read the AEO tools guide
                <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
              </Link>
            </div>

            <div className="mt-10 border-t border-[color:var(--ink)]/15 pt-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--ink)]/60">
                Optimized for
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {ENGINES.map((e, i) => (
                  <span
                    key={e}
                    className={
                      "rounded-full border px-3 py-1 text-xs font-medium " +
                      (i === 0
                        ? "border-[color:var(--brand-blue)] bg-[color:var(--brand-blue)] text-[color:var(--cream)]"
                        : "border-[color:var(--brand-blue)]/40 text-[color:var(--ink)]/75")
                    }
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — video card (keep the blue) */}
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-3xl opacity-70 blur-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26,58,87,0.55), rgba(42,81,120,0.35))",
              }}
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-2xl border border-[color:var(--brand-blue)]/60 bg-[color:var(--brand-blue)] shadow-[0_30px_60px_-25px_rgba(15,36,56,0.6)]">
              <div className="flex items-center justify-between border-b border-[color:var(--brand-blue-light)]/70 bg-[color:var(--brand-blue-dark)]/60 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--taupe)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--cream)]/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--cream)]/30" />
                </div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--cream)]/80">
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
                  className="rounded-xl border border-[color:var(--brand-blue-light)]/60 bg-[color:var(--brand-blue)] px-3 py-3"
                >
                  <div className="font-display text-2xl font-semibold text-[color:var(--taupe-soft)]">
                    {s.k}
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-[color:var(--cream)]/70">
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

function ProblemBand() {
  return (
    <section className="border-y border-[color:var(--brand-blue-dark)] bg-[color:var(--brand-blue)] py-10">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        <p className="font-display text-xl italic leading-relaxed text-[color:var(--cream)]/90 md:text-2xl">
          “When someone asks Google, ChatGPT or Perplexity for a recommendation in your industry —
          <span className="text-[color:var(--taupe-soft)]"> is your business in the answer?</span>”
        </p>
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
              The shift matters because AI systems do not read your site the way humans do. They scan underneath the design for structured information that explains what you do, what questions you answer, and when you should be recommended.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border/70 bg-[color:var(--surface)]/60 p-4">
                <div className="text-[color:var(--gold)] font-display text-lg font-semibold">Before</div>
                <p className="mt-1 text-sm text-muted-foreground">A beautiful website that AI skips over because it cannot decode the meaning.</p>
              </div>
              <div className="rounded-lg border border-[color:var(--gold)]/30 bg-[color:var(--surface)]/60 p-4">
                <div className="text-[color:var(--gold)] font-display text-lg font-semibold">After</div>
                <p className="mt-1 text-sm text-muted-foreground">A machine-readable layer that tells AI exactly who to recommend and why.</p>
              </div>
            </div>

            <p className="border-l-2 border-[color:var(--gold)] pl-5 text-foreground italic">
              Think of it as a translation layer. Your site already shows visitors what you do. AE Optimizer converts that into the invisible language AI actually understands.
            </p>

            <p>
              Once that layer is in place, your site moves from invisible to citable — referenced when people ask questions and recommended in your service area, on Google AI Overviews and every answer engine that follows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContentEngine() {
  return (
    <section id="engine" className="relative border-t border-border bg-[color:var(--surface)]/40">
      {/* Intro */}
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-[color:var(--gold)]">
            The Content Engine
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            18 ways AE Optimizer builds the content AI systems cite — and voice assistants read aloud.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            AI search isn't a single channel. Google AI Overviews, ChatGPT, Perplexity, Gemini, Grok,
            Claude, DeepSeek — each one answers questions in its own way, but they all pull from the same
            thing: clearly structured, trustworthy content. AE Optimizer generates that content for every
            layer of your business.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[color:var(--gold)]/30 bg-[color:var(--surface-elevated)]/60 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">Foundation</div>
            <h3 className="mt-2 font-display text-xl font-semibold text-foreground">Website AI visibility files</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              The single biggest lever for AI visibility — root-directory files that tell bots how to crawl,
              consume and understand your whole site. This is the translation layer every answer engine reads first.
            </p>
          </div>
          <div className="rounded-2xl border border-[color:var(--gold)]/30 bg-[color:var(--surface-elevated)]/60 p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">Per-page</div>
            <h3 className="mt-2 font-display text-xl font-semibold text-foreground">On-page AI markup</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Every page is optimized for AI crawlers with structured data, breadcrumbs and meta context so
              each one clearly signals what it's about — no page is left invisible.
            </p>
          </div>
        </div>
      </div>

      {/* Feature sections */}
      {CONTENT_ENGINE.map((item, index) => (
        <ContentEngineItem key={item.tag} item={item} index={index} />
      ))}
    </section>
  );
}


function ContentEngineItem({
  item,
  index,
}: {
  item: (typeof CONTENT_ENGINE)[number];
  index: number;
}) {
  const isEven = index % 2 === 0;
  return (
    <article
      className="border-t border-border/60 bg-[color:var(--surface)]/30 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            isEven ? "" : "lg:grid-flow-dense"
          }`}
        >
          <div className={isEven ? "" : "lg:col-start-2"}>
            <div className="flex items-center gap-4">
              <span className="font-display text-6xl font-semibold text-[color:var(--gold)]/25">{item.tag}</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">
                {item.title}
              </span>
            </div>
            <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              {item.headline}
            </h3>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              {item.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className={isEven ? "" : "lg:col-start-1"}>
            {item.image ? (
              <figure className="overflow-hidden rounded-2xl border border-border bg-[color:var(--surface)] shadow-elevated">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  width={item.imageWidth}
                  height={item.imageHeight}
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                  className="block h-auto w-full"
                />
                <figcaption className="border-t border-border px-4 py-3 text-center text-xs text-muted-foreground">
                  {item.imageAlt}
                </figcaption>
              </figure>
            ) : (
              <div className="relative flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-border bg-[color:var(--surface)]/60 px-8 text-center">
                <div
                  className="absolute inset-0 rounded-2xl opacity-40"
                  style={{
                    background:
                      "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 25%, transparent), transparent)",
                  }}
                  aria-hidden
                />
                <p className="relative text-xs uppercase tracking-widest text-muted-foreground/60">
                  {item.title} visual
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
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

        <div className="mx-auto mt-14 max-w-3xl">
          <figure className="overflow-hidden rounded-2xl border border-border bg-[color:var(--surface)] shadow-elevated">
            <img
              src={aiDistribution.url}
              alt="AI distribution across an authority network"
              width={1163}
              height={1920}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
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
          <img
            src={priceComparison.url}
            alt="AE Optimizer price comparison vs competitors"
            width={1000}
            height={1911}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full"
          />
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
          ? "border-[color:var(--taupe)]/60 bg-[color:var(--brand-blue-light)] shadow-[0_30px_60px_-25px_rgba(15,36,56,0.6)]"
          : "border-[color:var(--brand-blue-dark)] bg-[color:var(--brand-blue-dark)]"
      }`}
    >
      {tier.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[color:var(--taupe)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[color:var(--brand-blue-dark)]">
          {tier.badge}
        </span>
      )}

      <h3 className="font-display text-2xl font-semibold text-[color:var(--cream)]">{tier.name}</h3>
      <p className="mt-2 min-h-[3rem] text-sm text-[color:var(--cream)]/70">{tier.tagline}</p>

      <div className="mt-6 flex items-baseline gap-3">
        <span className="font-display text-5xl font-bold text-[color:var(--taupe-soft)]">{tier.price}</span>
        <span className="text-lg text-[color:var(--cream)]/50 line-through">{tier.strike}</span>
      </div>
      <span className="text-xs uppercase tracking-widest text-[color:var(--cream)]/60">One-time</span>

      <ul className="mt-8 space-y-3 text-sm">
        <PriceFeature primary>{tier.counts.faq}</PriceFeature>
        <PriceFeature primary>{tier.counts.help}</PriceFeature>
        <PriceFeature primary>{tier.counts.unanswered}</PriceFeature>
        <PriceFeature primary>{tier.counts.paa}</PriceFeature>
        <li className="pt-2 text-xs font-semibold uppercase tracking-widest text-[color:var(--taupe-soft)]">
          Authority Network
        </li>
        <PriceFeature>{tier.network}</PriceFeature>
        {tier.upgradeNote && (
          <li className="text-xs italic text-[color:var(--cream)]/60">{tier.upgradeNote}</li>
        )}
        <li className="pt-2 text-xs font-semibold uppercase tracking-widest text-[color:var(--taupe-soft)]">
          Everything included
        </li>
        {CORE_FEATURES.map((f) => (
          <PriceFeature key={f}>{f}</PriceFeature>
        ))}
      </ul>

      {/* CTA at the bottom, after the features */}
      <div className="mt-8 pt-6 border-t border-[color:var(--cream)]/10">
        <a
          href={tier.link}
          target="_blank"
          rel="noreferrer"
          className={`group flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-center text-sm font-semibold transition ${
            tier.highlight
              ? "bg-[color:var(--taupe)] text-[color:var(--brand-blue-dark)] hover:bg-[color:var(--taupe-soft)]"
              : "bg-[color:var(--brand-blue-light)] text-[color:var(--cream)] hover:bg-[color:var(--brand-blue)]"
          }`}
        >
          Get {tier.name}
          <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
        </a>

        {tier.variants && (
          <div className="mt-3 grid grid-cols-2 gap-2">
            {tier.variants.slice(1).map((v) => (
              <a
                key={v.label}
                href={v.link}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-1 rounded-md border border-[color:var(--cream)]/20 bg-[color:var(--brand-blue)]/40 px-3 py-2 text-center text-xs font-semibold text-[color:var(--cream)] transition hover:border-[color:var(--taupe)] hover:text-[color:var(--taupe-soft)]"
              >
                {v.label}
                <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function PriceFeature({ children, primary }: { children: React.ReactNode; primary?: boolean }) {
  return (
    <li className="flex items-start gap-2">
      <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${primary ? "bg-[color:var(--taupe-soft)]" : "bg-[color:var(--cream)]/40"}`} />
      <span className={primary ? "text-[color:var(--cream)]" : "text-[color:var(--cream)]/70"}>{children}</span>
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
          <img src={aeLogo.url} alt="AE Optimizer" width={28} height={28} loading="eager" decoding="async" className="h-7 w-7 object-contain" />
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
