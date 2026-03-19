import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog - AP Economics Study Tips & Guides",
  description:
    "AP Economics study tips, exam strategies, and concept explanations. Free guides to help you score a 5 on the AP Micro and Macro exams.",
  alternates: { canonical: "https://www.econlearn.org/blog" },
  openGraph: {
    title: "EconLearn Blog - AP Economics Study Tips",
    description:
      "Free AP Economics study guides, FRQ tips, and exam strategies.",
    url: "https://www.econlearn.org/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-6 py-20">
      <h1
        className="text-3xl sm:text-4xl font-bold tracking-tight mb-3"
        style={{ color: "var(--color-ink)" }}
      >
        Blog
      </h1>
      <p
        className="text-lg mb-12"
        style={{ color: "var(--color-ink-muted)" }}
      >
        Study tips, concept breakdowns, and exam strategies for AP Economics.
      </p>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block group rounded-xl p-6 -mx-6 transition-colors hover:bg-black/[0.02]"
              style={{ border: "1px solid transparent" }}
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
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

              <h2
                className="text-xl font-semibold mb-1.5 group-hover:text-blue-600 transition-colors"
                style={{ color: "var(--color-ink)" }}
              >
                {post.title}
              </h2>

              <p
                className="text-sm leading-relaxed mb-2"
                style={{ color: "var(--color-ink-muted)" }}
              >
                {post.description}
              </p>

              <div
                className="flex items-center gap-3 text-xs"
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
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
