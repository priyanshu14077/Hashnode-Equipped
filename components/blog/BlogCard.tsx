'use-client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { Post } from '@/lib/types/blog';
import Tag from '@/components/ui/Tag';

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/blogs/${post.slug}`}>
        {post.coverImage?.url && (
          <div className="relative h-48 w-full">
            <Image 
              src={post.coverImage.url} 
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
          <p className="text-gray-600 text-sm mb-4">
            {format(new Date(post.dateAdded), 'MMMM dd, yyyy')}
          </p>
          <p className="text-gray-700 mb-4 line-clamp-3">{post.brief}</p>
          <div className="flex flex-wrap">
            {post.tags.slice(0, 3).map((tag) => (
              <Tag key={tag.slug} tag={tag} />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}