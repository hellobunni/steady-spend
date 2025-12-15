import type { Metadata } from "next";
import { FileText, Sparkles, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog/getBlogPosts";

export const metadata: Metadata = {
  title: "Money tips & budgeting blog | SteadySpend",
  description:
    "Calm, practical budgeting tips, spending guides, and money stories to help you understand your finances and make confident day-to-day decisions.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-5xl px-2 sm:px-4">
        {/* Header */}
        <section className="mb-10 text-center sm:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
            <Sparkles className="h-4 w-4" />
            Gentle money guidance
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Money tips
            <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {" "}
              & insights
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-base text-slate-600 sm:text-lg">
            Calm, practical articles to help you understand your spending,
            adjust your budget, and feel more steady with your money.
          </p>
        </section>

        {/* Blog Posts Grid */}
        <section
          aria-label="Latest money and budgeting articles"
          className="grid gap-6 md:grid-cols-2"
        >
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="h-full">
                <Card className="h-full cursor-pointer border border-emerald-100/70 bg-white/80 shadow-sm transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="mb-3 flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-emerald-50 to-teal-50">
                        <FileText className="h-5 w-5 text-emerald-700" />
                      </div>
                      <span className="inline-flex rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-800">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-semibold text-slate-900 sm:text-xl">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </article>
            </Link>
          ))}
        </section>

        {/* Coming Soon - only show if no posts */}
        {posts.length === 0 && (
          <section className="mt-10 sm:mt-12">
            <Card className="border border-emerald-100/70 bg-linear-to-br from-white via-emerald-50/40 to-teal-50/30">
              <CardContent className="px-6 py-6 text-center sm:px-8 sm:py-8">
                <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
                  More articles coming soon
                </h2>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">
                  We&apos;re slowly adding more guides, stories, and calm
                  step-by-step walkthroughs to help you build a budget that feels
                  steady and sustainable.
                </p>
              </CardContent>
            </Card>
          </section>
        )}
      </div>
    </div>
  );
}