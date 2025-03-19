'use client';

import { useSearchParams } from 'next/navigation';
import WalletConnector from '@/components/WalletConnector';

export default function VerifyNFTPage() {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/alpha';
  
  const handleVerificationSuccess = (result) => {
    // This function will be called after successful verification
    console.log('Verification successful, redirecting to:', result.redirect);
  };
  
  return (
    <div className="container mx-auto px-4 max-w-md">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">Verify NFT Ownership</h1>
        
        <p className="text-gray-700 mb-6">
          To access premium alpha content, you need to verify that you own a SkyTrade Alpha NFT.
          Please connect your Phantom wallet that contains the NFT to continue.
        </p>
        
        <WalletConnector 
          redirectUrl={redirectUrl}
          onSuccess={handleVerificationSuccess}
        />
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-semibold mb-2 text-black">Don't have the NFT yet?</h2>
          <p className="text-gray-600 mb-4">
            You can purchase a SkyTrade Alpha NFT on Magic Eden marketplace to get access to our premium content.
          </p>
          <a 
            href="https://magiceden.io/" 
            target="_blank" 
            rel="noreferrer"
            className="block text-center px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Buy on Magic Eden
          </a>
        </div>
      </div>
    </div>
  );
}