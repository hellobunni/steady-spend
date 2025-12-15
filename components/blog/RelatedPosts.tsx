import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BlogPost } from '@/lib/blog/types';
import { ArrowRight } from 'lucide-react';

type Props = {
  posts: BlogPost[];
};

export default function RelatedPosts({ posts }: Props) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-12 border-t border-slate-200 pt-8">
      <h2 className="mb-6 text-2xl font-semibold text-slate-900">
        Related Articles
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full border border-emerald-100/70 bg-white/80 shadow-sm transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">
                  {post.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-emerald-700">
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

