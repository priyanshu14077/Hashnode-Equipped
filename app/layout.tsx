// app/layout.tsx
import '@/styles/globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: {
    default: 'Developer Blog',
    template: '%s | Developer Blog',
  },
  description: 'A developer blog built with Next.js and Hashnode Headless CMS',
  keywords: ['web development', 'programming', 'technology', 'tutorial', 'blog'],
  authors: [{ name: 'Your Name' }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}