import { Shield, Wifi, Lock, ServerCog } from "lucide-react";
import Link from "next/link";
import MotionReveal from "@/components/motion/MotionReveal";

const trustItems = [
  {
    icon: Shield,
    title: "30-Day Money-Back Guarantee On Every IPTV Subscription",
    description:
      "Not satisfied? Contact support within 30 days and every penny returns the same day. No forms, no retention calls, no fine print.",
  },
  {
    icon: Wifi,
    title: "Built For UK-Relevant Scheduling",
    description:
      "The service is tuned for peak weekend windows and evening prime-time. If a stream fails to deliver, our support team credits or refunds at your request.",
  },
  {
    icon: Lock,
    title: "Optional Secure Proxy Add-On For Privacy",
    description:
      "Add the Secure Proxy tunnel from £4.75 per term when you want an extra layer of encryption around your streams. No bandwidth cap, no logs — entirely opt-in.",
  },
  {
    icon: ServerCog,
    title: "UK-Based Support — The IPTV Service That Never Sleeps",
    description:
      "A named British team answers live chat, WhatsApp and email 24/7. Average response times are published weekly so you can check before you commit.",
  },
];

export default function TrustSection() {
  return (
    <section className="relative py-11 lg:py-16">
      <div className="absolute inset-0 section-gradient-2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="text-center mb-16">
          <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-4">
            Four Guarantees You Can Verify
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The British IPTV Promise &mdash; Four Guarantees{" "}
            <span className="gradient-text">You Can Verify</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted">
            Every claim below is published, measured and backed by a full{" "}
            <Link href="/refund" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              same-day refund
            </Link>.
          </p>
        </MotionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <MotionReveal key={item.title} delay={i * 0.1} className="group text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-cyan-50 transition-all group-hover:border-emerald-200 group-hover:bg-emerald-100 group-hover:shadow-lg group-hover:shadow-emerald-100/50">
                <item.icon className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
