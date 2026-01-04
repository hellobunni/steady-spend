import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';
import { BlogPost } from '@/lib/blog/types';

type Props = {
  post: BlogPost;
};

/**
 * Format date consistently for server and client to avoid hydration mismatches
 */
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  
  return `${month} ${day}, ${year}`;
}

export default function BlogPostMeta({ post }: Props) {
  const isNamedAuthor = post.author && 
    post.author !== 'SteadySpend Team' && 
    post.author !== 'Lynae Thomas';
  
  const authorHref = isNamedAuthor ? '/about' : undefined;

  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4 text-slate-500" />
        <time dateTime={post.date} className="font-medium">
          {formatDate(post.date)}
        </time>
      </div>
      {post.readTime && (
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-slate-500" />
          <span>{post.readTime} min read</span>
        </div>
      )}
      {post.author && (
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-slate-500" />
          {authorHref ? (
            <Link 
              href={authorHref}
              className="font-medium hover:text-slate-900 hover:underline transition-colors"
            >
              {post.author}
            </Link>
          ) : (
            <span className="font-medium">{post.author}</span>
          )}
        </div>
      )}
    </div>
  );
}

