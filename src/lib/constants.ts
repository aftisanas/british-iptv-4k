export const SITE_NAME = "British IPTV 4K";
export const SITE_URL = "https://british-iptv-4k.com";
export const CONTACT_EMAIL = "contact@buy-iptv-uk.com";
export const PHONE_NUMBER = "+44 7878 757831";
export const WHATSAPP_NUMBER = "447878757831";

export const EXTRA_CONNECTION_PRICE = 7.25;
export const EXTRA_CONNECTIONS_MAX = 5;

export const CHECKOUT_COPY = {
  extraConnectionsLabel: "Additional Devices",
  extraConnectionsHelp:
    "Add extra simultaneous streams beyond the five included in every plan.",
  extraConnectionsPriceLabel: `+£${EXTRA_CONNECTION_PRICE.toFixed(2)} per extra device`,
  buttonLabelPrefix: "Complete Order On WhatsApp",
  buttonSubtitle:
    "You will be redirected to WhatsApp to confirm your order and receive payment details.",
  footerNote: "Encrypted checkout · 30-day money-back guarantee",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Why Us", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const GUIDE_LINKS = [
  { label: "IPTV Subscription UK", href: "/iptv-subscription-uk" },
  { label: "Best IPTV UK 2026 Guide", href: "/blog/best-iptv-uk-guide-2026" },
  { label: "Fire Stick Setup Guide", href: "/blog/how-to-setup-iptv-firestick" },
] as const;

export const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "DMCA Policy", href: "/dmca" },
  { label: "Refund Policy", href: "/refund" },
] as const;

export const STATS = [
  { value: "37,000+", label: "Live Channels" },
  { value: "198,000+", label: "Films & Series" },
  { value: "5", label: "Screens Included" },
  { value: "30 Days", label: "Money-Back Guarantee" },
] as const;

export const FEATURES = [
  {
    title: "British IPTV With 37,000 Live Channels — A Comprehensive UK Library",
    description:
      "With over 37,000 live channels available and continuously expanding, this service delivers strong variety across all categories. Everything viewers expect is included in one place, making it one of the more complete IPTV UK selections.",
    icon: "Tv" as const,
  },
  {
    title: "Native 4K UHD Streaming On Every Plan",
    description:
      "If the broadcaster transmits 4K, your screen receives 4K. Our adaptive bitrate engine scales the picture only when broadband dips — never because the plan restricts it. Every tier includes UHD at no extra cost.",
    icon: "Monitor" as const,
  },
  {
    title: "British IPTV Built For UK Viewing",
    description:
      "The programme guide is locked to GMT with UK channels first, and regional variants match your postcode. Lower latency for major weekend kick-offs and evening prime-time viewing.",
    icon: "Zap" as const,
  },
  {
    title: "Fast IPTV Activation — Streaming In Under 60 Seconds",
    description:
      "Pay and your credentials land by email before you close the checkout tab. No manual review, no activation queue — just fast delivery that lets you watch within a minute of placing the order.",
    icon: "Clock" as const,
  },
  {
    title: "Best IPTV UK For Families — Five Simultaneous Screens",
    description:
      "Mum on the soaps, Dad on the football, kids on their favourite cartoons, Nan on a period drama and you on a documentary. Five concurrent streams mean nobody fights over the remote.",
    icon: "LayoutGrid" as const,
  },
  {
    title: "Cheap IPTV Subscription From £8.66 Per Month",
    description:
      "A full British library at a price that undercuts traditional pay-TV by tens of pounds a month. From £8.66 per month you unlock 37,000 live channels, native 4K UHD and five simultaneous screens. Value without compromise.",
    icon: "Clock" as const,
  },
  {
    title: "Optional Secure Proxy Add-On For Extra Privacy",
    description:
      "Add the Secure Proxy tunnel to any plan from £4.75 per term when you want an extra layer of encryption around your streams. No bandwidth cap, no usage logs and no upsell — it is entirely opt-in.",
    icon: "Shield" as const,
  },
  {
    title: "24/7 UK Support — An IPTV Service That Actually Answers",
    description:
      "A British support team handles live chat, WhatsApp and email around the clock. Average first reply sits under four minutes — measured and published weekly.",
    icon: "Film" as const,
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "bronze",
    tier: "Starter",
    name: "3 Months",
    subtitle: "A quarter of full British IPTV — ideal first step",
    price: 25.99,
    originalPrice: 39.99,
    perMonth: 8.66,
    period: "3 months",
    devices: 5,
    proxyPrice: 4.75,
    badge: "Starter",
    discount: "-35%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Extra connection options available as add-ons",
      "24/7 dedicated UK support",
      "Secure Proxy add-on available (from £4.75/term)",
      "30-day money-back guarantee",
      "60-second activation by email",
    ],
    popular: false,
    savings: null,
  },
  {
    id: "silver",
    tier: "Half-Year Saver",
    name: "6 Months",
    subtitle: "Six months of uninterrupted streaming at a strong price point",
    price: 35.99,
    originalPrice: 59.99,
    perMonth: 5.83,
    period: "6 months",
    devices: 5,
    proxyPrice: 9.50,
    badge: "Half-Year Saver",
    discount: "-45%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Extra connection options available as add-ons",
      "24/7 dedicated UK support",
      "Secure Proxy add-on available (from £4.75/term)",
      "30-day money-back guarantee",
      "60-second activation by email",
    ],
    popular: false,
    savings: "Save 45%",
  },
  {
    id: "gold",
    tier: "Annual",
    name: "12 Months",
    subtitle: "A full year at the best value rate",
    price: 49.99,
    originalPrice: 89.99,
    perMonth: 4.17,
    period: "year",
    devices: 5,
    proxyPrice: 19.00,
    badge: "Most Popular — Save 40%",
    discount: "-40%",
    accentColor: "blue",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Extra connection options available as add-ons",
      "24/7 dedicated UK support",
      "Secure Proxy add-on available (from £4.75/term)",
      "30-day money-back guarantee",
      "60-second activation by email",
    ],
    popular: true,
    savings: "Save 40%",
  },
  {
    id: "diamond",
    tier: "Elite",
    name: "24 Months",
    subtitle: "Two years locked at the lowest monthly price",
    price: 79.99,
    originalPrice: 159.99,
    perMonth: 2.96,
    period: "2 years",
    devices: 5,
    proxyPrice: 38.00,
    badge: "Elite — Save 55%",
    discount: "-55%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and native 4K UHD streaming",
      "Extra connection options available as add-ons",
      "24/7 dedicated UK support",
      "Secure Proxy add-on available (from £4.75/term)",
      "30-day money-back guarantee",
      "60-second activation by email",
    ],
    popular: false,
    savings: "Save 55%",
  },
] as const;

export const DEVICES = [
  { name: "Amazon Fire Stick", icon: "Flame" as const },
  { name: "Smart TV", icon: "Tv" as const },
  { name: "Android / iOS", icon: "Smartphone" as const },
  { name: "Windows / Mac", icon: "Monitor" as const },
  { name: "MAG / Formuler", icon: "Box" as const },
  { name: "Apple TV", icon: "Airplay" as const },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is British IPTV and how does the service work?",
    answer:
      "British IPTV delivers live UK television, on-demand films and international channels over your broadband connection instead of a satellite dish or aerial. It works on any internet-connected device, giving access to 37,000 channels including every major UK broadcaster.",
  },
  {
    question: "How is this different from other IPTV providers?",
    answer:
      "All streams route through UK-based servers. The EPG is organised around British time zones, UK channels sit at the top of every guide, support is handled by a named British team and pricing is transparent in GBP.",
  },
  {
    question: "Which devices work with this IPTV UK service?",
    answer:
      "Amazon Firestick, Samsung and LG smart TVs, Android TV, Nvidia Shield, Apple TV, iPhones, iPads, Android phones, MAG boxes, Formuler, Enigma2, Windows and Mac. One login covers up to five screens.",
  },
  {
    question: "Does every plan include native 4K UHD streaming?",
    answer:
      "Yes. Every tier includes 4K UHD on channels that broadcast in the format. The stream scales to HD automatically on older equipment or slower connections.",
  },
  {
    question: "Can I watch outside the UK?",
    answer:
      "Yes — the service is accessible from any internet-connected device worldwide. Add the optional Secure Proxy tunnel from £4.75 per term if you would like an extra layer of encryption or want the UK guide to load abroad exactly as it does at home.",
  },
  {
    question: "How fast is activation after I buy IPTV?",
    answer:
      "Under sixty seconds. Your M3U link and app credentials arrive by email the moment payment clears. No manual step, no waiting for office hours.",
  },
  {
    question: "Is there a contract or cancellation fee?",
    answer:
      "No contract and no cancellation fee. Every plan includes a 30-day money-back guarantee — request a refund and every penny returns the same day.",
  },
  {
    question: "Why do IPTV reviews rate this the best IPTV UK choice?",
    answer:
      "Four measurable wins: a comprehensive channel list at 37,000+ live streams, activation under 60 seconds, a starting price of £8.66 per month and a 30-day money-back guarantee on every plan. Combined with UK-based support and an optional Secure Proxy add-on, reviewers consistently rank it among the top British IPTV options.",
  },
  {
    question: "Does British IPTV include 7-day catch-up?",
    answer:
      "Yes. Catch-up is active on all major British channels. Scroll back through the EPG, pick the programme you missed and press play — no add-on required.",
  },
  {
    question: "What internet speed do I need?",
    answer:
      "25 Mbps delivers clean 4K. 10 Mbps handles HD comfortably. Anti-Freeze technology adapts the bitrate mid-stream so the picture stays stable even on slower rural broadband.",
  },
  {
    question: "How do I reach support?",
    answer:
      "Live chat, WhatsApp or email — answered by a UK team 24 hours a day. Average first response sits under four minutes.",
  },
  {
    question: "What is IPTV and how does it work in the UK?",
    answer:
      "IPTV (Internet Protocol Television) delivers live channels and on-demand films over your broadband connection instead of a satellite dish or aerial. In the UK it works on any internet-connected device — Fire Stick, Smart TV, phone or computer — by loading a channel list and playing streams over the internet. British IPTV 4K carries 37,000+ live channels and 198,000+ on-demand titles this way.",
  },
  {
    question: "How much does IPTV cost in the UK?",
    answer:
      "A British IPTV 4K subscription starts at £25.99 for 3 months, which works out at £8.66 per month. Longer terms cost less per month: £34.99 for 6 months, £49.99 for 12 months and £70.99 for 24 months. Every plan includes the full channel list, 4K UHD and five screens, with a 30-day money-back guarantee.",
  },
  {
    question: "Is IPTV legal in the UK?",
    answer:
      "IPTV as a technology is entirely legal in the UK — it simply means delivering television over the internet rather than by aerial or satellite, and it is how most modern catch-up and streaming apps work. The legal question always concerns the content itself: streaming channels you are not authorised to access is not legal, regardless of who supplies them. Choose a paid provider with a clear refund policy and real customer support rather than anonymous free streams.",
  },
  {
    question: "Which is the best IPTV service in the UK?",
    answer:
      "The best UK IPTV service is one built for UK-relevant viewing with full British channel coverage, a GMT-locked EPG, native 4K and a genuine money-back guarantee. British IPTV 4K meets all four, which is why it tops our comparison of UK streaming options — read the full best IPTV UK guide for how the alternatives compare.",
  },
  {
    question: "How do I set up IPTV on a Fire Stick in the UK?",
    answer:
      "Enable apps from unknown sources, install the Downloader app, download a player such as IPTV Smarters Pro, then enter the credentials emailed to you after purchase. The whole process takes under ten minutes — our step-by-step Fire Stick setup guide walks through every screen.",
  },
  {
    question: "Why does IPTV buffer, and how do I fix it?",
    answer:
      "Buffering is almost always caused by slow or congested broadband, an overloaded server, or an underpowered device. Fixes: use a wired or 5GHz connection, aim for 25 Mbps for 4K, close background apps, and choose a provider with UK-based servers. British IPTV 4K's anti-freeze technology adapts the bitrate mid-stream to keep the picture stable.",
  },
  {
    question: "Do I need a VPN to use IPTV in the UK?",
    answer:
      "It is entirely optional. British IPTV 4K offers a Secure Proxy add-on from £4.75 per term that encrypts each stream with no bandwidth cap and no logs, and helps the full UK guide load when you travel abroad. If you already run your own VPN or do not want one, no add-on is required.",
  },
] as const;

export const CHANNEL_CATEGORIES = [
  {
    name: "British Sport — Live Football, Rugby And Racing",
    count: "5,500+",
    icon: "Trophy" as const,
    channels:
      "Extensive live sports coverage across football, rugby, racing and more, all streaming in HD or 4K. From weekly fixtures to major tournaments, every key moment is available in one place.",
  },
  {
    name: "Classic British Entertainment — Complete UK Picks",
    count: "500+",
    icon: "Tv" as const,
    channels:
      "A complete selection of British entertainment including drama, reality shows, and comedy, all in high quality. Includes regional variations and +1 timeshift options so you never miss your favourite content.",
  },
  {
    name: "On-Demand Cinema — 198,000 Titles In One IPTV Service",
    count: "198,000+",
    icon: "Film" as const,
    channels:
      "A vast on-demand film library covering the latest theatrical releases, box-office hits and international premieres alongside a deep back-catalogue of classic British and world cinema. New releases arrive shortly after they hit digital.",
  },
  {
    name: "News And Current Affairs On Fast IPTV Feeds",
    count: "1,200+",
    icon: "Newspaper" as const,
    channels:
      "Continuous news coverage with fast, reliable streams across global and local events. Low latency ensures you receive updates instantly as stories unfold.",
  },
  {
    name: "Kids’ Channels — Best IPTV UK For Young Viewers",
    count: "800+",
    icon: "Baby" as const,
    channels:
      "A rich variety of children’s programming available in HD, with secure parental controls and easy PIN protection. Safe viewing settings can be activated in seconds for complete peace of mind.",
  },
  {
    name: "International Feeds — 40+ Languages, One IPTV Subscription",
    count: "17,000+",
    icon: "Globe" as const,
    channels:
      "Arabic, Urdu, Hindi, Polish, Portuguese, Turkish, French and Somali channels come bundled. Filter by language or country from the sidebar and switch between British and international content in a single tap.",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "best-iptv-uk-guide-2026",
    title: "Best IPTV UK 2026 — Top 5 Ways To Stream British TV Compared",
    excerpt:
      "We compared the best IPTV and streaming options for UK viewers — British IPTV 4K, big-brand satellite or broadband TV, cable bundles, free terrestrial and budget IPTV resellers — ranked by channels, picture quality, price and reliability.",
    date: "2026-04-01",
    updated: "2026-07-14",
    readTime: "12 min read",
    category: "Guide",
  },
  {
    slug: "how-to-setup-iptv-firestick",
    title: "How To Set Up A British IPTV Subscription On Amazon Fire Stick",
    excerpt:
      "A complete, beginner-friendly guide to installing and configuring British IPTV on an Amazon Fire Stick. Stream 37,000 UK channels in 4K in under 10 minutes using the step-by-step instructions below.",
    date: "2026-03-20",
    updated: "2026-03-20",
    readTime: "6 min read",
    category: "Tutorial",
  },
] as const;
