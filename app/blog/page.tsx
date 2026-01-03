import type { Metadata } from "next";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { allPosts } from "content-collections/generated";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.steadyspend.com';

export const metadata: Metadata = {
  title: "Money tips & budgeting blog | SteadySpend",
  description:
    "Calm, practical budgeting tips, spending guides, and money stories to help you understand your finances and make confident day-to-day decisions.",
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
};

export default function BlogPage() {
  // Filter and sort posts from Content Collections
  const posts = allPosts
    .filter((post) => post._isVisible !== false) // Filter out future posts
    .filter((post) => post.title && post.date) // Filter out invalid posts
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .map((post) => ({
      title: post.title,
      description: post.description,
      slug: post.slug,
      date: post.date,
      lastModified: post.lastModified,
      category: post.category,
      tags: post.tags,
      featuredImage: post.featuredImage,
      imageAlt: post.imageAlt,
      imageCredit: post.imageCredit,
      author: post.author,
      readTime: post.readTime,
      keywords: post.keywords,
      relatedPosts: post.relatedPosts,
      howTo: post.howTo,
    }));

  const featuredPost = posts[0]; // First post is featured
  const otherPosts = posts.slice(1);

  return (
    <section className="py-20 lg:py-28 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
              <Sparkles className="h-4 w-4" />
              Gentle money guidance
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              Financial <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-lg text-slate-600">
              Tips, guides, and strategies to help you master your money.
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-12">
              <Link href={`/blog/${featuredPost.slug}`}>
                <article className="glass-card overflow-hidden group hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Featured Image */}
                    <div className="relative h-64 md:h-auto min-h-[300px]">
                      {featuredPost.featuredImage ? (
                        <Image
                          src={featuredPost.featuredImage}
                          alt={featuredPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="w-full h-full gradient-primary opacity-80" />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 flex flex-col justify-center">
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full w-fit mb-4">
                        {featuredPost.category}
                      </span>
                      <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-3 group-hover:text-emerald-700 transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-slate-600 text-base mb-6 leading-relaxed">
                        {featuredPost.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {new Date(featuredPost.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                          {featuredPost.readTime && (
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-4 h-4" />
                              {featuredPost.readTime} min
                            </span>
                          )}
                        </div>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          )}

          {/* Other Posts Grid */}
          {otherPosts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="glass-card overflow-hidden group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    {/* Post Image */}
                    <div className="relative h-40">
                      {post.featuredImage ? (
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full gradient-primary opacity-80" />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full w-fit mb-3">
                        {post.category}
                      </span>
                      <h2 className="font-display font-semibold text-lg mb-2 group-hover:text-emerald-700 transition-colors flex-grow">
                        {post.title}
                      </h2>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-slate-500 mt-auto">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                          {post.readTime && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime} min
                            </span>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}

          {/* Coming Soon - only show if no posts */}
          {posts.length === 0 && (
            <div className="glass-card p-8 sm:p-12 text-center">
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                More articles coming soon
              </h2>
              <p className="text-slate-600">
                We&apos;re slowly adding more guides, stories, and calm
                step-by-step walkthroughs to help you build a budget that feels
                steady and sustainable.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}