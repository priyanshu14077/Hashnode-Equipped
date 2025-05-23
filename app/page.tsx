import React from 'react';
import Container from '@/components/common/Container';
import BlogList from '@/components/blog/BlogList';
import { useBlogPosts } from '@/lib/hooks/useBlogPosts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Developer Blog | Home',
  description: 'Latest articles and tutorials on web development, programming, and technology.',
  openGraph: {
    title: 'Developer Blog | Home',
    description: 'Latest articles and tutorials on web development, programming, and technology.',
    url: 'https://yourdomain.com',
    siteName: 'Developer Blog',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default async function Home() {
  
  const { fetchPosts } = useBlogPosts();
  const { posts } = await fetchPosts(1, 6);

  return (
    <main>
      <Container>
        <section className="py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Welcome to Developer Blog
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Explore the latest articles on web development, programming, and technology.
          </p>
          
          <BlogList posts={posts} />
        </section>
      </Container>
    </main>
  );
}