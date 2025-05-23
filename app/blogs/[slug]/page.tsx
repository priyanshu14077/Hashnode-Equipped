import React from 'react';
import { notFound } from 'next/navigation';
import Container from '@/components/common/Container';
import BlogContent from '@/components/blog/BlogContent';
import { useSinglePost } from '@/lib/hooks/useSinglePost';
import { useSlugs } from '@/lib/hooks/useSlugs';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { fetchPostBySlug } = useSinglePost();
  
  try {
    const post = await fetchPostBySlug(params.slug);
    
    return {
      title: post.seo.title || post.title,
      description: post.seo.description || post.brief,
      openGraph: {
        title: post.seo.title || post.title,
        description: post.seo.description || post.brief,
        url: `https://yourdomain.com/blogs/${post.slug}`,
        siteName: 'Developer Blog',
        images: [
          {
            url: post.coverImage?.url || 'https://yourdomain.com/og-image.jpg',
            width: 1200,
            height: 630,
          },
        ],
        locale: 'en_US',
        type: 'article',
        publishedTime: post.dateAdded,
        modifiedTime: post.updatedAt,
        authors: [post.author.name],
      },
    };
  } catch (error) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }
}


export async function generateStaticParams() {
  const { fetchAllSlugs } = useSlugs();
  const slugs = await fetchAllSlugs();
  
  return slugs.map(slug => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { fetchPostBySlug } = useSinglePost();
  
  try {
    const post = await fetchPostBySlug(params.slug);
    
    return (
      <Container className="py-12">
        <BlogContent post={post} />
      </Container>
    );
  } catch (error) {
    notFound();
  }
}