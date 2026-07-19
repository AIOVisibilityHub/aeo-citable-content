import { createFileRoute, Link } from "@tanstack/react-router";
import aeLogo from "@/assets/ae-logo-blue.png.asset.json";

const ASSET_HOST = "https://project--513f83bc-18cb-41a3-9de7-a0f1ae74bd9c.lovable.app";
const aeLogoUrl = aeLogo.url.startsWith("/__l5e/") ? `${ASSET_HOST}${aeLogo.url}` : aeLogo.url;

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — AE Optimizer Order Received" },
      {
        name: "description",
        content:
          "Thank you for your AE Optimizer order. We received your request and will follow up within 24 hours to confirm your order.",
      },
      { property: "og:title", content: "Thank You — AE Optimizer Order Received" },
      {
        property: "og:description",
        content:
          "Thank you for your AE Optimizer order. We received your request and will follow up within 24 hours to confirm your order.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/thank-you" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/thank-you" }],
  }),
  component: ThankYou,
});

function ThankYou() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur-md bg-background/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={aeLogoUrl} alt="AE Optimizer" width={32} height={32} className="h-8 w-8 object-contain" />
            <span className="font-display text-lg font-semibold tracking-tight">AE Optimizer</span>
          </Link>
        </div>
      </header>

      <main className="relative mx-auto max-w-3xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-8 grid h-20 w-20 place-items-center rounded-full border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-[color:var(--gold)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>

          <h1 className="font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Thank you.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We received your request. We will review the details and get back to you within{" "}
            <span className="text-foreground">24 hours</span> to confirm your order and let you know the next steps.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            If you have any questions while you wait, reach us anytime at{" "}
            <a
              href="mailto:support@aeoptimizer.com"
              className="font-semibold text-[color:var(--brand-blue)] underline underline-offset-4 hover:brightness-110"
            >
              support@aeoptimizer.com
            </a>
            .
          </p>

          <div className="mt-10 rounded-2xl border border-border bg-[color:var(--surface-elevated)]/60 p-6 text-left md:p-8">
            <h2 className="font-display text-xl font-semibold text-foreground md:text-2xl">
              First time signing up?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Follow these two steps while your account is being created so you are ready to go as soon as we activate it.
            </p>

            <ol className="mt-6 space-y-6 list-decimal pl-5 text-muted-foreground">
              <li>
                <strong className="text-foreground">Get a Perplexity API key for deep research.</strong>{" "}
                Visit{" "}
                <a
                  href="https://console.perplexity.ai/auth/login?redirectUrl=%2F"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[color:var(--brand-blue)] underline underline-offset-4 hover:brightness-110"
                >
                  console.perplexity.ai
                </a>{" "}
                and sign in. Adding about $10 in API credit usually covers several months of normal use. We keep this cost separate from your AE Optimizer subscription because some users run a lot of deep research and others barely touch it. If we bundled it, we would have to raise prices for everyone.
              </li>
              <li>
                <strong className="text-foreground">Create a GitHub account for publishing.</strong>{" "}
                Go to{" "}
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[color:var(--brand-blue)] underline underline-offset-4 hover:brightness-110"
                >
                  github.com
                </a>{" "}
                and create your free account. Every AE Optimizer plan starts with an AI-crawlable website that points back to your main site as the source of truth. GitHub is where that site lives and publishes from.
              </li>
            </ol>

            <p className="mt-6 text-muted-foreground">
              Once you have these two pieces in place, you will be all set for the activation email we send you.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-[color:var(--surface-elevated)]/60 p-6 text-left md:p-8">
            <h2 className="font-display text-xl font-semibold text-foreground md:text-2xl">
              Upgrading or adding to your account?
            </h2>
            <p className="mt-2 text-muted-foreground">
              We send this same confirmation to everyone because AE Optimizer customers come in at different stages. Some are brand-new and need a full account created. Others are already active and need a plan upgrade, additional one-time credits, or a new feature added behind the scenes. No matter which describes you, we have your request and will follow up with the exact next steps for your situation.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="rounded-lg bg-[color:var(--gold)] px-6 py-3 text-base font-semibold text-primary-foreground shadow-gold transition hover:brightness-110"
            >
              Back to homepage
            </Link>
            <a
              href="mailto:support@aeoptimizer.com"
              className="rounded-lg border border-border bg-[color:var(--surface-elevated)] px-6 py-3 text-base font-semibold text-foreground transition hover:border-[color:var(--gold)]"
            >
              Email support
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
