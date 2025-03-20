import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { hasAccessCookie } from '../utils/cookies';
import { connectPhantomWallet, isPhantomInstalled } from '../utils/phantom';
import { verifyWalletAccess } from '../utils/api';

export default function AlphaAccessButton() {
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
      redirect('/alpha');
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
      
      if (result.success) {
        // Successfully verified and cookie should be set
        redirect('/alpha');
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
    <div className="alpha-access-container">
      <button 
        className="alpha-access-button"
        onClick={handleAccessClick}
        disabled={isVerifying}
      >
        {isVerifying ? 'Verifying...' : 'Access Alpha'}
      </button>
      
      {error && (
        <div className="alpha-access-error">
          {error}
        </div>
      )}
      
      {!phantomAvailable && (
        <div className="phantom-info">
          <p>Phantom wallet is required for verification.</p>
          <a 
            href="https://phantom.app/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Get Phantom
          </a>
        </div>
      )}
    </div>
  );
}
