import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import KeyFactsSection from "@/components/KeyFactsSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import DevicesSection from "@/components/DevicesSection";
import ChannelsSection from "@/components/ChannelsSection";
import FAQSection from "@/components/FAQSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import {
  CONTACT_EMAIL,
  FAQ_ITEMS,
  PRICING_PLANS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

export default function HomePage() {
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const webpageId = `${SITE_URL}/#webpage`;
  const productId = `${SITE_URL}/#product`;
  const breadcrumbId = `${SITE_URL}/#breadcrumb`;
  const logoUrl = `${SITE_URL}/british-iptv.webp`;

  return (
    <>
      <HeroSection />
      <StatsBar />
      <KeyFactsSection />
      <FeaturesSection />
      <PricingSection />
      <DevicesSection />
      <ChannelsSection />
      <FAQSection />
      <TrustSection />
      <CTASection />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": organizationId,
                name: SITE_NAME,
                alternateName: "British IPTV",
                url: SITE_URL,
                logo: {
                  "@type": "ImageObject",
                  url: logoUrl,
                },
                description:
                  "British IPTV service for UK homes — 37,000 live channels, 198,000 films and series, native 4K UHD streaming and five simultaneous screens, from £8.66/month with a 30-day money-back guarantee.",
                slogan: "British IPTV built for UK homes.",
                areaServed: { "@type": "Country", name: "United Kingdom" },
                knowsAbout: [
                  "British IPTV",
                  "IPTV UK",
                  "IPTV subscription",
                  "4K UHD streaming",
                  "UK television channels",
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  availableLanguage: "English",
                  areaServed: "GB",
                  email: CONTACT_EMAIL,
                },
              },
              {
                "@type": "WebSite",
                "@id": websiteId,
                name: SITE_NAME,
                url: SITE_URL,
                inLanguage: "en-GB",
                publisher: {
                  "@id": organizationId,
                },
              },
              {
                "@type": "WebPage",
                "@id": webpageId,
                url: SITE_URL,
                name: "British IPTV | UK IPTV Subscription From £8.66/mo — 37,000 Channels",
                inLanguage: "en-GB",
                isPartOf: {
                  "@id": websiteId,
                },
                about: {
                  "@id": organizationId,
                },
                breadcrumb: {
                  "@id": breadcrumbId,
                },
                description:
                  "British IPTV built for UK homes — 37,000 channels, 198,000 films and series, native 4K UHD, five simultaneous screens and a 30-day money-back guarantee.",
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: logoUrl,
                },
                speakable: {
                  "@type": "SpeakableSpecification",
                  cssSelector: ["#about h2", "#about p"],
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id": breadcrumbId,
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: SITE_URL,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "British IPTV",
                    item: `${SITE_URL}/#features`,
                  },
                ],
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "@id": productId,
            name: "British IPTV Subscription",
            url: SITE_URL,
            image: [logoUrl],
            description:
              "British IPTV subscription with 37,000+ live channels, 198,000+ on-demand films and series, native 4K UHD and five simultaneous screens — from £8.66/month with a 30-day money-back guarantee.",
            brand: { "@type": "Brand", name: SITE_NAME },
            category: "IPTV subscription",
            offers: PRICING_PLANS.map((plan) => ({
              "@type": "Offer",
              name: `${plan.name} British IPTV Plan`,
              price: plan.price.toFixed(2),
              priceCurrency: "GBP",
              priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
              availability: "https://schema.org/InStock",
              itemCondition: "https://schema.org/NewCondition",
              url: `${SITE_URL}/#pricing`,
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
