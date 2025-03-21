"use client";

import { useEffect, useState } from 'react';
import Head from 'next/head';
import AlphaAccessButton from '../../components/AlphaAccessButton';

export default function VerifyAccess() {
  const [checking, setChecking] = useState(true);
  
  useEffect(() => {
    // Simple check for localStorage auth
    const isAuthorized = localStorage.getItem('alpha_verified') === 'true';
    
    if (isAuthorized) {
      // Direct navigation with a flag to prevent reload loops
      if (!sessionStorage.getItem('navigating_to_alpha')) {
        sessionStorage.setItem('navigating_to_alpha', 'true');
        window.location.href = '/alpha';
        return;
      }
    }
    
    // If we're still here, we need verification
    setChecking(false);
    // Clear navigation flags
    sessionStorage.removeItem('navigating_to_alpha');
    sessionStorage.removeItem('navigating_to_verify');
  }, []);
  
  if (checking) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black text-white">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-lg">Checking access...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Verify Access | SkyTrade Alpha</title>
      </Head>
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Alpha Access Verification</h2>
          <p className="text-gray-300 mb-8">
            To access the alpha section, you need to own an NFT from our collection.
            Connect your Phantom wallet to verify ownership.
          </p>
          
          <div className="bg-purple-800 bg-opacity-80 p-8 rounded-xl shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold mb-2">Alpha Access</h3>
              <p className="text-purple-200">Connect your wallet to continue</p>
            </div>
            
            <AlphaAccessButton />
            
            <div className="mt-8 pt-6 border-t border-purple-700">
              <h4 className="text-lg font-medium mb-2">Don't have the NFT yet?</h4>
              <p className="text-purple-200 mb-4">
                You can purchase a SkyTrade Alpha NFT on Magic Eden marketplace to get access to our premium content.
              </p>
              <a 
                href="https://magiceden.io/marketplace/skytrade_genesis" 
                target="_blank" 
                rel="noreferrer"
                className="block w-full text-center py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition"
              >
                Buy on Magic Eden
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}