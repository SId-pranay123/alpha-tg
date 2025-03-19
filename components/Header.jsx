'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl">
            SkyTrade Alpha
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <Link 
              href="/" 
              className="px-3 py-2 rounded hover:bg-gray-700"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="px-3 py-2 rounded hover:bg-gray-700"
            >
              About
            </Link>
            <Link 
              href="/alpha" 
              className="px-3 py-2 rounded bg-blue-600 hover:bg-blue-700"
            >
              Alpha Content
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-2">
            <Link 
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              Home
            </Link>
            <Link 
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded hover:bg-gray-700"
            >
              About
            </Link>
            <Link 
              href="/alpha"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded bg-blue-600 hover:bg-blue-700 mt-1"
            >
              Alpha Content
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}