import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, Mail, MonitorPlay, ShieldCheck, Zap } from "lucide-react";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/constants";
import SectionLink from "@/components/SectionLink";

export const metadata: Metadata = {
  title: "IPTV Free Trial UK — Test 37,000 Channels Before You Buy",
  description:
    "Request an IPTV free trial in the UK and test British IPTV 4K before paying a penny. Full access to 37,000 channels, 4K UHD and catch-up — plus a 30-day money-back guarantee on every plan.",
  alternates: { canonical: "/iptv-free-trial" },
  openGraph: {
    title: "IPTV Free Trial UK — Test 37,000 Channels Before You Buy",
    description:
      "Request an IPTV free trial in the UK and test British IPTV 4K before paying a penny. Full access, no card required for the trial.",
    url: `${SITE_URL}/iptv-free-trial`,
    type: "website",
  },
};

const TRIAL_STEPS = [
  {
    icon: Mail,
    title: "1. Request your trial",
    text: `Email ${CONTACT_EMAIL} or use the contact page with the word "TRIAL" and the device you plan to watch on. No card details are required.`,
  },
  {
    icon: Zap,
    title: "2. Receive credentials in minutes",
    text: "Your trial login — M3U link, username and password — arrives by email, usually within minutes during UK hours.",
  },
  {
    icon: MonitorPlay,
    title: "3. Test everything",
    text: "Load the full guide on your Firestick, Smart TV, phone or MAG box and put the service through its paces — live sport, 4K films, catch-up, the lot.",
  },
];

const TRIAL_FAQS = [
  {
    question: "How do I get an IPTV free trial in the UK?",
    answer: `Send a message to ${CONTACT_EMAIL} or through the contact page asking for a trial, along with the device you will use. Trial credentials are sent by email — no payment details are taken for the trial.`,
  },
  {
    question: "What is included in the IPTV trial?",
    answer:
      "The trial gives access to the same service as a paid plan: 37,000+ live channels including every major UK broadcaster, 198,000+ on-demand films and series, 4K UHD streams and the 7-day catch-up guide.",
  },
  {
    question: "How long does the free trial last?",
    answer:
      "Trials run long enough to properly test the service — including a peak-time evening, which is when weak IPTV providers fall over. On top of that, every paid plan carries a 30-day money-back guarantee, so the effective risk-free window is a full month.",
  },
  {
    question: "Do I need a VPN for the trial?",
    answer:
      "No. A full VPN is built into the service at no extra cost, on trials and paid plans alike. You simply install the app, enter your credentials and start watching.",
  },
];

export default function IptvFreeTrialPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "IPTV Free Trial UK",
        item: `${SITE_URL}/iptv-free-trial`,
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: TRIAL_FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
          IPTV Free Trial UK — Test British IPTV Before You Buy
        </h1>
        <p className="text-lg text-muted leading-relaxed mb-4">
          The fastest way to know whether an IPTV service is right for your home is to watch it.
          That is why <Link href="/" className="text-primary hover:underline font-medium">British IPTV</Link>{" "}
          offers a genuine UK free trial: full access to 37,000+ live channels, 198,000+ films and
          series and native 4K UHD — before you pay anything.
        </p>
        <p className="text-base text-gray-600 leading-relaxed mb-10">
          No card details, no obligation. And if you do subscribe, every plan is covered by a
          30-day money-back guarantee, so the risk stays at zero for a full month.
        </p>

        {/* Steps */}
        <h2 className="text-2xl font-bold text-foreground mb-6">
          How To Get Your UK IPTV Trial In 3 Steps
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {TRIAL_STEPS.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm"
            >
              <step.icon className="h-6 w-6 text-violet-600 mb-3" />
              <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>

        {/* What you can test */}
        <h2 className="text-2xl font-bold text-foreground mb-4">
          What To Test During Your IPTV Free Trial
        </h2>
        <ul className="space-y-3 mb-12">
          {[
            "Peak-time stability — load Sky Sports or TNT Sports during a Saturday 3pm kickoff; weak providers buffer, strong UK servers do not",
            "4K UHD picture — pick a 4K channel and confirm your broadband holds a clean stream (25 Mbps recommended)",
            "The EPG and 7-day catch-up — scroll back and replay a programme you missed",
            "Your own devices — Firestick, Samsung or LG Smart TV, Android, iPhone, MAG or Formuler box",
            "Support response — message the team mid-trial and time the reply; average first response is under four minutes",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Trial vs guarantee */}
        <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-cyan-50 p-8 mb-12">
          <div className="flex items-start gap-4">
            <ShieldCheck className="h-8 w-8 text-violet-600 shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">
                Free Trial + 30-Day Money-Back Guarantee
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Most IPTV providers in the UK offer one or the other. British IPTV 4K gives you
                both: test first with the trial, then subscribe knowing a full refund is one email
                away for 30 days. Compare that with budget resellers who offer no refund route at
                all — it is the single biggest difference between a service you can rely on and one
                you cannot. Read our{" "}
                <Link href="/blog/best-iptv-uk-guide-2026" className="text-primary hover:underline">
                  best IPTV UK 2026 comparison
                </Link>{" "}
                to see how the options stack up.
              </p>
            </div>
          </div>
        </div>

        {/* Setup pointer */}
        <div className="flex items-start gap-4 mb-12">
          <Clock className="h-6 w-6 text-violet-600 shrink-0 mt-1" />
          <p className="text-sm text-gray-600 leading-relaxed">
            Setting up takes under ten minutes on any device. Follow the{" "}
            <Link href="/blog/how-to-setup-iptv-firestick" className="text-primary hover:underline">
              Fire Stick setup guide
            </Link>{" "}
            or ask support to walk you through it live. When you are ready for a full plan, see the{" "}
            <Link href="/iptv-subscription-uk" className="text-primary hover:underline">
              IPTV subscription UK plans
            </Link>{" "}
            from £8.66/month.
          </p>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-foreground mb-6">IPTV Free Trial FAQs</h2>
        <div className="space-y-6 mb-14">
          {TRIAL_FAQS.map((item) => (
            <div key={item.question}>
              <h3 className="text-base font-semibold text-foreground mb-2">{item.question}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-primary/15 bg-blue-50 p-8 text-center">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Ready To Start Your Free IPTV Trial?
          </h2>
          <p className="text-muted mb-6">
            Request your trial now, or go straight to a plan — every {SITE_NAME} subscription is
            protected by the 30-day money-back guarantee.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Request Your Free Trial
            </Link>
            <SectionLink
              href="/#pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-violet-200 bg-white px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-violet-400"
            >
              View Subscription Plans
            </SectionLink>
          </div>
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
