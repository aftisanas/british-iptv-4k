import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS, SITE_URL, SITE_NAME } from "@/lib/constants";
import BlogPostContent from "./BlogPostContent";

const blogContent: Record<string, { content: string[] }> = {
  "best-iptv-uk-guide-2026": {
    content: [
      "Searching for the best IPTV UK option in 2026 means cutting through dozens of near-identical promises. We ranked the five most popular ways British households stream television — comparing channel line-ups, picture quality, contracts, price and reliability — so you can see exactly which option fits your home before you spend a penny. Updated July 2026.",
      "## How We Ranked The Best IPTV UK Options\n\nEvery option below was scored against the seven things that actually matter to a UK viewer:\n\n- **UK Channel Lineup Quality** — full coverage of BBC, ITV, Channel 4, Channel 5, Sky, TNT Sports and regional broadcasters\n- **Streaming Stability** — performance during peak demand such as Saturday 3pm Premier League kickoffs\n- **Picture Quality** — HD as baseline, Full HD for premium content, native 4K where broadcast\n- **EPG & Catch-Up** — a full electronic programme guide with 7-day catch-up\n- **Device Compatibility** — Firestick, Smart TVs, phones, tablets, MAG boxes and computers\n- **Customer Support** — responsive help on multiple channels, around the clock\n- **Pricing & True Value** — fair monthly cost, no lock-in, genuine money-back guarantee",
      "## 1. British IPTV 4K — Best Overall IPTV UK Service\n\nBritish IPTV 4K takes the top spot because it is the only option in this list built specifically for UK homes: every stream is served from British data centres, the EPG is locked to GMT with UK channels first, and all 37,000+ live channels and 198,000+ on-demand titles are included in every plan — nothing is gated behind a higher tier.\n\n- **Channels:** 37,000+ live including every major UK broadcaster, plus 5,500+ sports feeds\n- **Quality:** native 4K UHD wherever the broadcaster transmits it, at no extra cost\n- **Screens:** five simultaneous devices on one account\n- **Extras:** built-in VPN, 7-day catch-up, anti-freeze technology\n- **Price:** from £8.66/month (3-month plan at £25.99), 30-day money-back guarantee, no contract\n- **Best for:** households that want everything — sport, entertainment, kids and international channels — in one subscription",
      "## 2. Sky Stream — Best Big-Brand Option\n\nSky Stream delivers Sky's polished interface over broadband with no dish required. Picture quality is excellent and the ecosystem is famously reliable. The trade-offs are cost and packaging: sports, cinema and UHD are all paid add-ons, and a comparable line-up quickly reaches £60–£100+ per month. Channel selection is a fraction of what IPTV offers, and multi-room costs extra.",
      "## 3. Virgin Media TV — Best Bundled With Broadband\n\nVirgin's TV packages make sense if you already take Virgin broadband and want one bill. Channel packs are solid and the 360 box is capable, but you are tied to Virgin's network areas, 18-month contracts are standard, and premium sport again sits behind expensive add-ons.",
      "## 4. Freely / Freeview — Best Free Option\n\nFreely (the broadband successor to Freeview) is genuinely free and covers the core British channels — BBC, ITV, Channel 4 and Channel 5 with their catch-up apps. If you only watch terrestrial TV, start here. You give up premium sport, cinema, international channels and most HD/4K content, which is exactly the gap paid IPTV fills.",
      "## 5. Budget IPTV Resellers — Cheapest, But Highest Risk\n\nDozens of anonymous resellers advertise huge channel counts for £3–£5 a month. Some work for a while; many buffer during big matches, disappear overnight, or have no refund route at all. Watch for the classic red flags: unverifiable channel claims, WhatsApp-only contact, no legal pages, no money-back guarantee, fake countdown timers and stock-photo reviews. If the provider cannot show a refund policy, treat the subscription as disposable.",
      "## Comparison Verdict — Which Should You Choose?\n\nFor most UK households in 2026 the decision comes down to budget and coverage. If you only need terrestrial channels, Freely is free. If you want the full premium experience — every sports channel, 4K, catch-up and international content — British IPTV 4K delivers more than Sky and Virgin combined at roughly a tenth of the monthly cost, backed by a 30-day money-back guarantee and UK-based support. Traditional premium TV costs £40–£120 per month; British IPTV 4K starts at £8.66/month, a saving of £300–£1,200 per year.",
      "## Try The #1 Pick Without Risk\n\nBritish IPTV 4K measures up against every criterion above: 37,000+ channels with comprehensive UK broadcaster coverage, HD/4K adaptive streaming, full EPG with 7-day catch-up, support for every major device, and plans from £8.66/month. Every new subscription is covered by a 30-day money-back guarantee, and you can request a trial before committing — see the IPTV free trial page for details.",
    ],
  },
  "how-to-setup-iptv-firestick": {
    content: [
      "Setting up IPTV on your Amazon Fire Stick is surprisingly simple and takes just a few minutes. This step-by-step guide walks you through the entire process from start to finish.",
      "## What You'll Need\n\n- An Amazon Fire Stick (any generation)\n- A stable internet connection (10 Mbps minimum for HD, 25 Mbps for 4K)\n- An active IPTV subscription with login credentials\n- 5-10 minutes of your time",
      "## Step 1: Enable Apps from Unknown Sources\n\nGo to Settings → My Fire TV → Developer Options → Install unknown apps. Find the Downloader app and toggle it ON. This allows you to install IPTV apps that aren't available on the Amazon App Store.",
      "## Step 2: Install the Downloader App\n\nFrom the Fire Stick home screen, search for \"Downloader\" and install it. This free app lets you download IPTV applications directly to your Fire Stick.",
      "## Step 3: Download Your IPTV App\n\nOpen the Downloader app and enter the URL provided by your IPTV service for the app download. Popular IPTV apps include IPTV Smarters Pro, TiviMate, and Smart IPTV. British IPTV 4K recommends IPTV Smarters Pro for the best experience.",
      "## Step 4: Enter Your Credentials\n\nOpen the installed IPTV app and enter the login details provided by your IPTV service — typically a server URL, username, and password. British IPTV 4K sends these via both email and WhatsApp within minutes of purchase.",
      "## Step 5: Start Watching!\n\nThat's it! Your channels should now load, and you can start browsing the EPG, explore the VOD library, and enjoy live TV. If you need any help during setup, our support team is standing by to walk you through it.",
    ],
  },
  "iptv-vs-sky-comparison": {
    content: [
      "Many UK viewers considering IPTV are currently paying for Sky packages. Here is a realistic, honest comparison to help you decide whether switching makes sense for your household.",
      "## Cost Comparison\n\nA Sky package with sports and cinema typically costs £60–£100+ per month, often with an 18-month minimum contract. A comparable IPTV subscription with British IPTV 4K starts from £25.99 for 3 months (or as low as £2.96/month on the 24-month plan) — with no contract and cancel-anytime flexibility. That represents annual savings of £600–£1,200.",
      "## Channel Selection\n\nSky offers curated channel bundles where you pay for channels you may never watch. IPTV provides a much broader selection — 37,000+ channels including all the same Sky channels alongside thousands of additional options from UK and international broadcasters. Nothing is locked behind a higher tier.",
      "## Flexibility & Contracts\n\nSky typically requires a 12–18 month contract with early termination fees. British IPTV 4K offers monthly subscriptions with no long-term commitment. You can cancel anytime, upgrade or downgrade your plan, and you're protected by a 30-day money-back guarantee.",
      "## Streaming Quality\n\nSky delivers excellent picture quality via satellite. British IPTV 4K delivers HD, Full HD, and 4K quality via your broadband connection. With a stable connection of 10+ Mbps, the quality is genuinely comparable. Our adaptive streaming technology adjusts to your internet speed to prevent buffering.",
      "## The Verdict\n\nIPTV is worth switching to if you choose a reliable provider with genuine UK channel coverage and you have a stable broadband connection of at least 10 Mbps. The cost savings alone make it compelling — but only if the service quality meets your expectations, which is why a money-back guarantee is so important.",
    ],
  },
  "premier-league-streaming-guide": {
    content: [
      "For football fans in the UK, watching every Premier League match live is the dream. Traditional TV packages split matches across multiple broadcasters — costing well over £100/month combined. IPTV offers a much better way.",
      "## The Problem with Traditional Sports Packages\n\nPremier League rights are split between Sky Sports, TNT Sports (formerly BT Sport), and Amazon Prime Video. To watch every televised match, you'd need all three — potentially £77+ per month just for football, before you add any entertainment or cinema channels.",
      "## How IPTV Changes the Game\n\nWith British IPTV 4K, you get access to ALL sports channels — Sky Sports Main Event, Sky Sports Premier League, Sky Sports Football, Sky Sports F1, TNT Sports 1-4, BT Sport, and all relevant backup channels for concurrent matches — all included in one subscription from £8.66/month.",
      "## Beyond the Premier League\n\nBritish IPTV 4K's 5,500+ sports channels cover:\n\n- **Champions League & Europa League** on TNT Sports\n- **La Liga, Serie A, Bundesliga** on international sports channels\n- **Six Nations Rugby, The Ashes Cricket** on BBC Sport and Sky Sports\n- **Formula 1** on Sky Sports F1\n- **Wimbledon Tennis** on BBC\n- **Boxing, UFC, Golf** and much more",
      "## Reliability During Peak Matches\n\nThe best IPTV service for Premier League coverage must maintain stability during peak matchday demand. Saturday 3pm kickoffs are the ultimate reliability test. British IPTV 4K uses dedicated sports-optimised servers and anti-freeze technology to ensure buffer-free streaming even during the biggest matches.",
      "## Getting Started\n\nBritish IPTV 4K includes full Premier League coverage across all relevant channels, with plans starting from £8.66/month and a 30-day money-back guarantee. Test the sports channels during a Saturday afternoon kickoff — if it performs well during peak sport, it will perform well at any time.",
    ],
  },
};

type PageParams = { slug: string };

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<PageParams> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const content = blogContent[slug];

  if (!post || !content) {
    notFound();
  }

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updated,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/british-iptv.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  const howToLd =
    slug === "how-to-setup-iptv-firestick"
      ? {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How To Set Up IPTV On An Amazon Fire Stick In The UK",
          description:
            "Install and configure a British IPTV subscription on an Amazon Fire Stick in under ten minutes.",
          totalTime: "PT10M",
          tool: [{ "@type": "HowToTool", name: "Amazon Fire Stick" }],
          supply: [
            { "@type": "HowToSupply", name: "Active IPTV subscription credentials" },
            { "@type": "HowToSupply", name: "Broadband connection (10 Mbps+ for HD, 25 Mbps for 4K)" },
          ],
          step: [
            {
              "@type": "HowToStep",
              position: 1,
              name: "Enable apps from unknown sources",
              text: "Go to Settings → My Fire TV → Developer Options → Install unknown apps and toggle the Downloader app ON.",
            },
            {
              "@type": "HowToStep",
              position: 2,
              name: "Install the Downloader app",
              text: "From the Fire Stick home screen, search for Downloader and install it.",
            },
            {
              "@type": "HowToStep",
              position: 3,
              name: "Download your IPTV app",
              text: "Open Downloader, enter the app URL from your provider and install a player such as IPTV Smarters Pro.",
            },
            {
              "@type": "HowToStep",
              position: 4,
              name: "Enter your credentials",
              text: "Open the player and enter the server URL, username and password emailed to you after purchase.",
            },
            {
              "@type": "HowToStep",
              position: 5,
              name: "Start watching",
              text: "Your channels and EPG load — browse live TV and the VOD library and start streaming.",
            },
          ],
        }
      : null;

  const itemListLd =
    slug === "best-iptv-uk-guide-2026"
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Best IPTV UK 2026 — Top 5 Ways To Stream British TV",
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          numberOfItems: 5,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "British IPTV 4K — Best Overall IPTV UK Service",
              url: `${SITE_URL}/`,
            },
            { "@type": "ListItem", position: 2, name: "Sky Stream — Best Big-Brand Option" },
            { "@type": "ListItem", position: 3, name: "Virgin Media TV — Best Bundled With Broadband" },
            { "@type": "ListItem", position: 4, name: "Freely / Freeview — Best Free Option" },
            { "@type": "ListItem", position: 5, name: "Budget IPTV Resellers — Cheapest, But Highest Risk" },
          ],
        }
      : null;

  return (
    <>
      <BlogPostContent post={post} content={content.content} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      {itemListLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
        />
      )}
      {howToLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }}
        />
      )}
    </>
  );
}
