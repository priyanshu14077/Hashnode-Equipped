import React from 'react';
import Link from 'next/link';
import Container from './Container';

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <Container>
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Developer Blog
          </Link>
          
          <ul className="flex space-x-6">
            <li>
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/blogs" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}