'use-client'
import React from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { PostDetail } from '@/lib/types/blog';
import Tag from '@/components/ui/Tag';

interface BlogContentProps {
  post: PostDetail;
}

export default function BlogContent({ post }: BlogContentProps) {
  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {post.title}
        </h1>
        
        <div className="flex items-center mb-6">
          <div className="relative h-10 w-10 rounded-full overflow-hidden mr-4">
            <Image 
              src={post.author.profilePicture || '/images/default-avatar.png'} 
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-medium">{post.author.name}</p>
            <p className="text-gray-600 text-sm">
              {format(new Date(post.dateAdded), 'MMMM dd, yyyy')}
            </p>
          </div>
        </div>
        
        {post.coverImage?.url && (
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
            <Image 
              src={post.coverImage.url} 
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        
        <div className="flex flex-wrap mb-8">
          {post.tags.map((tag) => (
            <Tag key={tag.slug} tag={tag} />
          ))}
        </div>
      </header>
      
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{post.content.markdown}</ReactMarkdown>
      </div>
    </article>
  );
}