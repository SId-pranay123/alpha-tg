// 'use client';
// import React, { Suspense } from 'react';
// import { useSearchParams } from 'next/navigation';
// import WalletConnector from '@/components/WalletConnector';

// function VerifyNFTPageContent() {
//   const searchParams = useSearchParams();
//   const redirectUrl = searchParams.get('redirect') || '/alpha';
  
//   const handleVerificationSuccess = (result) => {
//     // This function will be called after successful verification
//     console.log('Verification successful, redirecting to:', result.redirect);
//   };
  
//   return (
//     <div className="container mx-auto px-4 max-w-md">
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold mb-4 text-center text-black">Verify NFT Ownership</h1>
        
//         <p className="text-gray-700 mb-6">
//           To access premium alpha content, you need to verify that you own a SkyTrade Alpha NFT.
//           Please connect your Phantom wallet that contains the NFT to continue.
//         </p>
        
//         <WalletConnector 
//           redirectUrl={redirectUrl}
//           onSuccess={handleVerificationSuccess}
//         />
        
//         <div className="mt-6 pt-6 border-t border-gray-200">
//           <h2 className="text-lg font-semibold mb-2 text-black">Don't have the NFT yet?</h2>
//           <p className="text-gray-600 mb-4">
//             You can purchase a SkyTrade Alpha NFT on Magic Eden marketplace to get access to our premium content.
//           </p>
//           <a 
//             href="https://magiceden.io/" 
//             target="_blank" 
//             rel="noreferrer"
//             className="block text-center px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
//           >
//             Buy on Magic Eden
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function VerifyNFTPage() {
//     return (
//         <Suspense fallback={<div>Loading...</div>}>
//           <VerifyNFTPageContent />
//         </Suspense>
//     );
// }

"use client";

// pages/verify-access.jsx
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import Head from 'next/head';
import { hasAccessCookie } from '../../utils/cookies';
import AlphaAccessButton from '../../components/AlphaAccessButton';

export default function VerifyAccess() {
  const [checking, setChecking] = useState(true);
  
  useEffect(() => {
    // Check if already has access, redirect if so
    if (hasAccessCookie()) {
      redirect('/alpha');
    } else {
      setChecking(false);
    }
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
      
      <header className="border-b border-gray-800 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">SkyTrade Alpha</h1>
          <nav className="flex space-x-6">
            <a href="/" className="hover:text-purple-400 transition">Home</a>
            <a href="/about" className="hover:text-purple-400 transition">About</a>
            <a href="/alpha-content" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition">
              Alpha Content
            </a>
          </nav>
        </div>
      </header>
      
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
                href="https://magiceden.io/" 
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
