import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getBlogPosts } from "@/lib/blog/getBlogPosts";

export function FeaturedPostsSection() {
  const posts = getBlogPosts().slice(0, 3); // Get latest 3 posts

  // Format date helper
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Format read time helper
  const formatReadTime = (minutes?: number) => {
    if (!minutes) return "5 min";
    return `${minutes} min`;
  };

  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 ">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            <span className="bg-linear-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
              Personal Finance Education
            </span>{" "}
            & 2026 Budgeting Tips
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert guides and practical tips to help you make smarter financial decisions and build
            lasting wealth
          </p>
        </div>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {posts.map((post, index) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                  <article
                    className="glass-card overflow-hidden h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    {/* Thumbnail placeholder */}
                    {post.featuredImage ? (
                      <div
                        className="h-40 bg-cover bg-center"
                        style={{ backgroundImage: `url(${post.featuredImage})` }}
                        role="img"
                        aria-label={`${post.title} - Monthly Budgeting Guide for 2026`}
                      />
                    ) : (
                      <div className="h-40 gradient-primary opacity-80" />
                    )}

                    <div className="p-6">
                      {/* Category */}
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {post.category}
                      </span>

                      {/* Title */}
                      <h3 className="font-display font-semibold text-lg mt-3 mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.description}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.date)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {formatReadTime(post.readTime)}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* View All Link */}
            <div className="text-center">
              <Button variant="outline" size="lg" className="group" asChild>
                <Link href="/blog">
                  Explore All Budgeting Methods
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">More articles coming soon</p>
          </div>
        )}
      </div>
    </section>
  );
}
