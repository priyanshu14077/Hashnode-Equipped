import React from 'react';
import Container from '@/components/common/Container';
import BlogList from '@/components/blog/BlogList';
import { useBlogPosts } from '@/lib/hooks/useBlogPosts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Blog Posts | Developer Blog',
  description: 'Browse all our articles and tutorials on web development, programming, and technology.',
};

export default async function BlogsPage() {
  const { fetchPosts } = useBlogPosts();
  const { posts } = await fetchPosts(1, 12);

  return (
    <Container className="py-12">
      <h1 className="text-3xl font-bold mb-8">All Blog Posts</h1>
      <BlogList posts={posts} />
    </Container>
  );
}


    