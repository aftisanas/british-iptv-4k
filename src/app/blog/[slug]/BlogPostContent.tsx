"use client";

import { motion } from "framer-motion";
import { Clock, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import SectionLink from "@/components/SectionLink";

interface RelatedPost {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
}

interface BlogPostContentProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
  };
  content: string[];
  relatedPosts?: RelatedPost[];
}

const INLINE_PATTERN = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = new RegExp(INLINE_PATTERN.source, "g");
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[1] !== undefined) {
      nodes.push(
        <strong key={`${keyPrefix}-b-${key++}`} className="font-semibold text-foreground">
          {match[1]}
        </strong>
      );
    } else if (match[2] !== undefined && match[3] !== undefined) {
      const href = match[3];
      const isExternal = /^https?:\/\//.test(href);
      nodes.push(
        isExternal ? (
          <a
            key={`${keyPrefix}-l-${key++}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary"
          >
            {match[2]}
          </a>
        ) : (
          <Link
            key={`${keyPrefix}-l-${key++}`}
            href={href}
            className="text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary"
          >
            {match[2]}
          </Link>
        )
      );
    }
    lastIndex = pattern.lastIndex;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes.length ? nodes : [text];
}

function renderLine(line: string, key: string): ReactNode {
  if (line.startsWith("## ")) {
    return (
      <h2 key={key} className="text-2xl font-bold text-foreground mt-10 mb-4">
        {renderInline(line.replace("## ", ""), key)}
      </h2>
    );
  }
  if (line.startsWith("### ")) {
    return (
      <h3 key={key} className="text-xl font-semibold text-foreground mt-6 mb-3">
        {renderInline(line.replace("### ", ""), key)}
      </h3>
    );
  }
  const numberedMatch = line.match(/^(\d+)\.\s+(.+)/);
  if (numberedMatch) {
    return (
      <li
        key={key}
        className="text-base text-gray-600 leading-relaxed ml-6 mb-3 list-decimal"
      >
        {renderInline(numberedMatch[2], key)}
      </li>
    );
  }
  if (line.startsWith("- ")) {
    return (
      <li
        key={key}
        className="text-base text-gray-600 leading-relaxed ml-6 mb-2 list-disc"
      >
        {renderInline(line.replace("- ", ""), key)}
      </li>
    );
  }
  if (line.trim() === "") {
    return <br key={key} />;
  }
  return (
    <p key={key} className="text-base text-gray-600 leading-relaxed mb-4">
      {renderInline(line, key)}
    </p>
  );
}

export default function BlogPostContent({
  post,
  content,
  relatedPosts,
}: BlogPostContentProps) {
  return (
    <div className="pt-20">
      <article className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 text-sm text-muted mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
              <span>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              {post.title}
            </h1>

            <p className="text-lg text-muted leading-relaxed">
              {post.excerpt}
            </p>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose-custom"
          >
            {content.map((block, i) => {
              const lines = block.split("\n");
              return (
                <div key={i} className="mb-8">
                  {lines.map((line, j) => renderLine(line, `${i}-${j}`))}
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-2xl border border-primary/15 bg-blue-50 p-8 text-center"
          >
            <h3 className="text-xl font-bold text-foreground mb-3">
              Ready to Start Streaming?
            </h3>
            <p className="text-muted mb-6">
              Get started with British IPTV 4K today. Plans from £8.66/month with a 30-day money-back guarantee.
            </p>
            <SectionLink
              href="/#pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              View Subscription Plans
            </SectionLink>
          </motion.div>

          {relatedPosts && relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Continue Reading
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group block rounded-xl border border-gray-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                  >
                    <div className="mb-3 flex items-center gap-3 text-xs text-muted">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-primary">
                        <Tag className="h-3 w-3" />
                        {rp.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {rp.readTime}
                      </span>
                    </div>
                    <h3 className="mb-2 text-base font-semibold leading-snug text-foreground group-hover:text-primary">
                      {rp.title}
                    </h3>
                    <p className="line-clamp-2 text-sm leading-relaxed text-muted">
                      {rp.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
