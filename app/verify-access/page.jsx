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
    return <div className="loading">Checking access...</div>;
  }
  
  return (
    <div className="verify-access-page">
      <Head>
        <title>Verify Access | Your App</title>
      </Head>
      
      <main>
        <h1>Alpha Access Verification</h1>
        <p>
          To access the alpha section, you need to own an NFT from our collection.
          Connect your Phantom wallet to verify ownership.
        </p>
        
        <AlphaAccessButton />
      </main>
    </div>
  );
}
