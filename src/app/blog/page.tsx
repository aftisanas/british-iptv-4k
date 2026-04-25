import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "IPTV UK Blog — Best IPTV UK Guides, Setup Tips & Reviews",
  description:
    "Expert guides on IPTV UK setup, streaming optimisation, device compatibility and the latest in British IPTV. Learn how to choose the best IPTV providers and unlock the full IPTV UK 4K experience.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogContent />;
}
