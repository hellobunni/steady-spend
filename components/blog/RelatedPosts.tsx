import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BlogPost } from "@/lib/blog/types";

type Props = {
  posts: BlogPost[];
};

export default function RelatedPosts({ posts }: Props) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 border-t border-slate-200 pt-12">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        Related Articles
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="group h-full border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:border-emerald-200 hover:shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold leading-tight text-slate-900 transition-colors group-hover:text-emerald-700">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm leading-relaxed text-slate-600 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-emerald-700 transition-colors group-hover:text-emerald-800">
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
