import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, CheckCircle2, Tv2 } from "lucide-react";
import { PRICING_PLANS, SITE_URL } from "@/lib/constants";
import SectionLink from "@/components/SectionLink";

export const metadata: Metadata = {
  title: "IPTV Subscription UK — Plans From £8.66/Month, No Contract",
  description:
    "Compare UK IPTV subscription plans: 37,000+ live channels, 198,000+ films, native 4K UHD, five screens and an optional Secure Proxy add-on. From £25.99 per 3 months with a 30-day money-back guarantee.",
  alternates: { canonical: "/iptv-subscription-uk" },
  openGraph: {
    title: "IPTV Subscription UK — Plans From £8.66/Month, No Contract",
    description:
      "Compare UK IPTV subscription plans: 37,000+ channels, 4K UHD, five screens, optional Secure Proxy add-on and a 30-day money-back guarantee.",
    url: `${SITE_URL}/iptv-subscription-uk`,
    type: "website",
  },
};

const INCLUDED = [
  "37,000+ live channels covering the main UK broadcasters plus 17,000+ international feeds",
  "198,000+ films, series and documentaries on demand",
  "Native 4K UHD wherever the broadcaster transmits it, on every plan",
  "Five simultaneous screens on a single account",
  "Full EPG locked to UK time with 7-day catch-up",
  "Optional Secure Proxy add-on for extra privacy (from £4.75/term)",
  "24/7 UK-based support with sub-4-minute first response",
  "30-day money-back guarantee, no contract, cancel anytime",
];

const SUB_FAQS = [
  {
    question: "How much does an IPTV subscription cost in the UK?",
    answer:
      "UK IPTV subscription plans here start at £25.99 for 3 months (£8.66/month). Longer terms cost less per month: £34.99 for 6 months, £49.99 for 12 months and £70.99 for 24 months — every plan includes the full channel list, 4K and five screens.",
  },
  {
    question: "Is there a contract with a UK IPTV subscription?",
    answer:
      "No. Every plan is a fixed prepaid term with no rolling contract, no cancellation fee and a 30-day money-back guarantee on new subscriptions.",
  },
  {
    question: "Which is the best IPTV subscription for UK viewers?",
    answer:
      "The best subscription is one built for UK-relevant viewing with full British channel coverage, a GMT-locked EPG and a genuine refund policy. British IPTV 4K ticks all three, which is why it tops our comparison of UK streaming options.",
  },
  {
    question: "Can I try the service before subscribing?",
    answer:
      "Every new subscription is covered by a 30-day money-back guarantee — sign up, test the full service on your own devices, and request a refund inside 30 days if it is not right for you.",
  },
];

export default function IptvSubscriptionUkPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "IPTV Subscription UK",
        item: `${SITE_URL}/iptv-subscription-uk`,
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SUB_FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
          IPTV Subscription UK — Every Plan, One Complete Service
        </h1>
        <p className="text-lg text-muted leading-relaxed mb-4">
          A UK IPTV subscription with{" "}
          <Link href="/" className="text-primary hover:underline font-medium">British IPTV</Link>{" "}
          works differently from traditional satellite or cable TV: there are no channel packs, no
          add-on tiers and no contract. Every plan — from 3 to 24 months — unlocks the identical
          full service. The only decision is how long you want to lock in your price.
        </p>
        <p className="text-base text-gray-600 leading-relaxed mb-10">
          The programme guide is locked to UK time so British channels sit at the top of every list
          and regional variants match your postcode.
        </p>

        {/* Plans table */}
        <h2 className="text-2xl font-bold text-foreground mb-6">
          UK IPTV Subscription Plans &amp; Prices
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-violet-100 text-left">
                <th className="py-3 pr-4 font-semibold text-foreground">Plan</th>
                <th className="py-3 pr-4 font-semibold text-foreground">Price</th>
                <th className="py-3 pr-4 font-semibold text-foreground">Per month</th>
                <th className="py-3 pr-4 font-semibold text-foreground">Screens</th>
                <th className="py-3 font-semibold text-foreground">Saving</th>
              </tr>
            </thead>
            <tbody>
              {PRICING_PLANS.map((plan) => (
                <tr key={plan.id} className="border-b border-violet-50">
                  <td className="py-3 pr-4 text-foreground font-medium">
                    {plan.name}
                    {plan.popular && (
                      <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-700">
                        <BadgeCheck className="h-3 w-3" /> Most popular
                      </span>
                    )}
                  </td>
                  <td className="py-3 pr-4 text-gray-600">£{plan.price.toFixed(2)}</td>
                  <td className="py-3 pr-4 text-gray-600">£{plan.perMonth.toFixed(2)}/mo</td>
                  <td className="py-3 pr-4 text-gray-600">{plan.devices}</td>
                  <td className="py-3 text-emerald-600 font-medium">{plan.discount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-12">
          Checkout takes under a minute and credentials arrive by email before you close the tab.{" "}
          <SectionLink href="/#pricing" className="text-primary hover:underline font-medium">
            Choose your plan on the pricing section
          </SectionLink>{" "}
          to get started.
        </p>

        {/* What's included */}
        <h2 className="text-2xl font-bold text-foreground mb-4">
          What Every IPTV Subscription Includes
        </h2>
        <ul className="space-y-3 mb-12">
          {INCLUDED.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Why UK-based matters */}
        <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-cyan-50 p-8 mb-12">
          <div className="flex items-start gap-4">
            <Tv2 className="h-8 w-8 text-violet-600 shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">
                Why A UK-Based IPTV Subscription Beats Offshore Resellers
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Many cheap IPTV subscriptions resell streams from servers in mainland Europe or
                further afield. That is why they buffer at Saturday 3pm and why their guides run an
                hour off. British IPTV 4K is built for UK-relevant viewing, with regional channels
                mapped to your postcode and the EPG locked to UK time. Not sure yet? Read the{" "}
                <Link href="/blog/best-iptv-uk-guide-2026" className="text-primary hover:underline">
                  best IPTV UK comparison
                </Link>{" "}
                or browse the{" "}
                <SectionLink href="/#pricing" className="text-primary hover:underline">
                  pricing plans
                </SectionLink>
                . Every subscription comes with a 30-day money-back guarantee.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-foreground mb-6">
          IPTV Subscription UK — FAQs
        </h2>
        <div className="space-y-6 mb-14">
          {SUB_FAQS.map((item) => (
            <div key={item.question}>
              <h3 className="text-base font-semibold text-foreground mb-2">{item.question}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-primary/15 bg-blue-50 p-8 text-center">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Start Your UK IPTV Subscription Today
          </h2>
          <p className="text-muted mb-6">
            From £8.66/month with a 30-day money-back guarantee — activated in under 60 seconds.
          </p>
          <SectionLink
            href="/#pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            View Plans &amp; Subscribe
          </SectionLink>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </div>
  );
}
