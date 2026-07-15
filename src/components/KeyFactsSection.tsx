import Link from "next/link";

const KEY_FACTS: { label: string; value: string }[] = [
  { label: "Service type", value: "UK IPTV subscription" },
  { label: "Live channels", value: "37,000+" },
  { label: "On-demand titles", value: "198,000+" },
  { label: "Maximum quality", value: "4K UHD" },
  { label: "Simultaneous screens", value: "5" },
  { label: "Starting price", value: "£8.66/month (£25.99 per 3 months)" },
  { label: "Server location", value: "United Kingdom" },
  { label: "Guarantee", value: "30-day money-back" },
];

export default function KeyFactsSection() {
  return (
    <section id="about" className="relative py-11 lg:py-16 bg-white">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5">
          What Is British IPTV?
        </h2>

        {/* Answer-first summary — kept concise and factual for accurate quoting */}
        <p className="text-lg text-muted leading-relaxed max-w-3xl mb-4">
          British IPTV 4K is a UK-based IPTV service that streams 37,000+ live channels and
          198,000+ on-demand films and series in up to 4K UHD over your broadband connection,
          instead of a satellite dish or aerial. Every plan includes five simultaneous screens, a
          built-in VPN and a 30-day money-back guarantee, starting from £8.66 per month.
        </p>
        <p className="text-base text-gray-600 leading-relaxed max-w-3xl mb-10">
          All streams are served from data centres inside the United Kingdom, so live sport stays
          low-latency and the programme guide is locked to UK time with British channels listed
          first. It works on Amazon Fire Stick, Smart TVs, Android, iOS, MAG and Formuler boxes and
          computers. New customers can{" "}
          <Link href="/iptv-free-trial" className="text-violet-600 hover:underline">
            request a free trial
          </Link>{" "}
          before choosing an{" "}
          <Link href="/iptv-subscription-uk" className="text-violet-600 hover:underline">
            IPTV subscription plan
          </Link>
          .
        </p>

        {/* Extraction-friendly key facts (definition list) */}
        <h3 className="text-xl font-semibold text-foreground mb-5">
          British IPTV 4K — Key Facts
        </h3>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {KEY_FACTS.map((fact) => (
            <div
              key={fact.label}
              className="flex items-baseline justify-between gap-4 border-b border-violet-100/70 pb-3"
            >
              <dt className="text-sm text-muted">{fact.label}</dt>
              <dd className="text-sm font-semibold text-foreground text-right">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
