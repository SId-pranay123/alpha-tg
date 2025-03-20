"use client";

import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Alpha() {
  const [authorized, setAuthorized] = useState(false);
  
  useEffect(() => {
    // Check only localStorage for auth status
    const isAuthorized = localStorage.getItem('alpha_verified') === 'true';
    
    if (!isAuthorized) {
      // Set flag to prevent redirect loops
      if (!sessionStorage.getItem('navigating_to_verify')) {
        sessionStorage.setItem('navigating_to_verify', 'true');
        window.location.href = '/verify-access';
        return;
      }
    }
    
    // If we're still here, we're authorized
    setAuthorized(true);
    // Clear navigation flags
    sessionStorage.removeItem('navigating_to_alpha');
    sessionStorage.removeItem('navigating_to_verify');
  }, []);
  
  if (!authorized) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black text-white">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-lg">Loading alpha content...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="alpha-page min-h-screen bg-black text-white">
      <Head>
        <title>Alpha Section | SkyTrade Alpha</title>
      </Head>
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="inline-block py-1 px-3 rounded bg-purple-900 text-purple-100 text-sm font-medium mb-2">
            Premium Content
          </div>
          <h1 className="text-3xl font-bold text-white">SkyTrade Alpha Insights</h1>
          <p className="text-gray-300 mt-2">
            Exclusive trading signals and market analysis for NFT holders
          </p>
        </div>
        
        <div className="bg-purple-800 bg-opacity-20 border border-purple-700 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">Welcome to Alpha Access</h2>
          <p className="text-purple-100">
            Thank you for being a valued NFT holder. You now have exclusive access to our premium content and trading insights.
          </p>
        </div>
        
      </main>
    </div>
  );
}