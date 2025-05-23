import React from 'react';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Developer Blog</h3>
            <p className="text-gray-300">
              Sharing knowledge and insights about web development and programming.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/blogs" className="text-gray-300 hover:text-white transition-colors">
                  All Posts
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Developer Blog. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}