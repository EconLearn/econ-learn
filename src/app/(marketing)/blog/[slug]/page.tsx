import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://www.econlearn.org/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.econlearn.org/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

// Simple markdown-ish renderer for blog content
function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="text-xl font-bold mt-8 mb-3"
          style={{ color: "var(--color-ink)" }}
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.trim() === "") {
      continue;
    } else {
      // Process inline bold
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const rendered = parts.map((part, j) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={j} style={{ color: "var(--color-ink)" }}>
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      elements.push(
        <p
          key={key++}
          className="text-[15px] leading-relaxed mb-4"
          style={{ color: "var(--color-ink-muted)" }}
        >
          {rendered}
        </p>
      );
    }
  }

  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Organization",
      name: "EconLearn",
      url: "https://www.econlearn.org",
    },
    publisher: {
      "@type": "Organization",
      name: "EconLearn",
      url: "https://www.econlearn.org",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.econlearn.org/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto px-5 sm:px-6 py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8">
          <Link
            href="/blog"
            className="hover:underline"
            style={{ color: "var(--color-ink-muted)" }}
          >
            Blog
          </Link>
          <span style={{ color: "var(--color-ink-faint)" }}>/</span>
          <span style={{ color: "var(--color-ink-faint)" }}>
            {post.title.length > 50
              ? post.title.slice(0, 50) + "..."
              : post.title}
          </span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(59, 130, 246, 0.08)",
                  color: "var(--color-ink-muted)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-3"
            style={{ color: "var(--color-ink)" }}
          >
            {post.title}
          </h1>

          <div
            className="flex items-center gap-3 text-sm"
            style={{ color: "var(--color-ink-faint)" }}
          >
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose-custom">{renderContent(post.content)}</div>

        {/* CTA */}
        <div
          className="mt-12 p-6 rounded-xl text-center"
          style={{
            background: "var(--color-surface-raised)",
            border: "1px solid var(--color-border-subtle)",
          }}
        >
          <p
            className="text-lg font-semibold mb-2"
            style={{ color: "var(--color-ink)" }}
          >
            Ready to study?
          </p>
          <p
            className="text-sm mb-4"
            style={{ color: "var(--color-ink-muted)" }}
          >
            EconLearn has interactive graphs, 350+ practice questions, and
            flashcards for every AP Economics topic.
          </p>
          <Link
            href="/micro/basic-concepts"
            className="btn-primary inline-flex items-center px-6 py-2.5 text-sm"
          >
            Start Learning Free
            <svg
              className="w-4 h-4 ml-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </article>
    </>
  );
}
