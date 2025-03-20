
"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { hasAccessCookie } from '../utils/cookies';
import { connectPhantomWallet, isPhantomInstalled } from '../utils/phantom';
import { verifyWalletAccess } from '../utils/api';

export default function AlphaAccessButton() {
  const router = useRouter();
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState(null);
  const [phantomAvailable, setPhantomAvailable] = useState(false);
  
  useEffect(() => {
    // Check if Phantom is available in browser
    setPhantomAvailable(isPhantomInstalled());
  }, []);
  
  const handleAccessClick = async () => {
    // If already has access cookie, directly navigate
    if (hasAccessCookie()) {
      router.push('/alpha');
      return;
    }
    
    setIsVerifying(true);
    setError(null);
    
    try {
      // Connect to Phantom wallet
      if (!phantomAvailable) {
        throw new Error('Phantom wallet is not installed. Please install it to continue.');
      }
      
      const walletAddress = await connectPhantomWallet();
      
      // Verify wallet has the required NFT
      const result = await verifyWalletAccess(walletAddress);
      console.log("result: ", result);
      
      if (result.success) {
        // The cookie is now being set by the API response
        // No need to manually set cookie here
        router.push('/alpha');
      } else {
        setError(result.message || 'Access denied. You do not own the required NFT.');
      }
    } catch (err) {
      setError(err.message || 'An error occurred during verification.');
    } finally {
      setIsVerifying(false);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-6 space-y-6 bg-gradient-to-br from-violet-600 to-indigo-800 rounded-xl shadow-lg">
      <div className="w-full text-center mb-2">
        <h2 className="text-2xl font-bold text-white">Alpha Access</h2>
        <p className="text-violet-200 text-sm">Connect your wallet to continue</p>
      </div>
      
      <button 
        className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
          isVerifying 
            ? 'bg-indigo-400 cursor-not-allowed' 
            : 'bg-white text-indigo-800 hover:bg-indigo-100 hover:shadow-md'
        }`}
        onClick={handleAccessClick}
        disabled={isVerifying}
      >
        {isVerifying ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Verifying...
          </>
        ) : (
          'Access Alpha'
        )}
      </button>
      
      {error && (
        <div className="w-full p-3 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg">
          <p className="text-red-200 text-sm text-center">{error}</p>
        </div>
      )}
      
      {!phantomAvailable && (
        <div className="w-full p-4 bg-black bg-opacity-30 rounded-lg text-center">
          <p className="text-violet-200 mb-2">Phantom wallet is required for verification</p>
          <a 
            href="https://phantom.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-white hover:text-violet-200 font-medium transition-colors"
          >
             <p className="ml-1 h-4 w-4">Get Phantom</p>
          </a>
        </div>
      )}
    </div>
  );
};