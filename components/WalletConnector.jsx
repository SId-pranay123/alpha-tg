'use client';

import { useState, useEffect } from 'react';
import { 
  isPhantomInstalled, 
  connectPhantomWallet, 
  disconnectPhantomWallet,
  getConnectedWallet,
  verifyNFTOwnership,
  isAuthenticated
} from '@/lib/wallet';

export default function WalletConnector({ redirectUrl, onSuccess }) {
  const [connecting, setConnecting] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [wallet, setWallet] = useState(null);
  const [error, setError] = useState(null);
  const [hasPhantom, setHasPhantom] = useState(false);
  
  // Check if already authenticated
  useEffect(() => {
    if (isAuthenticated() && redirectUrl) {
      window.location.href = redirectUrl;
    }
  }, [redirectUrl]);
  
  // Check for Phantom wallet on component mount
  useEffect(() => {
    setHasPhantom(isPhantomInstalled());
    
    // Check if already connected
    const checkConnection = async () => {
      const walletStatus = await getConnectedWallet();
      if (walletStatus.connected) {
        setWallet({
          connected: true,
          publicKey: walletStatus.publicKey
        });
      }
    };
    
    checkConnection();
  }, []);
  
  // Connect to Phantom wallet
  const handleConnect = async () => {
    try {
      setConnecting(true);
      setError(null);
      
      const result = await connectPhantomWallet();
      
      if (result.success) {
        setWallet({
          connected: true,
          publicKey: result.publicKey
        });
        
        // If redirectUrl is provided, start verification automatically
        if (redirectUrl) {
          handleVerify(result.publicKey);
        }
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to connect wallet. Please try again.');
      console.error(err);
    } finally {
      setConnecting(false);
    }
  };
  
  // Disconnect from Phantom wallet
  const handleDisconnect = async () => {
    try {
      const result = await disconnectPhantomWallet();
      
      if (result.success) {
        setWallet(null);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to disconnect wallet. Please try again.');
      console.error(err);
    }
  };
  
  // Verify NFT ownership
  const handleVerify = async (publicKey = null) => {
    try {
      setVerifying(true);
      setError(null);
      
      const walletAddress = publicKey || wallet?.publicKey;
      
      if (!walletAddress) {
        setError('Wallet not connected');
        setVerifying(false);
        return;
      }
      
      const result = await verifyNFTOwnership(walletAddress, redirectUrl);
      
      if (result.success) {
        // Call success callback if provided
        if (onSuccess && typeof onSuccess === 'function') {
          onSuccess(result);
        }
        
        // Redirect if URL is provided
        if (result.redirect) {
          window.location.href = result.redirect;
        }
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Failed to verify NFT ownership. Please try again.');
      console.error(err);
    } finally {
      setVerifying(false);
    }
  };
  
  // Render component
  return (
    <div className="wallet-connector">
      {error && (
        <div className="error-message p-3 mb-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {!hasPhantom && (
        <div className="p-4 mb-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
          <p className="font-medium">Phantom wallet is required</p>
          <p className="text-sm mt-1">Please install the Phantom wallet extension to continue.</p>
          <a 
            href="https://phantom.app/download" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Install Phantom
          </a>
        </div>
      )}
      
      {wallet?.connected ? (
        <div>
          <div className="connected-info p-3 mb-4 bg-green-100 border border-green-400 text-green-700 rounded">
            <p className="font-medium">Wallet Connected</p>
            <p className="text-sm mt-1 font-mono break-all">{wallet.publicKey}</p>
          </div>
          
          <div className="flex space-x-2">
            {redirectUrl && (
              <button
                onClick={() => handleVerify()}
                disabled={verifying}
                className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300 ${verifying ? 'cursor-not-allowed' : ''}`}
              >
                {verifying ? 'Verifying...' : 'Verify NFT Ownership'}
              </button>
            )}
            
            <button
              onClick={handleDisconnect}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Disconnect Wallet
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={handleConnect}
          disabled={connecting || !hasPhantom}
          className={`w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:bg-purple-300 ${connecting || !hasPhantom ? 'cursor-not-allowed' : ''}`}
        >
          {connecting ? 'Connecting...' : 'Connect Phantom Wallet'}
        </button>
      )}
    </div>
  );
}