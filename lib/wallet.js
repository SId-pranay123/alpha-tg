/**
 * Utility functions for Solana wallet interactions
 */

/**
 * Check if Phantom wallet is available in the browser
 * @returns {boolean}
 */
export const isPhantomInstalled = () => {
    if (typeof window === 'undefined') return false;
    return window?.phantom?.solana?.isPhantom || false;
  };
  
  /**
   * Connect to Phantom wallet
   * @returns {Promise<{success: boolean, publicKey: string|null, error: string|null}>}
   */
  export const connectPhantomWallet = async () => {
    try {
      if (!isPhantomInstalled()) {
        return {
          success: false,
          publicKey: null,
          error: 'Phantom wallet is not installed'
        };
      }
      
      const { solana } = window.phantom;
      
      // Connect to wallet
      const response = await solana.connect();
      const publicKey = response.publicKey.toString();
      
      return {
        success: true,
        publicKey,
        error: null
      };
    } catch (error) {
      console.error('Error connecting to Phantom wallet:', error);
      
      return {
        success: false,
        publicKey: null,
        error: error.message || 'Failed to connect to wallet'
      };
    }
  };
  
  /**
   * Disconnect from Phantom wallet
   * @returns {Promise<{success: boolean, error: string|null}>}
   */
  export const disconnectPhantomWallet = async () => {
    try {
      if (!isPhantomInstalled()) {
        return {
          success: false,
          error: 'Phantom wallet is not installed'
        };
      }
      
      const { solana } = window.phantom;
      
      // Disconnect from wallet
      await solana.disconnect();
      
      return {
        success: true,
        error: null
      };
    } catch (error) {
      console.error('Error disconnecting from Phantom wallet:', error);
      
      return {
        success: false,
        error: error.message || 'Failed to disconnect from wallet'
      };
    }
  };
  
  /**
   * Get connected wallet if user is already connected
   * @returns {Promise<{connected: boolean, publicKey: string|null}>}
   */
  export const getConnectedWallet = async () => {
    try {
      if (!isPhantomInstalled()) {
        return {
          connected: false,
          publicKey: null
        };
      }
      
      const { solana } = window.phantom;
      
      // Check if connected
      if (solana.isConnected) {
        return {
          connected: true,
          publicKey: solana.publicKey.toString()
        };
      }
      
      return {
        connected: false,
        publicKey: null
      };
    } catch (error) {
      console.error('Error checking wallet connection:', error);
      
      return {
        connected: false,
        publicKey: null
      };
    }
  };
  
  /**
   * Verify NFT ownership using backend API
   * @param {string} walletAddress
   * @param {string} redirectUrl
   * @returns {Promise<{success: boolean, message: string, redirect: string|null}>}
   */
  export const verifyNFTOwnership = async (walletAddress, redirectUrl) => {
    try {
      const response = await fetch('/api/verify-nft', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          walletAddress,
          redirectUrl
        })
      });
      
      const data = await response.json();
      
      return {
        success: data.success,
        message: data.message || '',
        redirect: data.redirect || null
      };
    } catch (error) {
      console.error('Error verifying NFT ownership:', error);
      
      return {
        success: false,
        message: 'Failed to verify NFT ownership. Please try again.',
        redirect: null
      };
    }
  };