import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';
import { BlogPost } from '@/lib/blog/types';

type Props = {
  post: BlogPost;
};

export default function BlogPostMeta({ post }: Props) {
  const isNamedAuthor = post.author && 
    post.author !== 'SteadySpend Team' && 
    post.author !== 'Lynae Thomas';
  
  const authorHref = isNamedAuthor ? '/about' : undefined;

  return (
    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600">
      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </div>
      {post.readTime && (
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{post.readTime} min read</span>
        </div>
      )}
      {post.author && (
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          {authorHref ? (
            <Link 
              href={authorHref}
              className="hover:text-slate-900 hover:underline transition-colors"
            >
              {post.author}
            </Link>
          ) : (
            <span>{post.author}</span>
          )}
        </div>
      )}
    </div>
  );
}

